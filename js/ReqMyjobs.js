import {
    onGetJobs,
    saveJob,
    deleteJob,
    getJob,
    updateJob,
    myJobauth,
    loggedinmail
  } from "./firebase.js";

  myJobauth();//logged in function
 
  const myJobsForm = document.getElementById("myjobs-form");
  const jobsContainer = document.getElementById("jobs-container");

  let editStatus = false;
  let id = "";
  

  window.addEventListener("DOMContentLoaded", async (e) => {
    onGetJobs((querySnapshot) => {
      jobsContainer.innerHTML = "";
      //get all jobs from database
      querySnapshot.forEach((doc) => {
        const job = doc.data();
        //if logged in has jobs he publishet- enable editing
        if(job.pubmail == loggedinmail){  
        jobsContainer.innerHTML += `
      <div class="card card-body mt-2 border-defult" style="text-align:right">
        <h3 class="h5">${job.title}</h3>
        <label for="description">: תיאור התפקיד</label>
        <p>${job.description}</p>
        <label for="description">: מיקום</label>
        <p>${job.location}</p>  
        <label for="description">: היקף המשרה</label>
        <p>${job.scope}</p> 
        <label for="description"> : דרישות</label>
        <p>${job.standarts}</p>  
      <div>
        <button class="btn btn-danger btn-delete" data-id="${doc.id}">
          🗑 מחק
        </button>
        <button class="btn btn-secondary btn-edit" data-id="${doc.id}">
           ערוך
        </button>

      </div>
    </div>`;
  }
      });
      
      const btnsDelete = jobsContainer.querySelectorAll(".btn-delete");
      btnsDelete.forEach((btn) =>
        btn.addEventListener("click", async ({ target: { dataset } }) => {
          try {
            await deleteJob(dataset.id);
          } catch (error) {
            console.log(error);
          }
        })
      );
  
      const btnsEdit = jobsContainer.querySelectorAll(".btn-edit");
      btnsEdit.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
          try {
            const doc = await getJob(e.target.dataset.id);
            const job = doc.data();
            myJobsForm["job-title"].value = job.title;
            myJobsForm["job-description"].value = job.description;
            myJobsForm["job-location"].value = job.location;
            myJobsForm["job-scope"].value = job.scope;
            myJobsForm["job-standarts"].value = job.standarts;

            editStatus = true;
            id = doc.id;
            myJobsForm["btn-job-form"].innerText = "עדכן";
          } catch (error) {
            console.log(error);
          }
        });
      });
    });
  });
  
  myJobsForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    //getting data from user input
    const pubmail = loggedinmail;
    const title = myJobsForm["job-title"];
    const description = myJobsForm["job-description"];
    const location = myJobsForm["job-location"];
    const scope = myJobsForm["job-scope"];
    const standarts = myJobsForm["job-standarts"];
    var likes = 0;
    var favorits = "";
    var likeby = "";
    var intrested = "";
    try {
      if (!editStatus) {
        await saveJob(pubmail,title.value, description.value,location.value, scope.value,standarts.value,favorits,likes,likeby,intrested);
      } else {
        //edit job information
        await updateJob(id, {
          pubmail:pubmail,
          title: title.value,
          description: description.value,
          location: location.value,
          scope: scope.value,
          standarts: standarts.value,

        });

        editStatus = false;
        id = "";
        myJobsForm["btn-job-form"].innerText = "שמור";//save info button
      }
      myJobsForm.reset();
      title.focus();
    } catch (error) {
      console.log(error);
    }
  });
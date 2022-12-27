import {
    onGetJobs,
    saveJob,
    deleteJob,
    getJob,
    updateJob,
    getJobs,
  } from "./firebase.js";
 
  const myJobsForm = document.getElementById("myjobs-form");
  const jobsContainer = document.getElementById("jobs-container");
  
  let editStatus = false;
  let id = "";
  
  window.addEventListener("DOMContentLoaded", async (e) => {
    // const querySnapshot = await getjobs();
    // querySnapshot.forEach((doc) => {
    //   console.log(doc.data());
    // });
  
    onGetJobs((querySnapshot) => {
      jobsContainer.innerHTML = "";
  
      querySnapshot.forEach((doc) => {
        const job = doc.data();
  
        jobsContainer.innerHTML += `
        <div class="card card-body mt-2 border-primary">
      <h3 class="h5">${job.title}</h3>
      <p>${job.description}</p>
      <div>
        <button class="btn btn-primary btn-delete" data-id="${doc.id}">
          🗑 מחק
        </button>
        <button class="btn btn-secondary btn-edit" data-id="${doc.id}">
          🖉 ערוך
        </button>
      </div>
    </div>`;
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
  
    const title = myJobsForm["job-title"];
    const description = myJobsForm["job-description"];
  
    try {
      if (!editStatus) {
        await saveJob(title.value, description.value);
      } else {
        await updateJob(id, {
          title: title.value,
          description: description.value,
        });
  
        editStatus = false;
        id = "";
        myJobsForm["btn-job-form"].innerText = "שמור";
      }
  
      myJobsForm.reset();
      title.focus();
    } catch (error) {
      console.log(error);
    }
  });
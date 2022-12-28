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
      <label for="description">: תיאור התפקיד</label>
      <p>${job.description}</p>
      <label for="description">: מיקום</label>
      <p>${job.location}</p>  
      <label for="description">: היקף המשרה</label>
      <p>${job.scope}</p> 
      <label for="description">: דרישות</label>
      <p>${job.standarts}</p>  
    </div>`;
      });
  

    });
  });
  
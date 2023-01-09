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
    
    <div class="card card-body mt-2 border-light" style="max-width: 450px;
      max-height: 300px; overflow-y:auto;  position: relative;">
      
      <center><h2 class="h5">${job.title}</h2></center>
      
      <div>

        <label for="description" class="job-label">
        <strong>: תיאור התפקיד</strong></label>
        
        <p class="job-description">${job.description}</p>

        <label for="description" class="job-label">
        <strong>: מיקום</strong></label>

        <p class="job-location">${job.location}</p> 
        
        <label for="description" class="job-label">
        <strong>: היקף המשרה</strong></label>

        <p class="job-scope">${job.scope}</p>  

        <label for="description" class="job-label">
        <strong>: דרישות</strong></label>

        <p class="job-requirements">${job.standarts}</p> 
      </div>
      <div>
        <center>
          <a class="btn btn-outline-dark" href="mailto:${job.pubmail}">צור קשר</a>
        </center>
      </div>
        
    </div>
    `;

      });
    });
  });


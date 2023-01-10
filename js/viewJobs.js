import {
  getJob,
    onGetJobs, updateJob,
    
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
    
    <div class="card card-body mt-2 border-dark" style="max-width: 450px;
      max-height: 300px; overflow-y:auto;  position: relative; padding-left: 50px;">
      
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

      <label for="description" class="job-label">
      <strong>: אנשים שאהבו</strong></label>
      <p class="job-requirements">${job.likes}</p> 

      <button class="btn btn-outline-dark btn-like" data-id="${doc.id}">
      אהבתי
      </button>
    </div>
    `;

      });
      const btnslike = jobsContainer.querySelectorAll(".btn-like");
      btnslike.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
          try {
            const doc = await getJob(e.target.dataset.id);
            const job = doc.data();
            var newlike = job.likes +1 ;
            updateJob(doc.id,{likes:newlike}) //adding new like to database
          } catch (error) {
            console.log(error);
          }
        });
      });
    });
  });

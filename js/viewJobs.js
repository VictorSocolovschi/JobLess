import {
    getJob,
    myJobauth,
    onGetJobs,
     updateJob,
     userdoc
    
  } from "./firebase.js";
  
const jobsContainer = document.getElementById("jobs-container");
myJobauth();//user logged in

//fix print like button for user only


if(userdoc == "0" ){
  window.addEventListener("DOMContentLoaded", async (e) => {

    //get jobs from database
    onGetJobs((querySnapshot) => {
      jobsContainer.innerHTML = "";

      querySnapshot.forEach((doc) => {
        const job = doc.data();
         //create job card with like option
        jobsContainer.innerHTML += `
    
    <div class="card card-body mt-2 mb-2 border-light" style="max-width: 450px;
      max-height: 300px; overflow-y:auto;  position: relative;">
      
      <center>
      <h2 class="h5" style="margin:1rem 0;">${job.title}</h2>
      </center>
      
      <div class="row mb-2">

        <div class="col">
          <label for="description" class="job-label">
          <strong>תיאור התפקיד</strong></label>
          <p>${job.description}</p>
        </div>

        <div class="col">
          <label for="description" class="job-label">
          <strong>מיקום</strong></label>
          <p>${job.location}</p> 
        </div>

      </div>

      <div class="row mb-2">

        <div class="col">
          <label for="description" class="job-label">
          <strong>היקף המשרה</strong></label>
          <p>${job.scope}</p>  
        </div>

        <div class="col">
          <label for="description" class="job-label">
          <strong>דרישות</strong></label>
          <p>${job.standarts}</p> 
        </div>
      
      </div>

      <div class="row mb-4">
        <div class="col">
          <button class="btn btn-outline-dark btn-like" data-id="${doc.id}">אהבתי</button>
        </div>
        <div class="col">
          <label for="description" class="job-label">
          <strong>אנשים שאהבו את המשרה</strong></label>
          <p class="job-requirements">${job.likes}</p> 
        </div>
        <div class="row">
          <a class="btn btn-outline-dark" href="mailto:${job.pubmail}">צור קשר</a>
        </div>
      </div>
      

    </div>
    `;

      });
      //creat like button
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
}
else {
  window.addEventListener("DOMContentLoaded", async (e) => {

    //get jobs from database
    onGetJobs((querySnapshot) => {
      jobsContainer.innerHTML = "";

      querySnapshot.forEach((doc) => {
        const job = doc.data();
        
        //create job card
        jobsContainer.innerHTML += `
    
    <div class="card card-body mt-2 border-light" style="max-width: 450px;
      max-height: 300px; overflow-y:auto;  position: relative;">
      <center><h2 class="h5">${job.title}</h2></center>
      
        <div class="row">

          <div class="col">
            <label for="description" class="job-label">
            <strong>תיאור התפקיד</strong></label>
            <p>${job.description}</p>
          </div>

          <div class="col">
            <label for="description" class="job-label">
            <strong>מיקום</strong></label>
            <p>${job.location}</p> 
          </div>

        </div>

        <div class="row">

          <div class="col">
            <label for="description" class="job-label">
            <strong>היקף המשרה</strong></label>
            <p>${job.scope}</p>  
          </div>

          <div class="col">
            <label for="description" class="job-label">
            <strong>דרישות</strong></label>
            <p>${job.standarts}</p> 
          </div>
        
        </div>

        <div class="row">
          <center>
            <label for="description" class="job-label">
            <strong>אנשים שאהבו את המשרה</strong></label>
            <p class="job-requirements">${job.likes}</p> 
          </center>
        </div>
        
        <div class="row">
          <div class="col">
              <a class="btn btn-outline-dark" href="mailto:${job.pubmail}">צור קשר</a>
          </div>
        </div>

      
    </div>
    `;
      });
    });
  });
}

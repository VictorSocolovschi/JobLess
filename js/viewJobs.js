import {
    getJob,
    loggedinmail,
    myJobauth,
    onGetJobs,
     updateJob,
     userdoc
    
  } from "./firebase.js";
  
const jobsContainer = document.getElementById("jobs-container");
myJobauth();//user logged in

//fix print like button for user only

if(userdoc == "0"){
  window.addEventListener("DOMContentLoaded", async (e) => {

    //get jobs from database
    onGetJobs((querySnapshot) => {
      jobsContainer.innerHTML = "";

      querySnapshot.forEach((doc) => {
        const job = doc.data();
         //create job card with like option
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

      <label for="description" class="job-label">
      <strong>: אנשים שאהבו</strong></label>
      <p class="job-requirements">${job.likes}</p> 

      <button class="btn btn-outline-dark btn-like" data-id="${doc.id}">
      אהבתי
      </button>
      <button class="btn btn-outline-dark btn-fav" data-id="${doc.id}">
      שמור במועדפים
      </button>
    </div>
    `;});

      //creat like button
      const btnsfav = jobsContainer.querySelectorAll(".btn-fav");
      btnsfav.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
          try {
            const doc = await getJob(e.target.dataset.id);
            const job = doc.data();
            const infav = job.favorits.includes(loggedinmail);//check if mail already in favorits
            if(!infav){
            updateJob(doc.id,{favorits:job.favorits+" " + loggedinmail+ " " }) }//adding to favorits
          } catch (error) {
            console.log(error);
          }
        });
      });
     
      const btnslike = jobsContainer.querySelectorAll(".btn-like");
      btnslike.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
          try {
            const doc = await getJob(e.target.dataset.id);
            const job = doc.data();
            const inlikes = job.likeby.includes(loggedinmail);

            //if in likes
            if(!inlikes){
            var newlike = job.likes +1;
            //adding new like to database
            updateJob(doc.id,{likes:newlike , likeby: job.likeby+ " " + loggedinmail+ " "}) 
            
            }
            else{
              //remove like
               var removelikeby = job.likeby.replace(loggedinmail,"");
               var newlike = job.likes -1;
               //removing like to database
               updateJob(doc.id,{likes:newlike,likeby:removelikeby}) }
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

    </div>
    `;
      });
    });
  });
}

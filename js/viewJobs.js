import {
  getJob,
  loggedinmail,
  myJobauth,
  onGetJobs,
   updateJob,
   userdoc
  
} from "./firebase.js";

const jobsContainer = document.getElementById("jobs-container");
const carusel = document.getElementById("carousel");

myJobauth();//user logged in
const locbtn = document.getElementById("locbtn");

//inittializing location search
var showloc= "";
updateJob("byloc",{ref:showloc});

//choose location btn
locbtn.addEventListener("click", async (e) => {
  try { 
    const byloc = document.getElementById("bylocation").value;
    showloc= byloc;
    updateJob("byloc",{ref:showloc});
  } catch (error) {
    console.log(error);
  }

});

window.addEventListener("DOMContentLoaded", async (e) => {

  //get jobs from database
  onGetJobs((querySnapshot) => {
    jobsContainer.innerHTML = "";
    querySnapshot.forEach((doc) => {
      const job = doc.data();
       //create job card with like option
       const inlikes = job.likeby.includes(loggedinmail);

      if(job.location == showloc || showloc=="" && job.title){
      if(job.likes > 9 ){
        if(!inlikes){   
       carusel.innerHTML+=`
    <div class="carousel-item">
        
       <center>
       <h2 style="margin:1rem 0; text-decoration: underline;">${job.title}</h2>
       </center>
 
       <div class="row mb-2">

         <div class="col">
           <label for="description" class="job-label" style="text-decoration: underline; margin:1rem 0;">
           <strong>תיאור התפקיד</strong></label>
           <h4>${job.description}</h4>
         </div>

         <div class="col">
           <label for="description" class="job-label" style="text-decoration: underline; margin:1rem 0;">
           <strong>דרישות</strong></label>
           <h4>${job.standarts}</h4> 
         </div>    

       </div>

       <div class="row mb-2">

         <div class="col">
           <label for="description" class="job-label" style="text-decoration: underline; margin:1rem 0;">
           <strong>היקף המשרה</strong></label>
           <h4>${job.scope}</h4>
         </div>

         <div class="col">
           <label for="description" class="job-label" style="text-decoration: underline; margin:1rem 0;">
           <strong>מיקום</strong></label>
           <h4>${job.location}</h4> 
         </div>

       </div>
       
       <div class="row mb-2">
           <center>
             <label for="description" class="job-label" style="text-decoration: underline; margin:1rem 0;">
               <strong>אנשים שאהבו את המשרה</strong></label>
             <h4 class="job-requirements">${job.likes}</h4> 
           </center>
       </div>

       <div class="row" style="margin-left:7rem;">
         <button class="btn btn-info btn-contact" data-id="${doc.id}" style="margin:10px 1rem; width:25%;">
         📧 צור קשר
         </button>
   
         <button class="btn btn-primary btn-like" data-id="${doc.id}" style="margin:10px 1rem; width:25%;">
       ️  ❤️ אהבתי 
         </button>
   
         <button class="btn btn-success btn-fav" data-id="${doc.id}" style="margin:10px 1rem; width:25%;">
         ⭐ שמור במועדפים
         </button>
       </div>
   
    </div>
          
    `;
  }
  else{
     carusel.innerHTML+=`
        
    <div class="carousel-item">
        
       <center>
       <h2 style="margin:1rem 0; text-decoration: underline;">${job.title}</h2>
       </center>
 
       <div class="row mb-2">

         <div class="col">
           <label for="description" class="job-label" style="text-decoration: underline; margin:1rem 0;">
           <strong>תיאור התפקיד</strong></label>
           <h4>${job.description}</h4>
         </div>

         <div class="col">
           <label for="description" class="job-label" style="text-decoration: underline; margin:1rem 0;">
           <strong>דרישות</strong></label>
           <h4>${job.standarts}</h4> 
         </div>    

       </div>

       <div class="row mb-2">

         <div class="col">
           <label for="description" class="job-label" style="text-decoration: underline; margin:1rem 0;">
           <strong>היקף המשרה</strong></label>
           <h4>${job.scope}</h4>
         </div>

         <div class="col">
           <label for="description" class="job-label" style="text-decoration: underline; margin:1rem 0;">
           <strong>מיקום</strong></label>
           <h4>${job.location}</h4> 
         </div>

       </div>
       
       <div class="row mb-2">
           <center>
             <label for="description" class="job-label" style="text-decoration: underline; margin:1rem 0;">
               <strong>אנשים שאהבו את המשרה</strong></label>
             <h4 class="job-requirements">${job.likes}</h4> 
           </center>
       </div>

       <div class="row" style="margin-left:7rem;">
         <button class="btn btn-info btn-contact" data-id="${doc.id}" style="margin:10px 1rem; width:25%;">
         📧 צור קשר
         </button>
   
         <button class="btn btn-danger btn-like" data-id="${doc.id}" style="margin:10px 1rem; width:25%;">
       ️  💔 הסר לייק 
         </button>
   
         <button class="btn btn-success btn-fav" data-id="${doc.id}" style="margin:10px 1rem; width:25%;">
         ⭐ שמור במועדפים
         </button>
       </div>
   
    </div>
          
    `;  }
  }
  if(!inlikes){
      jobsContainer.innerHTML += `
  
  <div class="card card-body mt-2 mb-2 border-dark" style="max-width: 450px;
    max-height: 300px; overflow-y:auto;  position: relative;">
    
    <center>
    <h3 style="margin:1rem 0; text-decoration: underline;">${job.title}</h3>
    </center>
    
    <div class="row mb-2">

      <div class="col">
        <label for="description" class="job-label" style="text-decoration: underline; margin:1rem 0;">
        <strong>תיאור התפקיד</strong></label>
        <h5>${job.description}</h5>
      </div>


      <div class="col">
      <label for="description" class="job-label" style="text-decoration: underline; margin:1rem 0;">
      <strong>דרישות</strong></label>
      <h5>${job.standarts}</h5> 
      </div>

      

    </div>
    <div class="row mb-2">

      <div class="col">
        <label for="description" class="job-label" style="text-decoration: underline; margin:1rem 0;">
        <strong>היקף המשרה</strong></label>
        <h5>${job.scope}</h5>
      </div>

      <div class="col">
      <label for="description" class="job-label" style="text-decoration: underline; margin:1rem 0;">
      <strong>מיקום</strong></label>
      <h5>${job.location}</h5> 
       </div>

    </div>

    <div class="row mb-2">
      <center>
        <label for="description" class="job-label" style="text-decoration: underline; margin:1rem 0;">
          <strong>אנשים שאהבו את המשרה</strong>
        </label>
        
        <h5 class="job-requirements">${job.likes}</h5> 
      </center>
    </div>

    <div class="row">

      <button class="btn btn-info btn-contact" data-id="${doc.id}" style="margin:10px 1rem; width:25%;">
      📧 צור קשר
      </button>

      <button class="btn btn-primary btn-like" data-id="${doc.id}" style="margin:10px 1rem; width:25%;">
    ️  ❤️ אהבתי 
      </button>

      <button class="btn btn-success btn-fav" data-id="${doc.id}" style="margin:10px 1rem; width:25%;">
      ⭐ שמור במועדפים
      </button>
    
    </div>

  </div>
  `;
  }
  else{
    jobsContainer.innerHTML += `
  
  <div class="card card-body mt-2 mb-2 border-dark" style="max-width: 450px;
    max-height: 300px; overflow-y:auto;  position: relative;">
    
    <center>
    <h3 style="margin:1rem 0; text-decoration: underline;">${job.title}</h3>
    </center>
    
    <div class="row mb-2">

      <div class="col">
        <label for="description" class="job-label" style="text-decoration: underline; margin:1rem 0;">
        <strong>תיאור התפקיד</strong></label>
        <h5>${job.description}</h5>
      </div>


      <div class="col">
      <label for="description" class="job-label" style="text-decoration: underline; margin:1rem 0;">
      <strong>דרישות</strong></label>
      <h5>${job.standarts}</h5> 
      </div>

      

    </div>
    <div class="row mb-2">

      <div class="col">
        <label for="description" class="job-label" style="text-decoration: underline; margin:1rem 0;">
        <strong>היקף המשרה</strong></label>
        <h5>${job.scope}</h5>
      </div>

      <div class="col">
      <label for="description" class="job-label" style="text-decoration: underline; margin:1rem 0;">
      <strong>מיקום</strong></label>
      <h5>${job.location}</h5> 
       </div>

    </div>

    <div class="row mb-2">
      <center>
        <label for="description" class="job-label" style="text-decoration: underline; margin:1rem 0;">
          <strong>אנשים שאהבו את המשרה</strong>
        </label>
        
        <h5 class="job-requirements">${job.likes}</h5> 
      </center>
    </div>

    <div class="row">

      <button class="btn btn-info btn-contact" data-id="${doc.id}" style="margin:10px 1rem; width:25%;">
      📧 צור קשר
      </button>

      <button class="btn btn-danger btn-like" data-id="${doc.id}" style="margin:10px 1rem; width:25%;">
    ️  💔 הסר לייק  
      </button>

      <button class="btn btn-success btn-fav" data-id="${doc.id}" style="margin:10px 1rem; width:25%;">
      ⭐ שמור במועדפים
      </button>
    
    </div>

  </div>
  `;
    
  }}
});


    //create contact button
    const btnscontact = jobsContainer.querySelectorAll(".btn-contact");
    btnscontact.forEach((btn) => {
      btn.addEventListener("click", async (e) => {
      
        try {
          const doc = await getJob(e.target.dataset.id);
          const job = doc.data();
          const incontact = job.intrested.includes(loggedinmail);//check if mail already in favorits
          
          if(!incontact){
          updateJob(doc.id,{intrested:job.intrested+" " + loggedinmail+ " " }) }//adding to contacts
          location.href="mailto:" + job.pubmail;
        } catch (error) {
          console.log(error);
        }
      });
    });

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
          
          // likes
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


    const btnscontact2 = carusel.querySelectorAll(".btn-contact");
    btnscontact2.forEach((btn) => {
      btn.addEventListener("click", async (e) => {
      
        try {
          const doc = await getJob(e.target.dataset.id);
          const job = doc.data();
          const incontact = job.intrested.includes(loggedinmail);//check if mail already in favorits
          if(!incontact){
          updateJob(doc.id,{intrested:job.intrested+" " + loggedinmail+ " " }) }//adding to contacts
          location.href="mailto:" + job.pubmail;
        } catch (error) {
          console.log(error);
        }
      });
    });

    //creat like button
    const btnsfav2 = carusel.querySelectorAll(".btn-fav");
    btnsfav2.forEach((btn) => {
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
   
    const btnslike2 = carusel.querySelectorAll(".btn-like");
    btnslike2.forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        try {
          const doc = await getJob(e.target.dataset.id);
          const job = doc.data();
          const inlikes = job.likeby.includes(loggedinmail);
          
          // likes
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
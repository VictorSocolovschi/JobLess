import{myJobauth,addfile,onGetJobs, loggedinmail} from "./firebase.js";
myJobauth();//logged in user
addfile();//upload pdf function


const jobsContainer = document.getElementById("jobs-favorits");


window.addEventListener("DOMContentLoaded", async (e) => {
    onGetJobs((querySnapshot) => {
        //getting all jobs from firebase
      jobsContainer.innerHTML = "";
      querySnapshot.forEach((doc) => {

        const job = doc.data();
        //checking if email of logged in user is in job- favorits
        const infav = job.favorits.includes(loggedinmail);
        //if user added job to favorits- view job

        
        if(infav) {
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
        <center>
          <a class="btn btn-outline-dark" href="mailto:${job.pubmail}">צור קשר</a>
        </center>
      </div>
    </div>`;}})})});
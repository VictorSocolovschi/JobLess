import {
    onGetUsers,
    getUser,
    updateUsers,
    getUsers,
    saveUser,
  } from "./firebase.js";
 
  const myJobsForm = document.getElementById("myjobs-form");
  const usersContainer = document.getElementById("users-Container");
  
  let id = "";
  
  window.addEventListener("DOMContentLoaded", async (e) => {  
    onGetUsers((querySnapshot) => {
        usersContainer.innerHTML = "";

      querySnapshot.forEach((doc) => {
        const user = doc.data();
        usersContainer.innerHTML += `
    
    <div class="card card-body mt-2 border-light" style="max-width: 450px;
      max-height: 300px; overflow: scroll; position: relative;">
      

     <center><h3>${user.Job} <strong>: משרה רצויה</strong> </h3></center>
        <div>

            <label for="description" class="job-label">
            <strong>: אחוז המשרה</strong>
            </label>
            <p class="job-location">${user.jobprecentage}</p> 
        

            <label for="description" class="job-label">
            <strong>: ניסיון כללי</strong>
            </label>
            <p class="job-location">${user.generalexperience}</p> 

            
            <label for="description" class="job-label">
            <strong>: ניסיון בתחום</strong>
            </label>
            <p class="job-location">${user.experience}</p> 

s
            <label for="description" class="job-label">
            <strong>: שם מלאה</strong>
            </label>
            <p class="job-description">${user.firstname +" "+ user.lastname}</p>
            
            
            <label for="description" class="job-label">
            <strong>:טלפון</strong>
            </label>
            <p class="job-scope">${user.phonenumber}</p>  

            
            
        </div>
        <div>
            <center>
             <a class="btn btn-outline-dark" href="mailto:${user.email}">צור קשר</a>
            </center>
        </div>
      
    </div>
    `;

      });
    });
  });


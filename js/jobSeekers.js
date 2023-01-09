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
      max-height: 300px; overflow-y:auto; position: relative; padding-left=50px;">
      
     <center><h3>${user.firstname +" "+ user.lastname}</h3></center>
        <div>
   
            <label for="description" class="job-label">
            <strong>: מיקום העובד</strong>
            </label>

            <p class="job-location">${user.location}</p> 
            
            <label for="description" class="job-label">
            <strong>: טלפון ליצירת קשר</strong>
            </label>

            <p class="job-scope">${user.phonenumber}</p> 

            <label for="description" class="job-label">
            <strong>:מחפש לעבוד ב</strong>
            </label>

            <p class="job-scope">${user.UserWantedJob}</p> 

            <label for="description" class="job-label">
            <strong>:ניסיון העובד</strong>
            </label>

            <p class="job-scope">${user.UserExp}</p> 

            <label for="description" class="job-label">
            <strong>:ניסיון כללי של העובד</strong>
            </label>

            <p class="job-scope">${user.UserGeneralExp}</p> 

        </div>
        <div>
            <center>
             <a class="btn btn-outline-dark" href="mailto:${user.email}">צור קשר</a>
             <a class="btn btn-outline-dark" herf="${user.pdfurl}">צפייה בקורות חיים</a>
            </center>
        </div>
      
    </div>
    `;

      });
    });
  });


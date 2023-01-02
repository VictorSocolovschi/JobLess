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
      
     <center><h3>${user.firstname +" "+ user.lastname}</h3></center>
        <div>
            <label for="description" class="job-label">
            <strong>: תיאור עובד</strong>
            </label>
            
            <p class="job-description">${user.description}</p>
            
            <label for="description" class="job-label">
            <strong>: גיל העובד</strong>
            </label>
            
            <p class="job-location">${user.age}</p> 
            
            <label for="description" class="job-label">
            <strong>: מיקום העובד</strong>
            </label>

            <p class="job-location">${user.location}</p> 
            
            <label for="description" class="job-label">
            <strong>: טלפון ליצירת קשר</strong>
            </label>

            <p class="job-scope">${user.phonenumber}</p>  
            
        </div>
        <div>
            <center>
            <buttun class="btn btn-outline-success" href="mailto:${user.email}">צור קשר</butten>
            </center>
        </div>
      
    </div>
    `;

      });
    });
  });


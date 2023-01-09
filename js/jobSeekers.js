import {
    onGetUsers,
  } from "./firebase.js";
 
  const usersContainer = document.getElementById("users-Container");
  
  let id = "";
  
  window.addEventListener("DOMContentLoaded", async (e) => {  
    onGetUsers((querySnapshot) => {
        usersContainer.innerHTML = "";

      querySnapshot.forEach((doc) => {
        const user = doc.data();


        if(user.pdfurl){
        usersContainer.innerHTML += `
    
    <div class="card card-body mt-2 border-light" style="max-width: 450px;
      max-height: 300px; overflow-y:auto; position: relative;">
      
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
             <a class="btn btn-outline-dark" href="mailto:${user.email}">צור קשר</a>
             <a class="btn btn-outline-dark" href="${user.pdfurl}">קורות חיים</a>
            </center>
        </div>
      
    </div>
    `;
        }
        else{
          usersContainer.innerHTML += `
    
          <div class="card card-body mt-2 border-light" style="max-width: 450px;
            max-height: 300px; overflow-y:auto; position: relative;">
            
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
                   <a class="btn btn-outline-dark" href="mailto:${user.email}">צור קשר</a>
                  </center>
              </div>
            
          </div>
          `;

        }

      });
    });
  });


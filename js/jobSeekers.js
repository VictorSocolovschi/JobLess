import {
    onGetUsers,
  } from "./firebase.js";
 
  const usersContainer = document.getElementById("users-Container");
  

  window.addEventListener("DOMContentLoaded", async (e) => {  
    //recive all users from data base
    onGetUsers((querySnapshot) => {
        usersContainer.innerHTML = "";

      querySnapshot.forEach((doc) => {
        const user = doc.data();
        
      //if user has pdf file - create card with pdf download link
      if(user.pdfurl!= "0"){
        usersContainer.innerHTML += `
    
    <div class="card card-body mt-2 border-light" style="max-width: 450px;
      max-height: 300px; overflow-y:auto; position: relative;">
      
     <center><h3>${user.WantedJob}</h3></center>
        <div>

          <div class="row mt-2 mb-2">

            <div class="col">
              <label for="description" class="job-label">
              <strong>ניסיון בתחום </strong>
              </label>
              <p class="job-scope">${user.Exp}</p> 
            </div>
            
            <div class="col">
              <label for="description" class="job-label">
              <strong>ניסיון כללי </strong>
              </label>
              <p class="job-scope">${user.GeneralExp}</p> 
            </div>

          </div>

          <div class="row mt-2 mb-2">

            <div class="col">
              <label for="description" class="job-label">
              <strong> טלפון ליצירת קשר</strong>
              </label>
              <p class="job-scope">${user.PhoneNumber}</p> 
            </div>

            <div class="col">
              <label for="description" class="job-label">
              <strong>שם העובד </strong>
              </label>
              <p class="job-location">${user.FirstName + " " + user.LastName}</p> 
            </div>

          </div>

          <div class="row mt-2 mb-2">

            <div class="col">
              <label for="description" class="job-label">
              <strong> גיל </strong>
              </label>
              <p class="job-scope">${user.Age}</p> 
            </div>

            <div class="col">
              <label for="description" class="job-label">
              <strong>מיקום העובד</strong>
              </label>
              <p class="job-location">${user.Location}</p> 
            </div>

          </div>
          
        </div>
        <div>
            <center>
             <a class="btn btn-outline-dark" href="mailto:${user.email}">צור קשר</a>

             <a class="btn btn-outline-dark" href="${user.pdfurl}">צפייה בקורות חיים</a>
             
            </center>
        </div>
      
    </div>
    `;
        }
        else{ //if user does not have pdf file - create normal card
          usersContainer.innerHTML += `
    
        <div class="card card-body mt-2 border-light" style="max-width: 450px;
            max-height: 300px; overflow-y:auto; position: relative;">
      
              <center><h3>${user.WantedJob}</h3></center>
          <div>

              <div class="row mt-2 mb-2">

                <div class="col">
                  <label for="description" class="job-label">
                  <strong>ניסיון בתחום </strong>
                  </label>
                  <p class="job-scope">${user.Exp}</p> 
                </div>
              
                <div class="col">
                  <label for="description" class="job-label">
                  <strong>ניסיון כללי </strong>
                  </label>
                  <p class="job-scope">${user.GeneralExp}</p> 
                </div>

              </div>

              <div class="row mt-2 mb-2">

                <div class="col">
                  <label for="description" class="job-label">
                  <strong> טלפון ליצירת קשר</strong>
                  </label>
                  <p class="job-scope">${user.PhoneNumber}</p> 
                </div>

                <div class="col">
                  <label for="description" class="job-label">
                  <strong>שם העובד </strong>
                  </label>
                  <p class="job-location">${user.FirstName + " " + user.LastName}</p> 
                </div>
              </div>

              <div class="row mt-2 mb-2">

                <div class="col">
                  <label for="description" class="job-label">
                  <strong> גיל </strong>
                  </label>
                  <p class="job-scope">${user.Age}</p> 
                </div>

                <div class="col">
                  <label for="description" class="job-label">
                  <strong>מיקום העובד</strong>
                  </label>
                  <p class="job-location">${user.Location}</p> 
                </div>

              </div>

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


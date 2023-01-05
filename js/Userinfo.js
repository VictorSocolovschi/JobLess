import {
    onGetUsers,
    updateUsers,
    getUser,
    myJobauth,
    loggedinmail

  } from "./firebase.js";
  
  const infoForm = document.getElementById("info-form");
  const dataContainer = document.getElementById("info-container");
  

  myJobauth();//itentify user lokked in 

  var nochangeemail = "0";
  var nochangepass = "0";
  var usermyage = "0";
  let editStatus = false;
  let id = "";
  
  window.addEventListener("DOMContentLoaded", async (e) => {
    onGetUsers((querySnapshot) => {
      dataContainer.innerHTML = "";
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if(data.email == loggedinmail){  
        dataContainer.innerHTML += `
      <h3 class="h5"> ברוך הבא ${data.firstname}</h3>
      <div>
      <button class="btn btn-secondary btn-edit" data-id="${doc.id}">
      🖉  ערוך פרטים אישיים
    </button>
      </div>
    </div>`;
     } });

      const btnsEdit = dataContainer.querySelectorAll(".btn-edit");
      btnsEdit.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
          try {
            // when clicking edit, takes from firebase the info and shows if for edit option

            const doc = await getUser(e.target.dataset.id);
            const data = doc.data();
            infoForm["UserFirstName-info"].value = data.firstname;
            infoForm["UserLastName-info"].value = data.lastname;
            infoForm["Usernewemail-info"].value = data.newemail;
            //infoForm["UserPassword-info"].value = data.password;
            nochangeemail = data.email;
            usermyage = data.age;
            nochangepass = data.password;

            infoForm["UserJob-info"].value = data.job;
            infoForm["UserJobPrecentage-info"].value = data.jobprecentage;
            infoForm["UserLocation-info"].value = data.location;
            infoForm["UserPhoneNumber-info"].value = data.phonenumber;
            infoForm["UserExperience-info"].value = data.experience;
            infoForm["UserGeneral-info"].value = data.general;


            editStatus = true;
            id = doc.id;
            infoForm["btn-info-form"].innerText = "עדכן";
          } catch (error) {
            console.log(error);
          }
        });
      });
    });
  });

  
infoForm.addEventListener("submit", async (e) => {
    // each string is a data and it catches that string from html box

    e.preventDefault();
    //const publisher = user email
    const UserFirstName = document.getElementById("UserFirstName-info").value;
    const UserLastName = document.getElementById("UserLastName-info").value;
    //const UserEmail = document.getElementById("UserEmail-info").value;
    //const UserPassword = document.getElementById("UserPassword-info").value;
    // const UserAge = document.getElementById("UserAge-info").value;
    const UserLocation = document.getElementById("UserLocation-info").value;
    // const UserDescription = document.getElementById("UserDescription-info").value;
    const UserPhoneNumber = document.getElementById("UserPhoneNumber-info").value;

    


    const UserExperience = document.getElementById("UserExperience-info").value;
    const UserGeneral = document.getElementById("UserGeneral-info").value;
    const UserJob = document.getElementById("UserJob-info").value;
    const UserJobPrecentage = document.getElementById("UserJobPrecentage-info").value;
    const Usernewemail = document.getElementById("Usernewemail-info").value;

    
    try {
      if (!editStatus) {
        
      } else {
        await updateUsers(id, {
          firstname: UserFirstName,
            lastname: UserLastName,
            email: nochangeemail,
            newemail: Usernewemail,
            password: nochangepass,
            age: usermyage,
            location: UserLocation,
            phonenumber: UserPhoneNumber,
            
            // user firebase data 
            experience: UserExperience,
            general: UserGeneral,
            job: UserJob,
            jobprecentage: UserJobPrecentage,

           
        });
   
        editStatus = false;
        id = "";
        infoForm["btn-info-form"].innerText = "";
      }
      infoForm.reset();
      title.focus();
    } catch (error) {
      console.log(error);
    }
  });

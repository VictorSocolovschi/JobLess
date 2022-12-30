import {
    onGetUsers,
    updateUsers,
    getUser,
    myJobauth,
    loggedinmail

  } from "../firebase.js";
  
  const infoForm = document.getElementById("info-form");
  const dataContainer = document.getElementById("info-container");
  

  myJobauth();

  var nochangeemail = "0";
  var nochangepass = "0";

  let editStatus = false;
  let id = "";
  
  window.addEventListener("DOMContentLoaded", async (e) => {
    onGetUsers((querySnapshot) => {
      dataContainer.innerHTML = "";
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if(data.email == loggedinmail){  
        dataContainer.innerHTML += `
      <h3 class="h5"> שלום ${data.firstname}</h3>
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
            const doc = await getUser(e.target.dataset.id);
            const data = doc.data();
            infoForm["UserFirstName-info"].value = data.firstname;
            infoForm["UserLastName-info"].value = data.lastname;
            //infoForm["UserEmail-info"].value = data.email;
            //infoForm["UserPassword-info"].value = data.password;
            nochangeemail = data.email;
            nochangepass = data.password;

            infoForm["UserAge-info"].value = data.age;
            infoForm["UserLocation-info"].value = data.location;
            infoForm["UserDescription-info"].value = data.description;
            infoForm["UserPhoneNumber-info"].value = data.phonenumber;

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
    e.preventDefault();
    //const publisher = user email
    const UserFirstName = document.getElementById("UserFirstName-info").value;
    const UserLastName = document.getElementById("UserLastName-info").value;
    //const UserEmail = document.getElementById("UserEmail-info").value;
    //const UserPassword = document.getElementById("UserPassword-info").value;
    const UserAge = document.getElementById("UserAge-info").value;
    const UserLocation = document.getElementById("UserLocation-info").value;
    const UserDescription = document.getElementById("UserDescription-info").value;
    const UserPhoneNumber = document.getElementById("UserPhoneNumber-info").value;
    
    try {
      if (!editStatus) {
        
      } else {
        await updateUsers(id, {
          firstname: UserFirstName,
            lastname: UserLastName,
            email: nochangeemail,
            password: nochangepass,
            age: UserAge,
            location: UserLocation,
            description: UserDescription,
            phonenumber: UserPhoneNumber,
           
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

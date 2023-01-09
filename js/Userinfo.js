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
            infoForm["UserFirstName"].value = data.firstname;
            infoForm["UserLastName"].value = data.lastname;
            //infoForm["UserEmail-info"].value = data.email;
            //infoForm["UserPassword-info"].value = data.password;
            nochangeemail = data.email;
            nochangepass = data.password;

            infoForm["UserAge"].value = data.age;
            infoForm["UserLocation"].value = data.location;
            infoForm["UserWantedJob"].value = data.UserWantedJob;
            infoForm["UserPhoneNumber"].value = data.phonenumber;
            infoForm["UserExp"].value = data.UserExp;
            infoForm["UserGeneralExp"].value = data.UserGeneralExp;

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
    const UserFirstName = document.getElementById("UserFirstName").value;
    const UserLastName = document.getElementById("UserLastName").value;
    //const UserEmail = document.getElementById("UserEmail-info").value;
    //const UserPassword = document.getElementById("UserPassword-info").value;
    const UserAge = document.getElementById("UserAge").value;
    const UserLocation = document.getElementById("UserLocation").value;
    const UserPhoneNumber = document.getElementById("UserPhoneNumber").value;
    const UserExp = document.getElementById("UserExp").value;
    const UserWantedJob = document.getElementById("UserWantedJob").value;
    const UserGeneralExp = document.getElementById("UserGeneralExp").value;
    
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
            phonenumber: UserPhoneNumber,
            UserGeneralExp:UserGeneralExp,
            UserWantedJob:UserWantedJob,
            UserExp:UserExp,



           
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

import {
    onGetHRUsers,
    updateHRUsers,
    getHRUser,
    myJobauth,
    loggedinmail

  } from "./firebase.js";
  
  const HRinfoForm = document.getElementById("HRinfo-form");
  const HRdataContainer = document.getElementById("HRinfo-container");
  

  myJobauth();//user logged in

  var nochangeemail = "0";
  var nochangepass = "0";

  let editStatus = false;
  let id = "";
  

  window.addEventListener("DOMContentLoaded", async (e) => {
    //get user info from database
    onGetHRUsers((querySnapshot) => {
    HRdataContainer.innerHTML = "";
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if(data.email == loggedinmail){  

          //create user edit button
        HRdataContainer.innerHTML += `
      <h3 class="h5"> שלום ${data.companyname}</h3>
      <div>
      <button class="btn btn-secondary btn-edit" data-id="${doc.id}">
      🖉  ערוך פרטים אישיים
    </button>
      </div>
    </div>`;
     } });
      const btnsEdit = HRdataContainer.querySelectorAll(".btn-edit");
      btnsEdit.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
          try {
            const doc = await getHRUser(e.target.dataset.id);
            const data = doc.data();
            HRinfoForm["HRUsercompanyname-info"].value = data.companyname;
            HRinfoForm["HRUserName-info"].value = data.username;
            nochangeemail = data.email;
            nochangepass = data.password;
            HRinfoForm["HRUserDescription-info"].value = data.description;
            HRinfoForm["HRUserPhoneNumber-info"].value = data.phonenumber;

            editStatus = true;
            id = doc.id;
            HRinfoForm["btn-HRinfo-form"].innerText = "עדכן";
          } catch (error) {
            console.log(error);
          }
        });
      });
    });
  });

HRinfoForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    //retrive data from user inputs
    const HRUserCompany = document.getElementById("HRUsercompanyname-info").value;
    const HRUserName = document.getElementById("HRUserName-info").value;
    const HRUserDescription = document.getElementById("HRUserDescription-info").value;
    const HRUserPhoneNumber = document.getElementById("HRUserPhoneNumber-info").value;
    
    try {
      if (!editStatus) {

      } else {
        //send new data for update
        await updateHRUsers(id, {
            firstname: HRUserCompany,
            lastname: HRUserName,
            email: nochangeemail,
            password: nochangepass,
            description: HRUserDescription,
            phonenumber: HRUserPhoneNumber,
           
        });
   
        editStatus = false;
        id = "";
        HRinfoForm["btn-HRinfo-form"].innerText = "";
      }
      HRinfoForm.reset();
      title.focus();
    } catch (error) {
      console.log(error);
    }
  });

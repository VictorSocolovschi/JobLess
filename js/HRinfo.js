import {
    onGetHRUsers,
    updateHRUsers,
    getHRUser,
    myJobauth,
    loggedinmail

  } from "../firebase.js";
  
  const HRinfoForm = document.getElementById("HRinfo-form");
  const HRdataContainer = document.getElementById("HRinfo-container");
  

  myJobauth();

  var nochangeemail = "0";
  var nochangepass = "0";

  let editStatus = false;
  let id = "";
  

  window.addEventListener("DOMContentLoaded", async (e) => {
    onGetHRUsers((querySnapshot) => {
    HRdataContainer.innerHTML = "";
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if(data.email == loggedinmail){  
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
            //HRinfoForm["UserEmail-info"].value = data.email;
            //HRinfoForm["UserPassword-info"].value = data.password;
            nochangeemail = data.email;
            nochangepass = data.password;

            HRinfoForm["HRUserDescription-info"].value = data.description;
            HRinfoForm["HRUserPhoneNumber-info"].value = data.phonenumber;

            editStatus = true;
            id = doc.id;
            HRinfoForm["btn-info-form"].innerText = "עדכן";
          } catch (error) {
            console.log(error);
          }
        });
      });
    });
  });

  
HRinfoForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    //const publisher = user email
    const HRUserCompany = document.getElementById("HRUsercompanyname-info").value;
    const HRUserName = document.getElementById("HRUserName-info").value;
    //const UserEmail = document.getElementById("UserEmail-info").value;
    //const UserPassword = document.getElementById("UserPassword-info").value;
    const HRUserDescription = document.getElementById("UserDescription-info").value;
    const HRUserPhoneNumber = document.getElementById("UserPhoneNumber-info").value;
    
    try {
      if (!editStatus) {
        
      } else {
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

import {
    onGetReqUsers,
    updateReqUsers,
    getReqUser
    ,myJobauth
    ,loggedinmail

  } from "./firebase.js";
  
  const ReqinfoForm = document.getElementById("Req-info-form");
  const ReqdataContainer = document.getElementById("Reqinfo-container");


  myJobauth();

  var nochangeemail = "0";
  var nochangepass = "0";

  let editStatus = false;
  let id = "";
  
  window.addEventListener("DOMContentLoaded", async (e) => {
    onGetReqUsers((querySnapshot) => {
      ReqdataContainer.innerHTML = "";
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if(data.email == loggedinmail){  
        ReqdataContainer.innerHTML += `
      <h3 class="h5"> שלום ${data.firstname}</h3>
      <div>
      <button class="btn btn-secondary btn-edit" data-id="${doc.id}">
      🖉  ערוך פרטים אישיים
    </button>
      </div>
    </div>`;
     } });

      const btnsEdit = ReqdataContainer.querySelectorAll(".btn-edit");
      btnsEdit.forEach((btn) => {
        btn.addEventListener("click", async (e) => {
          try {
            const doc = await getReqUser(e.target.dataset.id);
            const data = doc.data();
            ReqinfoForm["Reqfirstname-info"].value = data.firstname;
            ReqinfoForm["Reqlastname-info"].value = data.lastname;
            //ReqinfoForm["UserEmail-info"].value = data.email;
            //ReqinfoForm["UserPassword-info"].value = data.password;
            nochangeemail = data.email;
            nochangepass = data.password;
            ReqinfoForm["Reqphone-info"].value = data.phonenumber;
            ReqinfoForm["Reqdescription-info"].value = data.description;
            

            editStatus = true;
            id = doc.id;
            ReqinfoForm["btn-reqinfo-form"].innerText = "עדכן";
          } catch (error) {
            console.log(error);
          }
        });
      });
    });
  });

  // Req-info-form       Reqfirstname-info         Reqlastname-info     Reqphone-info        Reqdescription-info        Reqinfo-container
ReqinfoForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    //const publisher = user email
    const UserFirstName = document.getElementById("Reqfirstname-info").value;
    const UserLastName = document.getElementById("Reqlastname-info").value;
    //const UserEmail = document.getElementById("UserEmail-info").value;
    //const UserPassword = document.getElementById("UserPassword-info").value;
    const UserPhoneNumber = document.getElementById("Reqphone-info").value;
    const UserDescription = document.getElementById("Reqdescription-info").value;

    try {
      if (!editStatus) {
        
      } else {
        await updateReqUsers(id, {
            firstname: UserFirstName,
            lastname: UserLastName,
            email: nochangeemail,
            password: nochangepass,
            phonenumber: UserPhoneNumber,
            description: UserDescription,
           
        });
   
        editStatus = false;
        id = "";
        ReqinfoForm["btn-reqinfo-form"].innerText = "";
      }
      ReqinfoForm.reset();
      title.focus();
    } catch (error) {
      console.log(error);
    }
  });

import {
    onGetHRUsers,
    getHRUser,
    updateHRUsers,
    getHRUsers,
    saveHRUser,
    //searchFirebase,
  } from "./firebase.js";
  

const HRuserForm = document.getElementById("HRuser-form");

let editStatus = false;
let id = "";

HRuserForm.addEventListener("submit", async (e) => {
    e.preventDefault();
  
    //collect data from userform
    //    (varname)             (input id)
    const companyname = HRuserForm["HRuser-Companyname"];
    const username = HRuserForm["HRuser-username"];
    const email = HRuserForm["HRuser-email"];
    const password = HRuserForm["HRuser-password"];
    const phonenumber = HRuserForm["HRuser-phonenumber"];
    const description = HRuserForm["HRuser-description"];
  
    //if(searchFirebase(db,email.value) == true){userForm.reset();};
  
    try {
        await saveHRUser(companyname.value,username.value,email.value,password.value,phonenumber.value, description.value);
  
      //userForm.querySelector("alert") = "block";
      HRuserForm.reset();
      title.focus();
      
    } catch (error) {
      console.log(error);
    }
  });
  
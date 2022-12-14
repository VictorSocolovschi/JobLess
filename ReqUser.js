import {
    onGetReqUsers,
    getReqUser,
    updateReqUsers,
    getReqUsers,
    saveReqUser,
  } from "./firebase.js";
  

  const RequserForm = document.getElementById("Requser-form");

  let editStatus = false;
  let id = "";
  
RequserForm.addEventListener("submit", async (e) => {
    e.preventDefault();
  
    //collect data from userform
    //    (varname)             (input id)
    const firstname = RequserForm["Requser-firstname"];
    const lastname = RequserForm["Requser-lastname"];
    const email = RequserForm["Requser-email"];
    const password = RequserForm["Requser-password"];
    const phonenumber = RequserForm["Requser-phonenumber"];
    const description = RequserForm["Requser-description"];
  
    try {
        await saveReqUser(firstname.value,lastname.value,email.value,password.value,phonenumber.value, description.value);
  
      //userForm.querySelector("alert") = "block";
      RequserForm.reset();
      title.focus();
      
    } catch (error) {
      console.log(error);
    }
  });
  
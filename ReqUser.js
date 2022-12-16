import {
  onGetReqUsers,
  getReqUser,
  updateReqUsers,
  getReqUsers,
  saveReqUser,

} from "./firebase.js";
  
let editStatus = false;
let id = "";
 
//from where to read data.
const ReqUserForm = document.getElementById("ReqUser-form");

//function to collect data from user form.
ReqUserForm.addEventListener("submit", async (e) => 
{
  e.preventDefault();
  alert("submit form in proccess");

  //variabals to store the data.
  const ReqUserFirstName = document.getElementById("ReqUserFirstName").value;
  const ReqUserLastName = document.getElementById("ReqUserLastName").value;
  const ReqUserEmail = document.getElementById("ReqUserEmail").value;
  const ReqUserPassword = document.getElementById("ReqUserPassword").value;
  const ReqUserPhoneNumber = document.getElementById("ReqUserPhoneNumber").value;
  const ReqUserDescription = document.getElementById("ReqUserDescription").value;

  //checking if every box filled correct.
  if(!ReqUserFirstName)
  {
    alert("first name is required");
  }
  else if(!ReqUserLastName)
  {
    alert("last name is required");
  }
  else if(!ReqUserEmail)
  {
    alert("email is required");
  }
  else if(!ReqUserPassword)
  {
    alert("password is required");
  }
  else if(!ReqUserPhoneNumber)
  {
    alert("Phone number is required");
  }
  else if(!ReqUserDescription)
  {
    alert("company description is required");
  }
  else{

    // if data filled proprotly it will send by this function to the data base.
    sendData(ReqUserFirstName,ReqUserLastName,ReqUserEmail,ReqUserPassword,ReqUserPhoneNumber,ReqUserDescription);
  }
  
});


function sendData(ReqUserFirstName,ReqUserLastName,ReqUserEmail,ReqUserPassword,ReqUserPhoneNumber,ReqUserDescription)
  {
    //data will be checked for Authentication with fire base.
          try {
               saveReqUser(
              ReqUserFirstName,
              ReqUserLastName,
              ReqUserEmail,
              ReqUserPassword,
              ReqUserPhoneNumber,
              ReqUserDescription
              );

      
          
          ReqUserForm.reset();
          
          //if Authentication failed it will not register.
          } catch (error) {
            console.log(error);
          }

    }

























  //   //collect data from userform
  //   //    (varname)             (input id)
  //   const firstname = ReqUserForm["Reqser-firstname"];
  //   const lastname = RequserForm["Requser-lastname"];
  //   const email = RequserForm["Requser-email"];
  //   const password = RequserForm["Requser-password"];
  //   const phonenumber = RequserForm["Requser-phonenumber"];
  //   const description = RequserForm["Requser-description"];
  
  //   try {
  //       await saveReqUser(firstname.value,lastname.value,email.value,password.value,phonenumber.value, description.value);
  
  //     //userForm.querySelector("alert") = "block";
  //     RequserForm.reset();
  //     title.focus();
      
  //   } catch (error) {
  //     console.log(error);
  //   }
  // });
  
import {
  saveReqUser,
  convertToLowercase

} from "./firebase.js";
  
//from where to read data.
const ReqUserForm = document.getElementById("ReqUser-form");

//function to collect data from user form.
ReqUserForm.addEventListener("submit", async (e) => 
{
  e.preventDefault();

  //variabals to store the data.
  const ReqUserFirstName = document.getElementById("ReqUserFirstName").value;
  const ReqUserLastName = document.getElementById("ReqUserLastName").value;
  const ReqUserEmail = convertToLowercase(document.getElementById("ReqUserEmail").value);
  const ReqUserPassword = document.getElementById("ReqUserPassword").value;
  const ReqUserPhoneNumber = document.getElementById("ReqUserPhoneNumber").value;
  const ReqUserDescription = document.getElementById("ReqUserDescription").value;

  //checking if every box filled correct.
  if(!ReqUserFirstName)
  {  alert("שם פרטי לא הוכנס"); }
  else if(!ReqUserLastName)
  { alert("שם משפחה לא הוכנס"); }
  else if(!ReqUserEmail)
  {  alert("כתובת מייל לא הוכנסה"); }
  else if(!ReqUserPassword)
  {  alert("סיסמא לא הוכנסה"); }
  else if(!ReqUserPhoneNumber)
  { alert("מספר פלאפון לא הוכנס"); }
  else if(!ReqUserDescription)
  {  alert("תיאור החברה לא הוכנס") }
  else
  {
    
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


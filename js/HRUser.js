import {
  saveHRUser,
  
  
} from "./firebase.js";
import{convertToLowercase} from "./functionTotest.js"

//from where to read data.
const HRuserForm = document.getElementById("HRUser-form");

//function to collect data from user form.
HRuserForm.addEventListener("submit", async (e) => 
{

  e.preventDefault();

  //variabals to store the data.
  const HRuserCompanyname = document.getElementById("HRuserCompanyname").value;
  const HRuserUsername= document.getElementById("HRuserUsername").value;
  const HRuserEmail = convertToLowercase(document.getElementById("HRuserEmail").value);
  const HRuserPassword = document.getElementById("HRuserPassword").value;
  const HRuserPhonenumber = document.getElementById("HRuserPhonenumber").value;
  const HRuserDescription = document.getElementById("HRuserCompanyname").value;

  //checking if every box filled correct.
  if(!HRuserCompanyname)
  { alert("שם חברה לא הוכנס"); }
  else if(!HRuserUsername)
  {  alert("שם משתמש לא הוכנס"); }
  else if(!HRuserEmail)
  {  alert("כתובת מייל לא הוכנסה");}
  else if(!HRuserPassword)
  {  alert("סיסמא לא הוכנסה");}
  else if(!HRuserPhonenumber)
  {  alert("פלאפון חברה לא הוכנס");}
  else if(!HRuserDescription)
  {  alert("תיאור החברה לא הוכנס");}
  else{
    // if data filled proprotly it will send by this function to the data base.
    sendData(HRuserCompanyname,HRuserUsername,HRuserEmail,HRuserPassword,HRuserPhonenumber,HRuserDescription);
  }
});


 function sendData(HRuserCompanyname,HRuserUsername,HRuserEmail,HRuserPassword,HRuserPhonenumber,HRuserDescription)
  {
    //data will be checked for Authentication with fire base.
          try {
               saveHRUser(
              HRuserCompanyname,
              HRuserUsername,
              HRuserEmail,
              HRuserPassword,
              HRuserPhonenumber, 
              HRuserDescription
              );
              
          HRuserForm.reset();
          //if Authentication failed it will not register.
          } catch (error) {
            console.log(error);
          }
    }


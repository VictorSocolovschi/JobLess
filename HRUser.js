import {
  onGetHRUsers,
  getHRUser,
  updateHRUsers,
  getHRUsers,
  saveHRUser,
  
} from "./firebase.js";

let editStatus = false;
let id = "";

//from where to read data.
const HRuserForm = document.getElementById("HRUser-form");

//function to collect data from user form.
HRuserForm.addEventListener("submit", async (e) => 
{
  
  e.preventDefault();
  alert("submit form in proccess");
  
  //variabals to store the data.
  const HRuserCompanyname = document.getElementById("HRuserCompanyname").value;
  const HRuserUsername= document.getElementById("HRuserUsername").value;
  const HRuserEmail = document.getElementById("HRuserEmail").value;
  const HRuserPassword = document.getElementById("HRuserPassword").value;
  const HRuserPhonenumber = document.getElementById("HRuserPhonenumber").value;
  const HRuserDescription = document.getElementById("HRuserCompanyname").value;

  //checking if every box filled correct.
  if(!HRuserCompanyname)
  {
    alert("company name is required");
  }
  else if(!HRuserUsername)
  {
    alert("user name is required");
  }
  else if(!HRuserEmail)
  {
    alert("company email is required");
  }
  else if(!HRuserPassword)
  {
    alert("password is required");
  }
  else if(!HRuserPhonenumber)
  {
    alert("company Phone number is required");
  }
  else if(!HRuserDescription)
  {
    alert("company description is required");
  }
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


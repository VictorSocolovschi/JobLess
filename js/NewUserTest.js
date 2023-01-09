import {
    onGetUsers,
    getUser,
    updateUsers,
    getUsers,
    saveUser,
  
  } from "./firebase.js";
  
  let editStatus = false;
  let id = "";
  
  //from where to read data.
  const userForm = document.getElementById("User-form");
  
  userForm.addEventListener("submit", async (e) => 
  {
    e.preventDefault();
  
    
    //variabals to store the data.
    const UserFirstName = document.getElementById("UserFirstName").value;
    const UserLastName = document.getElementById("UserLastName").value;
    const UserEmail = document.getElementById("UserEmail").value;
    const UserPassword = document.getElementById("UserPassword").value;
    const UserAge = document.getElementById("UserAge").value;
    const UserLocation = document.getElementById("UserLocation").value;
    const UserDescription = document.getElementById("UserDescription").value;
    const UserPhoneNumber = document.getElementById("UserPhoneNumber").value;
    const UserWantedJob = document.getElementById("UserWantedJob").value;
    const UserExp = document.getElementById("UserExp").value;
    const UserGeneralExp = document.getElementById("UserGeneralExp").value;


    //checking if every box filled correct.
    if(!UserFirstName)
    {  alert("שם פרטי לא הוכנס");}
    else if(!UserLastName)
    {  alert("שם משפחה לא הוכנס"); }
    else if(!UserEmail)
    {   alert("כתובת מייל לא הוכנסה"); }
    else if(!UserPassword)
    {   alert("סיסמא לא הוכנסה");}
    else if(!UserAge)
    {   alert("גיל לא הוכנס"); }
    else if(!UserLocation)
    { alert("איזור מגורים לא הוכנס"); }
    else if(!UserDescription)
    {  alert("תיאור לא הוכנס"); }
    else if(!UserPhoneNumber)
    {  alert("מספר פלאפון לא הוכנס"); }
    else if(!UserWantedJob)
    {  alert("משרה רצוייה לא הוכנה"); }
    else if(!UserExp)
    {  alert("ניסיון בתחום לא הוכנס"); }
    else if(!UserGeneralExp)
    {  alert("ניסיון כללי לא הוכנס"); }
    
    else{
  
      // if data filled proprotly it will send by this function to the data base.
      sendData(UserFirstName,UserLastName,UserEmail,UserPassword,UserAge,UserLocation,UserDescription,UserPhoneNumber,UserWantedJob,UserExp,UserGeneralExp);
    }
  
  });
  
  function sendData(UserFirstName,UserLastName,UserEmail,UserPassword,UserAge,UserLocation,UserDescription,UserPhoneNumber,UserWantedJob,UserExp,UserGeneralExp)
    {
      //data will be checked for Authentication with fire base.
            try {
                 saveUser(
                  UserFirstName,
                  UserLastName,
                  UserEmail,
                  UserPassword,
                  UserAge,
                  UserLocation,
                  UserDescription,
                  UserPhoneNumber,
                  UserWantedJob,
                  UserExp,
                  UserGeneralExp
                );
      
            userForm.reset();
            
            //if Authentication failed it will not register.
            } catch (error) {
              console.log(error);
            }
  
      }
 
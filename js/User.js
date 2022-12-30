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
  else{

    // if data filled proprotly it will send by this function to the data base.
    sendData(UserFirstName,UserLastName,UserEmail,UserPassword,UserAge,UserLocation,UserDescription,UserPhoneNumber);
  }

});

function sendData(UserFirstName,UserLastName,UserEmail,UserPassword,UserAge,UserLocation,UserDescription,UserPhoneNumber)
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
                UserPhoneNumber
              );
    
          userForm.reset();
          
          //if Authentication failed it will not register.
          } catch (error) {
            console.log(error);
          }

    }

//scrap

// //collect data from userform
//   //    (varname)             (input id)
//   const firstname = userForm["user-firstname"];
//   const lastname = userForm["user-lastname"];
//   const email = userForm["user-email"];
//   const password = userForm["user-password"];
//   const age = userForm["user-age"];
//   const location = userForm["user-location"];
//   const description = userForm["user-description"];

//   try {
//       await saveUser(firstname.value,lastname.value,email.value,password.value,age.value,location.value, description.value);

//     //userForm.querySelector("alert") = "block";
//     userForm.reset();
//     title.focus();
    
//   } catch (error) {
//     console.log(error);
//   }



//scrap

/* in case of update
if (!editStatus) {}

else {
      await updateUser(id, {
        username: username.value,
        email: email.value,
        password: password.value,
        birthday: birthday.value,
        description: description.value,
      });

      id = "";
      //userForm["btn-user-form"].innerText = "Save";
    }
*/
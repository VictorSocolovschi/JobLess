import {
  onGetUsers,
  getUser,
  updateUsers,
  getUsers,
  saveUser,
  saveReqUser,
} from "./firebase.js";

const userForm = document.getElementById("user-form");

let editStatus = false;
let id = "";


//save new users by forms
userForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  //collect data from userform
  //    (varname)             (input id)
  const firstname = userForm["user-firstname"];
  const lastname = userForm["user-lastname"];
  const email = userForm["user-email"];
  const password = userForm["user-password"];
  const age = userForm["user-age"];
  const location = userForm["user-location"];
  const description = userForm["user-description"];

  try {
      await saveUser(firstname.value,lastname.value,email.value,password.value,age.value,location.value, description.value);

    //userForm.querySelector("alert") = "block";
    userForm.reset();
    title.focus();
    
  } catch (error) {
    console.log(error);
  }
});






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
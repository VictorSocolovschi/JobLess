
import { 
    loginfunc

} from "./firebase.js";

const LoginForm = document.getElementById("Login-form");//get login form

LoginForm.addEventListener("submit", async (e) => 
{
    e.preventDefault(); 
    //get input from user data
    const email = document.getElementById("Login-form-Email").value;
    const password = document.getElementById("Login-form-Password").value;

    //call login function
    loginfunc(email,password);
    
});
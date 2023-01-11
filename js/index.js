//home page js file
import { 
    signedinfunc,
    signoutfunc,
} from "./firebase.js";


signedinfunc();//check if user is signed in 


//logout button id
const LObutton = document.getElementById("logout-button");
//on click logout button
LObutton.addEventListener("click", async (e) => {
e.preventDefault(); 
signoutfunc();

});





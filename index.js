//home page js file
import { 
    signedinfunc,
    signoutfunc,
    //getlogged
} from "./firebase.js";

//userindicator();
//check if user is signed in 
signedinfunc();

//logout button id
const LObutton = document.getElementById("logout-button");
//on click logout button
LObutton.addEventListener("click", async (e) => {
e.preventDefault(); 
signoutfunc();

});


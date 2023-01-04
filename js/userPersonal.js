//home page js file
import { 
    signedinfunc,
    signoutfunc,
    loggedinmail,
    // uploadPDF,
    myJobauth,
    uploadFile,
    //getlogged
} from "./firebase.js";

//userindicator();
//check if user is signed in 
myJobauth();

//logout button id
const LObutton = document.getElementById("logout-button");
//on click logout button
LObutton.addEventListener("click", async (e) => {
e.preventDefault(); 
signoutfunc();

});

uploadFile();
// uploadPDF();
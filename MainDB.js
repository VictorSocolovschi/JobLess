
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore, collection, getDocs, updateDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAAUOFyRYgjfa7zVvL4ihGkk5r-ULoTAms",
    authDomain: "projectjobless-97d0c.firebaseapp.com",
    databaseURL: "https://projectjobless-97d0c-default-rtdb.firebaseio.com",
    projectId: "projectjobless-97d0c",
    storageBucket: "projectjobless-97d0c.appspot.com",
    messagingSenderId: "1016999526770",
    appId: "1:1016999526770:web:2cc2373872ec9d97fa9deb"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Get Default DB
const db = getFirestore(app);

document.getElementbyId("firstName").addEventListener("register",submitForm);

function submitForm(e)
{
    e.preventDefault();
    var firstName = getElementVal('firstName');
    var lastName = getElementVal('lastName');
    var userName = getElementVal('userName');
    var email = getElementVal('email');
    var phoneNumber = getElementVal('phoneNumber');
    var age = getElementVal('age')
    //console.log(firstName,lastName,userName,email);
    saveNewuser(firstName,lastName,userName,email,phoneNumber,age);
}

function saveNewuser(firstName, lastName, userName, email) {
    ddDoc(collection(db, "users")),
    {
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        email: email,
        phoneNumber: phoneNumber,
        age : age,
    };

}

const getElementVal = (id) => 
{
    return document.getElementbyId(id).value;
}  



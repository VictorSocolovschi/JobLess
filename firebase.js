//importing firebase anitialization app and more
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
//auth imports
import { getAuth , createUserWithEmailAndPassword,signInWithEmailAndPassword , onAuthStateChanged , signOut } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-auth.js";
//firebase function imports
import {getFirestore,collection,getDocs,onSnapshot,addDoc,deleteDoc, doc,getDoc,updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAUOFyRYgjfa7zVvL4ihGkk5r-ULoTAms",
  authDomain: "projectjobless-97d0c.firebaseapp.com",
  databaseURL: "https://projectjobless-97d0c-default-rtdb.firebaseio.com",
  projectId: "projectjobless-97d0c",
  storageBucket: "projectjobless-97d0c.appspot.com",
  messagingSenderId: "1016999526770",
  appId: "1:1016999526770:web:2cc2373872ec9d97fa9deb"
};

// Initializing Firebase
export const app = initializeApp(firebaseConfig);
// Initializing database
export const db = getFirestore();
// Intializing auth
const auth = getAuth(app);

//Save users
//maybe X3
/**
 * Save a New user in Firestore
 * @param {string} firstname the user firstname
 * @param {string} lastname the user lastname
 * @param {string} email the email of the user
 * @param {string} password userpassword
 * @param {string} age userage
 * @param {string} location user location
 * @param {string} description user description
 * 
 */

export const saveUser = (firstname,lastname,email,password,age,location,telephone, description) =>
{createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    addDoc(collection(db, "users" ), { firstname ,lastname,email,password,age,location, description});
    window.alert("משתמש נרשם בהצלחה!");
    // ...
  })

  .catch((error) => {
    window.alert("משתמש לא נרשם בהצלחה, אנא העזר בהערה הבאה ");
    const errorCode = error.code;
    window.alert(error.code);
    const errorMessage = error.message;
        // ..
  });
}
//Save users
//maybe X3
/**
 * Save a New user in Firestore
 * @param {string} companyname the username
 * @param {string} username the email of the user
 * @param {string} email the email of the user
 * @param {string} password userpassword
 * @param {string} phonenumber phonenumber
 * @param {string} description user description
 * 
 */
export const saveHRUser = (companyname,username,email,password,phonenumber, description) =>
  {createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    addDoc(collection(db, "HR-users" ), { companyname,username,email,password,phonenumber, description });
    window.alert("משתמש נרשם בהצלחה!");
    
    // ...
  })
  .catch((error) => {
    window.alert("משתמש לא נרשם בהצלחה, אנא העזר בהערה הבאה ");
    const errorCode = error.code;
    window.alert(error.code);
    const errorMessage = error.message;
        // ..
  });
}
//Save users
//maybe X3
/**
 * Save a New user in Firestore
 * @param {string} firstname the user firstname
 * @param {string} lastname the user lastname
 * @param {string} email the email of the user
 * @param {string} password userpassword
 * @param {string} phonenumber userpassword
 * @param {string} description user description
 * 
 */
export const saveReqUser = (firstname,lastname,email,password,phonenumber, description) =>
  {createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    addDoc(collection(db, "Req-users" ), { firstname,lastname,email,password,phonenumber, description });
    window.alert("משתמש נרשם בהצלחה!");
    // ...
  })

  .catch((error) => {
    window.alert("משתמש לא נרשם בהצלחה, אנא העזר בהערה הבאה ");
    const errorCode = error.code;
    window.alert(error.code);
    const errorMessage = error.message;
    // ..
  });
}

//Auth login function 
export const loginfunc = (email,password) =>
{signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    window.alert("משתמש התחבר בהצלחה!");
    location.href = 'index.html';

    // ...
  })
  .catch((error) => {
    window.alert("התחברות נכשלה, אנא העזר בהערה הבאה.");
    const errorCode = error.code;
    window.alert(error.code);
    const errorMessage = error.message;
  });
}

//Auth login 
export const signedinfunc = () =>
{onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(user);
    Loggedinnavbar()  
    // ...
  } else {
    navbar(); 
    // ...
  }
});
}

//Auth singout
export const signoutfunc = () => 
{
  signOut(auth);
  location.href = 'index.html';

}
function navbar() 
{
    var LgO = document.getElementById("logout-button");
    LgO.classList.add("button-hidden");
}

function Loggedinnavbar() 
{
    var LgIn = document.getElementById("register");
    var LgIn2 = document.getElementById("login-button");

    LgIn.classList.add("button-hidden");

    LgIn2.classList.add("button-hidden");

}




// onget users
export const onGetUsers = (callback) =>
  onSnapshot(collection(db, "users"), callback);

export const onGetHRUsers = (callback) =>
  onSnapshot(collection(db, "HR-users"), callback);

  export const onGetReqUsers = (callback) =>
  onSnapshot(collection(db, "Req-users"), callback);


/**
 *
 * @param {string} id User ID
 */
export const deleteUser = (id) => deleteDoc(doc(db, "users", id));


//get useR by ID
export const getUser = (id) => getDoc(doc(db, "users", id));

export const getHRUser = (id) => getDoc(doc(db, "HR-users", id));

export const getReqUser = (id) => getDoc(doc(db, "Req-users", id));
//update date


export const updateUsers = (id, newFields) =>
  updateDoc(doc(db, "users", id), newFields);
 
  export const updateHRUsers = (id, newFields) =>
  updateDoc(doc(db, "HR-users", id), newFields);

  export const updateReqUsers = (id, newFields) =>
  updateDoc(doc(db, "Req-users", id), newFields);
  //get Users


export const getUsers = () => getDocs(collection(db, "users"));

export const getHRUsers = () => getDocs(collection(db, "HR-users"));

export const getReqUsers = () => getDocs(collection(db, "Req-users"));

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
/**
 * Save a New user in Firestore
 * @param {string} firstname the user firstname
 * @param {string} lastname the user lastname
 * @param {string} email the email of the user
 * @param {string} password userpassword
 * @param {string} age userage
 * @param {string} phonenumber userage
 * @param {string} location user location
 * @param {string} description user description
 * 
 */

export const saveUser = (firstname,lastname,email,password,age,location, phonenumber, description) =>
{createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    addDoc(collection(db, "users" ), { firstname ,lastname,email,password,age,location, phonenumber, description});
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
export var loggedinmail="0";
//Auth login 
export const signedinfunc = () =>
{onAuthStateChanged(auth, (user) => {
  if (user) {
    //const uid = user.uid;
    loggedinmail = user.email;
    console.log("logged in");
    Loggedinnavbar()  
    // ...
  } else {
    console.log("logged out");
    navbar(); 
    // ...
  }
});
}

export const myJobauth = () =>
{onAuthStateChanged(auth, (user) => {
  if (user) {
    //const uid = user.uid;
    loggedinmail = user.email;
    console.log("logged in");

  } else {
    console.log("logged out");
  }
});
}


function userkind ()
{
//all functions for regular users that is logged in
onGetUsers((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    const user = doc.data();
    if(user.email == loggedinmail)
    { console.log("user");
    var mjb= document.getElementById("myjobs-button");
    mjb.classList.add("button-hidden");
    document.getElementById("myinfo-button").innerHTML += onclick="location.href = 'Userinfo.html';";
    //var helloname = document.getElementById("showname");
    //helloname.innerHTML += " שלום " + user.firstname + " " + user.lastname;

   }
  });
});
//all functions for hr users that is logged in
onGetHRUsers((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    const user = doc.data();
    if(user.email == loggedinmail)
    { console.log("HRuser");
    document.getElementById("myinfo-button").innerHTML += onclick="location.href = 'HRinfo.html';";
    //var helloname = document.getElementById("showname");
    //helloname.innerHTML += " שלום " + user.companyname;
   }
    
  });
});
//all functions for req users that is logged in
onGetReqUsers((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    const user = doc.data();
    if(user.email == loggedinmail)
    { console.log("Requser"); 
    document.getElementById("myinfo-button").innerHTML += onclick="location.href = 'Reqinfo.html';";
    //var helloname = document.getElementById("showname");
    //helloname.innerHTML += " שלום " + user.firstname;
  }
  });
});
};



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
    var mjb= document.getElementById("myjobs-button");
    mjb.classList.add("button-hidden");
    var infbtn =document.getElementById("myinfo-button");
    infbtn.classList.add("button-hidden");
}

function Loggedinnavbar() 
{
    userkind ();
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






//for jobs
/**
/**
 * Save a New Task in Firestore
 * @param {string} pubmail the publishing email
 * @param {string} title the title of the Task
 * @param {string} description the description of the Task
 * @param {string} location
 * @param {string} scope
 * @param {string} standarts
 * 
 */
export const saveJob = (pubmail,title, description,location,scope,standarts) =>
  addDoc(collection(db, "Jobs"), {pubmail, title, description,location,scope,standarts });

export const onGetJobs = (callback) =>
  onSnapshot(collection(db, "Jobs"), callback);

/**
 *
 * @param {string} id Task ID
 */
export const deleteJob = (id) => deleteDoc(doc(db, "Jobs", id));

export const getJob = (id) => getDoc(doc(db, "Jobs", id));

export const updateJob = (id, newFields) =>
  updateDoc(doc(db, "Jobs", id), newFields);

export const getJobs = () => getDocs(collection(db, "Jobs"));




// ================ for posts - do not delete ================


// export const saveposts = (pubmail,title, description,location,scope,standarts) =>
//   addDoc(collection(db, "posts"), {pubmail, title, description,location,scope,standarts });

// export const onGetposts = (callback) =>
//   onSnapshot(collection(db, "posts"), callback);

// /**
//  *
//  * @param {string} id Task ID
//  */
// export const deleteposts = (id) => deleteDoc(doc(db, "posts", id));

// export const getposts = (id) => getDoc(doc(db, "posts", id));

// export const updateposts = (id, newFields) =>
//   updateDoc(doc(db, "posts", id), newFields);

// export const getposts = () => getDocs(collection(db, "posts"));



// ================ for posts - do not delete ================


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
    console.log(loggedinmail);

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
    var psbu= document.getElementById("navbuttons");
    psbu.innerHTML +=` <button onclick="location.href = 'userPersonal.html';" id="Userinfo-button" type="button" class="btn btn-success reg-btn" style="margin-left: 20px;" >איזור אישי</button>`;

    //var helloname = document.getElementById("showname");
    //helloname.innerHTML += " שלום " + user.firstname + " " + user.lastname;

   }
  });
});
//all functions for hr users that is logged in
onGetHRUsers((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    const user = doc.data();
    const userName = user.firstname;
    if(user.email == loggedinmail)
    { console.log("HRuser");
    var psbu= document.getElementById("navbuttons");
    psbu.innerHTML +=`<button onclick="location.href = 'ReqMyjobs.html';" id="myjobs-button" type="button" class="btn btn-success reg-btn" style="margin-left: 20px;" >המשרות שלי</button>`;
    psbu.innerHTML +=`<button onclick="location.href = 'HRinfo.html';" id="HRinfo-button" type="button" class="btn btn-success reg-btn" style="margin-left: 20px;" >איזור אישי</button>`;
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
    var psbu= document.getElementById("navbuttons");
    psbu.innerHTML +=`<button onclick="location.href = 'ReqMyjobs.html';" id="myjobs-button" type="button" class="btn btn-success reg-btn" style="margin-left: 20px;" >המשרות שלי</button>`;
    psbu.innerHTML +=`<button onclick="location.href = 'Reqinfo.html';" id="Reqinfo-button" type="button" class="btn btn-success reg-btn" style="margin-left: 20px;" >איזור אישי</button>`;
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
  var psbu= document.getElementById("navbuttons");
  psbu.innerHTML +=`
<button onclick="location.href = 'signUpPage.html';" id="register" type="button" class="btn btn-success reg-btn" >הרשמה</button>
<button onclick="location.href = 'login.html';" id="login-button" type="button"  class="btn btn-primary reg-btn" style="margin-left: 20px;">משתמש קיים</button>`;
    var LgO = document.getElementById("logout-button");
    LgO.classList.add("button-hidden");
    
}

function Loggedinnavbar() 
{
    userkind ();
    
}

// onget users
export const onGetUsers = (callback) =>
  onSnapshot(collection(db, "users"), callback);

export const onGetHRUsers = (callback) =>
  onSnapshot(collection(db, "HR-users"), callback);

export const onGetReqUsers = (callback) =>
  onSnapshot(collection(db, "Req-users"), callback);


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


function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}





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


// document.querySelector('form').addEventListener('submit', function(e) {
//   e.preventDefault();
//   var file = document.querySelector('fileInput').files[0];
// });

// var storageRef = firebase.storage().ref();
// var pdfRef = storageRef.child('pdfs' + file.name);
// pdfRef.put(file).then(function(snapshot) {
// console.log('Uploaded a pdf file!');
// });

// var db = firebase.firestore();
// db.collection(db,"pdfs").add({
// name: file.name,
// createdAt: firebase.firestore.FieldValue.serverTimestamp()
// }).then(function(docRef) {
// console.log('Document written with ID: ', docRef.id);
// });

// function App() {
//   return (
//     <div className="App">
//       <form className='form'>
//         <input type='file' />
//         <button type='submit'>Upload</button>
//       </form>
//     </div> 
//   );
// }
// export default App;

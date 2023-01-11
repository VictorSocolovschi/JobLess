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

//variable to identify usser logged in
export var loggedinmail="0";
export var userdoc="0";


//save new user function
export const saveUser = (FirstName,LastName,email,Password,Age,Location,PhoneNumber,WantedJob,Exp,GeneralExp, pdfurl) =>
{createUserWithEmailAndPassword(auth, email, Password)
  .then((userCredential) => {
    //user signed up
    const user = userCredential.user;
    addDoc(collection(db, "users" ), { FirstName,LastName,email,Password,Age,Location,PhoneNumber,WantedJob,Exp,GeneralExp, pdfurl,});
    window.alert("משתמש נרשם בהצלחה!");
    
  })

  .catch((error) => {
    //user not signed up currectly
    window.alert("משתמש לא נרשם בהצלחה, אנא העזר בהערה הבאה ");
    const errorCode = error.code;
    window.alert(error.code);
    const errorMessage = error.message;
  });
}

//save new HRuser function
export const saveHRUser = (companyname,username,email,password,phonenumber, description) =>
  {createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
     //user signed up
    const user = userCredential.user;
    addDoc(collection(db, "HR-users" ), { companyname,username,email,password,phonenumber, description});
    window.alert("משתמש נרשם בהצלחה!");
    
  })
  .catch((error) => {
   //user not signed up currectly
    window.alert("משתמש לא נרשם בהצלחה, אנא העזר בהערה הבאה ");
    const errorCode = error.code;
    window.alert(error.code);
    const errorMessage = error.message;
  });
}

//save new REQuser function
export const saveReqUser = (firstname,lastname,email,password,phonenumber, description) =>
  {createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    //user signed up
    const user = userCredential.user;
    addDoc(collection(db, "Req-users" ), { firstname,lastname,email,password,phonenumber, description });
    window.alert("משתמש נרשם בהצלחה!");
 
  })

  .catch((error) => {
    //user not signed up currectly
    window.alert("משתמש לא נרשם בהצלחה, אנא העזר בהערה הבאה ");
    const errorCode = error.code;
    window.alert(error.code);
    const errorMessage = error.message;
    
  });
}

//Auth login function 
export const loginfunc = (email,password) =>
{signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // logged in 
    const user = userCredential.user;
    window.alert("משתמש התחבר בהצלחה!");
    location.href = 'index.html';

  })
  .catch((error) => {
     // not logged in 
    window.alert("התחברות נכשלה, אנא העזר בהערה הבאה.");
    const errorCode = error.code;
    window.alert(error.code);
    const errorMessage = error.message;
  });
}

//Auth login main page
export const signedinfunc = () =>
{onAuthStateChanged(auth, (user) => {
  if (user) {
    // identefy logged in 
    loggedinmail = user.email;
    console.log("logged in");
    console.log(user.email);
    //userkind function to get navbar information
    userkind();  
  
  } else {
    //identefy not logged in 
    console.log("logged out");
    navbar(); 
    
  }
});
}

export const myJobauth = () =>
{onAuthStateChanged(auth, (user) => {
  if (user) {
    // identefy logged in 
    loggedinmail = user.email;
    console.log("logged in");
    console.log(user.email);
    onGetUsers((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const user = doc.data();
        if(user.email == loggedinmail)
        { console.log("user");
        userdoc = doc.id; 

      }})});

  } else {
    //identefy not logged in 
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
    userdoc = doc.id; 
    var un= document.getElementById("usernavbar");
    un.innerHTML +=`<li class="nav-item">
    <a class="nav-link active" href="viewJobs.html">משרות</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" href="#">קורסים</a>     
  <li class="nav-item"> `;
    // var mjb= document.getElementById("myjobs-button");
    // mjb.classList.add("button-hidden");
    var psbu= document.getElementById("navbuttons");
    psbu.innerHTML +=` <button onclick="location.href = 'userPersonal.html';" id="Userinfo-button" type="button" class="btn btn-success reg-btn" style="margin-left: 20px;" >איזור אישי</button>`;
   }
  });
});


//all functions for hr users that is logged in
onGetHRUsers((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    const user = doc.data();
    if(user.email == loggedinmail)
    { userdoc = doc.id;
      console.log("HRuser");
    
    var un= document.getElementById("usernavbar");
    un.innerHTML +=` <li class="nav-item">
    <a class="nav-link active" href="jobSeekers.html" id="Candidates">מועמדים</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" href="viewJobs.html">משרות</a>
  </li> `;
    var psbu= document.getElementById("navbuttons");
    // psbu.innerHTML +=`<button onclick="location.href = 'ReqMyjobs.html';" id="myjobs-button" type="button" class="btn btn-success reg-btn" style="margin-left: 20px;" >המשרות שלי</button>`;
    psbu.innerHTML +=`<button onclick="location.href = 'HRpersonal.html';" id="HRinfo-button" type="button" class="btn btn-success reg-btn" style="margin-left: 20px;" >איזור אישי</button>`;
   }
  });
});


//all functions for req users that is logged in
onGetReqUsers((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    const user = doc.data();
    if(user.email == loggedinmail)
    { 
      userdoc = doc.id;
      console.log("Requser"); 
    var un= document.getElementById("usernavbar");
    un.innerHTML +=` <li class="nav-item">
    <a class="nav-link active" href="jobSeekers.html" id="Candidates">מועמדים</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" href="viewJobs.html">משרות</a>
  </li> `;
    var psbu= document.getElementById("navbuttons");
    // psbu.innerHTML +=`<button onclick="location.href = 'ReqMyjobs.html';" id="myjobs-button" type="button" class="btn btn-success reg-btn" style="margin-left: 20px;" >המשרות שלי</button>`;
    psbu.innerHTML +=`<button onclick="location.href = 'Reqpersonal.html';" id="Reqinfo-button" type="button" class="btn btn-success reg-btn" style="margin-left: 20px;" >איזור אישי</button>`;
  
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

//regular navbar for not logged in user
function navbar() 
{
  
  var psbu= document.getElementById("navbuttons");
  psbu.innerHTML +=`
<button onclick="location.href = 'signUpPage.html';" id="register" type="button" class="btn btn-success reg-btn" >הרשמה</button>
<button onclick="location.href = 'login.html';" id="login-button" type="button"  class="btn btn-primary reg-btn" style="margin-left: 20px;">משתמש קיים</button>`;
    var LgO = document.getElementById("logout-button");
    LgO.classList.add("button-hidden");
    
}


//onget users - get user information from database

export const onGetUsers = (callback) =>
  onSnapshot(collection(db, "users"), callback);

export const onGetHRUsers = (callback) =>
  onSnapshot(collection(db, "HR-users"), callback);

export const onGetReqUsers = (callback) =>
  onSnapshot(collection(db, "Req-users"), callback);



export const deleteUser = (id) => deleteDoc(doc(db, "users", id));

//get user information from database by user id
export const getUser = (id) => getDoc(doc(db, "users", id));

export const getHRUser = (id) => getDoc(doc(db, "HR-users", id));

export const getReqUser = (id) => getDoc(doc(db, "Req-users", id));


//update users information from database
export const updateUsers = (id, newFields) =>
  updateDoc(doc(db, "users", id), newFields);
 
  export const updateHRUsers = (id, newFields) =>
  updateDoc(doc(db, "HR-users", id), newFields);

  export const updateReqUsers = (id, newFields) =>
  updateDoc(doc(db, "Req-users", id), newFields);


//get Users inormation from database 
export const getUsers = () => getDocs(collection(db, "users"));

export const getHRUsers = () => getDocs(collection(db, "HR-users"));

export const getReqUsers = () => getDocs(collection(db, "Req-users"));


function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//convert string to lowercase
export function convertToLowercase(str) {
  return str.toLowerCase();
}




//for jobs

//save new job information in database
export const saveJob = (pubmail,title, description,location,scope,standarts,likes) =>
  addDoc(collection(db, "Jobs"), {pubmail, title, description,location,scope,standarts,likes });

//get all jobs information
export const onGetJobs = (callback) =>
  onSnapshot(collection(db, "Jobs"), callback);

//delete job from database by id
export const deleteJob = (id) => deleteDoc(doc(db, "Jobs", id));

//get job by id
export const getJob = (id) => getDoc(doc(db, "Jobs", id));

//update job information from database
export const updateJob = (id, newFields) =>
  updateDoc(doc(db, "Jobs", id), newFields);

//get all jobs from database
export const getJobs = () => getDocs(collection(db, "Jobs"));


//addfile function enable upload for pdf file 

export function addfile(){
  firebase.initializeApp(firebaseConfig);
  document.getElementById('file').addEventListener('change', (event) => {
    //creating file input in page

      const file = event.target.files[0];
      //uploading blank file to make storage in data base
      const file2 = new File([], "empty");
      const storageRef = firebase.storage().ref('pdfs/' + loggedinmail);
      storageRef.put(file2);
      urltodata(storageRef);
      //progress bar initialise
      storageRef.put(file).on('state_changed', (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(progress);
          const progressBar = document.getElementById('progress_bar');
          progressBar.value = progress;
      });

  //file uploaded successfuly
  urltodata(storageRef);
  var uploaded= document.getElementById("userpersonal");
  uploaded.innerHTML +=`<center> 
  <a>  קובץ הועלה בהצלחה</a>
</center> `;
  });
 
};  

function urltodata(storageRef)
{
  //get download link from storage by identifiny pdf by user email.
  storageRef.getDownloadURL().then(function(url) {

 //update user information in database - new download url for pdf file   
 updateUsers(userdoc, {pdfurl: url});
  }).catch(function(error) {
    // Handle any errors
    console.error(error);
  });
}

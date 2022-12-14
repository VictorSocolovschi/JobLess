//importing firebase anitialization app and more
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
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

export const saveUser = (firstname,lastname,email,password,age,location, description) =>
  addDoc(collection(db, "users" ), { firstname,lastname,email,password,age,location, description});
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
  addDoc(collection(db, "HR-users" ), { companyname,username,email,password,phonenumber, description });
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
  addDoc(collection(db, "Req-users" ), { firstname,lastname,email,password,phonenumber, description });




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



// search for ecual data
/*
export function searchFirebase(database, searchString) {
  // Get a reference to the database
  var dbRef = firebase.database().ref(database);

  // Create an empty array to store the matching data
  var matchingData =false;
  // Use the 'orderByValue' method to retrieve all the data in the database
  // and then use the 'once' method to retrieve the data as a snapshot
  dbRef.orderByValue().once('value', function(snapshot) { // value
    // Loop through the snapshot and check each value for a match
    snapshot.forEach(function(childSnapshot) {
      var value = childSnapshot.val();
      if (value == searchString) {
        // If there is a match, True
        matchingData = true;
      }
    });
  });

  // Return the array of matching data
  return matchingData;
}
*/
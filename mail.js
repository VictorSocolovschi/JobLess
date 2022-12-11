const firebaseConfig = {
    apiKey: "AIzaSyAAUOFyRYgjfa7zVvL4ihGkk5r-ULoTAms",
    authDomain: "projectjobless-97d0c.firebaseapp.com",
    databaseURL: "https://projectjobless-97d0c-default-rtdb.firebaseio.com",
    projectId: "projectjobless-97d0c",
    storageBucket: "projectjobless-97d0c.appspot.com",
    messagingSenderId: "1016999526770",
    appId: "1:1016999526770:web:2cc2373872ec9d97fa9deb"
  };

firbase.initializeApp(firebaseConfig);

var contarctFormDB = firebase.database().ref("contactForm");


document.getElementbyId("firstName").addEventListener("SUBMIT",submitForm);

function submitForm(e){
  e.preventDefault();

 var firstName = getElementVal('firstName');
 var lastName = getElementVal('lastName');
 var userName = getElementVal('userName');
 var email = getElementVal('email');
 var address = getElementVal('address');
 var address2 = getElementVal('address2');
 //var country
 //var city
 var zip = getElementVal('zip');
 console.log(firstName,lastName,userName,email,address,address2,zip);
 saveNewuser(firstName,lastName,userName,email,address,address2,zip);

 //anable alert
}

const saveNewuser = (firstName,lastName,userName,email,address,address2,zip)=> {
  var newUserForm = contactFormDB.push();

  newUserForm.set
  {
    firstName : firstName;
    lastName : lastName;
    userName : userName;
    email : email;
    address : address;
    address2 : address2;
    zip : zip;
  }
}

const getElementVal = (id) => {
  return document.getElementbyId(id).value;
}

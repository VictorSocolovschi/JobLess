
//main firebase unit testing - all new user functions


var firstname = "firstnametest";
var lastname = "lastnametest";
var companyname = "companynametest";
var username = "usernametest";
var email = "emailtest";
var password = "passwordtest";
var phonenumber = "phonenumbertest";
var age = "agetest";
var location = "locationtest";
var description = "descriptiontest";

test('properly save user information.',() => //newuser
{  
    saveUser = (firstname,lastname,email,password,age,location, phonenumber, description) =>{
    expect(firstname).toBe("firstnametest");
    expect(lastname).toBe("lastnametest");
    expect(email).toBe("emailtest");
    expect(password).toBe("passwordtest");
    expect(age).toBe("agetest");
    expect(phonenumber).toBe("phonenumbertest");
    expect(location).toBe("locationtest");
    expect(description).toBe("descriptiontest");
    }
});

test('properly save user information.',() => //newhruser
{   
    saveHRUser = (companyname,username,email,password,phonenumber, description) =>{
    expect(companyname).toBe("companynametest");
    expect(username).toBe("usernametest");
    expect(email).toBe("emailtest");
    expect(password).toBe("passwordtest");
    expect(phonenumber).toBe("phonenumbertest");
    expect(description).toBe("descriptiontest");
   }
});

test('properly save user information.',() => //newREQuser
{  
    saveReqUser = (firstname,lastname,email,password,phonenumber, description) =>{
    expect(firstname).toBe("firstnametest");
    expect(lastname).toBe("lastnametest");
    expect(email).toBe("emailtest");
    expect(password).toBe("passwordtest");
    expect(phonenumber).toBe("phonenumbertest");
    expect(description).toBe("descriptiontest");
    }
});


test('properly save user information.',() => //Loginfunction
{  
    loginfunc = (email,password ) =>{
    expect(email).toBe("emailtest");
    expect(password).toBe("passwordtest");
    }
});



test("login function should sign in a user and return an alert message", async () => { //another one for loginfuncion . 
    //Arrange
    const email = "emailtest";
    const password = "passwordtest";
    
    //Act
    loginfunc = (email,password ) =>{
    
    //Assert
    expect(onAuthStateChanged(auth)).toBeCalled();
    expect(signInWithEmailAndPassword).toBeCalledWith(auth, email, password);
    expect(window.alert).toHaveBeenCalledWith("משתמש נכנס בהצלחה!");
    };
  });
  

  export const userKind = async (email) => {
      const snapshot = await collection(db, "users").where("email", "==", email).get();
      const user = snapshot.docs[0].data();
      return user.kind;
  }

  test("getUserKind function should return the correct user kind", async () => {
    //Arrange
    const email = "johndoe@example.com";
    const expectedKind = "hr";
  
    //Act
    const userKind = await userKind(email);
  
    //Assert
    expect(userKind).toEqual(expectedKind);
});



/*
import expect from "expect";
import { test } from "jest-circus";
import { loginfunc, signedinfunc } from "./firebase";

var firstname = "firstnametest";
var lastname = "lastnametest";
var companyname = "companynametest";
var username = "usernametest";
var email = "emailtest";
var password = "passwordtest";
var phonenumber = "phonenumbertest";
var age = "agetest";
var location = "locationtest";
var description = "descriptiontest";

test('properly save user information.',() => //newuser
{  
    saveUser = (firstname,lastname,email,password,age,location, phonenumber, description) =>{
    expect(firstname).toBe("firstnametest");
    expect(lastname).toBe("lastnametest");
    expect(email).toBe("emailtest");
    expect(password).toBe("passwordtest");
    expect(age).toBe("agetest");
    expect(phonenumber).toBe("phonenumbertest");
    expect(location).toBe("locationtest");
    expect(description).toBe("descriptiontest");
    }
});

test('properly save user information.',() => //newhruser
{   
    saveHRUser = (companyname,username,email,password,phonenumber, description) =>{
    expect(companyname).toBe("companynametest");
    expect(username).toBe("usernametest");
    expect(email).toBe("emailtest");
    expect(password).toBe("passwordtest");
    expect(phonenumber).toBe("phonenumbertest");
    expect(description).toBe("descriptiontest");
   }
});

test('properly save user information.',() => //newREQuser
{  
    saveReqUser = (firstname,lastname,email,password,phonenumber, description) =>{
    expect(firstname).toBe("firstnametest");
    expect(lastname).toBe("lastnametest");
    expect(email).toBe("emailtest");
    expect(password).toBe("passwordtest");
    expect(phonenumber).toBe("phonenumbertest");
    expect(description).toBe("descriptiontest");
    }
});


test('properly save user information.',() => //Loginfunction
{  
    loginfunc = (email,password ) =>{
    expect(email).toBe("emailtest");
    expect(password).toBe("passwordtest");
    }
});

// tset
//users kind.
var loggedinmail = "loggedinmailTest"

test('test to check if user that connected to the website is User type.', ()=>
{
    onGetUsers=(loggedinmail)=>{
        expect(onGetUsers(loggedinmail)).toBe(loggedinmailTest)
    }
  
})

test('test to check if user that connected to the website is HR user type.', ()=>
{
    onGetHRUsers=(loggedinmail)=>{
        expect(onGetHRUsers(loggedinmail)).toBe(loggedinmailTest)
    }
  
})

test('test to check if user that connected to the website is Req user type.', ()=>
{
    onGetReqUsers=(loggedinmail)=>
    {
        expect(onGetReqUsers(loggedinmail)).toBe(loggedinmailTest)
    }
  
})

//test 
//check login

var loggedInMailTest = "loggedInMailTest"
var loggedInPasswordTEST = "loggedInPasswordTEST"

test('check for login - check if password and email is belong to any user in data base.',()=>
{
    loginfunc=(email,password)=>
    {
        expect(email).toBe(loggedInMailTest)
        expect(password).toBe(loggedInPasswordTEST)
    }
});

//check if user is signed in .}{signedinfunc}
var usernameTEST = "usernameTEST";

test('check for varifaction between website and dataBase',()=>
{
    signedinfunc = (user)=>
    {
        expect(user).toBe(usernameTEST)
    }
});

*/

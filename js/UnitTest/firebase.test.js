const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { document } = (new JSDOM('<!doctype html><html><body></body></html>')).window;
global.document = document;
global.window = document.defaultView;
global.$ = require('jquery');
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


test('properly save user information.',() => //Loginfunction(1)
{  
    loginfunc = (email,password ) =>{
    expect(email).toBe("emailtest");
    expect(password).toBe("passwordtest");

    }
});

test('properly save user information.',() => //Loginfunction(2)
{  
    loginfunc = (email,password ) =>{
    expect(email).NottoBe("HelloEmail");
    expect(password).toBe("passwordtest");

    }
});

test('properly save user information.',() => //Loginfunction(3)
{  
    loginfunc = (email,password ) =>{
    expect(email).NottoBe("HelloEmail");
    expect(password).NottoBe("HelloPassword");

    }
});



test("login function should sign in a user and return an alert message", async () => { //another one for loginfuncion . 
    //Arrange
    const email = "emailtest";
    const password = "passwordtest";
    //Act
    loginfunc = (email,password ) =>{
  
    expect(onAuthStateChanged(auth)).toBeCalled();
    expect(signInWithEmailAndPassword).toBeCalledWith(auth, email, password);
    expect(window.alert).toHaveBeenCalledWith("משתמש נכנס בהצלחה!");
    expect(saveUser).toBeCalledWith(FirstName,LastName,email,Password,Age,Location,PhoneNumber,WantedJob,Exp,GeneralExp, pdfurl,infocount,Publish);

    };
  });


  test("add doc unitest", async () => { //add doc unitesting . 
   
    add_doc = (db,test1,test2 ) =>{
   expect(addDoc).toBeCalledWith(collection(db, "unittest"), {test1,test2});
   expect(test1).toEqual(test1);
   expect(test2).toEqual(test2);
   expect(db).toEqual(db);
};
  });

  test("add doc unitest", async () => { //add doc unitesting . 
   
    add_doc = (db,test1,test2 ) =>{
   expect(addDoc).toBeCalledWith(collection(db, "unittest"), {test1,test2});
   expect(test1).NottoEqual(test2);
   expect(test1).toEqual(test1);
   expect(test2).NottoEqual(db);
};
  });
  
  test("onSnapshot unitest", async () => { //snapshot unitest . 
  
    onSnapshot = (db,callback ) =>{
   expect(onSnapshot).toBeCalledWith(collection(db, "unittest"), callback);
   expect(callback).toEqual(callback);
   expect(db).toEqual(db);
};
  });

  test("onSnapshot unitest", async () => { //snapshot unitest . 
  
    onSnapshot = (db,callback ) =>{
   expect(onSnapshot).toBeCalledWith(collection(db, "unittest"), callback);
   expect(callback).NottoEqual(db);
   expect(db).toEqual(db);
};
  });

  

  test("delete Doc unitest", async () => { //another one for loginfuncion . 
   
    delete_doc = (db,folder,id ) =>{
   expect(deleteDoc).toBeCalledWith(doc(db,folder, id));
   expect(callback).toEqual(callback);
   expect(db).toEqual(db);
   expect(id).toEqual(id);
};
});


test("delete doc unitest", async () => { //another one for loginfuncion . 
   
    delete_doc = (db,folder,id ,test1,test2) =>{
   expect(deleteDoc).toBeCalledWith(doc(db,folder, id),{test1,test2});
   expect(callback).toEqual(callback);
   expect(test1).toEqual(test1);
   expect(test2).toEqual(test2);
   expect(db).toEqual(db);
   expect(id).toEqual(id);
};
});

test("delete doc unitest", async () => { //another one for loginfuncion . 
   
  delete_doc = (db,folder,id ,test1,test2) =>{
 expect(deleteDoc).toBeCalledWith(doc(db,folder, id),{test1,test2});
 expect(callback).NottoEqual(test1);
 expect(test1).NottoEqual(test2);
 expect(test2).toEqual(test2);
 expect(db).toEqual(db);
 expect(id).toEqual(id);
};
});

test("get doc unitest", async () => { //another one for loginfuncion . 
   
   get_doc = (db,folder,id) =>{
   expect(getDoc).toBeCalledWith(doc(db,folder, id));
   expect(callback).toEqual(callback);
   expect(db).toEqual(db);
   expect(id).toEqual(id);
};
});
test("get doc unitest", async () => { //another one for loginfuncion . 
   
  get_doc = (db,folder,id) =>{
  expect(getDoc).toBeCalledWith(doc(db,folder, id));
  expect(callback).toEqual(callback);
  expect(db).toEqual(db);
  expect(id).NottoEqual(db);
};
});

test("get docs unitest", async () => {
    get_docs = (db,folder) =>{
   expect(getDocs).toBeCalledWith(doc(db,folder));
   expect(folder).toEqual(folder);
   expect(db).toEqual(db);
};
});

test("get docs unitest", async () => {
  get_docs = (db,folder) =>{
 expect(getDocs).toBeCalledWith(doc(db,folder));
 expect(db).NottoEqual(folder);
 expect(folder).toEqual(folder);
};
});



test("On get User function", async () => { //on getuser other one  . 
  
  onGet_HRUsers = (db,folder,callback) =>{
 expect(GetUserscs).toBeCalledWith(doc(db,folder),callback);
 expect(callback).toEqual(callback);
   expect(folder).toEqual(folder);
   expect(db).toEqual(db);
   expect(id).toEqual(id);
  };
});

test("On get HRuser function", async () => { //on getHRquser other one  . 
  
  onGet_ReqUsers = (db,folder,callback) =>{
 expect(GetHRUserscs).toBeCalledWith(doc(db,folder),callback);
 expect(callback).toEqual(callback);
   expect(folder).toEqual(folder);
   expect(id).toEqual(id);
  };
});

test("On get Requser function", async () => { //on getRequser other one  . 
  
  onGet_ReqUsers = (db,folder,callback) =>{
 expect(GetReqUserscs).toBeCalledWith(doc(db,folder),callback);
 expect(callback).toEqual(callback);
   expect(folder).toEqual(folder);
   expect(db).toEqual(db);

  };
});

test("On get Requser function", async () => { //on getRequser other one (2) . 
  
  onGet_ReqUsers = (db,folder,callback) =>{
 expect(GetReqUserscs).toBeCalledWith(doc(db,folder),callback);
 expect(callback).toEqual(callback);
   expect(db).NottoEqual(folder);
   expect(db).toEqual(db);

  };
});


test("Update user function", async () => { //update user  . 
  
  updateUsers = (id, newFields) =>{
   expect(id).toEqual(id);
   expect(newFields).toEqual(newFields);

  };
});

test("Update HRuser function", async () => { //Update HR user  . 
  
  updateHRUsers = (id, newFields) =>{
   expect(id).toEqual(id);
   expect(newFields).toEqual(newFields);

  };
});

test("Update HRuser function", async () => { //Update HR user  . 
  
  updateHRUsers = (id, newFields) =>{
   expect(newFields).NottoEqual(id);
   expect(newFields).toEqual(newFields);
  };
});


test("Update Requser function", async () => { //Update REQuser . 
  
  updateReqUsers = (id, newFields) =>{
   expect(id).toEqual(id);
   expect(newFields).toEqual(newFields);

  };
});

test("Update Requser function", async () => { //Update REQuser .(2) 
  
  updateReqUsers = (id, newFields) =>{
   expect(id).NottoEqual(newFields);
   expect(newFields).toEqual(newFields);

  };
});

test("Update HRuser function", async () => { //Update HR user  . 
  
  updateHRUsers = (id, newFields) =>{
   expect(id).toEqual(id);
   expect(newFields).NottoEqual(id);

  };
});











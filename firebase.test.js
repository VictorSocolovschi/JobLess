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
    //insert function here
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
   //insert function here
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
    //insert function here
    saveReqUser = (firstname,lastname,email,password,phonenumber, description) =>{
    expect(firstname).toBe("firstnametest");
    expect(lastname).toBe("lastnametest");
    expect(email).toBe("emailtest");
    expect(password).toBe("passwordtest");
    expect(phonenumber).toBe("phonenumbertest");
    expect(description).toBe("descriptiontest");
    }
});
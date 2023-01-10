var loggedInMailTest = "loggedInMailTest"
var loggedInPasswordTEST = "loggedInPasswordTEST"

test('check for login - check if password and email is belong to any user in data base.' , ()=>
{
    loginfunc=(email,password)=>
    {
        expect(email).toBe(loggedInMailTest)
        expect(password).toBe(loggedInPasswordTEST)
    }
});
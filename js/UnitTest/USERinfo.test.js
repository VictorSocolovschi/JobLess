var loggedinmail = "loggedinmailTest"

test('test to check if user that connected to the website is User type.', ()=>
{
    onGetUsers=(loggedinmail)=>{
        expect(onGetUsers(loggedinmail)).toBe(loggedinmailTest)
    }
  
});

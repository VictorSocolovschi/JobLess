var loggedinmailTest = "loggedinmailTest"

test('test to check if user that connected to the website is Req user type.', ()=>
{
    onGetReqUsers=(loggedinmail)=>{
        expect(onGetReqUsers(loggedinmail)).toBe(loggedinmailTest)
    }
  
});
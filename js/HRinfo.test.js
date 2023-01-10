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
    onGetReqUsers=(loggedinmail)=>{
        expect(onGetReqUsers(loggedinmail)).toBe(loggedinmailTest)
    }
  
})
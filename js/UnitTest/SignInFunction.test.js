var usernameTEST = "usernameTEST";

test('check for varifaction between website and dataBase',()=>
{
    signedinfunc = (user)=>
    {
        expect(user).toBe(usernameTEST)
    }
});
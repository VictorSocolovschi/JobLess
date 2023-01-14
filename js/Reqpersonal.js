import{ myJobauth  , onGetJobs, loggedinmail, hebrew, onGetReqUsers} from "./firebase.js";
myJobauth();//logged in user

var pdf = new jsPDF({
    orientation: 'A4',
    halign: "right",
  });
//getting data from users
onGetReqUsers((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        const user = doc.data();
        //if logged in user generate pdf by info
    if(user.email == loggedinmail){
     texttitle +='דוח מעכב אישי';
     minititle +="שלום"+ " " + user.firstname + " " + user.lastname ;
    }})});
//getting data from jobs
onGetJobs((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          const job = doc.data();
          //if logged in user generate pdf by info
         

<<<<<<< HEAD
          const inlikes = job.likeby.includes(loggedinmail);
          const infav = job.favorits.includes(loggedinmail);
            if(inlikes)
            {  
              likeview+= job.title + "\n" +"מיקום:" + job.location +"\n"+"מייל ליצירת קשר:"+"\n" +job.pubmail;
            
              likeview+="\n\n\n\n\n"
             }

            if(infav){

              favview+= job.title + "\n" +"מיקום:" + job.location +"\n"+"מייל ליצירת קשר:"+"\n" +job.pubmail;
              favview+="\n\n\n\n\n"
            }
=======
                 if(job.pubmail == loggedinmail){
                myjobs+= job.title + "\n" +"מיקום:" + job.location +"\n"+"מייל ליצירת קשר:"+"\n" +job.pubmail + "\n" + "אנשים שהראו התעניינות:"+ "\n" + job.intrested ;
                myjobs+="\n\n\n\n\n"}

>>>>>>> eb80eb2c44fa3b98dcf3e090ace0e650b66ea554

    })});

var minititle= "";
var texttitle ="";
<<<<<<< HEAD
var likeview = "";
var favview = "";
=======
var myjobs = "";
var joblesstitle = "JobLess 4 U";


const today = new Date();
var date = ""+ today.getDate() +"/" + (today.getMonth()+1) + "/"+  today.getFullYear();
>>>>>>> eb80eb2c44fa3b98dcf3e090ace0e650b66ea554

//button generates pdf file on click
document.getElementById("generate-hrpdf").addEventListener("click", function(){
//last call- download

    pdf.setR2L(true);
    pdf.addFileToVFS("MyFont.ttf", hebrew);
    pdf.addFont("MyFont.ttf", "MyFont", "normal");
    pdf.setFont("MyFont");

    pdf.setFontSize(28);
    pdf.text(125, 20, texttitle); 
<<<<<<< HEAD

=======
    pdf.text(25, 20, joblesstitle); 
>>>>>>> eb80eb2c44fa3b98dcf3e090ace0e650b66ea554
    pdf.setFontSize(14); 
    pdf.text(135, 30, minititle); 

    pdf.setFontSize(12); 
<<<<<<< HEAD
  

    pdf.text(125, 40,"טקסט ");

    pdf.text(150, 50,"משרות שאהבתי:");
    pdf.text(65, 50,"משרות המועדפות עלי:");
    
    pdf.text(125, 60,likeview);//liked jobs

    pdf.text(50, 60,favview);//favorit jobs
=======
    pdf.text(5,8,date);

    pdf.text(45, 50,"המשרות שלי:");
    //pdf.text(65, 50,"משרות המועדפות עלי:");
    
    pdf.text(30, 60,myjobs);//myjobs
    //pdf.text(50, 60,favview);//favorit jobs
    pdf.text(5, 285,"לפרטים נוספים אנא צרו קשר איתנו:");
    pdf.text(5, 290,"JobLessInfo@gmail.com");
>>>>>>> eb80eb2c44fa3b98dcf3e090ace0e650b66ea554

pdf.save("myinfo.pdf");

});

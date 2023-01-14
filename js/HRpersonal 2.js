import{ myJobauth  , onGetJobs, loggedinmail, hebrew, onGetHRUsers} from "./firebase.js";
myJobauth();//logged in user

var pdf = new jsPDF({
    orientation: 'A4',
    halign: "right",
  });
//getting data from users
onGetHRUsers((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        const user = doc.data();
        //if logged in user generate pdf by info
    if(user.email == loggedinmail){
     texttitle +='דוח מעכב אישי';
     minititle +="שלום"+ " " + user.companyname ;
     username += user.username;
    }})});
//getting data from jobs
onGetJobs((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          const job = doc.data();
          //if logged in user generate pdf by info
         

     
          if(job.pubmail == loggedinmail){
              myjobs+= job.title + "\n" +"מיקום:" + job.location +"\n"+ "אנשים שהראו התעניינות:"+ "\n" + job.intrested ;
            
              myjobs+="\n\n\n\n\n"
          }
    })});

const today = new Date();
var date = ""+ today.getDate() +"/" + (today.getMonth()+1) + "/"+  today.getFullYear();

var minititle= "";
var texttitle ="";
var myjobs = "";
var joblesstitle = "JobLess 4 U";
var username ="";
//button generates pdf file on click
document.getElementById("generate-hrpdf").addEventListener("click", function(){
//last call- download

    pdf.setR2L(true);
    pdf.addFileToVFS("MyFont.ttf", hebrew);
    pdf.addFont("MyFont.ttf", "MyFont", "normal");
    pdf.setFont("MyFont");

    pdf.setFontSize(28);

    pdf.text(125, 20, texttitle); 
    pdf.text(25, 20, joblesstitle); 
    pdf.setFontSize(14); 
    pdf.text(135, 30, minititle); 

    pdf.setFontSize(12); 
    pdf.text(5,8,date);

    pdf.text(135, 35,username);

    pdf.text(45, 50,"המשרות שלי:");
    //pdf.text(65, 50,"משרות המועדפות עלי:");
    
    pdf.text(30, 60,myjobs);//myjobs

    //pdf.text(50, 60,favview);//favorit jobs
    pdf.text(5, 285,"לפרטים נוספים אנא צרו קשר איתנו:");
    pdf.text(5, 290,"JobLessInfo@gmail.com");

pdf.save("myinfo.pdf");
});

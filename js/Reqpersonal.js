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

    })});

var minititle= "";
var texttitle ="";
var likeview = "";
var favview = "";

//button generates pdf file on click
document.getElementById("generate-hrpdf").addEventListener("click", function(){
//last call- download

    pdf.setR2L(true);
    pdf.addFileToVFS("MyFont.ttf", hebrew);
    pdf.addFont("MyFont.ttf", "MyFont", "normal");
    pdf.setFont("MyFont");

    pdf.setFontSize(28);
    pdf.text(125, 20, texttitle); 

    pdf.setFontSize(14); 
    pdf.text(135, 30, minititle); 

    pdf.setFontSize(12); 
  

    pdf.text(125, 40,"טקסט ");

    pdf.text(150, 50,"משרות שאהבתי:");
    pdf.text(65, 50,"משרות המועדפות עלי:");
    
    pdf.text(125, 60,likeview);//liked jobs

    pdf.text(50, 60,favview);//favorit jobs

pdf.save("myinfo.pdf");

});

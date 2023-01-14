import{onGetUsers , myJobauth , addfile , onGetJobs, loggedinmail, hebrew, updateJob} from "./firebase.js";
myJobauth();//logged in user

addfile();//upload pdf function


const jobsContainer = document.getElementById("jobs-favorits");

var pdf = new jsPDF({
    orientation: 'A4',
    halign: "right",
  });
//getting data from users
onGetUsers((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        const user = doc.data();
        //if logged in user generate pdf by info
    if(user.email == loggedinmail){
    
     texttitle +='דוח מעכב אישי';
     minititle +="שלום"+ " " + user.LastName + " " + user.FirstName ;
     infocount += user.infocount;
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

    const today = new Date();
    var date = ""+ today.getDate() +"/" + (today.getMonth()+1) + "/"+  today.getFullYear();
    
var joblesstitle = "JobLess 4 U";   
var infocount = 0;
var minititle= "";
var texttitle ="";
var likeview = "";
var favview = "";
//button generates pdf file on click
document.getElementById("generate-pdf").addEventListener("click", function(){
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

    pdf.text(125, 40,"כמות הורדות לקורות החיים שלי: " + " " +  infocount);

    pdf.text(150, 50,"משרות שאהבתה:");
    pdf.text(65, 50,"משרות המועדפות עלי:");
    
    pdf.text(125, 60,likeview);//liked jobs

    pdf.text(50, 60,favview);//favorit jobs

    pdf.text(5, 285,"לפרטים נוספים אנא צרו קשר איתנו:");
    pdf.text(5, 290,"JobLessInfo@gmail.com");

pdf.save("myinfo.pdf");
});



window.addEventListener("DOMContentLoaded", async (e) => {
    onGetJobs((querySnapshot) => {
        //getting all jobs from firebase
      jobsContainer.innerHTML = "";
      querySnapshot.forEach((doc) => {

        const job = doc.data();
        //checking if email of logged in user is in job- favorits
        const infav = job.favorits.includes(loggedinmail);
        //if user added job to favorits- view job

        if(infav) {
        jobsContainer.innerHTML += `
      <div class="card card-body mt-2 border-dark" style="text-align:right">
        <center>  
        <h1 class="h5"><strong>${job.title}</strong></h1>
        </center>
        <label for="description"><strong>תיאור המשרה </strong></label>
        <p>${job.description}</p>
        <label for="description"><strong> מיקום המשרה</strong></label>
        <p>${job.location}</p>  
        <label for="description"><strong> היקף המשרה</strong></label>
        <p>${job.scope}</p> 
        <label for="description"><strong>  דרישות המשרה</strong></label>
        <p>${job.standarts}</p>  
        <div>
        <center>
          <a class="btn btn-success" style="width:100%; margin-left:0rem;" href="mailto:${job.pubmail}">צור קשר</a>
        </center>
        </div>
        <button class="btn btn-danger btn-delete" data-id="${doc.id}">
         🗑 הסר ממועדפים
         </button>
         
    </div>`;

//delete buttun
    const btnsDelete = jobsContainer.querySelectorAll(".btn-delete");
    btnsDelete.forEach((btn) =>
      btn.addEventListener("click", async ({ target: { dataset } }) => {
        try {
            //get data from firebase and remove job- favorit- username
            var newfav = job.favorits.replace(loggedinmail," ");
            updateJob(dataset.id,{favorits:newfav}) 

        } catch (error) {
          console.log(error);
        }
      })
    );

}})})});
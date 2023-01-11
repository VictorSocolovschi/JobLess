import{onGetUsers,myJobauth,addfile,onGetJobs, loggedinmail,hebrew,updateJob} from "./firebase.js";
myJobauth();//logged in user
addfile();//upload pdf function


const jobsContainer = document.getElementById("jobs-favorits");

var pdf = new jsPDF({
    orientation: 'A4',
    halign: "right",
  });

onGetUsers((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        //if logged in user generate pdf by info
    if(data.email == loggedinmail){
    pdf.setR2L(true);
    pdf.addFileToVFS("MyFont.ttf", hebrew);
    pdf.addFont("MyFont.ttf", "MyFont", "normal");
    pdf.setFont("MyFont");
    var texttitle ='דוח מעכב אישי';
    var minititle= data.LastName + " " + data.FirstName +" " +"שלום";

    pdf.setFontSize(28);
    pdf.text(125, 20, texttitle); 
    pdf.setFontSize(14); 
    pdf.text(135, 30, minititle); 
    pdf.setFontSize(12); 

    pdf.text(150, 40,"הלו הלו הלו הלו");

    pdf.text(150, 50,"הלו הלו הלו הלו");

    pdf.text(150, 60,"הלו הלו הלו הלו");

    pdf.text(150, 70,"הלו הלו הלו הלו");

    pdf.text(150, 80,"הלו הלו הלו הלו");


    }})});

//button generates pdf file on click
document.getElementById("generate-pdf").addEventListener("click", function(){
//last call- download
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
      <div class="card card-body mt-2 border-defult" style="text-align:right">
        <h3 class="h5">${job.title}</h3>
        <label for="description">: תיאור התפקיד</label>
        <p>${job.description}</p>
        <label for="description">: מיקום</label>
        <p>${job.location}</p>  
        <label for="description">: היקף המשרה</label>
        <p>${job.scope}</p> 
        <label for="description"> : דרישות</label>
        <p>${job.standarts}</p>  
        <div>
        <center>
          <a class="btn btn-outline-dark" href="mailto:${job.pubmail}">צור קשר</a>
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
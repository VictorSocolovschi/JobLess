
const firebaseConfig = {
    apiKey: "AIzaSyAAUOFyRYgjfa7zVvL4ihGkk5r-ULoTAms",
    authDomain: "projectjobless-97d0c.firebaseapp.com",
    databaseURL: "https://projectjobless-97d0c-default-rtdb.firebaseio.com/",
    projectId: "projectjobless-97d0c",
    storageBucket: "projectjobless-97d0c.appspot.com",
    messagingSenderId: "1016999526770",
    appId: "1:1016999526770:web:2cc2373872ec9d97fa9deb"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

document.getElementById('file').addEventListener('change', (event) => {
    const file = event.target.files[0];
    const storageRef = firebase.storage().ref('pdfs/' + file.name);

    storageRef.put(file).on('state_changed', (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
        const progressBar = document.getElementById('progress_bar');
        progressBar.value = progress;
    });

    storageRef.getDownloadURL().then(function(url){
        const image = document.getElementById('image');
        console.log(url);
        image.src = url
    });
});

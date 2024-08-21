  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAuth, GoogleAuthProvider,signInWithPopup,signInWithPhoneNumber } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
  //cualquier cosa eliminar el signInWithPopup y aumentar el onAuthStateChanged


  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC3D9xQXrhMByLjSQZx8S4_6TZLdA69Mbc",
    authDomain: "sign-in-426ac.firebaseapp.com",
    projectId: "sign-in-426ac",
    storageBucket: "sign-in-426ac.appspot.com",
    messagingSenderId: "559530539359",
    appId: "1:559530539359:web:e2edbf444dc2d3ec2b1eea"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);
  auth.langugeCode = 'en';

  const provider = new GoogleAuthProvider();

  const googleLogin = document.getElementById("google-login-btn");
  googleLogin.addEventListener("click", function(){
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;

    console.log(user);
    window.location.href = "logged.html"

}).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
  });


  })


  function updateUserProfile(){
    const userName = user.displayName;
    const userEmail = user.email;

    document.getElementById("userName").textContent= userName;
    document.getElementById("userEmail").textContent=userEmail;


  }

  updateUserProfile();


 




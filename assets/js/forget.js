// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD_6viQttAfB6n9QPqzWiwWaU5TR9UniXQ",
    authDomain: "pass-sec.firebaseapp.com",
    databaseURL: "https://pass-sec.firebaseio.com",
    projectId: "pass-sec",
    storageBucket: "pass-sec.appspot.com",
    messagingSenderId: "693883584368",
    appId: "1:693883584368:web:02732f202635b0df4119b5"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth();
  
    document.querySelector("#reset").addEventListener('submit',(e) => 
    {
        e.preventDefault();
        const email = document.querySelector("#email").value;
        auth.sendPasswordResetEmail(email).then(function() {
            alert("Email sent")
          }).catch(function(error) {
            alert(error.message)
          });

    })
    
  
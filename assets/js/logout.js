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
  
  const db  = firebase.firestore();
  const auth = firebase.auth();
  
  
  //logout
  function logout()
  {
      const logout = document.getElementById('log');
      logout.addEventListener('click',() => {
        
        auth.signOut().then(() => {
          console.log("logout")
          alert('Thanks for using Pass-Sec');
          window.location.href = "./index.html";
        })
      })
  }
  

    
  
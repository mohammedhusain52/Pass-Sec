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

 // register

  const signup = (email,password) => {
<<<<<<< HEAD
      const promise = auth.createUserWithEmailAndPassword(email,password)
      .then(() => {
        console.log('You are in');  
        window.location.href = "./login.html";
      })
      promise.catch(e => alert(e.message));
=======
      document.querySelector('.load').innerHTML = `<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>`
      const promise = auth.createUserWithEmailAndPassword(email,password).then(() => {
        document.querySelector('.load').innerHTML = ""
        window.location.href = "./login.html";
      })
      promise.catch(e => {
        document.querySelector('.load').innerHTML = "";
        alert(e.message);
      });
>>>>>>> 3fa20578f8d7721b51788615ee6e5dc59695d4ca
  }
  
  document.querySelector("#userform1").addEventListener('submit',(e) => 
  {
      e.preventDefault();
      const email = document.querySelector("#email").value;
      const password = document.querySelector("#pass").value;
      console.log(email,password)
      signup(email,password)
      
  })
  

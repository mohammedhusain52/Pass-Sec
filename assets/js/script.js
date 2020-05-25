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
      const promise = auth.createUserWithEmailAndPassword(email,password);
      promise.catch(e => alert(e.message));
  }
 

//login

//   const signin = (email,password) => {
//     const promise = auth.signInWithEmailAndPassword(email,password);
//     console.log('You are in');  
//     window.location.href = "http://127.0.0.1:5500/index1.html";
//     promise.catch(e => alert(e.message));
// }

//logout

// const logout = document.getElementById('log');
// logout.addEventListener('click',() => {
//   e.preventDefault();
//   auth.signOut().then(() => {
//     console.log("logout")
//   })
// })


// login and register 

  // document.querySelector("#userform").addEventListener('submit',(e) => 
  // {
  //     e.preventDefault();
  //     const email = document.querySelector("#email").value;
  //     const password = document.querySelector("#pass").value;
  //     console.log(email,password)
  //     signin(email,password)
  // })
  
  document.querySelector("#userform1").addEventListener('submit',(e) => 
  {
      e.preventDefault();
      const email = document.querySelector("#email").value;
      const password = document.querySelector("#pass").value;
      console.log(email,password)
      window.location.href = "./login.html";
      signup(email,password)
  })
  

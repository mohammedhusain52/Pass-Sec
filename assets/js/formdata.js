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

var db  = firebase.firestore();
const auth = firebase.auth();

var selectedFile; 
function getfile() 
{ 
  var pic = document.getElementById("photo"); 

   // selected file is that file which user chosen by html form 
  selectedFile = pic.files[0]; 

  myfunction(); // call below written function 
} 

let url;

function myfunction() 
{ 
  const uuid = firebase.auth().currentUser.uid
  console.log(uuid)
  document.querySelector('.imgload').innerHTML=`<i class="fa fa-spinner fa-spin"></i>`
  var storageRef = firebase.storage().ref(`/images/${uuid}`); 

  var uploadTask = storageRef.put(selectedFile); 

  uploadTask.on('state_changed', function(snapshot){ 
  }, function(error) {console.log(error); 
  }, function() { 

       uploadTask.snapshot.ref.getDownloadURL().then( 
        function(downloadURL) { 
          url = downloadURL
          document.querySelector('.imgload').innerHTML=`<b>&#10004;</b>`
        console.log(downloadURL);
    }); 
  }); 
}; 


// adding data in firestore
const getId = (email,name,age,lf,lt,cn,pass) => {
if (firebase.auth().currentUser !== null) 
  {
  const uuid = firebase.auth().currentUser.uid
  sendData(email,name,age,lf,lt,cn,pass,uuid,url)
  }
}

const sendData = (email,name,age,lf,lt,cn,pass,id,url) => {
  const docRef = db.collection('users').doc(id)
    docRef.set({
      Name: name,
      Email: email,
      Age: age,
      ContactNo: cn,
      LocationFrom: lf,
      LocationTo: lt,
      Password: pass,
      Image: url
    }).then(() => {
      document.querySelector('.load').innerHTML = ""
      alert("You'll recieve a Mail when your Pass will be Verified");
      window.location.href = "./index.html";
    })
    .catch((err) => console.log(err))
}

// button for adding data

document.querySelector("#appform").addEventListener('submit',(e) => 
{
  document.querySelector('.load').innerHTML = `<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>`
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const name = document.querySelector("#name").value;
    const age = document.querySelector("#age").value;
    const lf = document.querySelector("#lf").value;
    const lt = document.querySelector("#lt").value;
    const cn = document.querySelector("#cn").value;
    const pass = document.querySelector("#pass").value;
    getId(email,name,age,lf,lt,cn,pass)
    // console.log(email,name,age,lf,lt,cn,pass)
})
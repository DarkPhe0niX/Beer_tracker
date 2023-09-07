const config = {
    apiKey: "AIzaSyBsmk55TPkC_IvsdxT3wZNeb4Uroc4unLE",
    authDomain: "beer-tracker-database.firebaseapp.com",
    databaseURL: "https://beer-tracker-database-default-rtdb.firebaseio.com",
    projectId: "beer-tracker-database",
    storageBucket: "beer-tracker-database.appspot.com",
    messagingSenderId: "113122166792",
    appId: "1:113122166792:web:b9013fecd1f4f0c96129bd",
    measurementId: "G-SSFTQPC95T"
  };

//   firebase.initializeApp(config);
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// // reference your database
// var favorFormDB = firebase.database().ref("beer");
// document.getElementById("favorForm").addEventListener("Submit" , submitForm);


// function submitForm(e){
//     e.preventDefault();
//     var date = getInputVal("date");
//     var description = getInputVal("description");
//     var recipient = getInputVal("recipient");
//     var favorDoer = getInputVal("favorDoer");
//     var beersOwed = getInputVal("beerOwed");
//     saveMessage(date, description, recipient, favorDoer, beersOwed);
// }
// const saveMessage = (date, description, recipient, favorDoer, beersOwed) => {
//     var newfavorForm = favorFormDB.push();
//     newfavorForm.set({
//         date: date,
//         description: description,
//         recipient: recipient,
//         favorDoer: favorDoer,
//         beersOwed: beersOwed
//     });
// }
// function getInputVal (id){
//     return document.getElementById(id).value;
// };


firebase.initializeApp(config);
  
  // Reference beersOweds collection
  var beersOwedsRef = firebase.database().ref('beersOweds');
  
  // Listen for form submit
  document.getElementById('favorForm').addEventListener('submit', submitForm);

// Inside the submitForm function
function submitForm(e){
    e.preventDefault();

    // Get values
    var date = getInputVal('date');
    var description = getInputVal('description');
    var recipient = getInputVal('recipient');
    var favorDoer = getInputVal('favorDoer');
    var beersOwed = getInputVal('beersOwed');

    // Log the values to the console for debugging
    console.log('Date:', date);
    console.log('Description:', description);
    console.log('Recipient:', recipient);
    console.log('Favor Doer:', favorDoer);
    console.log('Beers Owed:', beersOwed);

    // Save beersOwed
    saveMessage(date, description, recipient, favorDoer, beersOwed);

    // Clear form
    document.getElementById('favorForm').reset();
}
//   // Submit form
//   function submitForm(e){
//     e.preventDefault();
  
//     // Get values
//     var date = getInputVal('date');
//     var description = getInputVal('description');
//     var recipient = getInputVal('recipient');
//     var favorDoer = getInputVal('favorDoer');
//     var beersOwed = getInputVal('beersOwed');
  
//     // Save beersOwed
//     saveMessage(date, description, recipient, favorDoer, beersOwed);
  
//     // // Show alert
//     // document.querySelector('.alert').style.display = 'block';
  
//     // // Hide alert after 3 seconds
//     // setTimeout(function(){
//     //   document.querySelector('.alert').style.display = 'none';
//     // },3000);
  
//     // Clear form
//     document.getElementById('favorForm').reset();
//   }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }

  // Save beersOwed to firebase
  function saveMessage(date, description, recipient, favorDoer, beersOwed){
    var newbeersOwedRef = beersOwedsRef.push();
    newbeersOwedRef.set({
        date: date,
        description: description,
        recipient: recipient,
        favorDoer: favorDoer,
        beersOwed: beersOwed
    }, function(error) {
        if (error) {
            console.error("Data could not be saved:", error);
        } else {
            console.log("Data saved successfully.",date, description, favorDoer);
        }
    });
  }  
  
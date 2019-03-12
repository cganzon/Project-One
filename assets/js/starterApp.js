// Initialize Firebase
var config = {
    apiKey: "AIzaSyBv0wWCOjt-Q1L-f-v2y_K38Wot2CrzD_Y",
    authDomain: "job-search-76273.firebaseapp.com",
    databaseURL: "https://job-search-76273.firebaseio.com",
    projectId: "job-search-76273",
    storageBucket: "job-search-76273.appspot.com",
    messagingSenderId: "110323383188"
};
firebase.initializeApp(config);
// =================================  

// firebase connection
var database = firebase.database();

// When user signs up for an account
$("#signUp").on("click", function (event) {
  //   // prevent default behaviour
  event.preventDefault();

  //   // saving input fields from sign up page
  var fName = $("#FName").val().trim();
  var mName = $("#MName").val().trim();
  var lName = $("#LName").val().trim();
  var email = $("#inputEmail1").val().trim();
  var password = $("#inputPassword2").val().trim();
  var pNumber = $("#contactNumber").val().trim();
  var resumeLink = $("#resumeLink").val().trim();
  var skillDescription = $("#skillDescription").val().trim();

  database.ref("/usersinfo").push({
    firstname: fName,
    middlename: mName,
    lastname: lName,
    email: email,
    password: password,
    resume: resumeLink,
    description: skillDescription
  });
});






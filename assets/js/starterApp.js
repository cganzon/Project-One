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


function joobleSearch() {
  var url = "https://us.jooble.org/api/";
  var key = "63e7fe87-63ba-4b2b-9b1a-35a3e3d71f97";
  var params = "{ keywords: 'Web Developer', location: 'San Diego'}"
  // get parameters from user's input

  //create xmlHttpRequest object
  var http = new XMLHttpRequest();
  //open connection. true - asynchronous, false - synchronous
  http.open("POST", url + key, true);

  //Send the proper header information
  http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  //Callback when the state changes
  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      var jsonResponse = JSON.parse(http.responseText);
      console.log(jsonResponse);
    }
  }
  //Send request to the server
  http.send(params);
}

joobleSearch();

// firebase connection
var database = firebase.database();





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
    description: skillDescription,
  });
  //   sessionStorage.setItem("firstName", fName);
  //   sessionStorage.setItem("middleName", mName);
  //   sessionStorage.setItem("lastName", lName);
  //   sessionStorage.setItem("email", email);
  //   sessionStorage.setItem("password", password);
  //   sessionStorage.setItem("pNumber", pNumber);
  //   sessionStorage.setItem("resumeURL", resumeLink);
  //   sessionStorage.setItem("skills", skillDescription);

  //   console.log(fName);


})
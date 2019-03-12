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
    description: skillDescription,
  });
});

// get parameters from user's input for LFW
$("#lfw-button").on("click", function (event) {
  // prevents page refresh
  event.preventDefault();
  var titleSearch = $("#jobTitleSearchParam").val().trim();
  var locationSearch = $("#locationSearchParam").val().trim();
  var salarySearch = $("#salarySearchParam").val().trim();
  console.log(titleSearch);
  console.log(locationSearch);
  console.log(salarySearch);

  var results = joobleSearch(titleSearch, locationSearch, salarySearch);
  console.log(results);
})

function joobleSearch(title, location, salary) {
  var url = "https://us.jooble.org/api/";
  var key = "63e7fe87-63ba-4b2b-9b1a-35a3e3d71f97";
  // params temp variable used to construct actual params variable with user's input
  // var params = "{ keywords: 'Job title', location: 'Location', salary: 'number'}";
  var params = "{keywords: '" + title + "', location: '" + location + "', salary: '" + salary + "'}";

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
      // console.log(jsonResponse);
      // need to display title, location, salary, and jpb link in cards on results page
    }
  }
  //Send request to the server
  http.send(params);
}






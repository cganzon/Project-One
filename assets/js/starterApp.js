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

function createListing(title, location, salary) {
    $("")
}

function joobleSearch(title, location, salary) {
    
    var url = "https://us.jooble.org/api/";
    var key = "63e7fe87-63ba-4b2b-9b1a-35a3e3d71f97";
    var params = "{keywords: 'Web Developer', location: 'San Diego, CA', salary: '60000'}"
    // get parameters from user's input

    //create xmlHttpRequest object
    var http = new XMLHttpRequest();
    //open connection. true - asynchronous, false - synchronous
    http.open("POST", url + key, true);

    //Send the proper header information
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    //Callback when the state changes
    http.onreadystatechange = function apiResponse() {
        if(http.readyState == 4 && http.status == 200) {
            var jsonResponse = JSON.parse(http.responseText);
            // console.log(jsonResponse);
        };
    };
    //Send request to the server
    http.send(params);
}

joobleSearch();
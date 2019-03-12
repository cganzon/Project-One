// get parameters from user's input for LFW
$("#searchListings").on("click", function (event) {
    // prevents page refresh
    event.preventDefault();
    var titleSearch = $("#search-input").val().trim();
    var locationSearch = $("#city-input").val().trim();
    console.log(titleSearch);
    console.log(locationSearch);

    joobleSearch(titleSearch, locationSearch);
})

function joobleSearch(title, location) {
    var url = "https://us.jooble.org/api/";
    var key = "658afad6-3648-4833-b4cd-b17ef82e21ce";
    // var params = "{ keywords: 'Web Developer', location: 'San Diego, CA'}"
    var params = "{keywords: '" + title + "', location: '" + location + "'}";

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
            for (var i = 0; i < jsonResponse.jobs.length; i++) {
            console.log(jsonResponse.jobs[i].company);
            console.log(jsonResponse.jobs[i].title);
            console.log(jsonResponse.jobs[i].snippet);
            console.log(jsonResponse.jobs[i].type);

            // card div
            var card = $("<div>");
            card.addClass("card");
            // card header div
            var headerHolder = $("<div>")
            headerHolder.addClass("card-header")
            var cardHeader = $("<h3>").text("Company: " + jsonResponse.jobs[i].company);
            headerHolder.append(cardHeader);
            // card body div
            var cardBody = $("<div>");
            cardBody.addClass("card-body");
            var description = $("<p>").html(jsonResponse.jobs[i].snippet);
            var salary = $("<p>").html(jsonResponse.jobs[i].salary)
            cardBody.append(description);
            cardBody.append(salary);

            
            card.append(headerHolder);
            card.append(cardBody);
            $("#results-div").append(card);

            };        
        };
    };
    //Send request to the server
    http.send(params);

    // var url = "https://us.jooble.org/api/";
    // var key = "63e7fe87-63ba-4b2b-9b1a-35a3e3d71f97";
    // // params temp variable used to construct actual params variable with user's input
    // // var params = "{ keywords: 'Job title', location: 'Location', salary: 'number'}";
    // var params = "{keywords: '" + title + "', location: '" + location + "'}";

    // //create xmlHttpRequest object
    // var http = new XMLHttpRequest();
    // //open connection. true - asynchronous, false - synchronous
    // http.open("POST", url + key, true);

    // //Send the proper header information
    // http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    // //Callback when the state changes
    // http.onreadystatechange = function () {
    //     if (http.readyState == 4 && http.status == 200) {
    //         var jsonResponse = JSON.parse(http.responseText);
    //         console.log(jsonResponse);
    //         // need to display title, location, salary, and job link in cards on results page
    //         database.ref("/Job Listings/" + title + " Listings").push(jsonResponse);
    //     }
    // }
    // //Send request to the server
    // http.send(params);
}

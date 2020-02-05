var Upcoming = document.getElementById("box");
var tournamentsLoader = document.getElementById("tournaments");

function displayTournmentsFunc(){

  let queryURL = "https://api.pandascore.co/tournaments/upcoming?token=8Y7glW4QDl2u44nl-g_P1jfr3pCWp0tT42GIEC0RmPdtl4-Kr_I";

  $.ajax({
    url: queryURL,
    method: "GET",    
    dataType: 'JSON',
    cors: true,
    contentType:'application/json',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    success: function() { alert("Success"); },
    error: function(error) { console.log(error); },
  }).then(function(response){
    console.log(response)
  });
};


  // displayUpcomingTournaments function re-renders the HTML to display the appropriate content
  function displayUpcomingTournaments() {

    var upcomingTournamentInfo = $(this).attr("box");
   //var queryURL = "https://api.pandascore.co/tournaments/upcoming" + upcoming + "?token=8Y7glW4QDl2u44nl-g_P1jfr3pCWp0tT42GIEC0RmPdtl4-Kr_I";

    
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

      // Creating a div to hold the upcoming tournaments information
      var upcomingTournaments = $("<div class='tournaments'>");

      // Storing the rating data
      var beginning = response.beginning_at;

      // Creating an element to have the Beginning date/time displayed
      var paraOne = $("<p>").text("Beginning: " + beginning);

      // Displaying the date/time
      upcomingTournaments.append(pOne);

      // Storing the game league
      var league = response.league;

      // Creating an element to hold the league
      var paraTwo = $("<p>").text("League: " + league);

      // Displaying the league
      upcomingTournaments.append(paraTwo);

      // Storing the team name initials
      var name = response.name;

      // Creating an element to hold the name
      var paraThree = $("<p>").text("Name: " + name);

      // Appending the team name intials
      upcomingTournaments.append(paraThree);

      // Retrieving the URL for the image
      var imgURL = response.image_url;

      // Creating an element to hold the image
      var image = $("<img>").attr("src", imgURL);

      // Appending the image
      upcomingTournaments.append(image);

    
      $("#upcomingTournamentsDisplay").prepend(tournamentsLoader);
    });
  };
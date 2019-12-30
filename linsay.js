//var esportsLoader = document.getElementById("box");
//var upcomingTournament = new pandaScore();

//$.getJSON("https://api.pandascore.co/tournaments/upcoming/application.json", function(data){
  //console.log(data);
//});



function displayTournmentsFunc(){

  let queryURL = "https://api.pandascore.co/tournaments/upcoming?token=8Y7glW4QDl2u44nl-g_P1jfr3pCWp0tT42GIEC0RmPdtl4-Kr_I";

  $.ajax({
    url: 'https://api.pandascore.co/tournaments/upcoming?token=8Y7glW4QDl2u44nl-g_P1jfr3pCWp0tT42GIEC0RmPdtl4-Kr_I',
    method: "GET",    
    dataType: 'JSONP',
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
}

displayTournmentsFunc();




//request.open('GET', 'https://api.pandascore.co.?
//platform=3&personaId = 8Y7glW4QDl2u44nl-g_P1jfr3pCWp0tT42GIEC0RmPdtl4-Kr_I&game=tunguska');

//request.setRequestHeader('Api-Key', '8Y7glW4QDl2u44nl-g_P1jfr3pCWp0tT42GIEC0RmPdtl4-Kr_I');

//request.eSportsInfo = function () {

//if (this.readyState === 4) {

  //console.log('Status:', this.status);

  //console.log('Headers:', this.getAllResponseHeaders());

//console.log('Body:', this.responseText);

//}
//};

//request.send();

//$().append(content,function(box))

//--------------------------------------------------------------------
//WORKING ON TOP AREA FIRST THEN COMING DOWN TO CLEAN THIS UP
//GAME SEARCH WILL HAVE ITS OWN LINK 
//axios({

  //url: "https://api-v3.igdb.com/covers",

 // method: 'POST',

  //headers: {

    //  'Accept': 'application/json',

      //'user-key': a358c3c44c00442aa1c0af06e21d76ae,

  //},

//  data: "fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,collection,cover,created_at,dlcs,expansions,external_games,first_release_date,follows,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,popularity,pulse_count,rating,rating_count,release_dates,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,time_to_beat,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;"

//})

//.then(response => {

  //console.log(response.data);

//})

//.catch(err => {

  //console.error(err);

//});
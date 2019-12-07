axios({
    url: "https://api-v3.igdb.com/covers",
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'user-key': a358c3c44c00442aa1c0af06e21d76ae,
    },
    data: "fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,collection,cover,created_at,dlcs,expansions,external_games,first_release_date,follows,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,popularity,pulse_count,rating,rating_count,release_dates,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,time_to_beat,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;"
  })
  .then(response => {
    console.log(response.data);
})
.catch(err => {
    console.error(err);
});


https:api.pandascore.co/some-url?token=8Y7glW4QDl2u44nl-g_P1jfr3pCWp0tT42GIEC0RmPdtl4-Kr_I


  // Event handler for user clicking the select-game button
  $("#select-game").on("click", function(event) {
    // Preventing the button from trying to submit the form
    event.preventDefault();
    // Storing the game name
    var inputGame = $("#game-input").val().trim();

    // Running the searchGames function
    searchGames(inputGame);
  });
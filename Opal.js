var queryURL ="https://api.giphy.com/v1/gifs/random?api_key=a85v6emWitsdZEPpqNkSb6oRE9IloP4z&tag=gaming";

$.ajax ({
    url: queryURL,
    method: "GET"
})
.then(function(response){
    console.log(response);
    var imageUrL = response.data.image_original_url;
    var gameImage = $("<imgGif>");
    gameImage.attr("src", imageUrL);
    gameImage.attr("alt","game Image");

    $("#imgGif").prepend(gameImage);
});
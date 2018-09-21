app = {
Usersearches: [],
buildQuery: function () {
   let queryUrl = "api_key=https://api.giphy.com/v1/stickers/search?";
   let userInput = $("#userInput").val().trim();
   let apiKey = "opxuGd2D0oz0QlB4VwqtVyn9nHVi6o7m";
   let limit = "&limit=10";
   let rating = "&rating=PG-13"
   let  lang = "&lang=en"
   let search = "&q=" +  userInput ;
   queryUrl = queryUrl + apiKey + limit + rating + search + lang ;

},



buildPage: function () {

}

}


$("#idea").on("click", function () {

    event.preventDefault();

    let queryUrl = app.buildQuery();


    $.ajax({
        url: queryUrl,
        method: "GET",
    }).then(app.buildPage)
    
})


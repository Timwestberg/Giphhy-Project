

$("#idea").on("click", function () {

    let userInput = $("#userInput").val().trim();
    let searchUrl= "https://api.giphy.com/v1/gifs/search?api_key=opxuGd2D0oz0QlB4VwqtVyn9nHVi6o7m&limit=12&rating=PG-13&lang=en&q=" + userInput;

    $("#chosenChar").empty();

    event.preventDefault();

    let queryUrl = searchUrl;

    let cartoon = userInput;

    let icon = $("<i class='fas fa-angle-right'></i>");

    let newButton = $("<button>")

    newButton.attr("data-name", cartoon).addClass("cartoonButton btn btn-primary hvr-trim hvr-box-shadow-outset").text(cartoon).prepend(icon)


    $("#button_span").append(newButton);

    $("#intro").text(cartoon);

    console.log(queryUrl);

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {

        let results = response.data;

        


            for (let i = 0; i < results.length; i++) {



                let imageStill = results[i].images.fixed_height_still.url;

                let imageAnimate = results[i].images.fixed_height.url;

                let charImage = $("<img class='gif'>");

                charImage.attr("src", imageStill).addClass("hvr-box-shadow-outset").attr("data-still", imageStill).attr("data-animate", imageAnimate).attr("data-state", "still");


                $("#chosenChar").prepend(charImage);






        }
    });
    
});

$(document).on("click", function () {


$(".gif").on("click", function () {

    console.log("clicked!");

    let state = $(this).attr("data-state");

    if(state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still")
    }
});

$(".cartoonButton").on("click",function () {
    
    let selCartoon = $(this).attr("data-name")
    searchUrl = "https://api.giphy.com/v1/gifs/search?api_key=opxuGd2D0oz0QlB4VwqtVyn9nHVi6o7m&limit=12&rating=PG-13&lang=en&q=" + selCartoon;

    $("#intro").text(selcartoon);

    event.preventDefault();

    $.ajax({
        url: searchUrl,
        method: "GET"
    }).then(function (response) {

        let results = response.data;

        $("#chosenChar").empty();

            for (let i = 0; i < results.length; i++) {


               
                let imageStill = results[i].images.fixed_height_still.url;

                let imageAnimate = results[i].images.fixed_height.url;

                let charImage = $("<img class='gif'>");

                charImage.attr("src", imageStill).addClass("hvr-box-shadow-outset").attr("data-still", imageStill).attr("data-animate", imageAnimate).attr("data-state", "still");


                $("#chosenChar").prepend(charImage);






        }
    });

});

});

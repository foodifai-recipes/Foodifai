/*
  Purpose: Pass information to other helper functions after a user clicks 'Predict'
  Args:
    value - Actual filename or URL
    source - 'url' or 'file'
*/

// $("#filename").on("value", function(){
//   predict_click($('#filename').val(), 'file');

// })



$("#filename").change(function() {
    if (filename.value == '') {
        alert('Please browse for a file!');
        return;
    } else if (!validFile(filename.value)) {
        alert('Supported File Types: JPEG, PNG, TIFF, BMP');
        return;
    } else {
        predict_click($('#filename').val(), 'file');
    }

});


$("#imgurl").change(function() {
    if (imgurl.value == '') {
        alert('Please enter an image URL!');
        return;
    } else if (!validFile(imgurl.value)) {
        alert('Supported File Types: JPEG, PNG, TIFF, BMP');
        return;
    } else {
        predict_click($('#imgurl').val(), 'url');
    }
});




// $("#input-div").css({"display" : "initial"});


function predict_click(value, source) {
    // first grab current index
    var index = document.getElementById("hidden-counter").value;

    // Div Stuff
    if (index > 1) {
        createNewDisplayDiv(index);
    }

    if (source === "url") {
        document.getElementById("img_preview" + index).src = value;
        doPredict({ url: value });

        // Div Stuff

    } else if (source === "file") {
        var preview = document.querySelector("#img_preview" + index);
        var file = document.querySelector("input[type=file]").files[0];
        var reader = new FileReader();

        // load local file picture
        reader.addEventListener("load", function() {
            preview.src = reader.result;
            var localBase64 = reader.result.split("base64,")[1];
            doPredict({ base64: localBase64 });

            // Div Stuff
            createHiddenDivs("base64", localBase64);

        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }
    }
}


// $("predict-url").on("click", )

/*
  Purpose: Does a v2 prediction based on user input
  Args:
    value - Either {url : urlValue} or { base64 : base64Value }
*/
var ingredient1 = "";
var ingredient2 = "";
var ingredient3 = "";
var counter = 0;
var arrOfFoods = [];
var ingredient4 = "";
var ingredient5 = "";

function doPredict(value) {
    $("#main-div").hide();
    $("#loading-wrapper").show();
    var modelID = getSelectedModel();

    app.models.predict(modelID, value).then(

        function(response) {
            console.log(response);
            // Important!
            // ***********
            var allItems = response.rawData.outputs[0].data.concepts;
            for (var i = 0; i < allItems.length; i++) {
                counter += 1;
                // if (response.rawData.outputs[0].data.concepts[i].name == JSON.parse("aliment")){
                //   console.log("got it");
                //   return;
                // }
                arrOfFoods.push(response.rawData.outputs[0].data.concepts[i].name);


                if (response.rawData.outputs[0].data.concepts[i].value < .95) {

                } else {
                    console.log(response.rawData.outputs[0].data.concepts[i].value);
                }
                // counter += 1;

            }

            // ***********
            var conceptNames = "";
            var tagArray, regionArray;
            var tagCount = 0;
            var modelName = response.rawData.outputs[0].model.name;
            var modelNameShort = modelName.split("-")[0];
            var modelHeader = '<b><span style="font-size:14px">' + capitalize(modelNameShort) + ' Model</span></b>';

            // Check for regions models first
            if (response.rawData.outputs[0].data.hasOwnProperty("regions")) {
                regionArray = response.rawData.outputs[0].data.regions;

                // Regions are found, so iterate through all of them
                for (var i = 0; i < regionArray.length; i++) {
                    conceptNames += "<b>Result " + (i + 1) + "</b>";
                    tagCount += 10;
                }
            }

            // Generic tag response models
            if (response.rawData.outputs[0].data.hasOwnProperty("concepts")) {
                tagArray = response.rawData.outputs[0].data.concepts;

                for (var other = 0; other < tagArray.length; other++) {
                    conceptNames += '<li>' + tagArray[other].name + ': <i>' + tagArray[other].value + '</i></li>';
                }

                tagCount = tagArray.length;

            }

            var columnCount = tagCount / 10;

            // Focus gets one more column
            if (modelName == "focus") {
                columnCount += 1;
            }

            conceptNames = '<ul style="margin-right:20px; margin-top:20px; columns:' + columnCount + '; -webkit-columns:' + columnCount + '; -moz-columns:' + columnCount + ';">' + conceptNames;

            conceptNames += '</ul>';
            conceptNames = modelHeader + conceptNames;

            $('#concepts').html(conceptNames);

            b();




            // document.getElementById("add-image-button").style.visibility = "visible";
            // console.log(arrOfFoods);

        },
        function(err) {
            console.log(err);
        }

    );

}

var nextCount = 0;

$(document).ready(function() {
    // $("#event").hide();
    // $("#main-div").hide();
    $("#event").hide();
    $("#banner").hide();
    $("#loading-wrapper").hide();
    $("#main-div").hide();
    $(".container-fluid").hide();

    $(".btn-read-more").on("click", function() {
        $("#event").hide();
        $("#main-div").show();
    });
});

// $("#next-imgs").on("click", function() {
//     var food1 = arrOfFoods[0];
//     var food2 = arrOfFoods[1];
//     var food3 = arrOfFoods[2];
//     var food4 = arrOfFoods[3];
//     var food5 = arrOfFoods[4];

//     var app_id = "cbaba7cb";
//     var app_key = "4964ec0ab446a8f304ae7c3dc858cb50"
//     var queryURL = "https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=" + food1 + "," + food2 + "," +
//         food3 + "," + food4 + "," + food5 + "," +
//         "&app_id=" + app_id + "&app_key=" + app_key + "&";

//     $.ajax({
//         METHOD: "GET",
//         url: queryURL

//     }).done(function(response) {
//         console.log(response);
//         var results = response.hits;
//         nextCount += 5;
//         for (var j = nextCount; j < nextCount + 5; j++) {
//             var foodDiv = $("<div>");
//             foodDiv.attr("id", "container");
//             var p = $("<p>").text(Math.ceil(results[j].recipe.calories) + " Calories");
//             var foodImage = $("<img/>", { src: results[j].recipe.image, "class": "jpg" }),
//                 anchor = $("<a/>", { href: results[j].recipe.shareAs, "target": "_blank" }),
//                 div = $("<div/>", { "class": "img" });
//             div.append(anchor.append(foodImage)).appendTo($("#foods"));
//             foodDiv.append(p);
//             var ingString = results[j].recipe.ingredientLines;

//             for (var i = 0; i < ingString.length; i++) {
//                 var ind = ingString[i].indexOf(" ")
//                 var line = ingString[i].substr(ind)
//                 line.toString();
//                 console.log(line)
//                 var x = line.replace(/\b./g, function(m) { return m.toUpperCase(); });
//                 foodDiv.append(x);
//             }

//             foodDiv.append("<br>")
//             foodDiv.append(ingString.length + " Ingredients")
//             $("#foods").append(foodDiv);
//         }
//     });
// });


function b() {
    // $("#loading-wrapper").show();


    var food1 = arrOfFoods[0];
    var food2 = arrOfFoods[1];
    var food3 = arrOfFoods[2];
    var food4 = arrOfFoods[3];
    var food5 = arrOfFoods[4];

    var app_id = "cbaba7cb";
    var app_key = "4964ec0ab446a8f304ae7c3dc858cb50"
    var queryURL = "https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=" + food1 + "," + food2 + "," + food3 + "," + food4 + "," + food5 + "," +
        "&app_id=" + app_id + "&app_key=" + app_key + "&";
    $.ajax({
        METHOD: "GET",
        url: queryURL
    }).done(function(response) {
        console.log(response);
        var results = response.hits;
        nextCount = 0;

        for (var i = 0; i < results.length; i++) {
            var imgsrc = results[i].recipe.image;
            var foodImage = $("<img>");
            foodImage.attr("src", imgsrc);
            foodImage.addClass("img-responsive img-rounded col-xs-12");
            // foodImage.addClass("")      
            var cals = Math.ceil(results[i].recipe.calories) + " Calories";
            var dishName = results[i].recipe.label;

            // var healthLabel = results[i].recipe.healthLabels[i];
            var box = $("#box" + i);
            var link = $("<a>");
            link.attr("href", results[i].recipe.shareAs);
            link.attr("target", "_blank");
            link.append(foodImage);
            box.append(cals);
            box.append(" " + dishName);
            box.append(link);
            // box.css("margin-top", "-2em");
            var holdPDiv = $(".health-labels" + i);

            for (var j = 0; j < results[i].recipe.healthLabels.length; j++) {
                var p = $("<p>");

                // Put this into one div instead and then append the div at the end.
                p.text(results[i].recipe.healthLabels[j]);
                p.attr("class", "show-p");
                p.css("opacity", 0);
                p.css("color", "#3AB795");
                // p.css("margin-top", "-4em");
                // p.css("float", "left");
                // 

                //
                // p.css("left", "2em");
                // p.css("padding-top", "2em");
                p.addClass("text-center");

                holdPDiv.append(p);
            }
            box.append(holdPDiv);
            holdPDiv.css("position", "relative");
            // holdPDiv.css("top", "-7em");
            // holdPDiv.css("margin-top", "-5em");


            // $(".health-labels").css("margin-top", "-20px")
            box.hover(handlerIn, handlerOut);
            
            function handlerIn() {
                $(this).find("img").fadeTo( 500 , 0.1);
                $(this).find(".show-p").fadeTo( 500 , 1);
               

            }

            function handlerOut() {
                $(this).find("img").fadeTo( 500 , 1);
                $(this).find(".show-p").fadeTo( 500 , 0);
                // infoDiv.hide();
            }


        }

        // Check if this block works
        for (var j = nextCount; j < nextCount + 5; j++) {
            if (results[j].recipe == undefined) {
                alert("Sorry, unfortunately we couldn't find a recipe with the ingredients in your picture. Please try another image.");
                $("#loading-wrapper").hide();
                $("#main-div").show();
                return
            }

        }
        $("#loading-wrapper").hide();
        $(".container-fluid").show();
        $("body").css("background-color", "rgb(245, 245, 245)");

    });


};

/*
  Purpose: Return a back-end model id based on current user selection
  Returns:
    Back-end model id
*/
function getSelectedModel() {
    return Clarifai.FOOD_MODEL;
}
/*
  Purpose: Return a capitalized String
  Args:
    s - A String
*/
function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
}

// If user is not logged in, redirect to login page
## If you're interested in using this repo for the Clarifai API, look for the javascript-starter repo and go to [Clarifai's developer Page](http://developer.clarifai.com) to register and get your API key.

Now that the Clarifai details are out of the way, let's tell you a little bit more about this project.

## Inspiration
In an age where everyone is concerned with streamlining day to day processes, we tried to come up with a way to expedite the way we decide what and how we eat. With the arrival of Snap Chat, Instagram and other live photo updates apps, people have be more and more accustomed to taking a picture and uploading it, while traditional typing struggles to keep up. We developed a way to help users get from "What am I going to make for food right now?" to "Let me upload these ingredients and see what new recipe I could make today." It's simple, it's intuitive, it's Foodifai.


## What it does
This app is in essence a two part process, you upload a picture then you get recipes back. Yes, it's that simple. You have the option to search your computer for a picture or enter a URL from the internet. Our main focus was this idea that someone could be scrolling on instagram and see a dish they really liked, but there were no instructions on how to make it. Enter Foodifai. They simply take a screen shot and upload it to their computer. Then they could upload that picture to the Foodifai app and wait a couple seconds while the Clarifai API does it's job. The Clarifai app takes the image and dissects each piece of food in the picture using artificial intelligence models and returns the name of each item it predicts in the picture, along with a confidence number (0.98775) to determine how sure the API thinks the food is actually in the picture. After the clarifai API recognizes the content of the picture and delivers the ingredients, we collect these pieces of information and store them in variables. Those variables will then be used to feed the Edamam API request that will result in searching for all of the recipes that can be prepared out of these ingredients. After the magic happens, we retrieve the recipes and show them in a gallery of photos, along with the calorie count of each meal. We limited the display to five foods for design and UX purposes although we intend on creating a "next" button to get the next five recipes to display. Once the user decides which meal they prefer, they can click on the image of the meal, then a new browser will open to list the instructions to prepare the recipe, along with full details of the meal nutritional facts. 



## How we built it
When we first started the Foodifai app, we were primarily concerned with getting two functional APIs working. Clarifai was the first API/ SDK that worked for us so we decided to work from there. We initially thought about integrating the picture-uploading functionality with Amazon Fresh but we didn't want to lose precious time trying to integrate user authentication. We then agreed on Edamam's recipe search API because it provided us with not only the recipes but the calories and ease of use (all we needed were a couple of search parameters or in our case, ingredients, to get the API to work.) We used HTML, CSS, Bootstrap, Javascript and jQuery on the front-end. Then we utilized firebase as a database/authentication.


## Challenges we ran into
One of our initial problems was ideation, both before the project and during the process. We had a hard time trying to think of an app that met the following criteria:
* Original idea
* Solves a problem
* Awesome
* Within our capabilities

We had such huge dreams for our project but only had a limited time and knowledge to work with. Once we were able to come up with a reasonable idea that could be completed within the less than two weeks, we ran into problems deciding and properly using APIs. Some were deprecated, while others had poor documentation. Others required special access keys; we made due with the APIs that we knew we could get JSON back from. Once the kinks from the APIs were sorted out, we began working on the front end and authentication portion. Both proved to be difficult, tedious processes but we're confident there's still much to be improved.


## Accomplishments that we're proud of
We were able to integrate two functional APIs that worked asynchronously so that the user had to do very little to get their desired information back. We streamlined the process that gives a user a recipe from a picture of food with as little as about 5 clicks(excluding the authentication process). This project also utilizes an artificial intelligence API which we thought was cutting edge, especially being the first project. The same API also came in an SDK, something we weren't familiar with so learning that new technology was rewarding as well. 


## What we learned
We learned the benefit of psuedocoding and brainstorming before jumping down a rabbit hole only to find a dead end. We also learned how to fire two AJAX calls asynchronously so that one could only execute when the first one was finished. Lastly and most importantly, we learned that team communication is key when working on a large project. 



## What's next for Foodifai
You probably noticed that there's a lot of room for improvement with Foodifai. We'd like to set up a back-end server to host all our information securely. We'd also like to use a database to store information based on a user's preferences. When the user returns, they could be reminded of their past recipe searches and bypass the picture process. The user could also be notified about the other recipes users are looking up to bypass the picture process. And finally, we think it's only natural that Foodifai becomes a fully functional iOS or android app. The ease of being able to upload directly from your phone is something we definitely want to incorporate.


## Built With

* Login: Firebase, HTML, Bootstrap, Javascript, jQuery
* Homepage: Javascript, jQuery, HTML, Bootstrap
* Upload: HTML, Bootstrap, Javascript, jQuery, Clarifai API
* Recipe: HTML, Bootstrap, Javascript, jQuery, Edamam API



## Authors
Mohammed Wardeh
Akhila Naik
Dariell Vasquez


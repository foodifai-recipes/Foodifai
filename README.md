# javascript-starter
A few simple examples to help you get started using the Clarifai Javascript client and API

## How to get started
Download this repo, simply invoke  
```script
$ npm install
```

## Usage

To get started, create an account at [developer.clarifai.com](http://developer.clarifai.com).

Create an application, and get your API Key.

This basic starter uses your API Key to make prediction calls. This will never expire so you only have to fill it in once.
Add the following to that file:

```
var myApiKey = 'YOUR API KEY HERE';
```


Now that the Clarifai details are out of the way, let's tell you a little bit more about this project.

Inspiration
In an age where everyone is concerned with streamlining day to day processes, we tried to come up with a way to expedite the way we decide what and how we eat. With the arrival of Snap Chat, Instagram and other live photo updates apps, people have be more and more accustomed to taking a picture and uploading it, while traditional typing struggles to keep up. We developed a way to help users get from "What am I going to make for food right now?" to "Let me upload these ingredients and see what new recipe I could make today." It's simple, it's intuitive, it's Foodifai.


What it does
This app is in essence a two part process, you upload a picture then you get recipes back. Yes, it's that simple. You have the option to search your computer for a picture or enter a URL from the internet. Our main focus was this idea that someone could be scrolling on instagram and see a dish they really liked, but there were no instructions on how to make it. Enter Foodifai. They simply take a screenshot and upload it to their computer. Then they could upload that picture to the Foodifai app and wait a couple seconds while the Clarifai API does it's job. The Clarifai app takes the image and dissects each piece of food in the picture using artificial intelligence models and returns the name of each item it predicts in the picture, along with a confidence number (0.98775) to determine how sure the API thinks the food is actually in the picture. The Foodifai then takes the top five ingredients in the picture and sends them to the Edamam API. Edamam uses these five parameters to search for recipes that contain these five foods. The Foodifai app then displays the five recipes accompanied with some succinct facts about them. The user then has the option to click on the pictures accompanied with the recipes to then move to the respective recipe page for more information.  


How we built it
When we first started the Foodifai app, we were primarily concerned with getting two functional APIs working. Clarifai was the first API/ SDK that worked for us so we decided to work from there. We initially thought about integrating the picture-uploading functionality with Amazon Fresh but we didn't want to lose precious time trying to integrate user authentication. We then agreed on Edamam's recipe search API because it provided us with not only the recipes but the calories and ease of use (all we needed were a couple of search parameters or in our case, ingredients, to get the API to work.) We used HTML, CSS, Bootstrap, Javascript and jQuery on the front-end. Then we utilized firebase as a database/authentication.


Challenges we ran into


Accomplishments that we're proud of


What we learned


What's next for Foodifai
You probably noticed that there's a lot of room for improvement with Foodifai. We'd like to set up a back-end server to host all our information securely. We'd also like to use a database to store information based on a user's preferences. When the user returns, they could be reminded of their past recipe searches and bypass the picture process. The user could also be notified about the other recipes users are looking up to bypass the picture process. And finally, we think it's only natural that Foodifai becomes a fully functional iOS or android app. The ease of being able to upload directly from your phone is something we definitely want to incorporate.


Built With




Authors


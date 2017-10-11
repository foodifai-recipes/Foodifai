// Initialize Firebase
$(document).ready(function() {

        var name = "";
        var email = "";
        var password = "";

  var config = {
    apiKey: "AIzaSyAbfvhPdoGdA3bLqlfFG7wZuW--amoyefI",
    authDomain: "foodifai-rutgers.firebaseapp.com",
    databaseURL: "https://foodifai-rutgers.firebaseio.com",
    //projectId: "foodifai-rutgers",
    storageBucket: "foodifai-rutgers.appspot.com",
   //messagingSenderId: "402211466763"
  };
        firebase.initializeApp(config);

        var database = firebase.database();

        // Create a new user with Firebase Authentication
        console.log("Waiting for click event");
       


        $("#add-user").on("click", function() {
            event.preventDefault();
            console.log("Add button clicked");
            
            var errorCode = "";
            name =  $("#name-input").val().trim();
            email = $("#email-input").val().trim();
            password = $("#password-input").val().trim();
            console.log("Firebase Authentication New email variable set: "+ email);
            console.log("Firebase Authentication New password set: "+ password);

            firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
                console.log("Firebase New User Creation Called");
                errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode);
                if (errorCode == "auth/email-already-in-use") {
                    console.log("Error Code: " + errorCode);
                    console.log("Error Message: " + errorMessage);
                    $("#login-message").html("You're already registered.  Please sign-in");
                } 
            });

              firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        });



        // Add what happens after a new user is created.
        console.log("Firebase Authentication userID created.");
        $("#login-message").html("Thanks for signing-up! Find your delicious meal");
        // $("#login-message").html("Add a new button to start the game!");

        });

        // Sign-in an existing user with Firebase Authentication

        $("#sign-in").on("click", function() {
            event.preventDefault();
            console.log("Sign-In Button Clicked");
            
            name =  $("#name-input").val().trim();
            email = $("#email-input").val().trim();
            password = $("#password-input").val().trim();
            console.log("Firebase Authentication Sign-in email variable set: "+ email);
            console.log("Firebase Authentication Sign-in email password set: "+ password);
            
            firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
              console.log("Firebase Sign-In Called");
              var errorCode = error.code;
              var errorMessage = error.message;
                  if (errorCode == "auth/wrong-password") {             
                      console.log("Error Code: " + errorCode);
                      console.log("Error Message: " + errorMessage);
                      $("#login-message").html("Your password is incorrect.  Please enter the correct password and try again.");
                      // $("#login-message").append("Add a new button to clear the form!");     
                  };

                  if (errorCode == "auth/user-not-found") {             
                      console.log("Error Code: " + errorCode);
                      console.log("Error Message: " + errorMessage);
                      $("#login-message").html("You must be a user.  Please click on the Register button.");
                  };
                });

            // Add what happens after a new user is created.

                var activeName = name;
                var activeEmail = email;
                console.log("User authenticated: " + activeName);
                console.log("Email authenticated: " + activeEmail);
                $("#login-message").html("Welcome Back!");   
            
        });
});
$(document).ready(function() {

    var name = "";
    var email = "";
    var password = "";

    function callModalDuplicateEmail() {
        var modal = document.getElementById("myModal");
        var span = $("#email-registered")
        modal.style.display = "block";

        $("#email-registered").on("click", function() {
            modal.style.display = "none";
        })

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }


    function callModalPassword() {
        var modal = document.getElementById("myModal2");
        var span = $("#weak-password");

        modal.style.display = "block";
        $("#weak-password").on("click", function() {
            modal.style.display = "none";
        })

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

    function callModalIncorrectPassword() {
        var modal = document.getElementById("myModal3");
        var span = $("#incorrect-close")

        modal.style.display = "block";

        $("#incorrect-close").on("click", function() {
            modal.style.display = "none";
        })

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }


    function callModalNewUser() {
        var modal = document.getElementById("myModal4");
        var span = $("#new-user");

        modal.style.display = "block";
        $("#new-user").on("click", function() {
            modal.style.display = "none";
        })

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

    function callModalWelcomeUser() {
        var modal = document.getElementById("myModal5");

        var span = $("#welcome-back")
        modal.style.display = "block";
        $("#welcome-back").on("click", function() {
            modal.style.display = "none";
        })

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }




      // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAbfvhPdoGdA3bLqlfFG7wZuW--amoyefI",
    authDomain: "foodifai-rutgers.firebaseapp.com",
    databaseURL: "https://foodifai-rutgers.firebaseio.com",
    storageBucket: "foodifai-rutgers.appspot.com",
  };
  firebase.initializeApp(config);

    var database = firebase.database();


    $("#add-user").on("click", function() {
        event.preventDefault();

        var errorCode = "";
        name = $("#name-input").val().trim();
        email = $("#email-input").val().trim();
        password = $("#password-input").val().trim();

        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            errorCode = error.code;
            var errorMessage = error.message;

            if (errorCode == "auth/email-already-in-use") {
                callModalDuplicateEmail();
            } else if (errorCode == 'auth/weak-password') {
                callModalPassword(); //alert('The password is too weak.');
            }
        });
        $("#login").hide();
        $("#event").show();
    });

    // Sign-in an existing user with Firebase Authentication

    $("#sign-in").on("click", function() {
        event.preventDefault();

        name = $("#name-input").val().trim();
        email = $("#email-input").val().trim();
        password = $("#password-input").val().trim();

        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == "auth/wrong-password") {
                callModalIncorrectPassword();
            } else if (errorCode == "auth/user-not-found") {
                callModalNewUser();
            };
        });


        // Add what happens after a new user is created.
        var activeName = name;
        var activeEmail = email;
        $("#login").hide();
        // regDone = true;
        $("#event").show();
    });

    $("#clear-user").on("click", function() {
        name = "";
        email = "";
        password = "";
        $("#name-input", "#email-input", "#password-input").empty();
    });


});



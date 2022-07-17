$(document).ready(function() {
    $(".form-main").validate({

        errorClass: "error fail-alert",
        validClass: "valid success-alert",
    });

});

var myInput = document.getElementById("pswd");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");


// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
    document.getElementById("pass-req").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
    document.getElementById("pass-req").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {

    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if(myInput.value.match(lowerCaseLetters)) {
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
  }
  
    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if(myInput.value.match(upperCaseLetters)) {
      capital.classList.remove("invalid");
      capital.classList.add("valid");
    } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
    }
  
    // Validate numbers
    var numbers = /[0-9]/g;
    if(myInput.value.match(numbers)) {
      number.classList.remove("invalid");
      number.classList.add("valid");
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
    }
  
    // Validate length
    if(myInput.value.length >= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
    }
  }

  //Confirm Password


const confirmedPassInput = document.getElementById("confpass");

$("#confpass").keyup(function(){

    let currentPass = $("#pswd").val();
    let confPass = $("#confpass").val();

    if (
        (confPass == currentPass) && (currentPass != "")
        ) {

        confirmedPassInput.classList.add("is-valid");
    }

    else if (confPass != currentPass){

        confirmedPassInput.classList.remove("is-valid");

    }


  });
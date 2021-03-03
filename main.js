// this function can be used to make images bigger 
function bigImg(i) {
 i.style.width="800px";
 i.style.height="600px";

 
}
// this function can be used to make the background white again
function normalImg(i) {
    document.body.style.backgroundColor = "white";
}
// this function can be used whenever you use an event on an element, this will change the text - and backgroundcolor
function backGround(newColor) {
    document.body.style.background = newColor; 
    document.body.style.color = newColor;
}
// this will check if the form is validated
function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("DoggyName must be filled out");
      return false;
    }
  }

 let myInput = document.getElementById("psw");
 let letter = document.getElementById("letter");
 let capital = document.getElementById("capital");
 let number = document.getElementById("number");
 let length = document.getElementById("length");
  
  // When the user clicks on the password field, show the message box
  myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
  }
  
  // When the user clicks outside of the password field, hide the message box
  myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
  }
  
  // When the user starts to type something inside the password field
  myInput.onkeyup = function() {
    // Validate lowercase letters
    let lowerCaseLetters = /[a-z]/g;
    if(myInput.value.match(lowerCaseLetters)) {
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
  }
  
    // Validate capital letters
    let upperCaseLetters = /[A-Z]/g;
    if(myInput.value.match(upperCaseLetters)) {
      capital.classList.remove("invalid");
      capital.classList.add("valid");
    } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
    }
  
    // Validate numbers
    let numbers = /[0-9]/g;
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

/* function validateForm() {
  var x = document.forms["contactForm"]["name"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  } else {
    Message.innerHTML = "";
    return true;
  }
} */

const submitBtn = document.querySelector(".submit");
let nameInputEl = document.querySelector("#name");
let emailInputEl = document.querySelector("#email");
let msglInputEl = document.querySelector("#message");
let errorEl = document.querySelector(".error");
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function validation() {
  /* var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message"); */
  errorEl.innerHTML = "";
  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    errorEl.innerHTML = "";
    if (nameInputEl.value.length < 3) {
      errorEl.classList.remove("hide");
      errorEl.innerHTML += "för kort<br>";
    } else if (nameInputEl.value.length > 8) {
      errorEl.classList.remove("hide");
      errorEl.innerHTML += "för lång<br>";
    }

    if (!emailInputEl.value.match(mailformat)) {
      errorEl.classList.remove("hide");
      errorEl.innerHTML += "Emailadress is wrong<br>";
    }

    if (!msglInputEl.value) {
      errorEl.classList.remove("hide");
      errorEl.innerHTML += "No message<br>";
    }

    if (errorEl.innerHTML == "") {
      errorEl.classList.add("hide");
    }
  });
}

validation();

/* var myForm = document.forms.myForm;
var message = document.getElementById("message");

myForm.onsubmit = function () {
  if (myForm.name.value == "") {
    message.innerHTML = "please enter a name";
    return false;
  } else {
    message.innerHTML = "";
    return true;
  }
}; */

/* const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const form = document.getElementById("form");
const errorElement = document.getElementById("errror");

form.addEventListener("submit", (e) => {
  let message = [];
  if (name.value === "" || name.value == nul) {
    messages.push("Name is required");
  }
  if (message.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(",");
  }
});
 */

/* const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const contactForm = document.getElementById("form");
const errorElement = document.getElementById("errror"); */

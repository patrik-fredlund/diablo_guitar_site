/* Contact-form-validation.
Fadil hjälpte mig med denna. Vi satt i 4 timmar fram till kl01 sewn fick vi (han) det att funka. Lörorik session. Vilken hjälte han är. Jag är skyldig honom en lunch, minst.*/

const submitBtn = document.querySelector(".submit");
let nameInputEl = document.querySelector("#name");
let emailInputEl = document.querySelector("#email");
let msglInputEl = document.querySelector("#message");
let errorEl = document.querySelector(".error");
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function validation() {
  errorEl.innerHTML = "";
  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    errorEl.innerHTML = "";
    if (nameInputEl.value.length < 3) {
      errorEl.classList.remove("hide");
      errorEl.innerHTML += "Too Short Name<br>";
    } else if (nameInputEl.value.length > 8) {
      errorEl.classList.remove("hide");
      errorEl.innerHTML += "Too Long<br>";
    }

    if (!emailInputEl.value.match(mailformat)) {
      errorEl.classList.remove("hide");
      errorEl.innerHTML += "Email adress is wrong<br>";
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

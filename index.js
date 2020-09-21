function validateForm() {
  var x = document.forms["contact-form"]["name"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

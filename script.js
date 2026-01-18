
function getFormvalue(event) {
  event.preventDefault(); // prevent page reload

  const form = document.forms[0];

  const firstName = form.fname.value.trim();
  const lastName = form.lname.value.trim();

  // Handle empty fields
  if (firstName === "" && lastName === "") {
    alert("Please enter your name");
    return;
  }

  alert(firstName + " " + lastName);
}



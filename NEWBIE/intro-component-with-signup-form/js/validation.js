// TODO :variables for html
// TODO : on leave event check if is empty or not
// TODO : on click event removing any warning
// TODO : on leave event check if email is true
// TODO : on click submit check if anyThing is empty
let inputs = document.getElementsByClassName("input-field");
let FirstName = document.getElementById("first-name");
let LastName = document.getElementById("last-name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let submit = document.querySelectorAll("input[type=submit]");
let elem = document.createElement("span");
const RegEmail = /\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

for (let input of inputs) {
  input.addEventListener("blur", (e) => {
    if (e.target.value === "") {
      e.target.parentNode.insertBefore(
        document.createElement("span"),
        e.target.nextSibling
      );
      e.target.style = "border: solid 2px red";
      e.target.nextSibling.setAttribute("class", "error-message");
      e.target.nextSibling.innerHTML = `${e.target.placeholder} cannot be empty.`;
    } else if (!email.value.match(RegEmail)) {
      e.target.parentNode.insertBefore(
        document.createElement("span"),
        e.target.nextSibling
      );
      e.target.style = "border: solid 2px red";
      e.target.nextSibling.setAttribute("class", "error-message");
      e.target.nextSibling.innerHTML = `this is not valid email`;
    } else {
      e.target.style = "border: default";
    }
  });
  input.addEventListener("focus", (e) => {
    if (e.target.nextSibling.classList.contains("error-message")) {
      e.target.nextSibling.remove();
    } else return null;
  });
}

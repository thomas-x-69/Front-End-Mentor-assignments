//todo: variables
let markAll = document.getElementById("mark-all");
let row = document.getElementsByClassName("row");
let ToRead = document.getElementsByClassName("to-read");
let counterElement = document.getElementById("notifications-counter");
let section = document.getElementById("sections");
checkNumber();
//todo: when page loaded check the number of notifications (function) , if counter == 0 do the unread function
function checkNumber() {
  let counter = 0;
  var children = section.children;
  for (var i = 0; i < children.length; i++) {
    if (children[i].classList.contains("to-read")) {
      counter++;
    }
  }
  console.log(`notification number now is : [${counter}]`);
  counterElement.innerHTML = counter;
  if (counterElement.innerHTML == 0) {
    markAll.classList.add("unMark");
    markAll.innerHTML = "unMark all";
  } else {
    markAll.classList.remove("unMark");
    markAll.innerHTML = "Mark all as read";
  }
}
//todo: when clicks on notification :remove unread Class - remove background - update counter
for (let oneRow of row) {
  oneRow.addEventListener("click", (e) => {
    if (e.target.classList.contains("to-read")) {
      e.target.classList.remove("to-read");
      checkNumber();
    } else return 0;
  });
}
/*
todo: when clicks readAll
if has allRead class : go throught all notification & axtivate them
else if has not : go throught all notification & deAvtivate them
*/

markAll.addEventListener("click", (e) => {
  if (!markAll.classList.contains("unMark")) {
    markAll.classList.add("unMark");
    markAll.innerHTML = "unMark all";
    for (let singleRow of row) {
      if (singleRow.classList.contains("to-read")) {
        singleRow.classList.remove("to-read");
      }
      checkNumber();
    }
  } else if (markAll.classList.contains("unMark")) {
    markAll.classList.remove("unMark");
    markAll.innerHTML = "Mark all as read";
    for (let singleRow of row) {
      if (!singleRow.classList.contains("to-read")) {
        singleRow.classList.add("to-read");
      }
      checkNumber();
    }
  }
});

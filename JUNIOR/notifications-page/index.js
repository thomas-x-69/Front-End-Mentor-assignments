//todo: variables

//todo: when page loaded check the number of notifications (function) , if counter == 0 do the unread function

//todo: when clicks on notification :remove unread Class - remove background - remove red sign - update counter

/* 
todo: when clicks readAll
if has allRead class : go throught all notification & avtivate them
else if has not : go throught all notification & deAvtivate them
*/

let markAll = document.getElementById("mark-all");
let row = document.getElementsByClassName("row");
let ToRead = document.getElementsByClassName("to-read");
let divs = document.querySelectorAll("section div.row");
let counter = document.getElementById("notifications-counter");
let section = document.getElementById("sections");
for (i = 0; i <= section.length; i++) {
  if (section[i].classList.contains("to-read")) {
    counter++;
    i++;
  } else continue;
}
console.log(counter.innerHTML);
// if object has to read then
for (let oneRow of row) {
  oneRow.addEventListener("click", (e) => {
    if (e.target.classList.contains("to-read")) {
      e.target.classList.remove("to-read");
    }
  });
}
markAll.addEventListener("click", (e) => {
  for (let div of divs) {
    if (e.target.classList.contains("unMark")) {
      if (!div.classList.contains("to-read")) {
        div.classList.add("to-read");
        e.target.classList.remove("unMark");
        e.target.innerHTML = "Mark all as read";
      }
    } else if (div.classList.contains("to-read")) {
    }
  }
});
if (counter.innerHTML == "0") {
  document.body.div.classList.remove("to-read");
  markAll.classList.add("unMark");
  markAll.innerHTML = "unMark all";
}

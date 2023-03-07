let markAll = document.getElementById("mark-all");
let row = document.getElementsByClassName("row");
let ToRead = document.getElementsByClassName("to-read");
let divs = document.querySelectorAll("section div.row");

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
      div.classList.remove("to-read");
      e.target.classList.add("unMark");
      e.target.innerHTML = "unMark all";
    }
  }
});

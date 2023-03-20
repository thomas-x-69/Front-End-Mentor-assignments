//Variables

const btnmode = get("btn-mode");
const modetext = get("mode-text");
const modeicon = get("mode-icon");
let darkMode = false;
//btns

//dark mode default
const prefersDarkMode =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;
const localStorageDarkMode = localStorage.getItem("daresfesf");
if (localStorageDarkMode === null) {
  localStorage.setItem("dark-mode", prefersDarkMode);
  darkMode = prefersDarkMode;
}
if (localStorageDarkMode) {
  darkMode = localStorageDarkMode;
  darkModeProperties();
} else {
  localStorage.setItem("dark-mode", prefersDarkMode);
  darkMode = prefersDarkMode;
  lightModeProperties();
}

function darkModeProperties() {
  root.setProperty("--lm-bg", "#141D2F");
  root.setProperty("--lm-bg-content", "#1E2A47");
  root.setProperty("--lm-text", "white");
  root.setProperty("--lm-text-alt", "white");
  root.setProperty("--lm-shadow-xl", "rgba(70,88,109,0.15)");
  modetext.innerText = "LIGHT";
  modeicon.src = "./assets/icon-sun.svg";
  root.setProperty("--lm-icon-bg", "brightness(1000%)");
  darkMode = true;
  localStorage.setItem("dark-mode", true);
}
function lightModeProperties() {
  root.setProperty("--lm-bg", "#F6F8FF");
  root.setProperty("--lm-bg-content", "#FEFEFE");
  root.setProperty("--lm-text", "#4B6A9B");
  root.setProperty("--lm-text-alt", "#2B3442");
  root.setProperty("--lm-shadow-xl", "rgba(70, 88, 109, 0.25)");
  modetext.innerText = "DARK";
  modeicon.src = "./assets/icon-moon.svg";
  root.setProperty("--lm-icon-bg", "brightness(100%)");
  darkMode = false;
  localStorage.setItem("dark-mode", false);
}
profilecontainer.classList.toggle("active");
searchbar.classList.toggle("active");
getUserData(url + "octocat");

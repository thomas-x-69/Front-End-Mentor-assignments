function fetching() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("advice-number").innerHTML = data.slip.id;
      document.getElementById("advice-text").innerHTML = data.slip.advice;
    })
    .catch((err) => console.error(err));
}
fetching();

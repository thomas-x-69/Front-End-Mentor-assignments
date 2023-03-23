let range = document.getElementById("range");
let price = document.getElementById("price");
let views = document.getElementById("pageviews-count");
let toggle_discount = document.getElementById("toggle_discount");
function change() {
  range.style = `background: linear-gradient(to right, #a5f3eb 0%, #a5f3eb ${range.value}%, #eaeefb 50%, #eaeefb 100%);`;
  if (range.value <= 16.6) {
    views.innerHTML = "10K Pageviews";
    toggle_discount.checked
      ? (price.innerHTML = "$6.00")
      : (price.innerHTML = "$8.00");
  } else if (range.value <= 33.3) {
    views.innerHTML = "50K Pageviews";
    toggle_discount.checked
      ? (price.innerHTML = "$9.00")
      : (price.innerHTML = "$12.00");
  } else if (range.value <= 50) {
    views.innerHTML = "100K Pageviews";
    toggle_discount.checked
      ? (price.innerHTML = "$12.00")
      : (price.innerHTML = "$16.00");
  } else if (range.value <= 66.6) {
    views.innerHTML = "500K Pageviews";
    toggle_discount.checked
      ? (price.innerHTML = "$18.00")
      : (price.innerHTML = "$24.00");
  } else if (range.value <= 83.3) {
    views.innerHTML = "1m Pageviews";
    toggle_discount.checked
      ? (price.innerHTML = "$27.00")
      : (price.innerHTML = "$36.00");
  }
}
range.oninput = () => {
  change();
};
toggle_discount.onchange = () => {
  change();
};

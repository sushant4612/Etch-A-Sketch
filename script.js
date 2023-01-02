const hover = document.getElementsByClassName(".elements");
console.log(hover);
hover.addEventListener("click", function backround() {
  hover.style.backroundColor = "red";
});

function changeColor() {
  console.log(hover);
}

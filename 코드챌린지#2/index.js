const body = document.querySelector("body");

function changeColor() {
  const changed = window.innerWidth;

  if (changed >= 800) {
    body.style.backgroundColor = "red";
  } else if (changed < 800 && changed > 560) {
    body.style.backgroundColor = "yellow";
  } else {
    body.style.backgroundColor = "green";
  }
}

window.addEventListener("resize", changeColor);

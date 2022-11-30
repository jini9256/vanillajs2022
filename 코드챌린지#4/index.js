let x_mas = document.querySelector("h2");

function twoDays() {
  let currentTime = new Date();
  let xmasTime = new Date("2022-12-25");

  let xmas_current = xmasTime - currentTime;

  const second = Math.floor((xmas_current / 1000) % 60);
  const minute = Math.floor((xmas_current / 1000 / 60) % 60);
  const hour = Math.floor(xmas_current / 1000 / 60 / 60) % 24;
  const day = Math.floor(xmas_current / 1000 / 60 / 60 / 24);

  const xMasDay = `${day}day ${hour}hour ${minute}minute ${second}second`;

  x_mas.innerText = xMasDay;
}

twoDays();
setInterval(twoDays, 1000);

const btn = document.getElementById("btn-no");
const btnyes = document.getElementById("btn-yes");
const width = window.innerWidth;
const height = window.innerHeight;
btn.style.top = "400px";
btn.style.left = `${width/2.0 + 50}px`;
btn.style.display = "block";

btn.addEventListener("click", (e) => {
  console.log(window.innerWidth, window.innerHeight);
  console.log(btnyes.getBoundingClientRect());

  let buttonPosition = e.currentTarget.getBoundingClientRect();
  const semiButtonWidth = (buttonPosition.right + buttonPosition.left) / 2.0;
  const semiButtonHeight = (buttonPosition.top + buttonPosition.bottom) / 2.0;
  const xRange = [semiButtonWidth, window.innerWidth - semiButtonWidth];
  const yRange = [semiButtonHeight, window.innerHeight - semiButtonHeight];
  const newXPos = Math.random() * (xRange[1] - xRange[0]) + xRange[0];
  const newYPos =  Math.random() * (yRange[1] - yRange[0]) + yRange[0];
});

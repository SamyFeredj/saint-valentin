const btn = document.getElementById("btn-no");
const btnyes = document.getElementById("btn-yes");
const width = window.innerWidth;
const height = window.innerHeight;
btn.style.top = "250px";
btnyes.style.top = "250px";
btn.style.left = `${width/2.0 + 50}px`;
btnyes.style.left = `${width/2.0 - 100}px`;
btn.style.display = "block";
btnyes.style.display = "block";
//
console.log("Window height : ", window.innerHeight);
console.log("Window width : ", window.innerWidth);
//
btn.addEventListener("click", (e) => {
  let buttonPosition = e.currentTarget.getBoundingClientRect();
  const semiButtonWidth = (buttonPosition.right - buttonPosition.left) / 2.0;
  const semiButtonHeight = (buttonPosition.top - buttonPosition.bottom) / 2.0;
  const xRange = [semiButtonWidth + 0.1*window.innerWidth, window.innerWidth - (semiButtonWidth + 0.1*window.innerWidth)];
  const yRange = [semiButtonHeight + 0.1*window.innerHeight, window.innerHeight - (semiButtonHeight + 0.1*window.innerHeight)];
  const newXPos = Math.random() * (xRange[1] - xRange[0]) + xRange[0];
  const newYPos =  Math.random() * (yRange[1] - yRange[0]) + yRange[0];
  // debug
  console.log(newXPos , newYPos);
  btn.style.top = `${newYPos}px`;
  btn.style.left = `${newXPos}px`;
});

btnyes.addEventListener("click", (e) => {
  alert("OK ALORS PLUKETOU");
  window.location.reload();
})

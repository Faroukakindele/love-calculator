"use strict";
// declarations
const maleName = document.querySelector(".male_input");

const femaleName = document.querySelector(".female_input");
const male_label = document.querySelector(".male_name");
const female_label = document.querySelector(".female_name");
const submit_button = document.querySelector(".calculate");
const retry = document.querySelector(".retry");
const love = document.querySelector(".love-1");
console.log(maleName.textContent);
function last3letter(item) {
  const letters = item.slice(-3);
  return letters;
}
function lovePercent(item) {
  const itemLetters = last3letter(item);
  const itemPercentage = Math.random() * itemLetters.length;
  const percentage = Math.trunc(
    ((itemPercentage + 1) / (itemLetters.length + 1)) * 50
  );
  return percentage;
}

function loveCalculator(lover, spouse) {
  const totalLove = lovePercent(lover) + lovePercent(spouse);
  if (totalLove < 50) {
    const parsedLove = Math.trunc((totalLove / 100) * 50 + totalLove);
    return parsedLove;
  }
  return totalLove;
}
function submit_changes(e) {
  if (maleName.value.length < 3 || femaleName.value.length < 3) return;

  // calculate love score
  const lovescore = loveCalculator(maleName.value, femaleName.value);
  // display love score
  submit_button.textContent = `your love score ${lovescore} % `;
  // remove event listener
  submit_button.removeEventListener("click", submit_changes);

  male_label.textContent = maleName.value;
  female_label.textContent = femaleName.value;
  female_label.style.fontWeight = "bold";
  male_label.style.fontWeight = "bold";
  retry.classList.remove("display");
  love.classList.add("display");

  femaleName.classList.add("display");
  maleName.classList.add("display");
}
submit_button.addEventListener("click", submit_changes);

retry.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.reload(true);
});

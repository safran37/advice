const dice = document.querySelector(".dice-box");
const advice = document.querySelector(".advice");
const number = document.querySelector(".advice-number");

const fetchAdvice = async () => {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();
  advice.innerText = data.slip.advice;
  number.innerText = `ADVICE #${data.slip.id}`;
};
fetchAdvice();

dice.addEventListener("click", () => {
  fetchAdvice();
});

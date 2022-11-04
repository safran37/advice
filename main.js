const dice = document.querySelector(".dice-box");
const advice = document.querySelector(".advice");
const number = document.querySelector(".advice-number");

const fetchAdvice = async () => { // create an async function called fetchAdvice //
  const res = await fetch("https://api.adviceslip.com/advice");  // await fetching the API //
  const data = await res.json(); // finally got the API //
  advice.innerText = data.slip.advice; // Change advice's innerText by accessing API(data.slip.advice)
  number.innerText = `ADVICE #${data.slip.id}`; //Change the number's innerText by accessing API(data.slip.id)
};
fetchAdvice(); // Call fetchAdvice on start up so it can generate a random advice upon opening the App //

dice.addEventListener("click", () => { // Add event listener to dice img and every time you click it call the function fetchAdvice(Advice Generator)
  fetchAdvice();
});

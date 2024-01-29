let advideID = document.getElementById("advice__id");
let adviceText = document.getElementById("advice__text");
let adviceBtn = document.getElementById("advice__btn");

// Define an asynchronous function to fetch advice from the API
const getAdvice = async () => {
  try {
    // Send a request to the API endpoint
    let response = await fetch("https://api.adviceslip.com/advice");
    // Wait for the response to be read as JSON
    let data = await response.json();
    // Set the text content of the advideID element to the ID of the advice slip
    advideID.textContent = data.slip.id;
    // Set the text content of the adviceText element to the advice text
    adviceText.textContent = data.slip.advice;
  } catch (error) {
    // If an error occurs, log it to the console
    console.log(error);
  };
};

window.addEventListener("load", getAdvice);
adviceBtn.addEventListener("click", getAdvice);
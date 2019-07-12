const filledInput = document.getElementById("sentence");
const btnTweet = document.getElementById("btn-tweet");
const counter = document.getElementById("count-down");
const textarea = document.querySelector("textarea");
const sentence = document.getElementById("sentence");
const tweetPlaced = document.getElementById("tweet");
const countDown = document.getElementById("count-down");
const maxCharacter = 140;

document.addEventListener("DOMContentLoaded", disableBtn);
function disableBtn() {
  btnTweet.disabled = "true";
  btnTweet.style.opacity = "0.5";
}
function enableBtn() {
  btnTweet.disabled = false;
  btnTweet.style.opacity = "1";
}

filledInput.addEventListener("keyup", validateTyping);
function validateTyping() {
  if (sentence.value.length > maxCharacter) {
    disableBtn();
  } else {
    enableBtn();
  }
}

btnTweet.addEventListener("click", postTweet);
function postTweet(event) {
  event.preventDefault();
  createSpotTweet();
  resetFormClock();
  disableBtn();
}

function resetFormClock() {
  countDown.innerHTML = maxCharacter;
  countDown.removeAttribute("style");
  sentence.value = "";
}

function createSpotTweet() {
  let newdiv = document.createElement("div");
  let newtime = document.createElement("p");
  newtime.className += "clock";
  let newtweet = document.createElement("p");
  newtweet.className += "post-done";
  newtweet.innerHTML = sentence.value;
  newtime.innerHTML = timePosted();

  newdiv.appendChild(newtweet);
  newdiv.appendChild(newtime);

  document.getElementById("tweet").appendChild(newdiv);
}

sentence.addEventListener("keyup", countdownColors);
function countdownColors() {
  let character = sentence.value.length;
  let total = maxCharacter - character;
  countDown.innerHTML = total;

  if (total >= 11 && total <= 20) {
    countDown.style.color = "green";
  } else if (total >= 0 && total <= 10) {
    countDown.style.color = "red";
  } else {
    countDown.removeAttribute("style");
  }
}

// cssText: returns or sets the text of the element's inline style declaration only.
textarea.addEventListener("keydown", cssText);
function cssText() {
  textarea.style.cssText = "height:auto; padding:0";
  textarea.style.cssText = "height:" + textarea.scrollHeight + "px";
}

function timePosted() {
  let now = new Date();
  let hours = now.getHours().toString();
  let minutes =
    (now.getMinutes().toString() < 10 ? "0" : "") + now.getMinutes().toString();
  let timeNow = hours + ":" + minutes;
  return timeNow;
}

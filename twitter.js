const filledInput = document.getElementById("sentence");
const btnTweet = document.getElementById("btn-tweet");
const counter = document.getElementById("count-down");
const textarea = document.querySelector("textarea");
const sentence = document.getElementById("sentence");
const tweetPosted = document.getElementById("tweet");
const countDown = document.getElementById("count-down");
const maxCharacter = 140;

document.addEventListener("DOMContentLoaded", function(event) {
  btnTweet.disabled = "true";
  btnTweet.style.opacity = "0.5";
});

filledInput.addEventListener("keyup", function() {
  if (sentence.value.length > maxCharacter) {
    btnTweet.disabled = true;
    btnTweet.style.opacity = "0.5";
  } else {
    btnTweet.disabled = false;
    btnTweet.style.opacity = "1";
  }
});

btnTweet.addEventListener("click", function(event) {
  event.preventDefault();
  tweetPosted.innerHTML = sentence.value;
  sentence.value = "";
  btnTweet.disabled = true;
  btnTweet.style.opacity = "0.5";
  countDown.innerHTML = maxCharacter;
  countDown.removeAttribute("style");
  timePosted();
});
/*
btn.addEventListener("click",function() {
    let newdiv = document.createElement('div');
    let newtime = document.createElement('p');
    let newtweet = document.createElement('p');
    newtweet.innerHTML = sentence.value;
    newtime.innerHTML = timePosted();

    newdiv.appendChild(newtweet);
    newdiv.appendChild(newtime);

    document.getElementById("tweet").appendChild(newdiv);
});
*/

sentence.addEventListener("keyup", function() {
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
});

// cssText: returns or sets the text of the element's inline style declaration only.
textarea.addEventListener("keydown", function() {
  textarea.style.cssText = "height:auto; padding:0";
  textarea.style.cssText = "height:" + textarea.scrollHeight + "px";
});

function timePosted() {
  let now = new Date();
  let hours = now.getHours().toString();
  let minutes =
    (now.getMinutes().toString() < 10 ? "0" : "") + now.getMinutes().toString();
  let timeNow = hours + ":" + minutes;

  //   document.getElementById("time").innerHTML = timeNow;
  return timeNow;
}

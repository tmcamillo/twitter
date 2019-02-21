
let filledInput = document.getElementById('sentence');
let btn = document.getElementById("btn-tweet");
let counter = document.getElementById("count-down");
var textarea = document.querySelector("textarea");
const sentence = document.getElementById("sentence");
const maxCharacter = 140;

document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('btn-tweet').disabled = "true";
    document.getElementById("btn-tweet").style.opacity = "0.5";
});

filledInput.addEventListener("keyup", function() {
    if (sentence.value === "" || sentence.value === null) {
        document.getElementById("btn-tweet").disabled = true;
        document.getElementById("btn-tweet").style.opacity = "0.5";
    }
    else if (sentence.value.length >= maxCharacter) {
        document.getElementById("btn-tweet").disabled = true;
        document.getElementById("btn-tweet").style.opacity = "0.5";
    }

    else {
        document.getElementById('btn-tweet').disabled = false;
        document.getElementById("btn-tweet").style.opacity = "1";
    }
});

btn.addEventListener("click", function(event){
    event.preventDefault() 
});

btn.addEventListener("click",function(){
    document.getElementById("tweet").innerHTML = sentence.value;
    document.getElementById("sentence").value = '';
    timePosted();
});

sentence.addEventListener("keyup", function(){
    let character = sentence.value.length;
    let total = maxCharacter - character;
    document.getElementById("count-down").innerHTML = total;
    
    if (total >= 11 && total <= 20) {
        document.getElementById("count-down").style.color = 'green';
    }

    else if (total >= 0 && total <= 10) {
        document.getElementById("count-down").style.color = 'red';
    }
});

// cssText: returns or sets the text of the element's inline style declaration only.
textarea.addEventListener('keydown', function(){
    textarea.style.cssText = 'height:auto; padding:0';
    textarea.style.cssText = 'height:' + textarea.scrollHeight + 'px';
});

//operador ternário - atalho da condição if - se condition é true, o operador retornará o valor de expr1; se não, ele retorna o valor de exp2. 
function timePosted() {
    let now = new Date();
    let hours = now.getHours().toString();
    let minutes = (now.getMinutes().toString() < 10 ? '0':'') + now.getMinutes().toString();
    let timeNow = hours + ':' + minutes;
    document.getElementById("time").innerHTML = timeNow;
};

/*
btn.addEventListener('click', function(){
    let tweet = document.createElement('p');
    tweet.innerHTML = text
})
*/







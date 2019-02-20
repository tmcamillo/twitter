
document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('btn-tweet').disabled = "true";
    document.getElementById("btn-tweet").style.opacity = "0.5";
});


var filledInput = document.getElementById('sentence');

filledInput.addEventListener("keyup", function() {
    let sentenceInput = document.getElementById("sentence").value;
    if (sentenceInput === "") {
        document.getElementById("btn-tweet").disabled = true;
        document.getElementById("btn-tweet").style.opacity = "0.5";
    }
    else {
        document.getElementById('btn-tweet').disabled = false;
        document.getElementById("btn-tweet").style.opacity = "1";
    }
});

var btn = document.getElementById("btn-tweet");

btn.addEventListener("click", function(event){
    event.preventDefault() 
});

btn.addEventListener("click",function(){
    let sentence = document.getElementById("sentence").value;
    document.getElementById("tweet").innerHTML = sentence;
});

function countDown() {
    let sentence = document.getElementById("sentence").value;
    let character = sentence.length;
    let maxCharacter = 140;
    let total = maxCharacter - character;
    document.getElementById("count-down").innerHTML = total;
};



/*
    if (total === 10) {
        message.style.color = 'rgb(255, 0, 0)';
    };

    if (total === 20) {
        message.style.color = 'rgb(255, 153, 0)';
    }
*/


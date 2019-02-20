
let filledInput = document.getElementById('sentence');
let btn = document.getElementById("btn-tweet");
let counter = document.getElementById("count-down");
const sentence = document.getElementById("sentence");
const maxCharacter = 140;

document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('btn-tweet').disabled = "true";
    document.getElementById("btn-tweet").style.opacity = "0.5";
});

filledInput.addEventListener("keyup", function() {
    if (sentence.value === "") {
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
});

sentence.addEventListener("keyup", function(){
    let character = sentence.value.length;
    let total = maxCharacter - character;
    document.getElementById("count-down").innerHTML = total;
});

sentence.addEventListener("keyup", function(){
    let character = sentence.value.length;
    let total = maxCharacter - character;
    document.getElementById("count-down").innerHTML = total;
    
    if (total === 20) {
        document.getElementById("count-down").style.color = 'green';
    }

    else if (total === 10) {
        document.getElementById("count-down").style.color = 'red';
    }

    else if (total > maxCharacter) {
        document.getElementById("btn-tweet").disabled = true;
        document.getElementById("btn-tweet").style.opacity = "0.5";
    }

});



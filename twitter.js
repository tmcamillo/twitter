
/*function displayMessage() {
    let sentence = document.getElementById("sentence").value;
    document.getElementById("tweet").innerHTML = sentence;
}
*/

document.getElementById("btn-tweet").addEventListener("click", function(event){
    event.preventDefault()
});

let btn = document.getElementById("btn-tweet");
btn.addEventListener("click",function(){
    let sentence = document.getElementById("sentence").value;
    document.getElementById("tweet").innerHTML = sentence;
})



// Ex-1
function showDate() {
    document.getElementById('s_date').innerHTML=Date()
}
// Ex-2
function c_text() {
    document.getElementById("c_content").innerHTML = "Hello JavaScript!";
}
// Ex-3
function bulb_off() {
    document.getElementById("myImage").src = "images/pic_bulbon.gif";
}
function bulb_on() {
    document.getElementById("myImage").src = "images/pic_bulboff.gif";
}
//Ex-4
var sum1 = 5;
var sum2 = 7;

function sum() {
    document.getElementById('ans').innerHTML= sum1 + sum2;
}
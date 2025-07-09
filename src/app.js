import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// hardcode excuses
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

// random number generator for generating excuses above
function getRandomNumber(a,b){
    return Math.floor(Math.random() * (b - a) + a);
}
// helps generate any word in the arrays above
function getRandomWord(array){
    let max = array.length -1;
    let min = 0;
    let random = getRandomNumber(min, max);
    return array[random];
}
window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  //#excuse from html file to get random excuse-> who, action, what, when
  document.querySelector('#excuse').innerHTML = getRandomWord(who) + " " + getRandomWord(action) + " " + getRandomWord(what) + " " + getRandomWord(when);
};

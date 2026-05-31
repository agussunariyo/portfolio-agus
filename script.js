const words = [
"IT Infrastructure Engineer",
"Network Specialist",
"FMS Engineer",
"Windows Server Administrator",
"Mining Technology Specialist"
];

let wordIndex = 0;
let charIndex = 0;

const typing = document.getElementById("typing");

function typeEffect(){

if(charIndex < words[wordIndex].length){

typing.textContent += words[wordIndex].charAt(charIndex);

charIndex++;

setTimeout(typeEffect,100);

}
else{

setTimeout(deleteEffect,2000);

}
}

function deleteEffect(){

if(charIndex > 0){

typing.textContent =
words[wordIndex].substring(0,charIndex-1);

charIndex--;

setTimeout(deleteEffect,50);

}
else{

wordIndex++;

if(wordIndex >= words.length){

wordIndex = 0;

}

setTimeout(typeEffect,300);

}
}

typeEffect();


// SCROLL ANIMATION

const reveals =
document.querySelectorAll(
'.card,.project-card,.section-title,.about p'
);

window.addEventListener('scroll',()=>{

reveals.forEach(item=>{

const windowHeight =
window.innerHeight;

const revealTop =
item.getBoundingClientRect().top;

if(revealTop < windowHeight - 100){

item.classList.add('active');
item.classList.add('reveal');

}

});

});
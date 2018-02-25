window.addEventListener('keydown', function(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');

});

function removeTransition(e){
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

var button = document.getElementById("play-music");
var button2 = document.getElementById("keep-playing");
var button3 = document.getElementById("stop-playing");

button.addEventListener('click', function(){
  const sounds = document.querySelectorAll('audio');
  let num = Math.floor((Math.random() * 10));
  sounds[num].play();
});

let myVar;

function myTimer() {
  const sounds = document.querySelectorAll('audio');
  let sound = sounds[Math.floor((Math.random() * 10))];
  let code = sound.getAttribute("data-key");
  const key = document.querySelector(`.key[data-key="${code}"]`);
  sound.play();
  key.classList.add('playing');
}

function stopTimer() {
  clearInterval(myVar);
}

button2.addEventListener('click', function(){
  myVar = setInterval(function(){ myTimer() }, 1000);
  button2.disabled = true;
});
button3.addEventListener('click', function (){
  stopTimer();
  button2.disabled = false;
});

const curtain = document.querySelector('.wrapper');
const objects = document.querySelector('.objects');
const lamp = document.querySelector('.lamp img');
const cord = document.querySelector('.cord');
const lineBefore = document.querySelector('.line-before');
const line = document.querySelector('.line');
const lineAfter = document.querySelector('.line-after');
const circle = document.querySelector('.circle');
const light = document.querySelector('.light');
const focus = document.querySelector('.focus');
const animal = document.querySelector('.animal');

let lightState = false;
let animalState = 'rabbit';

curtain.onmouseover = () => {
  curtain.style.backgroundPosition = 'center bottom 40px';
};

curtain.onmouseout = () => {
  curtain.style.backgroundPosition = 'center bottom';
};

curtain.onclick = () => {
  curtain.onmouseover = () => {};
  curtain.onmouseout = () => {};
  curtain.style.transition = '1s';
  curtain.style.backgroundPosition = 'center bottom 1080px';
  setTimeout(() => {
    curtain.style.backgroundImage = 'none';
  }, 1000);
  setTimeout(() => {
    objects.style.display = 'block';
  }, 500);
};

lamp.onmousedown = () => {
  cord.style.transform = 'translateY(9px)';
  circle.style.transform = 'translateY(9px)';
};

lamp.onmouseup = () => {
  cord.style.transform = 'translateY(0)';
  circle.style.transform = 'translateY(0)';
};

lamp.onclick = () => {
  if (!lightState) {
    lineBefore.style.backgroundColor = 'rgb(127, 127, 0)';
    line.style.backgroundColor = 'rgb(140, 140, 55)';
    lineAfter.style.backgroundColor = 'rgb(127, 127, 0)';
    light.style.opacity = '0.5';
    focus.style.opacity = '1';
    lightState = true;
  } else {
    lineBefore.style.backgroundColor = 'black';
    line.style.backgroundColor = 'rgb(59, 59, 59)';
    lineAfter.style.backgroundColor = 'black';
    light.style.opacity = '0';
    focus.style.opacity = '0';
    lightState = false;
  }
};

light.onclick = () => {
  animal.style.transform = 'translateY(110px)';
  setTimeout(() => {
    if (animalState == 'rabbit') {
      animal.src = 'img/dove.png';
      animalState = 'dove';
    } else {
      animal.src = 'img/rabbit.png';
      animalState = 'rabbit';
    }
    animal.style.transform = 'translateY(0)';
  }, 500);
};

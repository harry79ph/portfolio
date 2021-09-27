const navButtons = document.querySelectorAll('.nav-wrapper > ul > li');
const anchors = document.querySelectorAll('.nav-wrapper > ul > li > a')
const sections = document.querySelectorAll('section');
const typing = document.querySelector('.typing');
const text = 'Hello. My name is Harry.';
let count = 0;

navButtons.forEach((navButton, i) => {
  navButton.addEventListener('click', () => {
    sections[i].scrollIntoView({ behavior: 'smooth' });
  });
});

function typeWriter() {// recursion
  if (count < text.length) {
    typing.textContent += text.charAt(count);
    count++;
    setTimeout(typeWriter, 150);
  }
}
window.onload = function () {
  setTimeout(() => {
    typeWriter();
  }, 1000);
}



// function isElementOutViewport(el){
//   var rect = el.getBoundingClientRect();
//   return rect.bottom < 0 || rect.right < 0 || rect.left > window.innerWidth || rect.top > window.innerHeight;
// }

// function isInView(el) {
//   const box = el.getBoundingClientRect();
//   return (box.top + 120) < window.innerHeight && box.bottom >= 200;
// }
// window.addEventListener('scroll', () =>{
//   console.log(isInView(sections[1]));
//   if (isInView(sections[1]) === true) {
//     anchors[1].style.color = '#f8c471';
//   } else {
//     anchors[1].style.color = '#fff';
//   }
// });
// https://stackoverflow.com/questions/123999/how-can-i-tell-if-a-dom-element-is-visible-in-the-current-viewport


// hihlights the current nav button
window.addEventListener('scroll', () => {
  let current = '';
  // console.log(pageYOffset);
  sections.forEach(section => {
    const sectionTop = section.offsetTop;// 60 is navbar height
    const sectionHeight = section.clientHeight;
    //console.log(sectionTop);
    if (pageYOffset > (sectionTop - sectionTop / 5)) {
      current = section.getAttribute('id');
    } else if (pageYOffset < 10) {
      current = 'home';
    }
  });
  // console.log(current);
  navButtons.forEach(navButton => {
    navButton.classList.remove('active');
    if (navButton.classList.contains(current)) {
      navButton.classList.add('active');
    }
  })
});
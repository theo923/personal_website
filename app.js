let cursorTracker = document.querySelector("#cursor");
let cursorTracker2 = document.querySelector("#cursor2");
let cursorTracker3 = document.querySelector("#cursor3");
window.addEventListener('mousemove', cursor);

function cursor(info){
  cursorTracker.style.top = info.pageY + 'px';
  cursorTracker.style.left = info.pageX + 'px';
  cursorTracker2.style.top = info.pageY + 'px';
  cursorTracker2.style.left = info.pageX + 'px';
  cursorTracker3.style.top = info.pageY + 'px';
  cursorTracker3.style.left = info.pageX + 'px';
}



let barItem = document.getElementsByClassName('bar-item');
Array.from(barItem).forEach((item) => {
  let target = document.getElementById(item.id);
  target.addEventListener('mouseover', () =>{
    cursorTracker.classList.add("link-grow");
  });
  
  target.addEventListener('mouseleave', () =>{
    cursorTracker.classList.remove("link-grow");
  });
});

let headingText = document.querySelector('.content-container .box1 .content-box .headingText p');
headingText.innerHTML = "Hello!";
let mainText = document.querySelector('.content-container .box1 .content-box .mainText p');
mainText.innerHTML = "I am Theo Tam<br>Welcome to my page.<br>Let me introduce myself to you!";
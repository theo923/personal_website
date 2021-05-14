let cursorTracker = Array.from(document.getElementsByClassName("cursor"));
window.addEventListener('mousemove', cursor);
function cursor(info){
  cursorTracker.forEach(cursor => {
    cursor.style.top = info.pageY + 'px';
    cursor.style.left = info.pageX + 'px';
  });
}

let barItem = Array.from(document.getElementsByClassName('bar-item'));
barItem.forEach((item) => {
  let target = document.getElementById(item.id);
  target.addEventListener('mouseover', () =>{
    cursorTracker.forEach(tracker => tracker.classList.add("link-grow"));
  });
  
  target.addEventListener('mouseleave', () =>{
    cursorTracker.forEach(tracker => tracker.classList.remove("link-grow"));
  });
});

let box2content = document.querySelector("#box2 .content-box");
let maxHeight = document.documentElement.offsetHeight;
window.addEventListener("scroll", scroll);
function scroll() {
  let scrollTracker = this.scrollY;
  console.log(scrollTracker);
  if(scrollTracker >= 800 && scrollTracker <= 3000){
    box2content.classList.add("easeInAnimation");
    box2content.style.opacity = 1;
  }
  else{
    box2content.classList.remove("easeInAnimation");
    box2content.style.opacity = 0;
  }
  
}

let box2 = document.querySelector("#box2");
let barContainer = document.querySelector(".bar-container");
box2.addEventListener('mouseover', () =>{
  cursorTracker.forEach(tracker => tracker.classList.add("color-change"));
});

box2.addEventListener('mouseleave', () =>{
  cursorTracker.forEach(tracker => tracker.classList.remove("color-change"));
});

let headingText = document.querySelector('#box1 .content-box .headingText');
headingText.innerHTML = "Hello!";
let mainText = document.querySelector('#box1 .content-box .mainText');
mainText.innerHTML = "I am Theo Tam<br>Welcome to my page.<br>Let me introduce myself to you!";

let headingText2 = document.querySelector('#box2 .content-box .headingText');
headingText2.innerHTML = "He6456o!";
let mainText2 = document.querySelector('#box2 .content-box .mainText');
mainText2.innerHTML = "I am Theo Tam<br>Welcome to my page.<br>Let me introduce myself to you!";
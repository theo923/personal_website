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

let box1 = document.querySelector("#box1");
let box2 = document.querySelector("#box2");
let box3 = document.querySelector("#box3");

let scrollBar = document.querySelector(".scrollBar");

let box2content = document.querySelector("#box2 .content-box");
let maxHeight = document.documentElement.offsetHeight;

window.addEventListener("scroll", scroll);
function scroll() {
  let scrollTracker = this.scrollY;

  if(scrollTracker >= (box1.offsetHeight * 50 / 100) && scrollTracker <= box1.offsetHeight + box2.offsetHeight){
    box2content.classList.add("easeInAnimation");
    box2content.style.opacity = 1;
    scrollBar.style.backgroundColor = "#03B5AA";
  }
  else{
    box2content.classList.remove("easeInAnimation");
    box2content.style.opacity = 0;
    scrollBar.style.backgroundColor = "#E7E5DF";
  }

  [-9,16,20,24,30,34,40,44,50,54,60,65,71].forEach((num) => {
    ((scrollTracker >= maxHeight * num / 100 && num % 2 == 0)? scrollBar.style.height = (num + 10) + "%" :(scrollTracker >= maxHeight * num / 100 && num % 2 != 0) ? scrollBar.style.height = (num+23) + "%" : null);
  });
}


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
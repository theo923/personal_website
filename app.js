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



let headingText = document.querySelector('#box1 .content-box .headingText');
headingText.innerHTML = "Hello!";
let mainText = document.querySelector('#box1 .content-box .mainText');
mainText.innerHTML = "I am Theo Tam<br>Welcome to my page.<br>Let me introduce myself to you!";

let headingText2 = document.querySelector('#box2 .content-box .headingText');
headingText2.innerHTML = "He6456o!";
let mainText2 = document.querySelector('#box2 .content-box .mainText');
mainText2.innerHTML = "I am Theo Tam<br>Welcome to my page.<br>Let me introduce myself to you!";
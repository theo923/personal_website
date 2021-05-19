let cursorTracker = Array.from(document.getElementsByClassName("cursor")); // cursor
window.addEventListener('mousemove', cursor); // track every mouse move
function cursor(info){
  cursorTracker.forEach(cursor => {     // detect and assign the correct position (X, Y) of cursor
    cursor.style.top = info.pageY + 'px';
    cursor.style.left = info.pageX + 'px';
  });
}

let barItem = Array.from(document.getElementsByClassName('bar-item'));  // navigation bar's buttons
barItem.forEach((item) => {                             // iterate every item
  let target = document.getElementById(item.id);        // using item.id(string) to find the object so event listener can be add
  target.addEventListener('mouseover', () =>{           // trigger when the mouse move over to the button
    cursorTracker.forEach(tracker => tracker.classList.add("link-grow"));   // add effect on the cursor
  });
  
  target.addEventListener('mouseleave', () =>{          // trigger when the mouse leave from the button
    cursorTracker.forEach(tracker => tracker.classList.remove("link-grow"));   // delete effect on the cursor
  });
});

let box1 = document.querySelector("#box1");             // box1
let box2 = document.querySelector("#box2");             // box2
let box3 = document.querySelector("#box3");             // box3

let scrollBar = document.querySelector(".scrollBar");   // scroll bar

let box2content = document.querySelector("#box2 .content-box");   // box2 content box
let maxHeight = document.documentElement.offsetHeight;            // total height of the whole page

window.addEventListener("scroll", scroll);              // track every scroll
function scroll() {
  let scrollTracker = this.scrollY;                     // record the reading position of the page

  if(scrollTracker >= (box1.offsetHeight * 50 / 100) && scrollTracker <= box1.offsetHeight + box2.offsetHeight){  // if the position of first box is nearly the end, be ready for the animation of the next box
    box2content.classList.add("easeInAnimation");       // add ease in animation to the box2 content
    box2content.style.opacity = 1;                      // set the box2 content to be visible after the animation
    scrollBar.style.backgroundColor = "#03B5AA";        // change the color of the scrollBar to help user notice their current position
  }
  else{
    box2content.classList.remove("easeInAnimation");    // delete ease in animation function from the box2 content and ready for the replay
    box2content.style.opacity = 0;                      // set the box2 content to be invisible and ready for the replay
    scrollBar.style.backgroundColor = "#E7E5DF";        // change the color of the scrollBar to help user notice their current position
  }

  [-9,16,20,24,30,34,40,44,50,54,60,65,71].forEach((num) => {
    ((scrollTracker >= maxHeight * num / 100 && num % 2 == 0)? scrollBar.style.height = (num + 10) + "%" :(scrollTracker >= maxHeight * num / 100 && num % 2 != 0) ? scrollBar.style.height = (num+23) + "%" : null);
  }); // calculate the percentage of the position and compare to the current position
      // if current position >= the page position(percentage), set the scroll bar's length to the percentage of the page position
      // if its odd number return num+23 percentage (num + 23 is more noticable in the top and bottom of the page than normal percentage)
      // else return num+10 percentage
}


let barContainer = document.querySelector(".bar-container");  // navigation bar container
box2.addEventListener('mouseover', () =>{                                     // track if mouse move over to the navigation bar's boxs
  cursorTracker.forEach(tracker => tracker.classList.add("color-change"));    // change the color of the cursor so user can notice the cursor better in white background
});

box2.addEventListener('mouseleave', () =>{                                    // track if mouse leave from the navigation bar's boxs
  cursorTracker.forEach(tracker => tracker.classList.remove("color-change")); // change the color back to default by deleting class and ready for the replay
});

box1.addEventListener('mouseover', () =>{                                     // track if mouse move over to the navigation bar's boxs
  cursorTracker.forEach(tracker => tracker.classList.add("color-change"));    // change the color of the cursor so user can notice the cursor better in white background
});

box1.addEventListener('mouseleave', () =>{                                    // track if mouse leave from the navigation bar's boxs
  cursorTracker.forEach(tracker => tracker.classList.remove("color-change")); // change the color back to default by deleting class and ready for the replay
});

let headingText = document.querySelector('#box1 .content-box .headingText');   // heading of the first box
let headingText2 = document.querySelector('#box2 .content-box .headingText');  // heading of the second box
let headingText3 = document.querySelector('#box3 .content-box .headingText');  // heading of the third box
let headingText4 = document.querySelector('#box4 .content-box .headingText'); 
let headingText5 = document.querySelector('#box5 .content-box .headingText'); 

let mainText = document.querySelector('#box1 .content-box .mainText');         // content of the first box
let mainText2 = document.querySelector('#box2 .content-box .mainText');        // content of the second box
let mainText3 = document.querySelector('#box3 .content-box .mainText'); 
let mainText4 = document.querySelector('#box4 .content-box .mainText');  
let mainText5 = document.querySelector('#box5 .content-box .mainText');  

let valueText = document.querySelector('#box3 .content-box2 #value');        // content of the third box
let communityText = document.querySelector('#box3 .content-box2 #community');
let attitudeText = document.querySelector('#box3 .content-box2 #attitude');
let locationText = document.querySelector('#box3 .content-box2 #location');
let supportText = document.querySelector('#box3 .content-box2 #support');

let textbox = [];
textbox.push(document.querySelector('#box4 #textbox1'));
textbox.push(document.querySelector('#box4 #textbox2'));
textbox.push(document.querySelector('#box4 #textbox3'));
textbox.push(document.querySelector('#box4 #textbox4'));

let visible = []
visible.push("MindMap");
visible.push("TeamWork");
visible.push("Language");
visible.push("Personality");

textbox[0].innerHTML = "MindMap";
textbox[1].innerHTML = "TeamWork";
textbox[2].innerHTML = "Language";
textbox[3].innerHTML = "Personality";

let gridbox = [];
gridbox.push(document.querySelector('#box4 #gridbox1'));
gridbox.push(document.querySelector('#box4 #gridbox2'));
gridbox.push(document.querySelector('#box4 #gridbox3'));
gridbox.push(document.querySelector('#box4 #gridbox4'));

let imgbox = [];
imgbox.push(document.querySelector('#box4 #imgbox1'));
imgbox.push(document.querySelector('#box4 #imgbox2'));
imgbox.push(document.querySelector('#box4 #imgbox3'));
imgbox.push(document.querySelector('#box4 #imgbox4'));

imgbox[0].classList.add("rotate10");
imgbox[1].classList.add("rotate-10");
imgbox[2].classList.add("rotate10");
imgbox[3].classList.add("rotate-10");

function getContext (index) {
  textbox[index].innerHTML = invisible[index]; 
  textbox[index].style.fontSize = "30px"; 
  textbox[index].style.margin = "5%";
}

function getTitle (index) {
  textbox[index].innerHTML = visible[index]; 
  textbox[index].style.fontSize = "60px"; 
  textbox[index].style.alignItems = "center";
  textbox[index].style.justifyItems = "center";
}

imgbox.forEach((value, index) => {


  gridbox[index].addEventListener("click", ()=>{
    value.classList.remove("rotate10");
    value.classList.remove("rotate-10");
    getContext(index);
    textbox.forEach((val, idx) => {
      if(idx != index && idx % 2 == 0) {
        imgbox[idx].classList.add("rotate10");
        getTitle(idx);
      }
      else if(idx != index && idx % 2 != 0) {
        imgbox[idx].classList.add("rotate-10"); 
        getTitle(idx);
      }
    });

  });  

  gridbox[index].addEventListener(("mouseover"), () => {
    cursorTracker.forEach(tracker => tracker.classList.add("link-grow"));
  });

  gridbox[index].addEventListener(("mouseleave"), () => {
    cursorTracker.forEach(tracker => tracker.classList.remove("link-grow"));
  });

});

let invisible = [];

/* content of the page */
headingText.innerHTML = "Hello!";
mainText.innerHTML = "My name is Theo Tam<br>Welcome to my page. <br>Let me introduce myself to you!";

headingText2.innerHTML = "About Me";

headingText3.innerHTML = "Reasons for Applying next cohort";

headingText4.innerHTML = "Trait";

headingText5.innerHTML = "Contact";
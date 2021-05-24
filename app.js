/*==================== cursor ====================*/

let cursorTracker = Array.from(document.getElementsByClassName("cursor")); // cursor
window.addEventListener('mousemove', cursor); // track every mouse move
function cursor(info){
  cursorTracker.forEach(cursor => {     // detect and assign the correct position (X, Y) of cursor
    cursor.style.top = info.pageY + 'px';
    cursor.style.left = info.pageX + 'px';
  });
}

function addLinkGrow() {
  cursorTracker.forEach(tracker => tracker.classList.add("link-grow"));   // add effect on the cursor
}

function removeLinkGrow() {
  cursorTracker.forEach(tracker => tracker.classList.remove("link-grow"));   // delete effect on the cursor  
}

function addColorChange() {
  cursorTracker.forEach(tracker => tracker.classList.add("color-change"));    // change the color of the cursor so user can notice the cursor better in white background
}

function removeColorChange() {
  cursorTracker.forEach(tracker => tracker.classList.remove("color-change")); // change the color back to default by deleting class and ready for the replay
}

/*==================== Div ====================*/

let box1 = document.querySelector("#box1");             // box1
let box2 = document.querySelector("#box2");             // box2
let box3 = document.querySelector("#box3");             // box3
let box4 = document.querySelector("#box4");             // box4
let box5 = document.querySelector("#box5");             // box5

let scrollBar = document.querySelector(".scrollBar");   // scroll bar

let box1content = document.querySelector("#box1 .content-box");   // box content box
let box2content = document.querySelector("#box2 .content-box");   // box2 content box
let box3content = document.querySelector("#box3 .content-box");   // box3 content box
let box3content2 = document.querySelector("#box3 .content-box2");   // box3 content box2
let box4content = document.querySelector("#box4 .content-box");   // box4 content box
let box4content2 = document.querySelector("#box4 .content-box2");   // box4 content box2

let maxHeight = document.documentElement.offsetHeight;            // total height of the whole page


/*==================== FadeIn and ScrollBar ====================*/

function addFadeIn (val) {
  val.classList.add("fadeInAnimation");               // add fade in animation to the content
  val.style.opacity = 1;                              // set the content to be visible after the animation
}

function removeFadeIn (val) {
  val.classList.remove("fadeInAnimation");            // delete fade in animation function from the content and ready for the replay
  val.style.opacity = 0;                              // set the content to be invisible and ready for the replay
}

addFadeIn(box1content);
window.addEventListener("scroll", scroll);              // track every scroll
function scroll() {
  let scrollTracker = this.scrollY;                     // record the reading position of the page

  if(scrollTracker >= (box1.offsetHeight * 50 / 100) && scrollTracker <= box1.offsetHeight + box2.offsetHeight){  // if the position of first box is nearly the end, be ready for the animation of the next box
    addFadeIn(box2content);
    scrollBar.style.backgroundColor = "#03B5AA";        // change the color of the scrollBar to help user notice their current position
  }
  else if(scrollTracker >= (box2.offsetHeight * 50 / 100) && scrollTracker <= box1.offsetHeight + box2.offsetHeight + box3.offsetHeight){
    removeFadeIn(box2content);
    addFadeIn(box3content);
    addFadeIn(box3content2);
    scrollBar.style.backgroundColor = "#DFDFDF";        // change the color of the scrollBar to help user notice their current position
  }
  else if(scrollTracker >= (box3.offsetHeight * 50 / 100) && scrollTracker <= box1.offsetHeight + box2.offsetHeight + box3.offsetHeight + box4.offsetHeight){
    removeFadeIn(box3content);
    removeFadeIn(box3content2);
    scrollBar.style.backgroundColor = "#6247AA";        // change the color of the scrollBar to help user notice their current position
  }
  else {
    scrollBar.style.backgroundColor = "#0E34A0";        // change the color of the scrollBar to help user notice their current position
  }

  [-9,16,20,24,30,34,40,44,50,54,60,65,71].forEach((num) => {
    ((scrollTracker >= maxHeight * num / 100 && num % 2 == 0)? scrollBar.style.height = (num + 10) + "%" :(scrollTracker >= maxHeight * num / 100 && num % 2 != 0) ? scrollBar.style.height = (num+23) + "%" : null);
  }); // calculate the percentage of the position and compare to the current position
      // if current position >= the page position(percentage), set the scroll bar's length to the percentage of the page position
      // if its odd number return num+23 percentage (num + 23 is more noticable in the top and bottom of the page than normal percentage)
      // else return num+10 percentage
}

/*==================== navigation bar ====================*/

let barItem = Array.from(document.getElementsByClassName('bar-item'));  // navigation bar's buttons
barItem.forEach((item) => {                             // iterate every item
  let target = document.getElementById(item.id);        // using item.id(string) to find the object so event listener can be add
  target.addEventListener('mouseover', addLinkGrow);     // trigger when the mouse move over to the button
  target.addEventListener('mouseleave', removeLinkGrow);       // trigger when the mouse leave from the button

  target.addEventListener('click', () =>{          // trigger when the mouse leave from the button
    console.log(item.id);
    if(item.id === 'naviButton1'){ window.scrollTo(0,maxHeight);}                                         // scroll to the section
    if(item.id === 'naviButton2'){ window.scrollTo(0,box2.offsetHeight + box3.offsetHeight + box4.offsetHeight);}             // scroll to the section
    if(item.id === 'naviButton3'){ window.scrollTo(0,box2.offsetHeight + box3.offsetHeight);}             // scroll to the section
    if(item.id === 'naviButton4'){ window.scrollTo(0,box2.offsetHeight);}                                 // scroll to the section
  });
});

/*==================== Special pointer ====================*/

let barContainer = document.querySelector(".bar-container");  // navigation bar container
box2.addEventListener('mouseover', addColorChange);                         // track if mouse move over to the navigation bar's boxs
box2.addEventListener('mouseleave', removeColorChange);                     // track if mouse leave from the navigation bar's boxs
box1.addEventListener('mouseover', addColorChange);                         // track if mouse move over to the navigation bar's boxs
box1.addEventListener('mouseleave', removeColorChange);                     // track if mouse leave from the navigation bar's boxs

/*==================== Content & Image ====================*/

let headingText1 = document.querySelector('#box1 .content-box .headingText');  // heading of the first box
let headingText2 = document.querySelector('#box2 .content-box .headingText');  // heading of the second box
let headingText3 = document.querySelector('#box3 .content-box .headingText');  // heading of the third box
let headingText4 = document.querySelector('#box4 .content-box .headingText');  // heading of the fourth box
let headingText5 = document.querySelector('#box5 .content-box .headingText');  // heading of the fifth box

let mainText1 = document.querySelector('#box1 .content-box .mainText');        // content of the first box
let mainText2 = document.querySelector('#box2 .content-box .mainText');        // content of the second box
let mainText3 = document.querySelector('#box3 .content-box .mainText');        // content of the third box
let mainText4 = document.querySelector('#box4 .content-box .mainText');        // content of the fourth box  
let mainText5 = document.querySelector('#box5 .content-box .mainText');        // content of the fifth box 

let valueText = document.querySelector('#box3 .content-box2 #value');        
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

textbox[0].innerHTML = visible[0];
textbox[1].innerHTML = visible[1];
textbox[2].innerHTML = visible[2];
textbox[3].innerHTML = visible[3];

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

function getContext (index) {                           // set context for the textbox
  textbox[index].innerHTML = invisible[index]; 
  textbox[index].style.fontSize = "30px"; 
  textbox[index].style.margin = "5%";
}

function getTitle (index) {                             // set title for the textbox
  textbox[index].innerHTML = visible[index]; 
  textbox[index].style.fontSize = "60px"; 
  textbox[index].style.alignItems = "center";
  textbox[index].style.justifyItems = "center";
}

imgbox.forEach((value, index) => {
  gridbox[index].addEventListener("click", ()=>{        // trigger event if user clicked the gridbox
    value.classList.remove("rotate10");                 // remove the rotation if user is reading the context
    value.classList.remove("rotate-10");                // remove the rotation if user is reading the context
    getContext(index);                                  // set context for the current textbox
    textbox.forEach((val, idx) => {                     // reset the box to its original state if not reading
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
  gridbox[index].addEventListener("mouseover", addLinkGrow);                      // prompt user that the box can be clicked
  gridbox[index].addEventListener("mouseleave", removeLinkGrow);                  // return to its original state
});

let icon = [];
icon.push(document.querySelector('#box5 #githubButton'));                         // githubButton
icon.push(document.querySelector('#box5 #freecodecampButton'));                   // freecodecampButton
icon.push(document.querySelector('#box5 #codewarsButton'));                       // codewarsButton

icon.forEach((val, idx) => {
  val.addEventListener("mouseover", addLinkGrow);                                 // trigger event if cursor move over the icon
  val.addEventListener("mouseleave", removeLinkGrow);                             // trigger event if cursor leave the icon
});

let invisible = [];

let backToTop = document.querySelector("#top");                                   // Top button
backToTop.addEventListener("click", () =>{                                        // trigger event if user clicked the image
  window.scrollTo(0,0);                                                           // scroll to the top of the page
});

/*==================== Image Carousel ====================*/

let img = Array.from(document.getElementsByClassName("image"));
let imgDescription = document.querySelector("#imgDescription");
let imageset = document.querySelector(".imageCarousel");
let description = ['My Home Country', 'Famous Site in Hong Kong', 'The Unviersity I studied before', 'My Values', 'My Favourite City', 'My Dream Job', 'Way to achieve my dream', 'More detail 1', 'More detail 2', 'More detail 3'];
let currentImageIndex = 0;
imgDescription.innerHTML = description[currentImageIndex];

function imageCarousel () {
  img[currentImageIndex].classList.add("hidden");
  if(currentImageIndex >= img.length - 1){ currentImageIndex = -1; }
  img[++currentImageIndex].classList.remove("hidden");
  imgDescription.innerHTML = description[currentImageIndex];
  clearInterval(run);
  run = setInterval( imageCarousel, 5000);
}

imageset.addEventListener("mouseover", addLinkGrow);
imageset.addEventListener("mouseleave", removeLinkGrow);

let run = setInterval( imageCarousel, 5000);

img.forEach((val, idx) => {
  val.addEventListener("click", imageCarousel);

})



/*==================== Text ====================*/

headingText1.innerHTML = "Hello!";
mainText1.innerHTML = "My name is Theo Tam<br>Welcome to my page. <br>Let me introduce myself to you!";

headingText2.innerHTML = "About Me";
mainText2.innerHTML = "Hi! I am Theo. I am a HongKonger who is passionate on coding, have a good learning attitude, love exploring new things and accepting new challenges. <br><br>Last year, I was studying computer engineering in the Chinese University of Hong Kong. When I was living in the dorm, I have acquired communication skills during dorm activities. Besides, I embrace teamwork especially volunteering when people work together in helping people in need. " + 
"<br><br>Although I cherish the learning experience in the university, I failed to proceed with my study due to some family issues. However, I don't want to give up on chasing my dream as a coder. " +
"<br><br>Then, I got a chance for coming to UK with right to work. I thought it would be a great chance for me to step outside the comfort zone and have a greater stage in a fantastic city like London to realize my dream." +
"<br><br>I have joined the community a few weeks ago, although it is just a short period of time, the experience is impressive and beneficial on my studying. " + 
"As a member of the community, it would be a great pleasure if I could be involved in the coming cohort and I hope my abilities and passion would make contribution to the groupmates and achieve collective learning. ";

headingText3.innerHTML = "Reasons for Applying next cohort";
mainText3.innerHTML = "Here are the 5 reasons that I would like to apply for the next cohort.";
valueText.innerHTML = "I really appreciate that Founders and Coders as a community that not just focus on coding, but also an organization with social responsibility (Tech for Better) and tend to promote social equality (attention on sexuality, people of color on tech industry). Therefore, I would like to become part of the project to pursue these values";
communityText.innerHTML = "At first I found out that my code was untidy and clumsy when I was working on daily challenges, FAC mentors responded on my work. Instead of criticising or judging on that, they show appreciations on my work and encourage me to work better. I feel empowered and started to spend more time on improving my skills." + 
"<br><br>Daily challenge is a good way for learning coding, everyone could achieve the same goal with different approachs. Everyday when I have finished my part, I would also spend more time to take a look on other's attempt as well. It is a valuable opportunity to learn from others on coding. ";
attitudeText.innerHTML = "I am really glad that everybody shows their appreciation on each other’s work, it is encouraging and feeling not alone. " ;
locationText.innerHTML = "London is an energetic and international city. It would be amazing if I could get a chance to work here. I believe it would be extremely helpful in my future career with more opportunities to get in touch with people in need." ;
supportText.innerHTML = "Founders and Coders provides a great oppotunity for me to fulfill my dream for continuing my study and support me with employment, so that I could gain more confident in my future career path. Also, I can make some new friends from the community and integrate into the society.";

headingText4.innerHTML = "Trait";
invisible.push("My academic result was poor when I was studying in secondary school. When I discover my dream on computer, I taught myself using mind-map and find a way to proceed with my study.");
invisible.push("I was a school football team member in secondary school. Through practices and competitions, I learnt about how amazing communication, cooperation and teamwork can be.");
invisible.push("As I love different cultures and would like to explore more, I keep studying various languages, including English, Japanese, Mandarin and there would be more in the future.");
invisible.push("I uphold fairness and peace. Therefore, I always act as a facilitator in a group as I am a good listener and willing to combine different ideas.");

headingText5.innerHTML = "Profile";
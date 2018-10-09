
$(".owl-carousel").owlCarousel({
  items: 1,
  nav: true,
  dots: true,
  dotsEach: true,
  responsive: {
    760: {
      items: 2,
      nav: true
    },
    1240: {
      items: 4,
      nav: true
    },
  }
});

let tog = document.querySelector('#main-navigation');

let eventDetails = document.querySelector('.first-column');
let eventBox = eventDetails.firstElementChild.nextElementSibling.lastElementChild;
let aboutEvent = eventDetails.firstElementChild.nextElementSibling.nextElementSibling;
let aboutSpeakers = aboutEvent.nextElementSibling;
let aboutTopics = aboutSpeakers.nextElementSibling;
let socialShare = aboutTopics.nextElementSibling;

eventBox.addEventListener('click', (event) => {
  let eventLiContent = event.target.textContent;

  if(eventLiContent == 'Speakers'){
    let speakerLi = event.target;
    speakerLi.classList.add('active');
    aboutEvent.style.display = 'none';
    aboutTopics.style.display = 'none';
    socialShare.style.display = 'none';
    aboutSpeakers.style.display = 'block';

    for(let i = 0; i <= eventBox.children.length; i += 1) {
      let previousLi = speakerLi.previousElementSibling;
      if(previousLi.className == 'active'){
          previousLi.classList.remove('active');
      }
    }

  } else {
    let aboutLi = event.target;
    let previousLi = aboutLi.nextElementSibling;
    console.log(previousLi);
    aboutSpeakers.style.display = 'none';
    aboutEvent.style.display = 'block';
    aboutTopics.style.display = 'block';
    socialShare.style.display = 'flex';
    aboutLi.classList.add('active');
    previousLi.classList.remove('active');
  }
})



let owlPrev = document.querySelector('.owl-prev span');
owlPrev.style.color = 'transparent'

let owlNext = document.querySelector('.owl-next span');
owlNext.style.color = 'transparent'

let grid = document.querySelectorAll(".grid-container .grid");

for(let i = 0; i< grid.length; i++){
  grid[i].addEventListener('mouseover', () => {
    grid[i].classList.add("animated", "bounce")
  })

  grid[i].addEventListener('mouseout', () => {
    grid[i].classList.remove("animated", "bounce")
  })
}


let hamburgerIcon = document.querySelector('.hamburger-hide')
let navSmall = hamburgerIcon.parentElement.parentElement.nextElementSibling;

hamburgerIcon.addEventListener('click', (event) =>  {
    console.log(navSmall)
  if(navSmall.style.display == 'none'){
    navSmall.classList.add('animated', 'fadeInDown');
    navSmall.style.display = 'flex';
  } else {
    navSmall.style.display = 'none';
    console.log(event.target)
  }
})

let pagesLink = navSmall.firstElementChild.firstElementChild.nextElementSibling;
 let pageDropdown = pagesLink.parentElement.nextElementSibling;
pagesLink.addEventListener('click', (event) => {


 if(pageDropdown.style.display == 'flex') {
    eventlink.style.color = '#54585a';
    eventDropDown.style.display = 'none';
    pageDropdown.style.display = 'none';
    console.log("ASdsa");
 } else {
   pageDropdown.style.display = 'flex';
   console.log("osman");
 }

});

let eventlink = pageDropdown.lastElementChild;
let eventDropDown = eventlink.parentElement.parentElement.lastElementChild;

eventlink.addEventListener('click', (event) => {
  eventlink.style.color = '#00CB54';
  if(eventDropDown.style.display == 'flex') {
     eventDropDown.style.display = 'none';
     console.log("ASdsa");
  } else {
    eventDropDown.style.display = 'flex';
    console.log("osman");
  }

})

eventLink.style.color = 'red';



// Event Details Section

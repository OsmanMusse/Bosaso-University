
$(".owl-carousel").owlCarousel({
  items: 4,
  nav: true,
  dots: true,
  dotsEach: true,
});




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

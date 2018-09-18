
// Main Javacscript file

let userBox = document.querySelector('.user-account');
let cancelButton = document.querySelector('.cancel-icon');
let container = document.querySelector('.ajax-container');
let navContainer = document.querySelector('.nav-left');

document.querySelector('.user-box').addEventListener('mouseenter', (event) => {
  userBox.classList.remove( 'slideOutUp');
  userBox.style.display = "flex";
  userBox.classList.add('animated', 'slideInDown');
})

container.addEventListener('mouseenter', (event) => {
  // userBox.style.backgroundColor = "blue";
  userBox.classList.remove('slideInDown');
  userBox.classList.add( 'slideOutUp');
})

cancelButton.addEventListener('click', () => {
  userBox.classList.remove('slideInDown');
  userBox.classList.add( 'slideOutUp');
});




let navItems     = navContainer.parentElement.firstElementChild.nextElementSibling.nextElementSibling;
let searchBox    = navContainer.firstElementChild;
let searchIcon   = searchBox.firstElementChild;
let checkinput   = searchBox.firstElementChild.nextElementSibling;
let backIcon     = document.createElement('img');
let input        = document.createElement('input');

  navContainer.addEventListener('click', (event) => {

   if(event.target === searchBox || event.target === searchIcon ){
    if(searchBox.childElementCount === 1 || event.target.className === 'menu-icon'){
    console.log("ev")
    navItems.style.display = 'none';
    searchBox.style.backgroundColor = "white";
    // Creating new Input field to be put when find icon is clicked
    input.type = 'text';
    input.placeholder = 'Search for an item';
    input.style.marginLeft = '50px';
    searchBox.insertBefore(input, searchIcon);
    backIcon.className = "go-back";
    backIcon.src = "img/go-back.svg";
    searchBox.insertBefore(backIcon, input);
    searchIcon.style.display = 'none';
    searchBox.style.width = "570px";
  }
}
  });


  backIcon.addEventListener('click', (event) => {
    let childCount = searchBox.children;
    searchBox.removeChild(input);
    searchBox.removeChild(backIcon);
    searchBox.style.backgroundColor = '';
    searchBox.style.width = '';
    searchIcon.style.display = 'flex';
    navItems.style.display = '';
    input.value = '';
  });

  let colorBox = document.querySelector('.color-selection');
  let colorType = colorBox.lastElementChild;
  let gridContainer = document.querySelector('.grid-items');
  let gridItem = gridContainer.children;
  let p = gridContainer.firstElementChild;
  let span = document.querySelector('.items-viewed');
  let count = 0;
  let totalCount = 6;

span.innerHTML = `You've viewed 6 of 6 product`;

  colorType.addEventListener('click', (event) => {
    if(event.target.tagName === "IMG"){

      if(event.target.className === 'yellow'){
        count = 0;
        for(let i = 0; i < gridItem.length; i += 1){
          if(gridItem[i].className.includes('color-type-yellow')){
            gridItem[i].style.display = '';
            if(gridItem[i].style.display === '') {
              count += 1;
            }
          } else {
            gridItem[i].style.display = 'none';
            p.style.display = 'block';
            p.textContent = 'No yellow items were found';
            console.log(gridItem.childrene);
          }
          span.innerHTML = `You've viewed ${count} of ${totalCount} product`;
        }

      }

      if(event.target.className === 'red'){
         count = 0;
        for(let i = 0; i < gridItem.length; i += 1){
          if(gridItem[i].className.includes('color-type-red')){
            gridItem[i].style.display = '';
            if(gridItem[i].style.display === '') {
              count += 1;
            }
          } else{
            gridItem[i].style.display = 'none';
          }
          span.innerHTML = `You've viewed ${count} of ${totalCount} product`;
        }
    }

    if(event.target.className === 'blue'){
        count = 0;
      for(let i = 0; i < gridItem.length; i += 1){
        if(gridItem[i].className.includes('color-type-blue')){
          gridItem[i].style.display = '';
          if(gridItem[i].style.display === ''){
            count += 1;
          }
        } else {
          gridItem[i].style.display = 'none';
        }
        span.innerHTML = `You've viewed ${count} of ${totalCount} product`;
      }
    }



    if(event.target.className === 'purple'){
      for(let i = 0; i < gridItem.length; i += 1){
        count = 0;
        if(gridItem[i].className.includes('color-type-purple')){
          gridItem[i].style.display = '';
          if(gridItem[i].style.display === '') {
            count += 1;
          }
        } else {
          gridItem[i].style.display = 'none';
          p.style.display = 'block';
          p.textContent = 'No purple items were found';
        }

        span.innerHTML = `You've viewed ${count} of ${totalCount} product`;
      }
    }

    if(event.target.className === 'brown'){
      for(let i = 0; i < gridItem.length; i += 1){
        count = 0;
        if(gridItem[i].className.includes('color-type-brown')){
          gridItem[i].style.display = '';
        } else {
          gridItem[i].style.display = 'none';
          p.style.display = 'block';
          p.textContent = 'No brown items were found';
        }
      }
    }

    if(event.target.className === 'white'){
      for(let i = 0; i < gridItem.length; i += 1){
        count = 0;
        if(gridItem[i].className.includes('color-type-white')){
          gridItem[i].style.display = '';
        } else {
          gridItem[i].style.display = 'none';
          p.style.display = 'block';
          p.textContent = 'No white items were found';
        }
      }
    }

    if(event.target.className === 'green'){
      count = 0;
      for(let i = 0; i < gridItem.length; i += 1){
        if(gridItem[i].className.includes('color-type-green')){
          gridItem[i].style.display = '';
          if(gridItem[i].style.display === ''){
            count += 1;
          }
        } else {
          gridItem[i].style.display = 'none';
        }
        span.innerHTML = `You've viewed ${count} of ${totalCount} product`;
      }
    }



  }
});


// Click Event when sort button is clicked a pop up menu appears
let btnGray   = document.querySelector('.btn-lg-grey');
let caretDown = btnGray.firstElementChild.nextElementSibling;
let anchor    = document.createElement('a');
let caretUp   = document.createElement('img');
let popUpMenu = document.querySelector('.pop-menu');
let ul = popUpMenu.firstElementChild;
let li = ul.children;

caretDown.addEventListener('click', (event) => {
  popUpMenu.style.display = 'flex';
  btnGray.removeChild(caretDown);
  anchor.href = '#caret-up';
  caretUp.src = 'img/caret-up-icon.svg';
  caretUp.className = 'caret-up';
  anchor.appendChild(caretUp);
  btnGray.appendChild(anchor);
});

caretUp.addEventListener('click', (event) => {
  popUpMenu.style.display = 'none';
  btnGray.removeChild(anchor);
  btnGray.appendChild(caretDown);
});

// Make a tick appear when a specific list is selected
let tick = document.createElement('img');
tick.src = 'img/check-mark.svg';

li[0].appendChild(tick);

ul.addEventListener('click', (event) => {
  if(event.target.tagName === 'LI'){

   for(let i = 0; i < li.length; i += 1){
     if(li[i].className === 'active'){
       li[i].classList.remove('active');
     }
   }

    event.target.appendChild(tick);

    if(event.target.childElementCount === 1) {
      event.target.className = 'active';
    }


  }
});


// When item[products] is hovered at show two buttons

let btnDiscover = document.createElement('button');
let btnAddToCart = document.createElement('button');
let btnLoadMore = gridContainer.lastElementChild.previousElementSibling.nextElementSibling.parentElement.parentElement.nextElementSibling;

btnDiscover.className     = 'btn-md-grey';
btnDiscover.textContent   = 'Discover';
btnAddToCart.className    = 'btn-add-black';
btnAddToCart.textContent  = 'Add To Cart';



gridContainer.addEventListener('click', (event) => {
  // Check if the second last item is clicked
  if(event.target === gridContainer.lastElementChild.previousElementSibling){
    btnLoadMore.style.marginTop = '70px';
  }
  if(event.target.className.includes('grid-item')){

    for(let i = 0; i < gridItem.length; i++){
      if(event.target.firstElementChild.lastElementChild.childElementCount === 2) {
        gridItem[i].style.height = '485px';
      }
      if(gridItem[i].style.height === '578px'){
      if(event.target.firstElementChild.lastElementChild.childElementCount === 4) {
        gridItem[i].style.height = '485px';
        console.log('osman');
      }
      }


    } // Closing Loop

    let box = event.target; // Actual Grid-Item
    let containBox = box.firstElementChild.lastElementChild;
    containBox.appendChild(btnDiscover);
    containBox.appendChild(btnAddToCart);
    gridContainer.style.gridRowGap = '8.125em';
    box.style.height = '578px';
 }



});

let navIcon = document.querySelector('.menu-box');
navIcon.addEventListener('click', (event) => {

  let slideMenu = navIcon.nextElementSibling;
  slideMenu.style.display = 'flex';
  slideMenu.classList.remove('animated','fadeOutLeft', 'fast');
  slideMenu.classList.add('animated', 'fadeInLeft', 'fast');
  console.log(event.target);

});

  let arrowLeft = document.querySelector('.left-icon');

  arrowLeft.addEventListener('click', (event) => {

    let slideMenu = arrowLeft.parentElement.parentElement;
    slideMenu.classList.remove('fadeInLeft');
    slideMenu.classList.add('fadeOutLeft');

  })

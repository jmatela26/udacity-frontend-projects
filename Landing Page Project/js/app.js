/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

var myTopbutton = document.getElementById("topBtn");
var timer = null;

const navBarList = document.getElementById("navbar__list");
const links = ["Section 1", "Section 2", "Section 3", "Section 4"];

var findSection = document.querySelectorAll('section');

w = window.innerWidth;
h = window.innerHeight;
smallPort = 540;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

document.addEventListener("click", function (event) {
  let active = document.querySelector(".active");
  if (active) {
    active.classList.remove("active");
  }
  if (event.target.classList.contains("menu__link")) {
    event.target.classList.add("active");
  }
});

// When the user clicks on the button, hide and show the button
window.onscroll = function () { scrollTopFunction() };
function scrollTopFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myTopbutton.style.display = "block";
  } else {
    myTopbutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  document.body.scrollTo({
    top: 0,
    behavior: "smooth"
  })
  document.documentElement.scrollTop = 0;
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


// Build menu 
// build the nav
links.forEach((link, i) => {
  const li = document.createElement("li");
  const el = document.createElement("a");
  el.innerText = link;
  el.classList.add("menu__link");
  el.setAttribute("id", `menu_${i + 1}`);
  el.href = `#section${i + 1}`;

  navBarList.appendChild(li);
  li.appendChild(el);
});

// Set sections as active
// Add class 'active' to section when near top of viewport
var activeViewport = function (elem) {
  var distance = elem.getBoundingClientRect();
  if (elem.getBoundingClientRect().top >= -400 && elem.getBoundingClientRect().top <= 150) {
    return (
      distance.top >= 0 &&
      distance.left >= 0
    );
  } else  {
    return (
      distance.top >= 0 &&
      distance.left >= 0 &&
      distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
};

// document.addEventListener("keyup", function(event) {
//   if (KeyboardEvent.keyCode === 123) {
//       location.reload();
//   }
// });

window.addEventListener('scroll', function (event) {
  findSection.forEach(element => {
    if (activeViewport(element)) {
      element.classList.add("your-active-class");
    }
    else {
      element.classList.remove("your-active-class")
    }
  });
}, false);


// Scroll to section on link click
// Scroll to anchor ID using scrollTO event
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

//Hide fixed navigation bar while not scrolling (it should still be present on page load)
window.addEventListener('scroll', function () {
  if (timer !== null) {
    clearTimeout(timer);
    navBarList.classList.remove("navbar-scroll");
  }
  timer = setTimeout(function () {
    navBarList.classList.add("navbar-scroll");
  }, 5000);
}, false);

/**
 * End Main Functions
 * Begin Events
 *
*/
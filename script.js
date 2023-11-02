///The continue texting
new Typed(".multiple-text", {
    strings: ["Software Developer.", "Computer Science Student."],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });

new Typed("#hello-world", {
    strings: ["print('Hello World!')", "Hello World!"],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
    loop: false
  });
  new Typed("#skills-text", {
    strings: [".Skills();", ".Abilities();", ".Talents();", ".Proficiencies();"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });
  function loadAbout(){
    new Typed("#join-me", {
      strings: ["print('My journey')", "Join me on my journey as I navigate the intricate world of computer science and celebrate the tapestry of interests that shape my identity."],
      typeSpeed: 35,
      backSpeed: 60,
      backDelay: 1000,
      loop: false
  });
  }

  new Typed(".title_project", {
    strings: [".Projects();", ".Work();", ".Portfolio();"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });
// Get all navigation links
const navLinks = document.querySelectorAll('.navbar a');

// Add click event listeners to each navigation link
navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();

        // Get the target section's ID from the href attribute
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            // Scroll to the target section smoothly
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });

            // Remove 'active' class from all navigation links
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });

            // Add 'active' class to the clicked navigation link
            link.classList.add('active');
        }
    });
});
///scrolling to the top when refreshing
window.addEventListener('beforeunload', () => {
  // Scroll to the top of the page
  window.scrollTo(0, 0);
});

///changing the navbar section active when scrolling

function getVisibleArea(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
  const visibleWidth = Math.min(rect.right, windowWidth) - Math.max(rect.left, 0);
  return visibleHeight * visibleWidth;
}
let functionCalled = false;
const sections = document.querySelectorAll('section');
const navA = document.querySelectorAll('.navbar a');

function updateActiveSection(){
  let maxVisibleArea = 0;
  let activeSection = null;

  sections.forEach(section => {
      const visibleArea = getVisibleArea(section);
      if(visibleArea > maxVisibleArea){
        maxVisibleArea = visibleArea;
        activeSection = section.getAttribute('id');
      }
  });
  navA.forEach((a) =>{
    a.classList.remove('active');
  });
  const activeLink = document.querySelector(`.navbar a[href="#${activeSection}"]`);
  if (activeLink){
     //console.log(activeLink);
     activeLink.classList.add('active');
    if(activeLink.getAttribute('href') == '#about' && functionCalled == false){
      setTimeout(function() {
        loadAbout();
      }, 2300);
    functionCalled = true;
  }
  }
}

window.onload = () => {
  window.addEventListener("scroll", updateActiveSection);
  window.addEventListener("resize", updateActiveSection);
}

///ABOUT SECTION!!!!
//"print('My personality')", "Join me on my journey as I navigate the intricate world of computer science and celebrate the tapestry of interests that shape my identity."

const aboutSection = document.getElementById("about");
const container = aboutSection.querySelector(".container1");

container.style.animation = "none";
container.style.opacity = '0';
///trigger animation about section
function startAnimation() {
        void container.offsetWidth; // Trigger a reflow, allowing the animation to restart
        container.style.animation = "slideTop 3.5s ease forwards"; // Start the animation
    
}

function checkAnimationTrigger() {
    const rect = aboutSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        startAnimation();
    }
}

window.addEventListener("scroll", checkAnimationTrigger);
window.addEventListener("resize", checkAnimationTrigger);

checkAnimationTrigger();

///SKILLS Section

const skillsSection = document.getElementById("skills");
const skillImages = document.querySelectorAll(".skills-box img");
const skillHead = document.querySelectorAll(".container2 h1");
const skillPhar = document.querySelectorAll(".skill-description a");

// Initialize a flag to track if animations have been triggered
let animatedSkill = false;

function startSkillsAnimation() {

  skillImages.forEach((image, index) => {
    image.style.animation = "slideTop 1s ease forwards";
    image.style.animationDelay = `calc(0.3s * ${index + 1})`; // Set animation delay based on index
  });
  skillHead.forEach(title => {
    title.style.animation = "slideTop 3s ease forwards";
  });
  skillPhar.forEach(phar => {
    phar.style.animation = "slideBottom 3s ease forwards";
  });
}

function startHoverAnimation() {
  skillImages.forEach(image => {
    image.style.animation = "hoverAnimation 5s ease-in-out infinite";
  });
}

skillImages.forEach(image => {
  image.style.animation = "none";
  image.style.animationDelay = "none";
  image.style.opacity = "0";
});
skillHead.forEach(title => {
  title.style.animation = "none";
  title.style.opacity = "0";
});
skillPhar.forEach(phar =>{
  phar.style.animation = "none";
  phar.style.opacity = "0";
});

// Trigger the animation when the skills section is in view
function checkSkillsSection() {
  const skillsSectionRect = skillsSection.getBoundingClientRect();
  if (skillsSectionRect.top < window.innerHeight && skillsSectionRect.bottom >= 0) {
    if (!animatedSkill) {
      startSkillsAnimation();
      setTimeout(() => {
        startHoverAnimation();
      }, 2700);
      animatedSkill = true; // Set the flag to true
      
    }
  }
}

// Add a scroll event listener to check when the skills section is in view
window.addEventListener("scroll", checkSkillsSection);

///PORTFOLIO SECTION

let headTrigger = false;
const projectHead = document.querySelectorAll(".portfolio h1");
const portfolioSection = document.querySelector(".portfolio");
let animationRunning = false;

function animatePortfolio() {
  if (!animationRunning) {
    projectHead.forEach(title => {
      title.style.animation = "slideTop 3s ease forwards";
    });
    animationRunning = true;
  }
}

projectHead.forEach(title => {
      title.style.animation = "none";
      title.style.opacity = "0";
    });

function checkAnimationTriggerPortfolio() {
  const rect = portfolioSection.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom >= 0) {
    if (!headTrigger) {
      animatePortfolio();
      headTrigger = true;
    }
  }
}

window.addEventListener("scroll", checkAnimationTriggerPortfolio);

let Project1Trigger = false;
const project1Head = document.querySelectorAll(".project1 h2");
const project1Photo = document.querySelectorAll(".project1 img");
const project1Text = document.querySelectorAll(".project1 p");
const project1As = document.querySelectorAll(".project1 a");
const project1Section = document.querySelector(".project1");
animationRunning = false;
let animationTriggered = false;

let x = false;

function animateProject1(){
  if(!animationRunning){
    animationRunning = true;
    project1Head.forEach(title =>{
      title.style.animation = "slideTop 3s ease forwards";
    });
    project1Photo.forEach(image =>{
      image.style.animation = "slideRight 3s ease forwards";
    });
    project1Text.forEach(phar =>{
      phar.style.animation = "slideLeft 3s ease forwards";
    });
    project1As.forEach(as =>{
      as.style.animation = "slideBottom 3s ease forwards";
    });
  }
}

project1Head.forEach(title =>{
  title.style.animation = "none";
  title.style.opacity = "0";
});
project1Photo.forEach(image =>{
  image.style.opacity = "0";
  image.style.animation = "none";
});
project1Text.forEach(phar =>{
  phar.style.opacity = "0";
  phar.style.animation = "none";
});
project1As.forEach(as =>{
  as.style.opacity = "0";
  as.style.animation = "none";
});

function checkAnimationTriggerProject1(){
  const rect = project1Section.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom >= 0) {
    if (!animationTriggered && !x){
      animationTriggered = true;
      x = true;
      animateProject1();
    }
  } else {
    animationTriggered = false;
    // Reset animationRunning when the section is out of view
    animationRunning = false;
  } 
}

window.addEventListener('scroll', checkAnimationTriggerProject1);

let Project2Trigger = false;
const project2Head = document.querySelectorAll(".project2 h2");
const project2Photo = document.querySelectorAll(".project2 img");
const project2Text = document.querySelectorAll(".project2 p");
const project2As = document.querySelectorAll(".project2 a");
const project2Section = document.querySelector(".project2");
animationRunning = false;
animationTriggered = false;

x = false;

function animateProject2(){
  if(!animationRunning){
    animationRunning = true;
    project2Head.forEach(title =>{
      title.style.animation = "slideTop 3s ease forwards";
    });
    project2Photo.forEach(image =>{
      image.style.animation = "slideRight 3s ease forwards";
    });
    project2Text.forEach(phar =>{
      phar.style.animation = "slideLeft 3s ease forwards";
    });
    project2As.forEach(as =>{
      as.style.animation = "slideBottom 3s ease forwards";
    });
  }
}

function checkAnimationTriggerProject2(){
  const rect = project2Section.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom >= 0) {
    if (!animationTriggered){
      animationTriggered = true;
      animateProject2();
      window.removeEventListener('scroll', checkAnimationTriggerProject2);
    }
  } else {
    animationTriggered = false;
    // Reset animationRunning when the section is out of view
    animationRunning = false;
    project2Head.forEach(title =>{
      title.style.animation = "none";
      title.style.opacity = "0";
    });
    project2Photo.forEach(image =>{
      image.style.opacity = "0";
      image.style.animation = "none";
    });
    project2Text.forEach(phar =>{
      phar.style.opacity = "0";
      phar.style.animation = "none";
    });
    project2As.forEach(as =>{
      as.style.opacity = "0";
      as.style.animation = "none";
    });
  } 
}

window.addEventListener('scroll', checkAnimationTriggerProject2);

let Project3Trigger = false;
const project3Head = document.querySelectorAll(".project3 h2");
const project3Photo = document.querySelectorAll(".project3 img");
const project3Text = document.querySelectorAll(".project3 p");
const project3As = document.querySelectorAll(".project3 a");
const project3Section = document.querySelector(".project3");
animationRunning = false;
animationTriggered = false;

function animateProject3(){
  if(!animationRunning){
    animationRunning = true;
    project3Head.forEach(title =>{
      title.style.animation = "slideTop 3s ease forwards";
    });
    project3Photo.forEach(image =>{
      image.style.animation = "slideRight 3s ease forwards";
    });
    project3Text.forEach(phar =>{
      phar.style.animation = "slideLeft 3s ease forwards";
    });
    project3As.forEach(as =>{
      as.style.animation = "slideBottom 3s ease forwards";
    });
  }
}

function checkAnimationTriggerProject3(){
  const rect = project3Section.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom >= 0) {
    if (!animationTriggered){
      animationTriggered = true;
      animateProject3();
      window.removeEventListener('scroll', checkAnimationTriggerProject3);
    }
  } else {
    animationTriggered = false;
    // Reset animationRunning when the section is out of view
    animationRunning = false;
    project3Head.forEach(title =>{
      title.style.animation = "none";
      title.style.opacity = "0";
    });
    project3Photo.forEach(image =>{
      image.style.opacity = "0";
      image.style.animation = "none";
    });
    project3Text.forEach(phar =>{
      phar.style.opacity = "0";
      phar.style.animation = "none";
    });
    project3As.forEach(as =>{
      as.style.opacity = "0";
      as.style.animation = "none";
    });
  } 
}

window.addEventListener('scroll', checkAnimationTriggerProject3);


let Project4Trigger = false;
const project4Head = document.querySelectorAll(".project4 h2");
const project4Photo = document.querySelectorAll(".project4 img");
const project4Text = document.querySelectorAll(".project4 p");
const project4As = document.querySelectorAll(".project4 a");
const project4Section = document.querySelector(".project4");
animationRunning = false;
animationTriggered = false;

function animateProject4(){
  if(!animationRunning){
    animationRunning = true;
    project4Head.forEach(title =>{
      title.style.animation = "slideTop 3s ease forwards";
    });
    project4Photo.forEach(image =>{
      image.style.animation = "slideRight 3s ease forwards";
    });
    project4Text.forEach(phar =>{
      phar.style.animation = "slideLeft 3s ease forwards";
    });
    project4As.forEach(as =>{
      as.style.animation = "slideBottom 3s ease forwards";
    });
  }
}

function checkAnimationTriggerProject4(){
  const rect = project4Section.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom >= 0) {
    if (!animationTriggered){
      animationTriggered = true;
      animateProject4();
      window.removeEventListener('scroll', checkAnimationTriggerProject3);
    }
  } else {
    animationTriggered = false;
    // Reset animationRunning when the section is out of view
    animationRunning = false;
    project4Head.forEach(title =>{
      title.style.animation = "none";
      title.style.opacity = "0";
    });
    project4Photo.forEach(image =>{
      image.style.opacity = "0";
      image.style.animation = "none";
    });
    project4Text.forEach(phar =>{
      phar.style.opacity = "0";
      phar.style.animation = "none";
    });
    project4As.forEach(as =>{
      as.style.opacity = "0";
      as.style.animation = "none";
    });
  } 
}

window.addEventListener('scroll', checkAnimationTriggerProject4);


///CONTACT SECTION
let trigger = false;

function animateContactSection() {
  const contactImages = document.querySelectorAll(".popup-image");
  const contactForms = document.querySelectorAll(".contact-block");
  const contactSection = document.querySelector(".contact");
  const contactAs = document.querySelectorAll(".contact a");
  const rect = contactSection.getBoundingClientRect();

  if (rect.top < window.innerHeight && rect.bottom >= 0 && !trigger) {
    for (const contactImage of contactImages) {
      contactImage.style.animation = "slideTop 3s ease forwards";
      contactImage.style.opacity = "1";
    }
    for (const contactForm of contactForms) {
      contactForm.style.animation = "slideRight 3s ease forwards";
      contactForm.style.opacity = "1";
    }
    for(const contactA of contactAs){
      contactA.style.animation = "slideLeft 3s ease forwards";
    }
    trigger = true;
    
  }
}

window.addEventListener("scroll", animateContactSection);



///HOME LOGO

function scrollToTop(){
  window.scrollTo({
    top: 0, 
    behavior: 'smooth'
  });
}

const logoButton = document.getElementById('logo');

logoButton.addEventListener('click', scrollToTop);
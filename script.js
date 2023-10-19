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
     console.log(activeLink);
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

///trigger animation about section
function startAnimation() {
        void container.offsetWidth; // Trigger a reflow, allowing the animation to restart
        container.style.animation = "slideTop 2s ease forwards"; // Start the animation
    
}

function checkAnimationTrigger() {
    const rect = aboutSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        startAnimation();
    }
    else{
      container.style.animation = "none";
    }
}

window.addEventListener("scroll", checkAnimationTrigger);
window.addEventListener("resize", checkAnimationTrigger);

checkAnimationTrigger();

///SKILLS Section

const skillsSection = document.getElementById("skills");
const skillImages = document.querySelectorAll(".skills-box img"); // Select all skill images
const skillText = document.getElementById("skills-text");

function startSkillsAnimation() {
  skillImages.forEach((image, index) => {
    image.style.animation = "slideTop 1s ease forwards";
    image.style.animationDelay = `calc(0.2s * ${index + 1})`; // Set animation delay based on index
  });
}

function startHoverAnimation(){
  skillImages.forEach(image => {
    image.style.animation = "hoverAnimation 5s ease-in-out infinite";
  });
}

// Trigger the animation when the skills section is in view
function checkSkillsSection() {
  const skillsSectionRect = skillsSection.getBoundingClientRect();
  if (skillsSectionRect.top < window.innerHeight && skillsSectionRect.bottom >= 0) {
    startSkillsAnimation();
    setTimeout(() => {
      startHoverAnimation();
    }, 2500);
    ///remove the scroll event listener
    window.removeEventListener("scroll", checkSkillsSection);
  }
  else{
    skillImages.forEach(image =>{
      image.style.animation = "none"
      image.style.animationDelay = "none";
      image.style.opacity = "0";
    });
  }
}

// Add a scroll event listener to check when the skills section is in view
window.addEventListener("scroll", checkSkillsSection);


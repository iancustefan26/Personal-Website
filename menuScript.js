menu = document.getElementById('menu');
let isNav = false;
const nvLinks = document.querySelectorAll('.navbar a');

menu.addEventListener('click', function(){
  const header = document.getElementById('header');
  if(!isNav)
    nvLinks.forEach(link =>{
      link.style.display = 'block';
      header.style.backgroundColor = 'rgba(32, 77, 75, 0.9)';
      header.style.backdropFilter = 'blur(4px)';
      header.style.border = "2px solid whitesmoke";
      header.style.animation = "slideBottom 2s ease forwards";
      isNav = true; 
    })
    else{
      nvLinks.forEach(link =>{
        link.style.display = 'none';
        header.style.backgroundColor = 'transparent';
        header.style.backdropFilter = 'none';
        header.style.border = 'none';
        header.style.animation = 'none';
        isNav = false;
      })
    }
})

menu.addEventListener('resize', function(){
  if(window.innerWidth >= 800)
    nvLinks.forEach(link =>{
      link.style.display = 'flex';
  });
})

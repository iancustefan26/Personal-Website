menu = document.getElementById('menu');
let isNav = false;
const nvLinks = document.querySelectorAll('.navbar a');

menu.addEventListener('click', function(){
  const header = document.getElementById('header');
  if(!isNav)
    nvLinks.forEach(link =>{
      link.style.display = 'block';
      header.style.backgroundColor = 'rgba(2, 2, 77, 0.78)';
      header.style.backdropFilter = 'blur(8px)';
      isNav = true; 
    })
    else{
      nvLinks.forEach(link =>{
        link.style.display = 'none';
        header.style.backgroundColor = 'transparent';
        header.style.backdropFilter = 'none';
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

let toggleBtn = document.querySelector('.m_toggle_btn');
let menu = document.querySelector('.header-nav');
let icons = document.querySelector('.header_icon');


toggleBtn.addEventListener('click', () =>{
  menu.classList.toggle('active');  
  icons.classList.toggle('active');
});


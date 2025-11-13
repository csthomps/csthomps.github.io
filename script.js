// Small UI helpers: nav toggle and dynamic year
document.addEventListener('DOMContentLoaded', function(){
  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();

  const navToggle = document.getElementById('nav-toggle');
  const navList = document.getElementById('nav-list');
  if(navToggle && navList){
    navToggle.addEventListener('click', function(){
      navList.classList.toggle('show');
    });
    // close menu when clicking a nav link (mobile)
    navList.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>navList.classList.remove('show')));
  }
});

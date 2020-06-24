
(function() {

  const menuOpen = document.querySelector('.sidebar__hamburger'),
        menuClose = document.querySelector('.sidebar__close'),
        sidebar = document.querySelector('.sidebar');

  menuOpen.addEventListener('click', function () {
    sidebar.classList.add('sidebar--opened');
  });

  menuClose.addEventListener('click', function () {
    sidebar.classList.remove('sidebar--opened');
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".sidebar")) {
      sidebar.classList.remove("sidebar--opened");
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {	
      if (sidebar.classList.contains("sidebar--opened")) { 
        evt.preventDefault();	
        sidebar.classList.remove("sidebar--opened");
      }
    }
  });

})();

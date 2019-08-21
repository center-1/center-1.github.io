var main_burger = document.querySelector(".main-burger")
  , popup_menu = document.querySelector(".popup-menu")
  , close = document.querySelector("main");

main_burger.addEventListener("click", function(e) {
    e.preventDefault(),
    popup_menu.classList.add("modal-show"),
    feedback_name.focus()
}),

window.addEventListener("keydown", function(e) {
    27 === e.keyCode && popup_menu.classList.contains("modal-show") && (e.preventDefault(),
    popup_menu.classList.remove("modal-show"))
}),

close.addEventListener("click", function(e) {
    e.preventDefault(),
    popup_menu.classList.remove("modal-show")
});

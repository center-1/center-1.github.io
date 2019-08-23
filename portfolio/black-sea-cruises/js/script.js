var main_burger = document.querySelector(".main-burger")
  , popup_menu = document.querySelector(".popup-menu")
  , close = document.querySelector("main")
  , personal_area = document.querySelector(".personal-area")
  , personal_area_list = document.querySelector(".personal-area-list")
  , currency = document.querySelector(".currency")
  , currency_list = document.querySelector(".currency-list")
  , language = document.querySelector(".language")
  , language_list = document.querySelector(".language-list")
  , button_price = document.querySelector(".button-price")
  , price_item_last = document.querySelector(".price-item-last");

main_burger.addEventListener("click", function(e) {
    e.preventDefault(),
    popup_menu.classList.add("modal-show")
}),
personal_area.addEventListener("click", function(e) {
    e.preventDefault(),
    personal_area_list.classList.add("modal-show")
}),
currency.addEventListener("click", function(e) {
    e.preventDefault(),
    currency_list.classList.add("modal-show")
}),
language.addEventListener("click", function(e) {
    e.preventDefault(),
    language_list.classList.add("modal-show")
}),
button_price.addEventListener("click", function(e) {
    e.preventDefault(),
    price_item_last.classList.add("modal-show")
}),

window.addEventListener("keydown", function(e) {
    27 === e.keyCode && popup_menu.classList.contains("modal-show") && (e.preventDefault(),
    popup_menu.classList.remove("modal-show")),
    personal_area_list.classList.remove("modal-show"),
    currency_list.classList.remove("modal-show"),
    language_list.classList.remove("modal-show")
}),

close.addEventListener("click", function(e) {
    e.preventDefault(),
    popup_menu.classList.remove("modal-show"),
    personal_area_list.classList.remove("modal-show"),
    currency_list.classList.remove("modal-show"),
    language_list.classList.remove("modal-show")
});

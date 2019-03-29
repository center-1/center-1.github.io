var contacts_button = document.querySelector(".contacts-button");
var modal_feedback = document.querySelector(".modal-feedback");
var feedback_name = modal_feedback.querySelector("[name=name]");
var close = document.querySelector(".map-close");
contacts_button.addEventListener("click", function (evt) {
	evt.preventDefault();
	modal_feedback.classList.add("box-show");
	feedback_name.focus();
});
close.addEventListener("click", function (evt) {
	evt.preventDefault();
	modal_feedback.classList.remove("box-show");
});


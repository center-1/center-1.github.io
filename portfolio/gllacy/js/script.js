var contacts_button = document.querySelector(".contacts-button");
var modal_feedback = document.querySelector(".modal-feedback");
var feedback_name = modal_feedback.querySelector("[name=name]");
var form = modal_feedback.querySelector("form"); 
var close = document.querySelector(".map-close");
contacts_button.addEventListener("click", function (evt) {
	evt.preventDefault();
	modal_feedback.classList.add("modal-show");
	feedback_name.focus();
});
close.addEventListener("click", function (evt) {
	evt.preventDefault();
	modal_feedback.classList.remove("modal-show");
});
window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {	
		if (modal_feedback.classList.contains("modal-show")) { 
			evt.preventDefault();	
			modal_feedback.classList.remove("modal-show");
		}
	}
});


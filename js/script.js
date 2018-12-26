var link = document.querySelector(".contacts-button");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");
var user = popup.querySelector(".user");
var sent = popup.querySelector(".feedback-button");
var letter = popup.querySelector(".letter");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    user.focus();
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
    letter.classList.remove("letter-error");

});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        }
    }
});

sent.addEventListener("click", function (evt) {
    if (!user.value || (user.checkValidity() == false)) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    }
});

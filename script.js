var dialog = document.querySelector("dialog");
var showButton = document.querySelector("dialog button")
var closeButton = document.querySelector("dialog button");

showButton.addEventListener('click', () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});

console.log(showButton);
var dialog = document.querySelector("dialog");
var showButton = document.querySelector(".share-button");
var closeButton = document.querySelector(".pop-up-button");

showButton.addEventListener('click', () => {
    dialog.showModal();
});

closeButton.addEventListener('click', () => {
    dialog.close();
});

console.log(showButton);

var modal = document.getElementById("modal");

var btn = document.getElementById("btn_open_modal");

var span = document.getElementsByClassName("close")[0];
var modalText = document.getElementById("in_text");

var modalData = [
  "Your Financial Status Is Our Goal",
  "Few Reasons Why People Choosing Us!",
  "25 Years Of Experience In Financial Support",
];

function openModal(type) {
  modal.style.display = "block";
  modalText.innerText = modalData[type];
}
function closeModal() {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

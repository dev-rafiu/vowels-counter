const form = document.querySelector(".form");
const inputField = document.querySelector("[data-input]");
const checkBtn = document.querySelector("[data-btn-check]");
const message = document.querySelector("[data-message]");
let vowelsCount = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (inputField.value.match(/[aieou]/gi)) {
    vowelsCount += inputField.value.match(/[aieou]/gi).length;
  }

  if (inputField.value == "") {
    message.innerText = "please enter text";
    message.classList.add("error");
    setTimeout(() => {
      message.classList.remove("error");
      message.innerText = "";
    }, 1000);
  } else {
    message.innerText = `Text has ${vowelsCount} vowels`;
    message.classList.add("success");
    vowelsCount = 0;
    setTimeout(() => {
      message.classList.remove("success");
      message.innerText = "";
    }, 1000);
  }
  setToDefault();
});
function setToDefault() {
  inputField.value = "";
}

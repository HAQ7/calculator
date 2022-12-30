const showResult = document.querySelector(".user-inputx");
const userInput = document.querySelector(".user-input");
const buttons = document.querySelectorAll("button");
let toBeCal = "";

const display = (value) => {
  userInput.value = userInput.value + value;
  if (value === "^") {
    value = "**";
  } else if (value === "x") {
    value = "*";
  }
  addForCalc(value);
};

const addForCalc = (value) => {
  toBeCal = toBeCal + value;
};

const ac = () => {
  userInput.value = "";
  toBeCal = "";
};

const calculate = () => {
  showResult.style.opacity = "0";

  const result = eval(toBeCal);
  showResult.value = result;
  userInput.value = "";
  toBeCal = "";

  resultAnimation();
};

const resultAnimation = () => {
  showResult.classList.remove("textPop");
  void showResult.offsetWidth;
  showResult.classList.add("textPop");
  void showResult.offsetWidth;
  showResult.style.opacity = "1";
};

// adds an event for every button and makes them do a click animation
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    clickAnimation(button);
    if (button.id === "d") {
      ac();
    } else if (button.id === "eq") {
      calculate();
    } else {
      display(button.id);
    }
  });
});

const clickAnimation = (button) => {
   button.classList.remove("button-click");
   void button.offsetWidth;
   button.classList.add("button-click");
}

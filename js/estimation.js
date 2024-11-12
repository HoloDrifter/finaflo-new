const calculateBtn = document.querySelector(".calculate-btn");
const inputs = document.querySelectorAll(".left_content .box .input");

let amount = 0;

inputs.forEach((inpt) => {
  inpt.addEventListener("click", () => {
    inpt.classList.toggle("active");
    inpt.querySelector(".input-sub").classList.toggle("hidden");
  });
});

const options = document.querySelectorAll(".input-sub li");
const inputH3 = document.querySelectorAll(".input h3");

function amountAdjustment() {
  for (inpt of inputH3) {
    if (inpt.textContent == "Oui") {
      if (inpt.dataset.estimate == 1) {
        amount = 150;
      } else if (inpt.dataset.estimate == 2) {
        amount = 150;
      } else if (inpt.dataset.estimate == 3) {
        amount = 150;
      } else if (inpt.dataset.estimate == 4) {
        amount = 150;
      } else if (inpt.dataset.estimate == 5) {
        if (amount == 150) {
          amount = 225;
        } else {
          amount = amount / 2;
          amount += 75;
        }
      }
    } else {
      if (inpt.dataset.estimate == 1) {
        amount = 0;
      } else if (inpt.dataset.estimate == 2) {
        amount = 0;
      } else if (inpt.dataset.estimate == 3) {
        amount = 0;
      } else if (inpt.dataset.estimate == 4) {
        amount = amount / 2;
      }
    }
  }
}

options.forEach((li) => {
  li.addEventListener("click", () => {
    const value = li.textContent;
    const liParent =
      li.parentElement.parentElement.parentElement.querySelector("h3");
    liParent.textContent = value;
  });
});
const estimateLoader = document.querySelector("#estimate_loader");
const successfulScreen = document.querySelector(".succesful-screen");
const failedScreen = document.querySelector(".failed-screen");

const loader = (screen) => {
  setTimeout(() => {
    estimateLoader.style.display = "none";
    screen.style.display = "flex";
  }, 1000);
  estimateLoader.style.display = "flex";
};

calculateBtn.addEventListener("click", () => {
  amountAdjustment();
  if (
    inputH3[0].textContent == "Oui" &&
    inputH3[1].textContent == "Oui" &&
    inputH3[2].textContent == "Oui"
  ) {
    console.log("yo");
    successfulScreen.querySelector("span").textContent = `${amount} €`;
    loader(successfulScreen);
  } else {
    console.log(estimateLoader);
    loader(failedScreen);
  }
});



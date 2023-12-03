let wrapper = document.querySelector(".wrapper-box");
let activeBoxes = document.querySelectorAll(".box");
let activeLabels = document.querySelectorAll(".activeCircle .circle");
let nextBtn = document.querySelector("#nextBtn");
let preBtn = document.querySelector("#preBtn");

let indexNo = 0;

nextBtn.onclick = () => {
  indexNo++;
  changeBox();
};

preBtn.onclick = () => {
  indexNo--;
  changeBox();
};

let changeBox = () => {
  if (indexNo > activeBoxes.length - 1) {
    indexNo = 0;
  } else if (indexNo < 0) {
    indexNo = activeBoxes.length - 1;
  }

  for (let i = 0; i < activeBoxes.length; i++) {
    if (i === indexNo) {
      activeBoxes[i].classList.add("active");
      activeLabels[i].classList.add("circle");

      if (window.innerWidth >= 492) {
        wrapper.style.transform = `translateX(${indexNo * -250}px)`;
      }
    } else {
      activeBoxes[i].classList.remove("active");
      activeLabels[i].classList.remove("circle");
    }
  }
};

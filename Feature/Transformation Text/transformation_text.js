const intro1 = document.getElementById("intro1");
const intro2 = document.getElementById("intro2");
const intro3 = document.getElementById("intro3");
const intro4 = document.getElementById("intro4");
const intro5 = document.getElementById("intro5");
const intro6 = document.getElementById("intro6");
const intro7 = document.getElementById("intro7");
const intro8 = document.getElementById("intro8");

const container_intro = [
  intro1,
  intro2,
  intro3,
  intro4,
  intro5,
  intro6,
  intro7,
  intro8,
];

function transformation() {
  setTimeout(() => {
    container_intro[0].style.display = "block";
  }, 0);

  let indexIntro = 0;

  setInterval(() => {
    indexIntro++;
    if (indexIntro > 7) {
      container_intro[7].style.display = "none";
      indexIntro = 0;
    }
    // console.log(container_intro[indexIntro]);
    if (indexIntro > 0) {
      console.log("hi");
      container_intro[indexIntro - 1].style.display = "none";
    }
    container_intro[indexIntro].style.display = "block";
    // console.log((container_intro[indexIntro - 1].style.display));
  }, 2000);
}

export default transformation;

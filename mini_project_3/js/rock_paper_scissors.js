const selectionArray = [
  "../photo/가위.png",
  "../photo/바위.png",
  "../photo/보.png",
];

///////////////////이미지//////////////////////////////////

let ArrayIndex = 0;
let selection__img = document.querySelector(".selection__img");

function changeImg() {
  selection__img.src = selectionArray[ArrayIndex];
  ArrayIndex++;

  if (ArrayIndex == 3) {
    ArrayIndex = 0;
  }
}

changeImg();
const intervalId = setInterval(changeImg, 500);

/////////////////////선택////////////////////////////////

let userWin = 0;
let pcWin = 0;
const modal = document.querySelector(".modal");

const scissors = document.querySelector(".scissors");
scissors.addEventListener("click", () => {
  const scissors = 0;

  clearInterval(intervalId);
  console.log(ArrayIndex - 1 + "나옴");

  if (ArrayIndex - 1 == rock) {
    console.log("비김");
  } else if (ArrayIndex - 1 == 2) {
    console.log("이김");
  } else {
    console.log("짐");
  }
});

const rock = document.querySelector(".rock");
rock.addEventListener("click", () => {
  const rock = 1;

  clearInterval(intervalId);
  console.log(ArrayIndex - 1); //0출력

  if (ArrayIndex - 1 == rock) {
    console.log("비김");
    modal.classList.add("block");
  } else if (ArrayIndex - 1 == 0) {
    console.log("이김");
  } else {
    console.log("짐");
  }
});

const paper = document.querySelector(".paper");
paper.addEventListener("click", () => {
  const paper = 2;

  clearInterval(intervalId);
  console.log(ArrayIndex - 1); //0출력

  if (ArrayIndex - 1 == paper) {
    console.log("비김");
  } else if (ArrayIndex - 1 == 1) {
    console.log("이김");
  } else {
    console.log("짐");
  }
});

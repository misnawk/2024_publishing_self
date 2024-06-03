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
const scissors = document.querySelector(".scissors");
scissors.addEventListener("click", () => {
  const scissors = 1;

  clearInterval(intervalId);
  console.log(ArrayIndex - 1); //0출력

  if (ArrayIndex - 1 == scissors) {
  }
});

const rock = document.querySelector(".rock");
rock.addEventListener("click", () => {
  const rock = 1;

  clearInterval(intervalId);
  console.log(ArrayIndex - 1); //0출력

  if (ArrayIndex - 1 == rock) {
  }
});

const paper = document.querySelector(".paper");
paper.addEventListener("click", () => {
  const paper = 1;

  clearInterval(intervalId);
  console.log(ArrayIndex - 1); //0출력

  if (ArrayIndex - 1 == paper) {
  }
});

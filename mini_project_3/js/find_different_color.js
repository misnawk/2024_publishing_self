//닫기버튼
const closeBtn = document.querySelector(".closeBtn");
const modal = document.querySelector(".modal");

closeBtn.addEventListener("click", closeBtn_Fn);

function closeBtn_Fn() {
  modal.classList.add("hidden");
}

// 시간초

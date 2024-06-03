const box = document.querySelector(".box");
const section = document.querySelector("section");

import { backendData } from "./backendData.js";

backendData;

const result = `

<header>
    <nav>
        <div class = "nav__back_and_img__box">

            <div class= "nav__back_and_img__box__left">
                <div class="nav__back_and_img__box__left__back">
                    <i class="fa-solid fa-chevron-left"></i>
                </div>
                <div class="nav__back_and_img__box__left__img">
                    <img src="강남언니.png" alt="">      
                </div>
            </div>   
            
            <div class= "nav__back_and_img__box__right">
                    <input class="nav__back_and_img__box__right__input" type="text">
                <div class="nav__back_and_img__box__right__search"> 
                    <button class="nav__back_and_img__box__right__search__Btn">
                        <i class="fa-solid fa-magnifying-glass"></i>
                     </button>
                </div>

                <div class="nav__back_and_img__box__right__button">
                    <button>로그인/가입</button>
                </div>
            </div>   
        </div>
    </nav>


        <section class="frist">
            <div class = "topMenu">

                <div class = "topMenu__img_1 topMenu__imgBox">
                <button class="allBtn">
                    <svg class="allBtn__img all eye" xmlns="http://www.w3.org/2000/svg" 
                    width="30" height="30" viewBox="0 0 32 32">
                    <g fill="none" fill-rule="evenodd">
                    <g fill="#000">
                        <path d="M10.114 14.218l-1.015 2.89H11.1l-.987-2.89zm1.71 5.029l-.449-1.308H8.806l-.448 1.308H7.307l2.386-6.51h.795l2.387 6.51h-1.052zM14.56 19.247v-6.51h.988v5.623h3.136v.887zM20.57 19.247v-6.51h.987v5.623h3.136v.887z"/>
                    </g>
                    <path d="M0 0h32v32H0z"/>
                    </g>
                    </svg>
                </button>
                    <span class="topMenu__imgBox__font">전체</span>
                </div>
         
                <div class = "topMenu__img_2 topMenu__imgBox">
                    <button class="eyeBtn">                  
                        <img  class="eyeBtn__img" src="https://image2.gnsister.com/images/icon/eye_off.png" alt="눈성형" width="30" height="30">
                    </button>
                    <span class="topMenu__imgBox__font">눈성형</span>
                </div>

                <div class = "topMenu__img_3 topMenu__imgBox">
                    <button class ="noseBtn">
                        <img  class="img noseBtn__img" src="https://image2.gnsister.com/images/icon/nose_off.png" alt="코성형" width="30" height="30">
                    </button>
                        <span class="topMenu__imgBox__font">코성형</span>
                </div>

                <div class = "topMenu__img_4 topMenu__imgBox">
                <button class="paceBtn">
                    <img class="img paceBtn__img"  src="https://image2.gnsister.com/images/icon/faceline_off.png" alt="안면윤곽/양악" width="30" height="30">
                </button>    
                    <span class="topMenu__imgBox__font">안면윤곽/양악</span>
                </div>

                <div class = "topMenu__img_5 topMenu__imgBox">
                    <button class="chestBtn">
                        <img  class="img chestBtn__img" src="https://image2.gnsister.com/images/icon/breast_off.png" alt="가슴성형" width="30" height="30">              
                    </button>
                    <span class="topMenu__imgBox__font">가슴성형</span>
                </div>

                <div class = "topMenu__img_6 topMenu__imgBox">
                    
                    <button class="provinceBtn">
                        <img  class="img provinceBtn__img" src="https://image2.gnsister.com/images/icon/bodyline_off.png" alt="지방성형" width="30" height="30">
                    </button>
                    <span class="topMenu__imgBox__font">지방성형</span>
                </div>
               
                <div class = "topMenu__img_7 topMenu__imgBox">
                    <button class="fillerBtn">
                        <img  class="img fillerBtn__img" src="https://image2.gnsister.com/images/icon/filler_off.png" alt="필러" width="30" height="30">
                    </button>
                    <span class="topMenu__imgBox__font">필러</span>
                </div>
               
                <div class = "topMenu__img_8 topMenu__imgBox">
                    <button class="botoxBtn">
                    <img  class="img botoxBtn__img" src="https://image2.gnsister.com/images/icon/botox_off.png" alt="보톡스" width="30" height="30">
                    </button>
                    <span class="topMenu__imgBox__font">보톡스</span>
                </div>
   
                <div class = "topMenu__img_9 topMenu__imgBox">
                    <button class="liftingBtn">
                    <img  class="img liftingBtn__img"  src="https://image2.gnsister.com/images/icon/transplant_off.png" alt="리프팅" width="30" height="30">
                    </button>
                    <span class="topMenu__imgBox__font">리프팅</span>
                </div>
             
            </div>
            <div class="typeBox">
                
                <div class="type">'눈성형'이벤트 </div>
            
            </div>
        </section>
</header>

`;
box.insertAdjacentHTML("beforeend", result);

backendData.pageProps.data.events.data.map(
  ({
    titleImage,
    hospitalSiGunGu,
    hospitalName,
    title,
    rating,
    ratingCount,
    discountedCost,
  }) => {
    const after = `
    
        <div class = "contentBox">
            <img class="contentBox_img" src="${titleImage}" alt="">

            <div class="title_1">
                <svg xmlns="http://www.w3.org/2000/svg"
                width="13" height="13" fill="yellow" 
                class="EventListItem__StyledHospitalBadgeIcon-sc-h57asj-15 iVGMWk">
                <path fill="#4C6EF5" d="m13.5 7-1.442-1.66.201-2.197-2.133-.488L9.009.75 7 1.62 4.99.75 3.875 2.649l-2.133.482.2 2.202L.5 7l1.442 1.66-.201 2.203 2.133.488 1.117 1.899L7 12.375l2.01.869 1.116-1.899 2.133-.488-.2-2.196zM5.871 9.81 3.626 7.542 4.5 6.66l1.371 1.387 3.457-3.494.875.88z">
                </path></svg>
                <span>고객평가우수병원</span>
            </div>

            <div class="title_2">
                <span>${hospitalSiGunGu}</span>
                <span>·</span>
                <span>${hospitalName}</span>
            </div>

            
            <div class="title_3">
                <span>${title}</span>
            </div>

            <div class="title_4">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" class="EventListItem__StyledStar-sc-h57asj-7 fffBGG"><path fill="#FFD267" fill-rule="evenodd" d="m7.555.681 1.214 3.29a.73.73 0 0 0 .638.485l3.368.19c.664.037.935.91.419 1.347l-2.618 2.224a.78.78 0 0 0-.244.784l.868 3.408c.171.67-.538 1.21-1.096.832l-2.831-1.916a.7.7 0 0 0-.79 0l-2.83 1.916c-.559.378-1.268-.161-1.097-.832L3.424 9a.78.78 0 0 0-.244-.784L.562 5.993c-.516-.438-.245-1.31.419-1.347l3.368-.19a.73.73 0 0 0 .638-.485L6.201.681a.715.715 0 0 1 1.354 0"></path></svg>                <span>${rating}</span>
                <span class = "title_4__number">(${ratingCount})</span>
            </div>

            
            <div class="title_5">
                <span class="title_5__price">${
                  discountedCost / 10000
                }만원</span>
                <span class="vat">VAT포함</span>
            </div>
        </div>
 
       
    `;

    ///////////////////////////////////////////////// 올버튼 이벤트

    const allBtn = document.querySelector(".allBtn");
    let isAllOn = false;

    allBtn.addEventListener("click", () => {
      const allSvg = document.querySelector(".allBtn__img");
      isAllOn = !isAllOn;

      if (isAllOn) {
        allSvg.innerHTML = `
       
                <g fill="none" fill-rule="evenodd">
                    <g fill="#FF540F">
                        <path d="M10.114 14.218l-1.015 2.89H11.1l-.987-2.89zm1.71 5.029l-.449-1.308H8.806l-.448 1.308H7.307l2.386-6.51h.795l2.387 6.51h-1.052zM14.56 19.247v-6.51h.988v5.623h3.136v.887zM20.57 19.247v-6.51h.987v5.623h3.136v.887z"/>
                    </g>
                    <path d="M0 0h32v32H0z"/>
                    <path fill="#FF540F" d="M6.095 1.524a4.571 4.571 0 0 1 4.567 4.356l.005.215a4.571 4.571 0 0 1-4.357 4.567l-.215.005A4.571 4.571 0 0 1 1.53 6.31l-.005-.215A4.571 4.571 0 0 1 5.88 1.53l.215-.005zM8.642 3.83l-3.51 3.51-1.584-1.585-.68.68 2.265 2.266 4.19-4.19-.68-.68z"/>
                </g>

            `;
      } else {
        allSvg.innerHTML = `
                <g fill="none" fill-rule="evenodd">
                    <g fill="#000">
                        <path d="M10.114 14.218l-1.015 2.89H11.1l-.987-2.89zm1.71 5.029l-.449-1.308H8.806l-.448 1.308H7.307l2.386-6.51h.795l2.387 6.51h-1.052zM14.56 19.247v-6.51h.988v5.623h3.136v.887zM20.57 19.247v-6.51h.987v5.623h3.136v.887z"/>
                    </g>
                    <path d="M0 0h32v32H0z"/>
                </g>
            `;
      }
    });
    ///////////////////////////////////////////////// 눈버튼 이벤트
    const eyeBtn = document.querySelector(".eyeBtn");
    let isEyeOn = false;

    eyeBtn.addEventListener("click", () => {
      const eyeImg = document.querySelector(".eyeBtn__img"); // button 내의 img 요소를 찾습니다.
      isEyeOn = !isEyeOn;

      if (isEyeOn) {
        eyeImg.src = "https://image2.gnsister.com/images/icon/eye_on.png";
      } else {
        eyeImg.src = "https://image2.gnsister.com/images/icon/eye_off.png";
      }
    });
    ///////////////////////////////////////////////// 코버튼 이벤트
    const noseBtn = document.querySelector(".noseBtn");
    let isNoseOn = false;

    noseBtn.addEventListener("click", () => {
      const noseImg = document.querySelector(".noseBtn__img"); // button 내의 img 요소를 찾습니다.
      isNoseOn = !isNoseOn;

      if (isNoseOn) {
        noseImg.src = "https://image2.gnsister.com/images/icon/nose_on.png";
      } else {
        noseImg.src = "https://image2.gnsister.com/images/icon/nose_off.png";
      }
    });

    ///////////////////////////////////////////////// 얼굴버튼 이벤트
    const paceBtn = document.querySelector(".paceBtn");
    let isPaceOn = false;

    paceBtn.addEventListener("click", () => {
      const paceBtn__img = document.querySelector(".paceBtn__img"); // button 내의 img 요소를 찾습니다.
      isPaceOn = !isPaceOn;

      if (isPaceOn) {
        paceBtn__img.src =
          "https://image2.gnsister.com/images/icon/faceline_on.png";
      } else {
        paceBtn__img.src =
          "https://image2.gnsister.com/images/icon/faceline_off.png";
      }
    });

    ///////////////////////////////////////////////// 가슴버튼 이벤트
    const chestBtn = document.querySelector(".chestBtn");
    let ischestOn = false;

    chestBtn.addEventListener("click", () => {
      const chestBtn__img = document.querySelector(".chestBtn__img"); // button 내의 img 요소를 찾습니다.
      ischestOn = !ischestOn;

      if (ischestOn) {
        chestBtn__img.src =
          "https://image2.gnsister.com/images/icon/breast_on.png";
      } else {
        chestBtn__img.src =
          "https://image2.gnsister.com/images/icon/breast_off.png";
      }
    });

    ///////////////////////////////////////////////// 지방버튼 이벤트
    const provinceBtn = document.querySelector(".provinceBtn");
    let isprovinceBtnOn = false;

    provinceBtn.addEventListener("click", () => {
      const provinceBtn__img = document.querySelector(".provinceBtn__img"); // button 내의 img 요소를 찾습니다.
      isprovinceBtnOn = !isprovinceBtnOn;

      if (isprovinceBtnOn) {
        provinceBtn__img.src =
          "https://image2.gnsister.com/images/icon/bodyline_on.png";
      } else {
        provinceBtn__img.src =
          "https://image2.gnsister.com/images/icon/bodyline_off.png";
      }
    });

    ///////////////////////////////////////////////// 필러버튼 이벤트
    const fillerBtn = document.querySelector(".fillerBtn");
    let isfillerBtnOn = false;

    fillerBtn.addEventListener("click", () => {
      const fillerBtn__img = document.querySelector(".fillerBtn__img"); // button 내의 img 요소를 찾습니다.
      isfillerBtnOn = !isfillerBtnOn;

      if (isfillerBtnOn) {
        fillerBtn__img.src =
          "https://image2.gnsister.com/images/icon/filler_on.png";
      } else {
        fillerBtn__img.src =
          "https://image2.gnsister.com/images/icon/filler_off.png";
      }
    });

    ///////////////////////////////////////////////// 필러버튼 이벤트
    const botoxBtn = document.querySelector(".botoxBtn");
    let isbotoxBtnOn = false;

    botoxBtn.addEventListener("click", () => {
      const botoxBtn__img = document.querySelector(".botoxBtn__img"); // button 내의 img 요소를 찾습니다.
      isbotoxBtnOn = !isbotoxBtnOn;

      if (isbotoxBtnOn) {
        botoxBtn__img.src =
          "https://image2.gnsister.com/images/icon/botox_on.png";
      } else {
        botoxBtn__img.src =
          "https://image2.gnsister.com/images/icon/botox_off.png";
      }
    });

    ///////////////////////////////////////////////// 필러버튼 이벤트
    const liftingBtn = document.querySelector(".liftingBtn");
    let isliftingBtnOn = false;

    liftingBtn.addEventListener("click", () => {
      const liftingBtn__img = document.querySelector(".liftingBtn__img"); // button 내의 img 요소를 찾습니다.
      isliftingBtnOn = !isliftingBtnOn;

      if (isliftingBtnOn) {
        liftingBtn__img.src =
          "https://image2.gnsister.com/images/icon/transplant_on.png";
      } else {
        liftingBtn__img.src =
          "https://image2.gnsister.com/images/icon/transplant_off.png";
      }
    });

    /////////////////////////////////////////////////////////////////search 버튼클릭시
    const nav__back_and_img__box__right__search__Btn = document.querySelector(
      ".nav__back_and_img__box__right__search__Btn"
    );

    const nav__back_and_img__box__right__input = document.querySelector(
      ".nav__back_and_img__box__right__input"
    );

    nav__back_and_img__box__right__input.classList.add("hidden"); //input숨기기

    let isInput = false;
    nav__back_and_img__box__right__search__Btn.addEventListener("click", () => {
      isInput = !isInput;

      isInput
        ? nav__back_and_img__box__right__input.classList.add("hidden")
        : nav__back_and_img__box__right__input.classList.remove("hidden");
    });
    const main = document.querySelector("main");
    main.insertAdjacentHTML("beforeend", after);
  }
);

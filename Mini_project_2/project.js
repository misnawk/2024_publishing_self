const box = document.querySelector(".box");

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
                <div class="nav__back_and_img__box__right__search"> 
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                
                <div class="nav__back_and_img__box__right__button">
                    <button>로그인/가입</button>
                </div>
            </div>   
        </div>
    </nav>


 <main>
    <section class="frist">
        <div class = "topMenu">
        
        </div>
    </section>    

    
</main>

    






</header>

`;

box.insertAdjacentHTML("beforeend", result);

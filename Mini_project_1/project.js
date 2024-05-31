import { backendData } from "./backend.js";
const main = document.querySelector(".main");
const info__top__type = document.querySelector(".info__top__type");
const info__top__title = document.querySelector(".info__top__title");
const info__top__gym = document.querySelector(".info__top__gym");
const info__top__local = document.querySelector(".info__top__local");

const score = [5.0, 4.9];
const review = ["(4)", "(12)"];
const passType = ["일일권 다짐회원", "다짐회원"];
const sale = ["15%"];
const distance = ["326.4km", "14.8km"];
backendData.result.liteAdList.map(
  ({ gymPhotoSmall, tags, gymName, address, service, program, price }, i) => {
    const result = `
  



    <div class="container">
        <div class="contentBox top_margin">
            <div class="contentBox__top ">
                <div class="contentBox__top__img">
                <img src="${gymPhotoSmall}" alt="">
                </div>

                <div class="info">
                    <div class="info__top">
                        <div class="info__top__type">
                        <span>${tags}</span>
                        </div>
                        <div class="info__top__gymName">
                        <span>${gymName}</span>
                        </div>
                    <div class="info__topo__star">
                        <span class="star">
                            <i class="fa-solid fa-star "></i>${
                              score[i]
                            }            
                        </span>
                            <span class="review">${review[i]}</span>
                            <span class="info__top__local">${address}</span>
                             <sapn class="distance">
                             ${distance[i]}</sapn>
                           
                </div>
                       
            </div>
                    
                    <div class="info__bottom">
                        <div class="info__bottom__dayPass">
                            <span class = "info__bottom__dayPass__passType">${
                              passType[i]
                            }</span>
                           
                           ${
                             i == 0 ? `<span class="sale"> ${sale} </span>` : ""
                           }
                            <span class="info__bottom__price">
                            ${price.lowestPrice.toLocaleString()} ~/월</span>
                        </div>
                  
                    
                    </div>
                </div>
            </div>

            <div class="contentBox__bottom">
                <div class="contentBox__bottom__info">

                    
                     

                        ${
                          program.free
                            ? `
                            <div class="freeProgramBox">
                                <span class="freeProgram">무료프로그램</span>
                                <span>${program.free}</span>                             
                            </div>`
                            : ""
                        }

                       
                   

                    <div class="freeServiceBox">
                        <span class="freeService">무료서비스</span> 
                        <span>${service.free}</span> 
                    </div>
                </div>  
            </div>
        </div>


    </div>

     


    `;
    main.insertAdjacentHTML("beforeend", result);
  }
);

//두번째 메뉴
const score1 = [5.0, 4.9, 5.0, 4.9, 5.0, 4.9, 5.0, 4.9, 5.0, 4.9];
const review1 = [
  "(4)",
  "(12)",
  "(20)",
  "(10)",
  "(1)",
  "(12)",
  "(4)",
  "(12)",
  "(20)",
  "(10)",
  "(1)",
  "(12)",
  "(4)",
  "(12)",
  "(20)",
  "(10)",
  "(1)",
  "(12)",
  "(1)",
  "(12)",
];

const distance1 = [
  "326.4km",
  "53.8km",
  "23.8km",
  "34.8km",
  "154.8km",
  "43.3km",
  "43.5km",
  "53.2km",
  "75.6km",
  "3.4km",
  "326.4km",
  "24.8km",
  "19.4km",
  "32.0km",
  "25.5km",
  "16.4km",
  "84.7km",
  "24.3km",
  "64.4km",
  "33.6km",
];

const passType1 = [
  "일일권 다짐회원",
  "다짐회원",
  "일일권",
  "일일권",
  "일일권",
  "일일권 다짐회원",
  "일일권 다짐회원",
  "일일권",
  "일일권",
  "다짐회원",
  "일일권 다짐회원",
  "다짐회원",
  "일일권",
  "일일권",
  "일일권",
  "일일권 다짐회원",
  "일일권 다짐회원",
  "일일권",
  "일일권",
  "다짐회원",
];

backendData.result.centerList.map(
  ({ gymName, gymPhotoSmall, tags, address, program, service, price }, i) => {
    const result = `
    
  
    <div class="container">
        <div class="contentBox1 top_margin">
            <div class="contentBox__top1 ">
                <div class="contentBox__top__img1">
                <img src="${gymPhotoSmall}" alt="">
                </div>

                <div class="info">
                    <div class="info__top">
                        <div class="info__top__type">
                        <span>${tags}</span>
                        </div>
                        <div class="info__top__gymName1">
                        <span>${gymName}</span>
                        </div>
                    <div class="info__topo__star">
                        <span class="star">
                            <i class="fa-solid fa-star "></i>${
                              score[i]
                            }            
                        </span>
                            <span class="review">${review[i]}</span>
                            <span class="info__top__local">${address}</span>
                             <sapn class="distance">
                             ${distance[i]}</sapn>
                           
                </div>
                       
            </div>
                    
                    <div class="info__bottom1">
                        <div class="info__bottom__dayPass">
                            <span class = "info__bottom__dayPass__passType1">${
                              passType[i]
                            }</span>
                           
                          
                            <span class="info__bottom__price1">
                            ${price.lowestPrice.toLocaleString()} ~/월</span>
                        </div>
                  
                    
                    </div>
                </div>
            </div>

            <div class="contentBox__bottom">
                <div class="contentBox__bottom__info">

                    
                     

                        ${
                          program.free
                            ? `
                            <div class="freeProgramBox">
                                <span class="freeProgram">무료프로그램</span>
                                <span>${program.free}</span>                             
                            </div>`
                            : ""
                        }

                       
                   

                    <div class="freeServiceBox">
                        <span class="freeService">무료서비스</span> 
                        <span>${service.free}</span> 
                    </div>
                </div>  
            </div>
        </div>


    </div>

     

      `;
    main.insertAdjacentHTML("beforeend", result);
  }
);

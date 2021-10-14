function langBtn() { // 언어토글버튼
    const langBtn = document.getElementById("togleBtn");
    const langKor = document.getElementById("langKor");
    const langEng = document.getElementById("langEng");
    if (langBtn.style.transform == "translateX(-36px)") {
        langBtn.style.transform = "translateX(0px)"
        langKor.style.opacity = "1"
        langEng.style.opacity = "0"
    } else {
        langBtn.style.transform = "translateX(-36px)"
        langKor.style.opacity = "0"
        langEng.style.opacity = "1"
    }
}

function orgOpen() { // 관련기관 펼치고닫기
    const orgBg = document.getElementById("orgBg");
    const orgBtn = document.getElementById("orgBtn");
    if (orgBg.style.height == "40px") {
        orgBg.style.height = "330px";
        orgBg.style.backgroundColor = "#23262a";
        orgBtn.style.borderRadius = "0 0 10px 10px";
        orgBtn.style.transition = "border-radius 0s 0s";
    } else {
        orgBg.style.height = "40px";
        orgBg.style.backgroundColor = "#202020";
        orgBtn.style.borderRadius = "10px 10px 10px 10px";
        orgBtn.style.transition = "border-radius 0s 0.4s";
    }
}


const slideList = document.querySelector("#slideList");
const slideListImg = slideList.children;
const slideBg = document.querySelector(".slideBanner");
const slideStick = document.querySelector(".slideStick");
const slideBtn = document.querySelector(".slideBtn");
const slideArea = document.querySelector(".slideArea");

const colorArr = ["#4d2378", "#42cd3e", "#b0b0b0", "#01476b", "#6289c7"];
let stickMove = 0;
let i = 0;
const stickMoveAvg = (150 - 40) / (slideListImg.length - 1);

slideListImg[0].style.maxWidth = "500px";
if(window.innerWidth > 767) {
    slideListImg[0].style.width = "25%";
} else {
    slideListImg[0].style.width = "207px";
}

slideListImg[0].style.paddingTop = "0";
// slideListImg[0].style.boxShadow = "5px 5px 10px rgba(0, 0, 0, 0.3)";


function slideInterval() {
    slideListImg[0].style.marginRight = "0";
    slideList.style.left = "-" + (slideListImg[0].offsetWidth) + "px";
    // slideListImg[1].style.boxShadow = "5px 5px 10px rgba(0, 0, 0, 0.3)";
    slideListImg[1].style.maxWidth = "500px";
    if(window.innerWidth > 767) {
        slideListImg[1].style.width = "25%";
    } else {
        slideListImg[1].style.width = "207px";
    }
    slideListImg[1].style.paddingTop = "0";
    
    if(stickMove < 110) {
        i++;
        slideArea.style.backgroundColor = colorArr[i];
        stickMove += stickMoveAvg;
    } else {
        i = 0;
        slideArea.style.backgroundColor = colorArr[i];
        stickMove = 0;
    }

    slideStick.style.left = stickMove + "px";
    
    
    slideBg.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(" + slideListImg[1].firstChild.src + ")"
    setTimeout(function() {
        slideListImg[0].style.marginRight = "3%";
        if(window.innerWidth > 1080) {
            slideListImg[0].style.paddingTop = "100px";    
        } else if (window.innerWidth > 767) {
            slideListImg[0].style.paddingTop = "4%";
        } else {
            slideListImg[0].style.marginRight = "3vw";
            slideListImg[0].style.paddingTop = "25px";
        }
        slideListImg[0].style.maxWidth = "200px";
        if(window.innerWidth > 767) {
            slideListImg[0].style.width = "12%";
        } else {
            slideListImg[0].style.width = "110px";
        }
        
        slideListImg[0].style.boxShadow = "none";
        slideList.appendChild(slideListImg[0]);
        slideList.style.transition = "none";
        slideList.style.left = "0";
    }, 1000);
    slideList.style.transition = "all 1s";
}


let slideEvent = setInterval(slideInterval, 3000);

let slideToggle = true;
slideBtn.addEventListener("click", function() {
    if(slideToggle) {
        clearInterval(slideEvent);
        slideToggle = false;
    } else {
        slideEvent = setInterval(slideInterval, 3000);
        slideToggle = true;
    }
    
}, false);
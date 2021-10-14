let i = 0;
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

//pc 메인메뉴 drop
const gnb = document.getElementsByClassName("gnb");
const bg = document.getElementsByClassName("topArea");
const topHeading = document.getElementsByClassName("topHeading");
const searchBox2 = document.getElementsByClassName("searchBox2");
const menuList = document.getElementsByClassName("menuList");

////////////////////////////////////////////////////////////////
//    이미지 바꿔주세요
////////////////////////////////////////////////////////////////
function menuHover() {   //메뉴박스 drop Down
    gnb[0].style.height = "275px";
    if (gnb[0].style.height == "275px") {
        bg[0].style.background = "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(images/mainImg.jpg)"
        bg[0].style.backgroundPosition = "center top"
        bg[0].style.backgroundSize = "cover"
        topHeading[0].style.visibility = "hidden"
        searchBox2[0].style.visibility = "hidden"
        menuList[0].style.visibility = "hidden"
    }
}

function menuLeave() {   //메뉴박스 drop Up
    gnb[0].style.height = "70px";
    if (gnb[0].style.height == "70px") {
        bg[0].style.background = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(images/mainImg.jpg)"
        bg[0].style.backgroundPosition = "center top"
        bg[0].style.backgroundSize = "cover"
        topHeading[0].style.visibility = "visible"
        searchBox2[0].style.visibility = "visible"
        menuList[0].style.visibility = "visible"
    }
}
//pc 메인메뉴 drop

//반응형 메뉴박스
const mediaMenu = document.getElementsByClassName("mediaMenu");
const menuBgBlur = document.querySelector(".menuBgBlur");
const mainLogo = document.querySelector(".logoMenu");
function mediaMenuHover() {   //메뉴박스 보이기
    mediaMenu[0].style.display = "block";
    mediaMenu[0].style.transition = "display 1s";
    if (mediaMenu[0].style.display == "block") {
        menuBgBlur.style.display = "block";
        menuBgBlur.style.height = document.body.scrollHeight + "px";
    }
    mainLogo.style.display = "none";
}

function mediaMenuLeave() {   //메뉴박스 가리기
    mediaMenu[0].style.display = "none";
    if (mediaMenu[0].style.display == "none") {
        menuBgBlur.style.display = "none";
    }
    mainLogo.style.display = "block";
}

window.addEventListener("resize", function() {
    if(window.innerWidth > 1080) {
        mediaMenu[0].style.display = "none";
        if (mediaMenu[0].style.display == "none") {
            menuBgBlur.style.display = "none";
        }
        mainLogo.style.display = "block";
    }
}, false);
//반응형 메뉴박스

















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


const slideArea = document.querySelector(".slidePosterArea");
const posterArea = document.querySelector("#posterList");
const posterList = posterArea.children;
const bannerBg = document.querySelector(".bgBlur");
const colorArr = ["#5ebaab", "#4d2378", "#ff3a15", "#2dbaef", "#6289c7"];
const posterBg = document.querySelector(".posterBg");
const topHeadingList = document.querySelectorAll(".topHeading");



i = 0;
while(i < posterList.length) {
    // posterList[i].addEventListener("load", function() {
        let j = 0;
        let imgNumber;
        let colorNumber;
        const thisImg = posterList[i];
        while(j < posterList.length) {
            if(posterList[i] == posterList[j]) {
                colorNumber = imgNumber = j;
                
            }
            j++;
        }
        let slideShow = setInterval(function() {
            if(imgNumber == 0) {
                imgNumber = 4;
            } else {
                imgNumber--;
            }
            if(imgNumber == 0) {
                thisImg.style.transform = "perspective(500px) rotateY(40deg)";
                thisImg.style.left = "0px";
                thisImg.style.bottom = "6%";
                thisImg.style.width = "21%";
                thisImg.style.zIndex = "60";
            } else if(imgNumber == 1) { 
                thisImg.style.transform = "none";
                thisImg.style.left = "16%";
                thisImg.style.bottom = "-6%";
                thisImg.style.width = "42%";
                thisImg.style.zIndex = "100";
                bannerBg.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(" + thisImg.src + ")"
                posterBg.style.backgroundColor = colorArr[colorNumber];
                j = 0;
                while(j < topHeadingList.length) {
                    topHeadingList[j].style.display = "none";
                    j++;
                }
                topHeadingList[colorNumber].style.display = "block";
            } else if(imgNumber == 2) {
                thisImg.style.transform = "perspective(500px) rotateY(-40deg)";
                thisImg.style.left = "51%";
                thisImg.style.bottom = "6%";
                thisImg.style.width = "21%";
                thisImg.style.zIndex = "90";
            } else if(imgNumber == 3) {
                thisImg.style.transform = "perspective(500px) rotateY(-40deg)";
                thisImg.style.left = "65%";
                thisImg.style.bottom = "6%";
                thisImg.style.width = "21%";
                thisImg.style.zIndex = "80";
            } else if(imgNumber == 4) {
                thisImg.style.transform = "perspective(500px) rotateY(-40deg)";
                thisImg.style.left = "79%";
                thisImg.style.bottom = "6%";
                thisImg.style.width = "21%";
                thisImg.style.zIndex = "70";
            }
        }, 3000)
           
    // }, false)
    i++;
}
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
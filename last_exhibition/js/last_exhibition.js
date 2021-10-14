
function langBtn() { // 언어토글버튼
    let langBtn = document.getElementById("togleBtn");
    let langKor = document.getElementById("langKor");
    let langEng = document.getElementById("langEng");
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

function menuHover() {   //메뉴박스 drop Down
    gnb[0].style.height = "275px";
    if (gnb[0].style.height == "275px") {
        console.log("hg");
        bg[0].style.background = "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(./images/palette_main.jpg)"
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
        console.log("hg");
        bg[0].style.background = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./images/palette_main.jpg)"
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

function mediaMenuHover() {   //메뉴박스 보이기
    mediaMenu[0].style.display = "block";
    mediaMenu[0].style.transition = "display 1s";
    if (mediaMenu[0].style.display == "block") {
        menuBgBlur.style.display = "block";
        menuBgBlur.style.height = document.body.scrollHeight + "px";
    }
}

function mediaMenuLeave() {   //메뉴박스 가리기
    mediaMenu[0].style.display = "none";
    if (mediaMenu[0].style.display == "none") {
        menuBgBlur.style.display = "none";
    }
}
//반응형 메뉴박스


//퀵버튼 나타나기
$(function() {
    $(window).on("scroll", function() {
        if($(this).scrollTop() > 350) {
            $(".quickBtnBox").fadeIn("fast");
        } else {
            $(".quickBtnBox").fadeOut("fast");
        }
    });

    $(".topBtn").on("click", function() {
        $("html").animate({ "scrollTop": "0" }, 500)
    })
});
//퀵버튼 나타나기




// 탭 display none 처리
const sectionList = document.querySelectorAll(".tapSection");
let i = 0;
while(i < sectionList.length) {
    sectionList[i].style.display = "none";
    i++;
}
sectionList[0].style.display = "block";
// 탭 display none 처리


// 스틱 생성
const mainTap = document.querySelector("#mainTap");
const createStick = createNode("span", {"id" : "followStick"});
let stickWidth = mainTap.children[0].clientWidth;
createStick.style.position = "absolute";
createStick.style.display = "inline-block";
createStick.style.bottom = "-5px"
createStick.style.left = "0";
createStick.style.width = stickWidth + "px";
createStick.style.height = "3px";
createStick.style.borderRadius = "50px"
createStick.style.transition = "left 0.3s";
createStick.style.backgroundColor = "#00adef";
mainTap.appendChild(createStick);
// 스틱 생성


// 스틱 위치 밑 선택 된 탭 초기화
let followStickX = "0";
let selectedTap = mainTap.children[0];
const tapList = document.querySelector("#mainTap").children;
let tapNumber = 0;
// 스틱 위치 밑 선택 된 탭 초기화


// 탭 색깔, 스틱 위치, 탭 변경 이벤트 함수
function categoryMouseHover(e) {   
    const hoverTap = e.target;
    i = 0;
    while (i < tapList.length) {
        tapList[i].style.color = "#c7c7c7";
        i++;
    }
    hoverTap.style.color = "#585858";

    const followStick = document.querySelector("#followStick");
    i = 0;
    while(i < tapList.length) {
        if(hoverTap == tapList[i]) {
            followStick.style.left = stickWidth * i +"px";
        }
        i++;
    }
        
    mainTap.addEventListener("click", function(e) {                          
        followStickX = followStick.style.left;
        selectedTap = e.target;  

        i = 0;
        while(i < tapList.length){
            if(selectedTap == tapList[i]) {
                tapNumber = i;
            }
            i++;
        }
        
        i = 0;
        while(i < sectionList.length) {
            if(tapNumber == i) {
                sectionList[i].style.display = "block";
            } else {
                sectionList[i].style.display = "none";
            }
            i++;
        } 
    }, false);

    mainTap.addEventListener("mouseout", function(e) {
        e.target.style.color = "#c7c7c7";
        followStick.style.left = followStickX;
        selectedTap.style.color = "#585858";
    } , false);
}  
// 탭 색깔, 스틱 위치, 탭 변경 이벤트


// 이미지 선택 이벤트 핸들러
const selectImg = document.querySelectorAll("#selectImg");
let clickImg;
i = 0;
while(i < selectImg.length) {
    selectImg[i].addEventListener("mouseover", imgMouseHover, false);
    i++;
}
i = 0;
while(i < selectImg.length) {
    selectImg[i].addEventListener("click", imgMouseClick, false);
    i++;
}
i = 0;
while(i < selectImg.length) {
    selectImg[i].addEventListener("mouseleave", imgMouseOut, false);
    i++;
}

function imgMouseHover(e) {
    i = 0;
    while(i < this.children.length) {
        this.children[i].style.opacity = "0.5";
        i++;
    }
    e.target.parentNode.style.opacity = "1";
}

function imgMouseClick(e) {
    const changImg = this.parentNode.previousSibling.previousSibling;
    console.log(changImg);
    if(e.target.parentNode.tagName == "LI") {
        changImg.src = e.target.src;
        clickImg = e.target.parentNode;
        console.log(clickImg);
    }

}

function imgMouseOut(e) {
    const imgList = this.children;
    i = 0;
    while(i < imgList.length) {
        if(clickImg == imgList[i]) {
            imgList[i].style.opacity = "1";
        } else {
            imgList[i].style.opacity = "0.5";
        }
        i++;
    }
}
// 이미지 선택 이벤트 핸들러


// 탭 색깔, 스틱 위치, 탭 변경 이벤트 핸들러
mainTap.addEventListener("mouseover", categoryMouseHover, false);


// 반응형 스틱 넓이, 위치 조정 이벤트 핸들러
window.addEventListener("resize", function() {
    stickWidth = mainTap.children[0].clientWidth;
    createStick.style.width = stickWidth + "px";
    createStick.style.transition = "left 0s";

    i = 0;
    while(i < tapList.length) {
        if(selectedTap == tapList[i]) {
            followStick.style.left = stickWidth * i +"px";
            followStickX = followStick.style.left;
        }
        i++;
    }

    setTimeout(function() {
        createStick.style.transition = "left 0.3s";
    }, 500);
});
// 반응형 스틱 넓이, 위치 조정 이벤트 핸들러


// 팝업창 이벤트 핸들러 
const popBtn = document.querySelector(".popBtn");

function popupImg(e) {
    const popupArea = document.querySelector(".popBg");
    console.log(popupArea);
    popupArea.style.display = "block";
    popupArea.style.top = window.pageYOffset + "px";
    document.body.className = "hidden";
    popupArea.addEventListener("click", function() {
        popupArea.style.display = "none";
        document.body.className = "";
    }, false)
}

popBtn.addEventListener("click", popupImg, false);


// 요소 생성 함수
function createNode(nodeName, attribute) {
    const newNode = document.createElement(nodeName);
    if(attribute) {
        for(let attr in attribute) {
            if(attribute.hasOwnProperty(attr)) {
                newNode.setAttribute(attr, attribute[attr]);
            }
        }
    }
    return newNode;
}
// 요소 생성 함수




function orgOpen() { // 관련기관 펼치고닫기
    let orgBg = document.getElementById("orgBg");
    let orgBtn = document.getElementById("orgBtn");
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
    createStick.style.bottom = "-12px"
}
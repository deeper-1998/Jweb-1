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

//연혁 클릭 이벤트
let i = 0;
const historyList = document.querySelector(".history ul");
const selectHistory = document.querySelector(".selectHistory");
const historyYear = historyList.children;
const showHistory = document.querySelector(".showHistory");
const moveAvg = 100 / (historyYear.length - 1);
let selectYear = historyList.firstElementChild;
function historyClick(e) {
    if(e.target.parentNode.nodeName == "LI") {
        selectYear.firstElementChild.className = '';
        selectYear = e.target.parentNode;
        selectYear.firstElementChild.className = "selectYear";
        i = 0;
        while(i < historyYear.length) {
            if(selectYear == historyYear[i]) {
                if(selectYear == historyList.firstElementChild) {
                    selectHistory.style.width = moveAvg * i + + 1 +"%";    
                } else {
                    selectHistory.style.width = moveAvg * i + "%";
                } 
            }
            i++;
        }
        let cloneYear = selectYear.lastElementChild.cloneNode(true);
        showHistory.removeChild(showHistory.firstElementChild);
        showHistory.appendChild(cloneYear);
    }
    
}

historyList.addEventListener("click", historyClick, false);


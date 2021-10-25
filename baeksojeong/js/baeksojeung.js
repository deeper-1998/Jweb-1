{ // 헤더 관련 이벤트
    const header = document.querySelector('header');
    const gnb = document.querySelector('.gnb');
    const mobileMenuBg = document.querySelector('.mobileMenuBg');
    const mobileNav = document.querySelector('nav');
    const mobileMenuBtnSpan = document.querySelectorAll('.mobileMenuBtn>span');
    let scrollCount;

    function scrollheader() {
        if(scrollCount < window.scrollY) {
            header.style.opacity = '0';
            header.style.zIndex = '-1';
            if(window.innerWidth < 768) {
                mobileNav.style.left = '-1000px';
                mobileMenuBg.style.opacity = '0';
                mobileMenuBg.style.height = '0vh';
                mobileMenuBtnSpan[2].style.opacity = '1';
                mobileMenuBtnSpan[0].style.transform = 'rotate(0deg)';
                mobileMenuBtnSpan[0].style.top = '0px';
                mobileMenuBtnSpan[1].style.transform = 'rotate(0deg)';
            }
            
        } else {
            header.style.opacity = '1';
            header.style.zIndex = '100';
        }
        scrollCount = window.scrollY;
    }

    function gnbClick() {
        setTimeout(function() {
            header.style.opacity = '0';
        }, 800);

    }

    gnb.addEventListener('click', gnbClick, false);
    window.addEventListener('scroll', scrollheader,false);
}

{ // 아이덴티티 관련 이벤트
    const identity = document.querySelector('.identity');
    const hexagonText = document.querySelector('.viewText');
    

    function identityClick(e) {
        if(e.target.tagName ==='IMG') {
            const clickHexagon = e.target.parentNode;
            const clickHexagonText = e.target.nextSibling.nextSibling.cloneNode(true);
            clickHexagon.parentNode.appendChild(clickHexagon);
            hexagonText.innerHTML = '';
            hexagonText.appendChild(clickHexagonText);
        }
    }

    identity.addEventListener('click', identityClick, false);
}

{ // 메뉴 선택 관련 이벤트
    const menuCategory = document.querySelector('.menuCategory>ul');
    const categoryList = document.querySelectorAll('.backsojeungMenu>section');
    const menuList = menuCategory.children;
    
    function menuClick(e) {
        if(e.target.tagName === 'LI') {
            let i = 0;
            while(i < menuList.length) {
                menuList[i].className = '';
                if(e.target == menuList[i]) {
                    e.target.className = 'selectCategory';
                    categoryList[i].className = 'selectMenu';
                    // console.log(categoryList[i].className);
                } else {
                    menuList[i].className = '';
                    categoryList[i].className = 'sd';
                }
                i++;
            }
        }
    }
    menuCategory.addEventListener('click', menuClick, false);
}

{ // 모바일 메뉴 관련 이벤트
    const mobileNav = document.querySelector('nav');
    const mobileGnb = document.querySelector('.gnb');
    const mobileMenuBtn = document.querySelector('.mobileMenuBtn');
    const mobileMenuBtnSpan = document.querySelectorAll('.mobileMenuBtn>span');
    const mobileMenuBg = document.querySelector('.mobileMenuBg');

    function mobileMenuClick() {
        if(mobileNav.style.left == '0px') {
            mobileNav.style.left = '-1000px';
            mobileMenuBg.style.opacity = '0';
            mobileMenuBg.style.height = '0vh';
            mobileMenuBtnSpan[2].style.opacity = '1';
            mobileMenuBtnSpan[0].style.transform = 'rotate(0deg)';
            mobileMenuBtnSpan[0].style.top = '0px';
            mobileMenuBtnSpan[1].style.transform = 'rotate(0deg)';
        } else {
            mobileNav.style.left = '0px';
            mobileMenuBg.style.opacity = '1';
            mobileMenuBg.style.height = '100vh';
            mobileMenuBtnSpan[2].style.opacity = '0';
            mobileMenuBtnSpan[0].style.transform = 'rotate(45deg)';
            mobileMenuBtnSpan[0].style.top = '10px';
            mobileMenuBtnSpan[1].style.transform = 'rotate(-45deg)';
        }
    }

    function mobileGnbClick(e) {
        if(e.target.tagName == 'A' && window.innerWidth < 768) {
            mobileNav.style.left = '-1000px';
            mobileMenuBg.style.opacity = '0';
            mobileMenuBg.style.height = '0vh';
            mobileMenuBtnSpan[2].style.opacity = '1';
            mobileMenuBtnSpan[0].style.transform = 'rotate(0deg)';
            mobileMenuBtnSpan[0].style.top = '0px';
            mobileMenuBtnSpan[1].style.transform = 'rotate(0deg)';
        }
    }

    mobileMenuBtn.addEventListener('click', mobileMenuClick, false);
    mobileGnb.addEventListener('click', mobileGnbClick, false);
    window.addEventListener('resize', function() {
        if(window.innerWidth > 1079) {
            mobileNav.style.left = '420px';
        } else if(window.innerWidth > 767) {
            mobileNav.style.left = 'auto';
        } else {
            mobileNav.style.left = '-1000px';
        }
    }, false);
}

{ // 수익 계산기 관련 이벤트
    const textCalc = document.querySelector('.textCalc');
    const startBtn = document.querySelector('.textCalc>span');
    const testStart = document.querySelector('.testStart');
    const calcBtn = document.querySelector('.testStart>button');
    const testSelct = document.querySelectorAll('.testStart>label>select');
    const testEnd = document.querySelector('.testEnd');
    const endBtn = document.querySelector('.endBtn');
    const endInputList = document.querySelectorAll('.testEnd>label>input');

    function startBtnClick() {
        textCalc.style.display = 'none';
        testStart.style.display = 'block';
    }

    function calcBtnClick(e) {
        let breakNum;
        e.preventDefault()
        let i = 0;
        while(i < testSelct.length) {
            if(!+testSelct[i].value) {
                breakNum = i;
                break;
            }
            i++;
        }
        switch(breakNum) {
            case 0 : alert('창업유형을 선택해주세요.');
            break;
            case 1 : alert('지역을 선택해주세요.');
            break;
            case 2 : alert('규모를 선택해주세요.');
            break;
            case 3 : alert('비용을 선택해주세요.');
            break;
            default : testStart.style.display = 'none';
            testEnd.style.display = 'block';
        }
    }

    function endBtnClick(e) {
        e.preventDefault();
        let i = 0;
        let breakNum;
        while(i < endInputList.length) {
            if(!endInputList[i].value) {
                breakNum = i;
                break;
            }
            i++;
        }
        switch(breakNum) {
            case 0 : alert('이름을 입력해주세요.');
            break;
            case 1 : alert('번호를 입력해주세요.');
            break;
            default : testEnd.style.display = 'none';
            textCalc.style.display = 'block';
            alert('접수 되었습니다.');
        }
    }

    startBtn.addEventListener('click', startBtnClick, false);
    calcBtn.addEventListener('click', calcBtnClick, false);
    endBtn.addEventListener('click', endBtnClick, false);
}

{ // 출처공지 관련 이벤트
    const notice = document.querySelector('.notice');
    const noticeBtn = document.querySelector('.notice>span');

    noticeBtn.addEventListener('click', function() {
        notice.remove();
    }, false);
}
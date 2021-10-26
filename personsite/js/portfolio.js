{ // 사이드 헤더 관련 이벤트
    const header = document.querySelector('header');
    const headerMenuBtn = document.querySelector('.headerMenuBtn');
    const headerMenuBtnSpan = document.querySelectorAll('.headerMenuBtn>span');
    const mouseBall = document.querySelector('.mouseBall');
    const nav = document.querySelector('nav');
    const documentOpacity = document.querySelector('.documentOpacity');
    const navMenu = document.querySelectorAll('.gnb a');


    function headerMenuBtnClick() {
        const menuPositionX = window.innerWidth > 1079 ? 40 : 20;
        if(headerMenuBtn.style.left == (nav.clientWidth - menuPositionX - headerMenuBtn.clientWidth) + 'px') {
            headerMenuBtn.style.left = menuPositionX + 'px';
            headerMenuBtnSpan.forEach(function(item, index) {
                headerMenuBtnSpan[index].style.float = 'left';
            });
            nav.style.left = '-100%';
            documentOpacity.style.opacity = '0';
            documentOpacity.style.zIndex = '-100';
        } else {
            headerMenuBtn.style.left = (nav.clientWidth - menuPositionX - headerMenuBtn.clientWidth) + 'px';
            headerMenuBtnSpan.forEach(function(item, index) {
                headerMenuBtnSpan[index].style.float = 'right';
            });
            nav.style.left = '0px';
            documentOpacity.style.opacity = '1';
        }
    }

    function headerMenuResize() {
        const menuPositionX = window.innerWidth > 1079 ? 40 : 20;  
        headerMenuBtn.style.left = menuPositionX + 'px';
        headerMenuBtnSpan.forEach(function(item, index) {
            headerMenuBtnSpan[index].style.float = 'left';
        });
        nav.style.left = '-100%';
        documentOpacity.style.opacity = '0';
    }

    function menuClick(e) {
        if(e.target.tagName == 'A') {
            navMenu.forEach(function(item, index) {
                navMenu[index].className = '';
            });
            e.target.className = 'select';
        }
    }


    setTimeout(function() {
        mouseBall.style.transition = 'all 1.5s'
        mouseBall.style.opacity = '0';
        mouseBall.style.top = '55px';
        setTimeout(function() {
            mouseBall.style.transition = 'none';
            mouseBall.style.opacity = '1';
            mouseBall.style.top = '17px'
        }, 1500);

        setInterval(function() {
            mouseBall.style.transition = 'all 1.5s'
            mouseBall.style.opacity = '0';
            mouseBall.style.top = '55px';
            setTimeout(function() {
                mouseBall.style.transition = 'none';
                mouseBall.style.opacity = '1';
                mouseBall.style.top = '17px'
            }, 1500);
        }, 1550);
    }, 0);

    headerMenuBtn.addEventListener('click', headerMenuBtnClick, false);
    nav.addEventListener('click', menuClick, false);
    window.addEventListener('resize', headerMenuResize, false);
}

{ // 텍스트 까꿍 애니메이션
    const backToBottomBox = document.querySelector('.backToBottomBox');
    backToBottomBox.style.position = 'relative';

    const backToBottomBg = document.querySelector('.backToBottomBg');
    backToBottomBg.style.position = 'absolute';
    backToBottomBg.style.backgroundColor = '#fff';
    backToBottomBg.style.zIndex = '80';
    backToBottomBg.style.borderBottom = '2px solid black';

    const backToBottomMain = document.querySelector('.backToBottomMain');
    backToBottomMain.style.position = 'relative';
    backToBottomMain.style.display = 'block';
    backToBottomMain.style.transform = 'translateX(-' + backToBottomMain.clientWidth + 'px)'
    backToBottomMain.style.opacity = '0';
    backToBottomMain.style.zIndex = '90';


    const backToBottom = document.querySelector('.backToBottom');
    backToBottom.style.position = 'absolute';
    backToBottom.style.right = '0px';
    backToBottom.style.bottom = '0px';
    backToBottom.style.transition = 'bottom 0.5s';
    backToBottom.style.zIndex = '-100';


    window.addEventListener('load', function() {
        setTimeout(function() {
            backToBottomMain.style.transition = 'all 0.5s';
            backToBottomMain.style.transform = 'translateX(0px)'
            backToBottomMain.style.opacity = '1';
            backToBottom.style.bottom = '-' + backToBottom.clientHeight + 'px';
        }, 1500);
    }, false);

    window.addEventListener('resize', function() {
        backToBottom.style.bottom = '-' + backToBottom.clientHeight + 'px';
    }, false);
}

{ // 명함 긁기 이벤트
    const header = document.querySelector('header');
    const namecardScratch = document.querySelector('.namecardScratch');
    const namecardHide = document.querySelector('.namecardHide');
    const namecard = document.querySelector('.namecard');
    const getCoin = document.querySelector('.getCoin');
    let ctx = namecardHide.getContext('2d');


    function namecardHideEvent() {
        namecardHide.style.position = 'absolute';
        namecardHide.style.top = namecardHide.style.left = 0;
        namecardHide.width = namecard.clientWidth;
        namecardHide.height = namecard.clientHeight;
        namecardScratch.style.height = namecard.clientHeight + 'px';
        namecardHide.style.zIndex = '1';
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, namecard.clientWidth, namecard.clientHeight);
    }

    window.addEventListener('load', namecardHideEvent, false);


    getCoin.style.zIndex = '50';

    namecardScratch.style.position = 'absolute';

    namecard.style.position = 'absolute';
    namecard.style.top = namecard.style.top = '0';
    namecard.style.zIndex = '-1';


    function coinMove(e) {
        const namecardX = namecard.getBoundingClientRect().left;
        const namecardY = namecard.getBoundingClientRect().top;
        getCoin.style.top = (e.clientY - namecardY - getCoin.clientHeight / 2) + 'px';
        getCoin.style.left = (e.clientX - header.clientWidth - (namecardScratch.getBoundingClientRect().left - header.clientWidth)) + 'px';

        const canvasX =  namecardScratch.getBoundingClientRect().left;
        const canvasY =  namecardScratch.getBoundingClientRect().top;
        const mouseX = e.clientX - canvasX - getCoin.clientWidth / 2;
        const mouseY = e.clientY - canvasY - getCoin.clientHeight / 2;
        ctx.clearRect(mouseX, mouseY, 80, 80);
    }

    let coinClickCount = 0;
    function coinClick(e) {
        if(window.innerWidth >= 1080) {
            coinClickCount = coinClickCount == 0 ? 1 : 0;
            if(coinClickCount) {
                getCoin.setAttribute('src', 'images/Coin_get.png');
                document.addEventListener('mousemove', coinMove, false);
            } else {
                document.removeEventListener('mousemove', coinMove, false);
            }
        } else {
            const canvasX =  namecardScratch.getBoundingClientRect().left;
            const canvasY =  namecardScratch.getBoundingClientRect().top;
            let coinX;
            let coinY;
            let animationCount = 0;
            let coinMoveY = 10;
            let coinMoveX = '100%';
            let breakCount;
            setInterval(function() {
                coinX = getCoin.getBoundingClientRect().left - canvasX;
                coinY = getCoin.getBoundingClientRect().top - canvasY;
                ctx.clearRect(coinX, coinY, 80, 80);
            }, 10);
            getCoin.setAttribute('src', 'images/Coin_get.png');
            getCoin.style.transition = 'left 0.5s';
            getCoin.style.left = '100%'
            getCoin.style.top = '0';

            coinMoveEvent = setInterval(function() {
                getCoin.style.top = coinMoveY * animationCount + '%';
                getCoin.style.left = coinMoveX == '0%' ? coinMoveX = '100%' : coinMoveX = '0%';
                animationCount++;
                if(animationCount > 8) clearInterval(coinMoveEvent) ;
            }, 600);
            getCoin.style.left = '100%';
        }
    }

    getCoin.addEventListener('mousedown', coinClick, false);
    window.addEventListener('resize', function() {
        namecardHide.width = namecard.clientWidth;
        namecardHide.height = namecard.clientHeight;
    }, false);
}
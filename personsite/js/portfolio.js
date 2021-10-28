const html = document.querySelector('html');
let noScroll;

{ // 사이드 헤더 관련 이벤트
    const header = document.querySelector('header');
    const headerMenuBtn = document.querySelector('.headerMenuBtn');
    const headerMenuBtnSpan = document.querySelectorAll('.headerMenuBtn>span');
    const mouseBall = document.querySelector('.mouseBall');
    const nav = document.querySelector('nav');
    const documentOpacity = document.querySelector('.documentOpacity');
    const navMenu = document.querySelectorAll('.gnb a');
    const sectionList = document.querySelectorAll('main>section');
    const currentLocation = document.querySelector('.currentLocation>strong');
    const skill = document.querySelector('.skill');


    function headerMenuBtnClick() {
        const menuPositionX = window.innerWidth > 1199 ? 40 : 20;
        if(headerMenuBtn.style.left == (nav.clientWidth - menuPositionX - headerMenuBtn.clientWidth) + 'px') {
            headerMenuBtn.style.left = menuPositionX + 'px';
            headerMenuBtnSpan.forEach(function(item, index) {
                headerMenuBtnSpan[index].style.float = 'left';
            });
            nav.style.left = '-100%';
            documentOpacity.style.opacity = '0';
            documentOpacity.style.right = '-100%'
        } else {
            headerMenuBtn.style.left = (nav.clientWidth - menuPositionX - headerMenuBtn.clientWidth) + 'px';
            headerMenuBtnSpan.forEach(function(item, index) {
                headerMenuBtnSpan[index].style.float = 'right';
            });
            nav.style.left = '0px';
            documentOpacity.style.right = '0'
            documentOpacity.style.opacity = '1';
        }
    }

    function headerMenuResize() {
        const menuPositionX = window.innerWidth > 1199 ? 40 : 20;  
        headerMenuBtn.style.left = menuPositionX + 'px';
        headerMenuBtnSpan.forEach(function(item, index) {
            headerMenuBtnSpan[index].style.float = 'left';
        });
        nav.style.left = '-100%';
        documentOpacity.style.opacity = '0';
    }

    function menuClick(e) {
        html.style.scrollBehavior = 'smooth';
        clearInterval(noScroll);
        skill.style.position = 'static'
        const menuPositionX = window.innerWidth > 1199 ? 40 : 20;
        if(e.target.tagName == 'A' && window.innerWidth < 1200) {
            headerMenuBtn.style.left = menuPositionX + 'px';
            headerMenuBtnSpan.forEach(function(item, index) {
                headerMenuBtnSpan[index].style.float = 'left';
            });
            nav.style.left = '-100%';
            documentOpacity.style.opacity = '0';
            documentOpacity.style.right = '-100%'
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


    function scrollNavi() {
        let i = 0;
        while(i < sectionList.length) {
            if(window.scrollY > window.pageYOffset + sectionList[i].getBoundingClientRect().top - 500) {
                navMenu.forEach(function(item, index) {
                    navMenu[index].className = '';
                    navMenu[i].className = 'select';
                    currentLocation.innerHTML = navMenu[i].innerHTML;
                });
                historySection = navMenu[i];
            }
            i++;
        }
    }
    headerMenuBtn.addEventListener('click', headerMenuBtnClick, false);
    nav.addEventListener('click', menuClick, false);
    window.addEventListener('resize', headerMenuResize, false);
    window.addEventListener('scroll', scrollNavi, false);
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
        }, 500);
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
    const home = document.querySelector('.home');
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
                getCoin.style.transition = 'none';
                getCoin.setAttribute('src', './images/Coin_get.png');
                document.addEventListener('mousemove', coinMove, false);
            } else {
                document.removeEventListener('mousemove', coinMove, false);
                getCoin.setAttribute('src', './images/Coin.png');
                getCoin.style.transition = 'all 0.5s';
                getCoin.style.top = '10%';
                getCoin.style.left = '80%';
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
            let nowScroll = window.scrollY;
            setInterval(function() {
                const removeArea = window.innerWidth < 1080 ? 80 : 40;
                coinX = getCoin.getBoundingClientRect().left - canvasX;
                coinY = getCoin.getBoundingClientRect().top - canvasY;
                ctx.clearRect(coinX, coinY + (window.scrollY - nowScroll), removeArea, removeArea);
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

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    window.addEventListener('resize', function() {
        if(windowHeight != window.innerHeight) return false;
        namecardHide.width = namecard.clientWidth;
        namecardHide.height = namecard.clientHeight;
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, namecard.clientWidth, namecard.clientHeight);
    }, false);

    window.addEventListener('scroll', function() {
        if(window.scrollY > home.clientHeight / 2 && window.innerWidth > 1080) {
            coinClickCount = 0;
            document.removeEventListener('mousemove', coinMove, false);
            getCoin.setAttribute('src', 'images/Coin.png');
            getCoin.style.transition = 'all 0.5s';
            getCoin.style.top = '10%';
            getCoin.style.left = '80%';
        }
    }, false);
}

{ // 스킬 관련 애니메이션
    const skill = document.querySelector('.skill');
    const introduce = document.querySelector('.introduce');
    const skillList = document.querySelectorAll('.skillList>li');
    const skillListBox = document.querySelector('.skillList');
    const skillInfo = document.querySelectorAll('.skillInfo');
    const renewal = document.querySelector('.renewal');

    function skillScrollAnimation() {
        if(window.innerWidth < 768) {
            skillList.forEach(function(item, index) {
                if(window.scrollY > window.pageYOffset + item.getBoundingClientRect().top - 500) {
                    const gaugeBox = item.firstChild.nextSibling.nextSibling.nextSibling;
                    const gaugeStick = item.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling;
                    const gaugePercent = item.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling;
                    gaugeStick.style.width = gaugeStick.getAttribute('percent');
                    const percentEvent = setInterval(function() {     
                        const percentText = Math.floor((gaugeStick.clientWidth + 4) / ((gaugeBox.clientWidth + 4) / 100)) + '%';        
                        gaugePercent.innerHTML = percentText;   
                        
                        if(percentText == gaugeStick.style.width) clearInterval(percentEvent);
                    }, 20);
                    return false;
                }
            });
        }
    }

    let zoomCount = 0;
    let zIndexMargin = 50;
    let mainskill = [];
    let noScrollClear;
    const translateMargin = -200;

    function skillZoomAnimation() {
        if(window.innerWidth < 768) return false;
        const headerHeight = window.innerWidth > 1199 ? 0 : 55;
        let i = 0;
        if(window.pageYOffset + skill.getBoundingClientRect().top - headerHeight < window.scrollY) {
            mainskill = [];
            html.style.scrollBehavior = 'auto';
            skill.style.position = 'fixed';
            skill.style.zIndex = '400';
            skill.style.left = window.innerWidth > 1199 ? '384px' : '0px';
            skill.style.top = window.innerWidth > 1199 ? '' : '55px' ;
            skillListBox.style.position = 'relative';
            skillListBox.style.perspective = '200px';
            skillListBox.style.perspectiveOrigin = '70% 60%';
            renewal.style.marginTop = '2000px';

            noScroll = setInterval(function() {
                if(skill.style.position == 'fixed') {
                    window.scrollTo(0, window.pageYOffset + introduce.getBoundingClientRect().top + introduce.clientHeight);
                } else {
                    window.scrollTo(0, window.pageYOffset + skill.getBoundingClientRect().top);
                }
            }, 0);

            while(i < 3) {
                mainskill.push(skillList[i]);
                i++;
            }

            mainskill.forEach(function(item, index) {
                item.style.opacity = '0.3';
                item.style.position = 'absolute';
                item.style.top = '50%';
                item.style.left = '50%';
                item.style.zIndex = zIndexMargin;
                zIndexMargin = zIndexMargin - 10;
            });
        }

        if(skill.style.position == 'fixed') {
            if( window.pageYOffset + introduce.getBoundingClientRect().top + introduce.clientHeight < window.scrollY) {
                zoomCount += 4;
            } else {
                zoomCount -= 4;
            }

    
            mainskill.forEach(function(item, index) {
                item.style.transform = 'translate3d(-50%, -70%, ' + (zoomCount + (translateMargin * index)) +'px)';
                if(item.style.transform == 'translate3d(-50%, -70%, 4px)') {
                    item.style.opacity = '1';
                    const gaugeBox = item.firstChild.nextSibling.nextSibling.nextSibling;
                    const gaugeStick = item.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling;
                    const gaugePercent = item.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling;
                    gaugeStick.style.width = gaugeStick.getAttribute('percent');
                    const percentEvent = setInterval(function() {     
                        const percentText = Math.floor((gaugeStick.clientWidth + 4) / ((gaugeBox.clientWidth + 4) / 100)) + '%';        
                        gaugePercent.innerHTML = percentText;   
                        
                        if(percentText == gaugeStick.style.width) clearInterval(percentEvent);
                    }, 20);
                } else if(item.style.transform == 'translate3d(-50%, -70%, 0px)') {
                    item.style.opacity = '0.3';
                }

                if(mainskill[2].style.transform == 'translate3d(-50%, -70%, 212px)') {
                    window.removeEventListener('scroll', skillZoomAnimation);
                    clearInterval(noScroll);
                    skill.style.position = 'static';
                    skill.style.left = '384px';
                    skill.style.height = 'auto';
                    skillListBox.style.position = 'relative';
                    skillListBox.style.perspective = '0';
                    skillListBox.style.perspectiveOrigin = '0% 0%';
                    renewal.style.marginTop = '0px';

                    skillList.forEach(function(item, index) {
                        item.style.opacity = '1';
                        item.style.position = 'static';
                        item.style.transform = 'translate3d(0, 0, 0)';
                        const gaugeBox = item.firstChild.nextSibling.nextSibling.nextSibling;
                        const gaugeStick = item.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.nextSibling;
                        const gaugePercent = item.firstChild.nextSibling.nextSibling.nextSibling.firstChild.nextSibling;
                        gaugeStick.style.width = gaugeStick.getAttribute('percent');
                        const percentEvent = setInterval(function() {     
                            const percentText = Math.floor((gaugeStick.clientWidth + 4) / ((gaugeBox.clientWidth + 4) / 100)) + '%';        
                            gaugePercent.innerHTML = percentText;   
                            
                            if(percentText == gaugeStick.style.width) clearInterval(percentEvent);
                        }, 20);
                    });

                    skillInfo.forEach(function(item, index) {
                        item.style.display = 'none';
                    });

                    window.scrollTo(0, window.pageYOffset + skill.getBoundingClientRect().top);
                    html.style.scrollBehavior = 'smooth';
                }

                if(mainskill[0].style.transform == 'translate3d(-50%, -70%, 0px)') {
                    clearInterval(noScroll);
                    skill.style.position = 'static';
                    skill.style.left = '384px';
                    skillListBox.style.position = 'relative';
                    skillListBox.style.perspective = '0';
                    skillListBox.style.perspectiveOrigin = '0% 0%';

                    html.style.scrollBehavior = 'smooth';
                }
            });
        }
    }


    if(window.innerWidth > 767) {
        window.addEventListener('scroll', skillZoomAnimation, false);
    } else {
        window.removeEventListener('scroll', skillZoomAnimation);
    }

    window.addEventListener('resize', function() {
        const windowWidth = window.innerWidth;
        if(skill.style.position == 'fixed') {
            if(windowWidth > 1199) {
                window.addEventListener('scroll', skillZoomAnimation, false);
                skill.style.left = window.innerWidth > 1199 ? '384px' : '0px';
                skill.style.top = window.innerWidth > 1199 ? '' : '55px' ;
            } else if(windowWidth > 767) {
                window.addEventListener('scroll', skillZoomAnimation, false);
                skill.style.left = window.innerWidth > 1199 ? '384px' : '0px';
                skill.style.top = window.innerWidth > 1199 ? '' : '55px' ;
            } else {
                window.removeEventListener('scroll', skillZoomAnimation);
                clearInterval(noScroll)
                skill.style.position = 'static';
                skill.style.left = '384px';
                skillListBox.style.position = 'relative';
                skillListBox.style.perspective = '0';
                skillListBox.style.perspectiveOrigin = '0% 0%';

                skillInfo.forEach(function(item, index) {
                    item.style.display = 'none';
                });
            }
        }
    }, false);
    window.addEventListener('scroll', skillScrollAnimation, false);
}

{ // 리뉴얼포폴 관련 이벤트
    const renewalList = document.querySelector('.renewalList');
    const renewalModal = document.querySelector('.renewalModal');
    const modalWrap = document.querySelector('.modalWrap');
    const exitBtn = document.querySelector('.exitBtn');
    const goWebsite = document.querySelector('.goWebsite');
    const useColor = document.querySelectorAll('.useColor');
    const modalDataArr = [];
    
    useColor.forEach(function(item, index) {
        item.style.backgroundColor = item.getAttribute('mainColor');
    });

    { // 모달 관련 이벤트
        function detailsClick(e) {
            if(e.target.parentNode.className == 'details') {
                const modalData = e.target.parentNode.parentNode.nextSibling.nextSibling.nextSibling.nextSibling.children; // modalData 후손 선택
                let i = 0;
                while(i < modalData.length) {
                    modalDataArr.push(modalData[i].cloneNode(true));
                    modalWrap.appendChild(modalDataArr[i]);
                    i++;
                }
                renewalModal.style.opacity = '1';
                renewalModal.style.width = '100vw';
                renewalModal.style.height = '100vh';

                modalWrap.style.display = 'block';
                modalWrap.style.opacity = '1';
            }
        }

        function exitDetails(e) {
            if(e.target.tagName == 'A' || e.target == exitBtn || e.target.parentNode == exitBtn) {
                modalDataArr.forEach(function(item, index) {
                    item.remove();
                });
                let i = 0;
                const modalDataArrLength = modalDataArr.length;
                while(i < modalDataArrLength) {
                    modalDataArr.pop();
                    i++;
                }
                renewalModal.style.opacity = '0';
                renewalModal.style.width = '0px';
                renewalModal.style.height = '0px';

                modalWrap.style.opacity = '0';
                modalWrap.style.display = 'none';
            }
        }

        renewalList.addEventListener('click', detailsClick, false);
        modalWrap.addEventListener('click', exitDetails, false);
    }

    { // 슬라이드 관련 이벤트

        const slideBtn = document.querySelector('.slideBtn');
        let slideEvent;


        function slideInterval() {
            const portfolioList = document.querySelectorAll('.renewalList>li');
            renewalList.style.left = '-133%';
            renewalList.style.transition = 'all 0.5s';
            setTimeout(function() {
                renewalList.style.left = '0px';
                renewalList.appendChild(portfolioList[0]);
                renewalList.style.transition = 'none';
            }, 500);
        }

        function slideCheck() {
            if(window.innerWidth < 768) {
                clearInterval(slideEvent);
            } else {
                clearInterval(slideEvent);
                slideEvent = setInterval(slideInterval, 5000);
            }
        }

        function slideBtnClick(e) {
            if(e.target.className == 'nextBtn' || e.target.parentNode.className == 'nextBtn') {
                clearInterval(slideEvent);
                const portfolioList = document.querySelectorAll('.renewalList>li');
                renewalList.style.left = '-133%';
                renewalList.style.transition = 'all 0.5s';
                setTimeout(function() {
                    renewalList.style.left = '0px';
                    renewalList.appendChild(portfolioList[0]);
                    renewalList.style.transition = 'none';
                }, 500);
                slideEvent = setInterval(slideInterval, 5000);
            } else if(e.target.className == 'prevBtn' || e.target.parentNode.className == 'prevBtn') {
                renewalList.style.transition = 'none';
                clearInterval(slideEvent);
                const portfolioList = document.querySelectorAll('.renewalList>li');
                renewalList.insertBefore(portfolioList[2], renewalList.firstChild.nextSibling);
                renewalList.style.left = '-133%';

                setTimeout(function() {
                    renewalList.style.transition = 'all 0.5s';
                    renewalList.style.left = '0';
                }, 10);

                slideEvent = setInterval(slideInterval, 5000);
            }
        }

        slideBtn.addEventListener('click', slideBtnClick, false);
        window.addEventListener('load', slideCheck, false);
        window.addEventListener('resize', slideCheck, false);
    }
}

{ // 새로고침시 맨 위로
    window.addEventListener('load', function() {
        setTimeout(function() {
            window.scrollTo(0, 0);
        }, 200);
    }, false);
}
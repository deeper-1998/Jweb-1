window.onload = function() {
    var add = document.getElementsByClassName("add");
    var addIcon = document.getElementsByClassName("addIcon");
    var addTxt = document.getElementsByClassName("addTxt");

    var i = 0;

    while(i < add.length) {
        add[i].addEventListener("mouseover", iconColor, false);
        add[i].addEventListener("mouseout", iconWhite, false);
        i++;
    }

    function iconColor(e) {
        if(e.target.nodeName == "DIV") {
            e.target.children[0].setAttribute("src", "./images/add_blue.png");
            e.target.children[1].style.color = "#00adef";
        }
    }

    function iconWhite(e) {
        if(e.target.nodeName == "DIV") {
            e.target.children[0].setAttribute("src", "./images/add.png");
            e.target.children[1].style.color = "white";
        }
    }
};


jQuery(function($){
    $(".emojiBtn").click(function(){
        $(".emojiList").stop().slideToggle();
    });
});
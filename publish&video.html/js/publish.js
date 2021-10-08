//이모티콘 나오기
jQuery(function($){
    $(".emojiBtn").click(function(){
        $(".emojiList").stop().slideToggle();
    });
});
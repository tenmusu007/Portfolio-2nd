
// $(function(){
//     var $ftr = $('#footer');
//     let $box = $(".box")
//   if( window.innerHeight > $ftr.offset().top + $ftr.outerHeight() ){
//     $ftr.attr({'style': 'position:fixed; top:' + (window.innerHeight - $ftr.outerHeight()) + 'px;' });
//     $box.css({'display':'flex', 'justify-content':'end'});
//   }
// });
$('a[href^="#"]').on("click",function(){
    var adjust = 0;
    // スクロールの速度（ミリ秒）
    var speed = 400;
    // アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
    var href= $(this).attr("href");
    // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
    var position = target.offset().top + adjust;
    // スムーススクロール linear（等速） or swing（変速）
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
})
$(".sign-btn").on("click",function(){
    $(".box-modal").removeClass("active");
})
$(".sign").on("click",function(){
    $(".box-modal").addClass("active");
})
$(".tab1").on("click",function(){
    $(".tab-sent-box").addClass("active");
    $(".tab-sent-box1").removeClass("active");
    $(".tab-sent-box2").removeClass("active");
})
$(".tag2").on("click",function(){
    $(".tab-sent-box").removeClass("active");
    $(".tab-sent-box1").addClass("active");
    $(".tab-sent-box2").removeClass("active");
})
$(".tag3").on("click",function(){
    $(".tab-sent-box1").removeClass("active");
    $(".tab-sent-box2").addClass("active");
})
$(document).ready(function() {
    $(".regular").slick({
      autoplay: true, // 自動再生を設定
      autoplaySpeed: 4000, // 自動再生のスピード（ミリ秒単位）
      dots: true // ドットインジケーターの表示
    });
});
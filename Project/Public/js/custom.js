jQuery(document).ready(function ($) {
    $('.counter').counterUp({
        time: 5000
    })
})
// window.onscroll = function() {myFunction()};

// var header = document.getElementById("menu-cate");
// var sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }



$(document).ready(function(){
    // $("#menu-cate").offsetTop(function(){
    //     alert("ASdadasd")
    // })
    $("#event-img-1").hover(function(){
        $("#event-img-1").attr("src","./img/black.png");
        $("#event-img-1").attr("css","position:absolute");
        $(".ga-le").show();
        $(".ga-le1").show();
    });
    $("#event-img-1").mouseleave(function(){
        $(".ga-le").hide();
        $(".ga-le1").hide();
        $("#event-img-1").attr("src","./img/pic1.jpg");
    });
    $("#event-img-2").hover(function(){
        $("#event-img-2").attr("src","./img/black.png");
        $("#event-img-2").attr("css","position:absolute");
        $(".ga-le").show();
        $(".ga-le1").show();
    });
    $("#event-img-2").mouseleave(function(){
        $(".ga-le").hide();
        $(".ga-le1").hide();
        $("#event-img-2").attr("src","./img/pic2.jpg");
    });
    $("#event-img-3").hover(function(){
        $("#event-img-3").attr("src","./img/black.png");
        $("#event-img-3").attr("css","position:absolute");
        $(".ga-le").show();
        $(".ga-le1").show();
    });
    $("#event-img-3").mouseleave(function(){
        $(".ga-le").hide();
        $(".ga-le1").hide();
        $("#event-img-3").attr("src","./img/pic3.jpg");
    });
    $("#event-img-4").hover(function(){
        $("#event-img-4").attr("src","./img/black.png");
        $("#event-img-4").attr("css","position:absolute");
        $(".ga-le").show();
        $(".ga-le1").show();
    });
    $("#event-img-4").mouseleave(function(){
        $(".ga-le").hide();
        $(".ga-le1").hide();
        $("#event-img-4").attr("src","./img/pic4.jpg");
    });
    $("#event-img-5").hover(function(){
        $("#event-img-5").attr("src","./img/black.png");
        $("#event-img-5").attr("css","position:absolute");
        $(".ga-le").show();
        $(".ga-le1").show();
    });
    $("#event-img-5").mouseleave(function(){
        $(".ga-le").hide();
        $(".ga-le1").hide();
        $("#event-img-5").attr("src","./img/pic5.jpg");
    });
    $("#event-img-6").hover(function(){
        $("#event-img-6").attr("src","./img/black.png");
        $("#event-img-6").attr("css","position:absolute");
        $(".ga-le").show();
        $(".ga-le1").show();
    });
    $("#event-img-6").mouseleave(function(){
        $(".ga-le").hide();
        $(".ga-le1").hide();
        $("#event-img-6").attr("src","./img/pic6.jpg");
    });
    $("#event-img-7").hover(function(){
        $("#event-img-7").attr("src","./img/black.png");
        $("#event-img-7").attr("css","position:absolute");
        $(".ga-le").show();
        $(".ga-le1").show();
    });
    $("#event-img-7").mouseleave(function(){
        $(".ga-le").hide();
        $(".ga-le1").hide();
        $("#event-img-7").attr("src","./img/pic7.jpg");
    });
    $("#event-img-8").hover(function(){
        $("#event-img-8").attr("src","./img/black.png");
        $("#event-img-8").attr("css","position:absolute");
        $(".ga-le").show();
        $(".ga-le1").show();
    });
    $("#event-img-8").mouseleave(function(){
        $(".ga-le").hide();
        $(".ga-le1").hide();
        $("#event-img-8").attr("src","./img/pic8.jpg");
    });
})

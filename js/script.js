$(document).ready(function () {
    $('#btnmenu').click(function (e) {
        e.preventDefault();
        $('#menutop').slideToggle(500,"linear");
    });

});
$(window).scroll(function () {
    var _scrollTop = $(window).scrollTop();
    if (_scrollTop > 72) {
        $("#main-menu").addClass("fix-top");
        return false;
    } else {
        $("#main-menu").removeClass("fix-top");
        return false;
    }
   });

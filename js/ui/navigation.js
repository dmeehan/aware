$(window).scroll(
    {
        previousTop: 0
    }, 
    function () {
    var currentTop = $(window).scrollTop();
    if (currentTop < this.previousTop) {
        $(".module.navigation").fadeIn();
        $("body").removeClass('mobile-nav');
    } else {
        $(".module.navigation").fadeOut();
        $("body").removeClass('mobile-nav');
    }
    this.previousTop = currentTop;
});

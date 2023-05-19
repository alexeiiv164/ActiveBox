$(function() {
    
    // fixed header

    let header = $("#header");
    let home = $("#home");
    let homeH = home.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle")
    checkScroll(scrollPos, homeH);

    $(window).on("scroll resize", function() {
        let homeH = home.innerHeight();
        scrollPos = $(this).scrollTop();
        checkScroll(scrollPos, homeH);
    });

    function checkScroll(scrollPos, homeH) {
        if(scrollPos > homeH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    } 

    // smooth scroll

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault(); 

        let elementID = $(this).data('scroll');
        let elementOfset = $(elementID).offset().top;
        
        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOfset - 80
        }, 500)
    });

    // nav toggle

    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show")
    });

});
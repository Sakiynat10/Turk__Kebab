$(document).ready(function () {
    $("#team-carousel").owlCarousel({
        margin: 20,
        loop: true,
        items: 4,
        navText: ['<img src="../assets/images/prev.svg"/>', '<img src="../assets/images/next.svg"/>'],
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
            1200: {
                items: 4,
            },
        }
    });
});

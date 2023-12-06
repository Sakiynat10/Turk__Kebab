$(document).ready(function () {
    $("#team-carousel").owlCarousel({
        margin: 20,
        loop: true,
        nav:true,
        items: 4,
        navText: ['<img src="assets/images/prev.svg"/>', '<img src="assets/images/next.svg">'],
        autoplay: true,
        dots:false,
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



$(document).ready(function () {
    $("#owl-carousel").owlCarousel({
        margin: 20,
        loop: true,
        nav:true,
        items: 4,
        navText: ['<img src="assets/images/prev.svg"/>', '<img src="assets/images/next.svg">'],
        autoplay: true,
        dots:false,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1,
            },
            700: {
                items: 2,
            },
            1200: {
                items: 3,
            },
        }
    });
});

$(document).ready(function () {
    $("#gallery-carousel").owlCarousel({
        margin: 10,
        innerWidth:800,
        loop: true,
        nav:true,
        items: 4,
        navText: ['<img src="assets/images/prev.svg"/>', '<img src="assets/images/next.svg">'],
        autoplay: true,
        dots:false,
        autoplayTimeout: 2000,
        responsive: {
            0: {
                items: 1,
            },
            700: {
                items: 2.5,
            },
            1000: {
                items: 3.5,
            },
        },
    });
});



window.addEventListener("scroll", function () {
    shrink();
  });
  
  let navbar = document.getElementById("navbar");
  
  function shrink() {
    if (scrollY > 100) {
      navbar.classList.add("navbar-shrink");
    } else {
          navbar.classList.remove("navbar-shrink");
      }
  }

  window.addEventListener("scroll", function () {
    toggleBacktop();
  });
  
  let backtop = document.getElementById("backtop");
  
  function toggleBacktop() {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      backtop.classList.add('backtop-show')
    } else {
      backtop.classList.remove('backtop-show')
    }
  }



const loading = document.getElementById("loading");

const loadingDuration = 2000; // 2s

setTimeout(() => {
  loading.classList.add('loading-none');
}, loadingDuration);
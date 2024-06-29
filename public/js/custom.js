/* -------------------------------------------------------



------------------------------------------------------- */
$(function () {
    "use strict";
    var wind = $(window);
    
    // ScrollIt
    $.scrollIt({
        upKey: 38, // key code to navigate to the next section
        downKey: 40, // key code to navigate to the previous section
        easing: 'swing', // the easing function for animation
        scrollTime: 600, // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null, // function(pageIndex) that is called when page is changed
        topOffset: -70 // offste (in px) for fixed top navigation
    });
    
    
    // Navbar scrolling background
    wind.on("scroll", function () {
        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar"),
            logo = $(".navbar .logo> img");
        if (bodyScroll > 100) {
            navbar.addClass("nav-scroll");
            logo.attr('src', 'img/runnway.png');
        } else {
            navbar.removeClass("nav-scroll");
            logo.attr('src', 'img/runnway.png');
        }
    });
    
    
    // Close navbar-collapse when a  clicked
    // $(".navbar-nav e.dropdown-item a").on('click', function () {
    //     $(".navbar-collapse").rmoveClass("show");
    // });
    
    
    // Sections background image from data background
    var pageSection = $(".bg-img, section");
    pageSection.each(function (indx) {
        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });

    
    // Animations
    
    animate_box();
    
    // YouTubePopUp
    $("a.vid").YouTubePopUp();
    
    
    // Testimonials owlCarousel *
    $('.testimonials .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        mouseDrag: true,
        autoplay: false,
        dots: true,
        nav: false,
        navText: ["<span class='lnr ti-angle-left'></span>", "<span class='lnr ti-angle-right'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    
    // Rooms 1 owlCarousel *
    $('.rooms1 .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        mouseDrag: true,
        autoplay: false,
        dots: true,
        autoplayHoverPause: true,
        nav: false,
        navText: ["<span class='lnr ti-angle-left'></span>","<span class='lnr ti-angle-right'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    
    // Rooms 2 owlCarousel *
    $('.rooms2 .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        mouseDrag: true,
        autoplay: false,
        dots: true,
        autoplayHoverPause: true,
        nav: false,
        navText: ["<span class='lnr ti-angle-left'></span>","<span class='lnr ti-angle-right'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    
    // Rooms 3 owlCarousel *
    $('.rooms3 .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        mouseDrag: true,
        autoplay: false,
        dots: true,
        autoplayHoverPause: true,
        nav: false,
        navText: ["<span class='lnr ti-angle-left'></span>","<span class='lnr ti-angle-right'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    
    // Rooms Page owlCarousel *
    $('.rooms-page .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        mouseDrag: true,
        autoplay: true,
        dots: false,
        nav: false,
        navText: ["<span class='lnr ti-angle-left'></span>","<span class='lnr ti-angle-right'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    
    // Pricing owlCarousel *
    $('.pricing .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        mouseDrag: true,
        autoplay: false,
        dots: true,
        autoplayHoverPause: true,
        nav: false,
        navText: ["<span class='lnr ti-angle-left'></span>","<span class='lnr ti-angle-right'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    });
    
    // News owlCarousel *
    $('.news .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        mouseDrag: true,
        autoplay: false,
        dots: false,
        nav: true,
        navText: ["<span class='lnr ti-angle-left'></span>","<span class='lnr ti-angle-right'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false
            },
            600: {
                items: 2,
                dots: true,
                nav: false
            },
            1000: {
                items: 3
            }
        }
    });
    
    // Team owlCarousel *
    $('.team .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        dots: true,
        mouseDrag: true,
        autoplay: false,
        nav: false,
        navText: ["<span class='lnr ti-angle-left'></span>","<span class='lnr ti-angle-right'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: true
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    
    // Clients owlCarousel *
    $('.clients .owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        mouseDrag: true,
        autoplay: true,
        dots: false,
        nav: false,
        navText: ["<span class='lnr ti-angle-left'></span>","<span class='lnr ti-angle-right'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                margin: 10,
                items: 3
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    });
    
    // Restaurant Menu owlCarousel
    restaurant_menu();
    
    
    // Accordion Box (for Faqs)
    if ($(".accordion-box").length) {
        $(".accordion-box").on("click", ".acc-btn", function () {
            var outerBox = $(this).parents(".accordion-box");
            var target = $(this).parents(".accordion");
            if ($(this).next(".acc-content").is(":visible")) {
                //return false;
                $(this).removeClass("active");
                $(this).next(".acc-content").slideUp(300);
                $(outerBox).children(".accordion").removeClass("active-block");
            } else {
                $(outerBox).find(".accordion .acc-btn").removeClass("active");
                $(this).addClass("active");
                $(outerBox).children(".accordion").removeClass("active-block");
                $(outerBox).find(".accordion").children(".acc-content").slideUp(300);
                target.addClass("active-block");
                $(this).next(".acc-content").slideDown(300);
            }
        });
    }
    
    
    // MagnificPopup Gallery
    $('.gallery').magnificPopup({
        delegate: '.popimg',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    image_zoom();
    $('.magnific-youtube, .magnific-vimeo, .magnific-custom').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 300,
        preloader: false,
        fixedContentPos: false
    });
    

    // Smooth Scrolling
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]').not('[href="#0"]').click(function (event) {
        // On-page links
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });
    
    
    
    // Select2
    $('.select2').select2({
        minimumResultsForSearch: Infinity,
    });
    
    
    // Datapicker
    jQuery(".datepicker").datepicker({
        orientation: "top"
    });
     
});


// Slider  
$(document).ready(function () {
    var owl = $('.header .owl-carousel');
    
    // Slider owlCarousel - (Inner Page Slider)
    $('.slider .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 5000,
        nav: false,
        navText: ['<i class="ti-angle-left" aria-hidden="true"></i>', '<i class="ti-angle-right" aria-hidden="true"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                dots: true
            },
            600: {
                dots: true
            },
            1000: {
                dots: true
            }
        }
    });
    
    // Slider owlCarousel (Homepage Slider)
    home_page_header_carousel();
    
});


// Preloader
$("#preloader").fadeOut(700);
	$(".preloader-bg").delay(700).fadeOut(700);
	var wind = $(window);


// Contact Form
var form = $('.contact__form'),
    message = $('.contact__msg'),
    form_data;
    // success function
    function done_func(response) {
        message.fadeIn().removeClass('alert-danger').addClass('alert-success');
        message.text(response);
        setTimeout(function () {
            message.fadeOut();
        }, 2000);
        form.find('input:not([type="submit"]), textarea').val('');
    }
    // fail function
    function fail_func(data) {
        message.fadeIn().removeClass('alert-success').addClass('alert-success');
        message.text(data.responseText);
        setTimeout(function () {
            message.fadeOut();
        }, 2000);
    }
    form.submit(function (e) {
        e.preventDefault();
        form_data = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: form_data
        }).done(done_func).fail(fail_func);
    });


// Slider Grid Background
  (function () {
    var imageElements = document.querySelectorAll('.grid-img');
    var itemElements = document.querySelectorAll('.grid-con');
    if (itemElements.length) {
      itemElements.forEach(function (item, index) {
        item.addEventListener('mouseenter', function () {
          imageElements.forEach(function (image) {
            image.classList.remove('grid-img-active');
          });
          itemElements.forEach(function (card) {
            card.classList.remove('grid-con-active');
          });
          item.classList.add('grid-con-active');
          imageElements[index].classList.add('grid-img-active');
        });
      });
    }
  })();

// Slider Grid Background owlCarousel *
    function home_page_header_carousel(){

        var pageSection = $(".bg-img, section");
        pageSection.each(function (indx) {
            if ($(this).attr("data-background")) {
                $(this).css("background-image", "url(" + $(this).data("background") + ")");
            }
        });
        var owl = $('.header .owl-carousel');
        $('.slider-fade .owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 5000,
            animateOut: 'fadeOut',
            nav: true,
            navText: ['<i class="ti-angle-left" aria-hidden="true"></i>', '<i class="ti-angle-right" aria-hidden="true"></i>'],
            responsiveClass: true,
            responsive: {
                0: {
                    dots: false
                },
                600: {
                    dots: false
                },
                1000: {
                    dots: true
                }
            }
        });
        owl.on('changed.owl.carousel', function (event) {
            var item = event.item.index - 2; // Position of the current item
            $('span').removeClass('animated fadeInUp');
            $('h4').removeClass('animated fadeInUp');
            $('h1').removeClass('animated fadeInUp');
            $('p').removeClass('animated fadeInUp');
            $('.butn-light').removeClass('animated fadeInUp');
            $('.butn-dark').removeClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('span').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('h4').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('.butn-light').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('.butn-dark').addClass('animated fadeInUp');
        });
    }

    function animate_box(){
        var contentWayPoint = function () {
            var i = 0;
            $('.animate-box').waypoint(function (direction) {
                if (direction === 'down' && !$(this.element).hasClass('animated')) {
                    i++;
                    $(this.element).addClass('item-animate');
                    setTimeout(function () {
                        $('body .animate-box.item-animate').each(function (k) {
                            var el = $(this);
                            setTimeout(function () {
                                var effect = el.data('animate-effect');
                                if (effect === 'fadeIn') {
                                    el.addClass('fadeIn animated');
                                } else if (effect === 'fadeInLeft') {
                                    el.addClass('fadeInLeft animated');
                                } else if (effect === 'fadeInRight') {
                                    el.addClass('fadeInRight animated');
                                } else {
                                    el.addClass('fadeInUp animated');
                                }
                                el.removeClass('item-animate');
                            }, k * 200, 'easeInOutExpo');
                        });
                    }, 100);
                }
            }, {
                offset: '85%'
            });
        };
        $(function () {
            contentWayPoint();
        });
    }

    function restaurant_menu(){
        $('.slider .owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 5000,
            nav: false,
            navText: ['<i class="ti-angle-left" aria-hidden="true"></i>', '<i class="ti-angle-right" aria-hidden="true"></i>'],
            responsiveClass: true,
            responsive: {
                0: {
                    dots: true
                },
                600: {
                    dots: true
                },
                1000: {
                    dots: true
                }
            }
        });
        
        
        // Restaurant Menu Tabs
        $(".restaurant-menu .tabs-icon").on("click", ".item", function () {
            $(".item").removeClass("active");
            var myID = $(this).attr("id");
            $(".restaurant-menu .cont").hide();
            $("#" + myID + "-content").fadeIn();
        });
        $(".restaurant-menu .tabs-icon").on("click", ".owl-item", function () {
            $(this).addClass("actived").siblings().removeClass("actived");
        });
        
    }

$(document).ready(function() {
// alert('ready');
	$(window).scroll(function() {
		// alert('scroll');
		
	    image_zoom();
	    $("body .animate-box").each(function() {
	        const position = $(this).offset().top;
	        const scroll = $(window).scrollTop();
	        const windowHeight = $(window).height();
	        if (scroll > position - windowHeight) {
	         $(this).addClass("fadeInLeft animated");
	        }
	        if (scroll < 100) {
	         $(this).removeClass("fadeInLeft animated");
	        }
	    });
	});
});
function image_zoom(){
    $(".img-zoom").magnificPopup({
        type: "image",
        closeOnContentClick: !0,
        mainClass: "mfp-fade",
        gallery: {
            enabled: !0,
            navigateByImgClick: !0,
            preload: [0, 1]
        }
    })
}

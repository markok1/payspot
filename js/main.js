const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-fade");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden-fade");
hiddenElements.forEach((el) => observer.observe(el));

// js for navbar
$(".navbar .lines").click(function (e) {
  e.preventDefault();
  if ($("body").hasClass("navbar_active")) {
    $("body").removeClass("navbar_active");
    $("body").removeClass("disable_scroll");
  } else {
    $("body").addClass("navbar_active");
    $("body").addClass("disable_scroll");
  }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

$(".navbar .for_mobile ul .dropdown_li_sm a").click(function (e) {
  if ($(window).width() < 900) {
    if (!$(this).parent().parent().parent().hasClass("ford")) {
      e.preventDefault();

      if ($(this).hasClass("dropdown_active")) {
        $(this).removeClass("dropdown_active");
        $(this).next("").css("max-height", "0px");
      } else {
        $(this).addClass("dropdown_active");
        var getheight = $(this).next().find(".boxes").height() + 50;
        $(this)
          .next("")
          .css("max-height", getheight + "px");
      }
    }
  }
});
$(".uskoro").click(function (e) {
  e.preventDefault();
});

$(".root").scroll(function () {
  if ($(this).scrollTop() > 100) {
    $("body").addClass("navbar_scrolled");
  } else {
    $("body").removeClass("navbar_scrolled");
  }
});
// js for navbar end

// js for header
$(".hero-slider").slick({
  // cssEase: "cubic-bezier(0.600, -0.400, 0.735, 0.045)",
  dots: true,
  arrows: false,
  infinite: true,
  speed: 2500,
  slidesToShow: 1,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 3000,
});

// js for about us
$(".about-us-slider").slick({
  cssEase: "cubic-bezier(0.600, -0.400, 0.735, 0.045)",
  dots: false,
  arrows: false,
  // prevArrow: $(".custom-prev"),
  // nextArrow: $(".custom-next"),
  infinite: true,
  speed: 2500,
  slidesToShow: 3,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 490,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

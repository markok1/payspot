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

// $(".for_mobile ul li").click(function (e) {
//   $(".active").removeClass("active");
//   $(this).addClass("active");
// });

$(document).ready(function () {
  $(".logo").on("click", function (event) {
    window.location.href = "index-cg.html";
  });
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

$(".navbar .for_mobile ul .dropdown_li_sm > a").click(function (e) {
  if ($(window).width() < 900) {
    if (!$(this).parent().parent().parent().hasClass("ford")) {
      e.preventDefault();

      if ($(this).hasClass("dropdown_active")) {
        $(this).removeClass("dropdown_active");
        $(this).next("").css("max-height", "0px");
      } else {
        $(".dropdown_active").next().css("max-height", "0px");
        $(".dropdown_active").removeClass("dropdown_active");
        $(this).addClass("dropdown_active");
        var getheight = $(this).next().find(".boxes").height() + 50;
        var submenuheight =
          $(this).next().find(".extended-boxes").height() + 10;
        var totalheight = 0;
        if (isNaN(submenuheight)) {
          totalheight = getheight;
        } else {
          totalheight = getheight + submenuheight;
        }
        $(this)
          .next("")
          .css("max-height", totalheight + "px");
      }
    }
  }
});
$(".sub-menu a").click(function (e) {
  if ($(window).width() < 900) {
    if (!$(this).parent().parent().parent().hasClass("extended-ford")) {
      e.preventDefault();

      if ($(this).hasClass("extended-dropdown-active")) {
        $(this).removeClass("extended-dropdown-active");
        $(this).next("").css("max-height", "0px");
      } else {
        $(".extended-dropdown-active").next().css("max-height", "0px");
        $(".extended-dropdown-active").removeClass("extended-dropdown-active");
        $(this).addClass("extended-dropdown-active");
        var getheight = $(this).next().find(".extended-boxes").height() + 50;
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
$(".uskoro-procitaj-vise").click(function (e) {
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
  autoplaySpeed: 2500,
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

$(document).ready(function () {
  if ($(".main-page").length > 0) {
    // var top0 = $("#hero").offset().top - 700;
    var top1 = $("#usluge").offset().top - 700;
    var top2 = $("#become-agent").offset().top - 700;
    var top3 = $("#about-us").offset().top - 700;

    $(".root").scroll(function () {
      var scrollPos = $(".root").scrollTop();
      // if (scrollPos >= top0 && scrollPos < top1) {
      //   $(".active").removeClass("active");
      //   $("#hero-in-view").addClass("active");
      // } else
      if (scrollPos >= top1 && scrollPos < top2) {
        $(".active").removeClass("active");
        $("#usluge-in-view").addClass("active");
      } else if (scrollPos >= top2 && scrollPos < top3) {
        $(".active").removeClass("active");
        $("#become-agent-in-view").addClass("active");
      } else if (scrollPos >= top3) {
        $(".active").removeClass("active");
        $("#about-us-in-view").addClass("active");
      }
    });
  }
});

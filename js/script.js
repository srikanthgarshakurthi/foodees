$(document).ready(function () {
  // icofont-close
  $(".hamburger-icon").on("click", function () {
    $("nav ul").css("display", "flex");
    if ($(".hamburger-icon i").hasClass("icofont-close")) {
      $("nav ul").hide();
      $(".hamburger-icon i").addClass("icofont-navigation-menu");
      $(".hamburger-icon i").removeClass("icofont-close");
    } else {
      $("nav ul").show();
      $(".hamburger-icon i").addClass("icofont-close");
      $(".hamburger-icon i").removeClass("icofont-navigation-menu");
    }
  });
  $("nav").on("click", function () {
    $("nav ul").hide();
    $(".hamburger-icon i").addClass("icofont-navigation-menu");
    $(".hamburger-icon i").removeClass("icofont-close");
  });
  particlesJS.load("home", "js/particles.config0.json");
});

$(function() {
  $(".mobileMenue").click(function() {
    $(".mobileNav").toggleClass("slide");
    $(".mobileMenue").toggleClass("slideMenue");
    $(".kasten img").toggleClass("pfeilDreher");
  })

  var indi = 1;
  $(".right").click(function() {
    next();
    console.log(indi);
  });
  $(".left").click(function() {
    prev();
    console.log(indi);
  });
  function next() {
    if (indi == 1) {
      $("#bild").hide().fadeIn(700).attr("src", "Slide_Pics/bild2.jpg");
      indi++;
    }
    else if (indi == 2) {
      $("#bild").hide().fadeIn(700).attr("src", "Slide_Pics/bild3.jpg");
      indi++;
    }
    else if (indi == 3) {
      $("#bild").hide().fadeIn(700).attr("src", "Slide_Pics/bild4.jpg");
      indi++;
    }
    else if (indi == 4) {
      $("#bild").hide().fadeIn(700).attr("src", "Slide_Pics/bild5.jpg");
      indi++;
    }
    else if (indi == 5) {
      $("#bild").hide().fadeIn(700).attr("src", "Slide_Pics/bild6.jpg");
      indi++;
    }
    else if (indi == 6) {
      $("#bild").hide().fadeIn(700).attr("src", "Slide_Pics/bild7.jpg");
      indi++;
    }
    else if (indi == 7) {
      $("#bild").hide().fadeIn(700).attr("src", "Slide_Pics/bild8.jpg");
      indi++;
    }
    else if (indi == 8) {
      $("#bild").hide().fadeIn(700).attr("src", "Slide_Pics/bild9.jpg");
      indi++;
    }
    else if (indi == 9) {
      $("#bild").hide().fadeIn(700).attr("src", "Slide_Pics/bild10.jpg");
      indi++;
    }
    else if (indi == 10) {
      $("#bild").hide().fadeIn(700).attr("src", "Slide_Pics/bild11.jpg");
      indi++;
    }
    else if (indi == 11) {
      $("#bild").hide().fadeIn(700).attr("src", "Slide_Pics/bild12.jpg");
      indi++;
    }
    else if (indi == 12) {
      $("#bild").hide().fadeIn(700).attr("src", "Slide_Pics/bild13.jpg");
      indi++;
    }
    else if (indi == 13) {
      $("#bild").hide().fadeIn(700).attr("src", "Slide_Pics/bild1.jpg");
      indi = 1;
    }
  }

  function prev() {
    if (indi == 1) {
      $("#bild").hide().fadeIn(700).attr("src", "Slide_Pics/bild13.jpg");
      indi = 13;
    }
    else if (indi == 2) {
      $("#bild").hide().fadeIn(700).attr("src", "Slide_Pics/bild1.jpg");
      indi--;
    }
    else if (indi == 3) {
      $("#bild").hide().fadeIn(700).attr("src", "Slide_Pics/bild2.jpg");
      indi--;
    }
    else if (indi == 4) {
      $("#bild").hide().fadeIn(700).attr("src", "Slide_Pics/bild3.jpg");
      indi--;
    }
    else if (indi == 5) {
      $("#bild").hide().fadeIn(700).attr("src", "Slide_Pics/bild4.jpg");
      indi--;
    }
    else if (indi == 6) {
      $("#bild").hide().fadeIn(700).attr("src", "Slide_Pics/bild5.jpg");
      indi--;
    }
    else if (indi == 7) {
      $("#bild").hide().fadeIn(700).attr("src", "Slide_Pics/bild6.jpg");
      indi--;
    }
    else if (indi == 8) {
      $("#bild").hide().fadeIn(700).attr("src", "Slide_Pics/bild7.jpg");
      indi--;
    }
    else if (indi == 9) {
      $("#bild").hide().fadeIn(700).attr("src", "Slide_Pics/bild8.jpg");
      indi--;
    }
    else if (indi == 10) {
      $("#bild").hide().fadeIn(700).attr("src", "Slide_Pics/bild9.jpg");
      indi--;
    }
    else if (indi == 11) {
      $("#bild").hide().fadeIn(700).attr("src", "Slide_Pics/bild10.jpg");
      indi--;
    }
    else if (indi == 12) {
      $("#bild").hide().fadeIn(700).attr("src", "Slide_Pics/bild11.jpg");
      indi--;
    }
    else if (indi == 13) {
      $("#bild").hide().fadeIn(700).attr("src", "Slide_Pics/bild12.jpg");
      indi--;
    }
  }
});

/* let dropdown = document.querySelector(".dropdown");
let menu = document.querySelector(".menu");
dropdown.addEventListener("click", () => {
  if (menu.classList.contains("all")) {
    menu.classList.toggle("all");
  } else {
    menu.classList.toggle("all");
  }
}); */

/* $(document).ready(function() {
  $("#myElement").click(function() {
    $(this).animate({
      opacity: "toggle",
      left: "+=50"
    }, "slow");
  });
}); */
$('.dropdown').click(() => {
  $('.menu').toggle();
  if ($('.dropdown').css('left') === '10px') {
    $('.dropdown').animate({left: '17vw'});
  } else {
    $('.dropdown').animate({left: '0vw'});
  }
});





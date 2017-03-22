$(document).ready(function(){
    $("#header").load("header.html");
    $(".mainLink").mouseenter(function(){
    	$(this).find(".sublink").fadeIn(300);
    });
    $(".mainLink").mouseleave(function(){
    	$(this).find(".sublink").hide();
    });
    showSlides(1);
});


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1} //once we reach end of slides moving forward, go to first slide
  if (n < 1) {slideIndex = slides.length} //once we reach beginning of slides moving backward, go to last slide
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  } //make all slides not visible
  slides[slideIndex-1].style.display = "block"; 
}

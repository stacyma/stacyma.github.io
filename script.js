var load = function (url, success, error) {
    if (!window.XMLHttpRequest) return;
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status !== 200) {
                if (error && typeof error === 'function') {
                    error(request.responseText, request);
                }
                return;
            }
            if (success && typeof success === 'function') {
                success(request.responseText, request);
            }
        }
    };
    request.open('GET', url);
    request.send();
};

load(
    '/header.html',
    function (data) {
        var el = document.createElement(el);
        el.innerHTML = data;
        var fetch = el.querySelector('#newHeader');
        var embed = document.querySelector('#header');
        if (!fetch || !embed) return;
        embed.innerHTML = fetch.innerHTML;

    }
);

/*
function load_home() {
         document.getElementById("header").innerHTML='<object type="text/html" data="header.html"></object>';
    }*/

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState != 'loading')
        fn();
    });
  }
}

ready(function(){
  showSlides(1);
  load();
});

/*$(document).ready(function(){


    $(".mainLink").mouseenter(function(){
    	$(this).find(".sublink").fadeIn(300);
    });
    $(".mainLink").mouseleave(function(){
    	$(this).find(".sublink").hide();
    });

    $("#header").load("header.html");

  
    showSlides(1);
});*/


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

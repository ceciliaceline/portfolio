
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("wavy").style.width = "0px";
    document.getElementById("wavy").style.marginTop = "1px";
    document.getElementById("header-title").style.fontSize = "30px";
    document.getElementById("header-title").style.marginTop = "10px";
    document.getElementById("menu").style.padding = "10px 10px";

  } else {
    document.getElementById("wavy").style.width = "230px";
    document.getElementById("wavy").style.marginTop = "20px";
    document.getElementById("header-title").style.fontSize = "90px";
    document.getElementById("header-title").style.marginTop = "10%";
    document.getElementById("menu").style.padding = "10px 10px";
   
  }
}




var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


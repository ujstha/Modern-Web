//default value
var slideIndex = 1;
showSlides(slideIndex);

//adding n to default value
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//showing current after add in default value
function currentSlide(n) {
  showSlides(slideIndex = n);
}

//shows the slide with nth number
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    //adding the display to none after the condition checks out
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    //replacing the class name after the condition checks out
    dots[i].className = dots[i].className.replace(" active", "");
  }
  //adding the display after the condition checks out
  slides[slideIndex-1].style.display = "block";
  //adding the class name after the condition checks out
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
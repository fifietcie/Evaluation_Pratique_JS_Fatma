export function startSlider() {
  let slideIndex = 0;
  let slides = document.querySelectorAll('.mySlides');

  function showSlides() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
      slides[i].className = slides[i].className.replace(" showSlide", "");
    }

    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 

    slides[slideIndex-1].style.display = "block"; 
    slides[slideIndex-1].className += " showSlide";
    setTimeout(showSlides, 4000);
  }

  showSlides(); 
}

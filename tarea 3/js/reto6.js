let currentSlide = 0;
          const totalSlides = 5; 
  
          function showSlide(slideIndex) {
              if (slideIndex < 0) {
                  currentSlide = totalSlides - 1;
              } else if (slideIndex >= totalSlides) {
                  currentSlide = 0;
              }
              $('#carousel').carousel(currentSlide);
          }
  
          $('.carousel-control-prev').click(() => {
              showSlide(currentSlide - 1);
          });
  
          $('.carousel-control-next').click(() => {
              showSlide(currentSlide + 1);
          });
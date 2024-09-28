  //action
      document
        .querySelector(".menu-btn")
        .addEventListener("click", () =>
          document.querySelector(".main-menu").classList.toggle("show")
        );

      // jobs

      document.addEventListener("DOMContentLoaded", () => {
        let currentIndex = 0;
        const slides = document.querySelectorAll(".carousel-item");
        const totalSlides = slides.length;
        const dots = document.querySelectorAll(".dot");

        document.querySelector(".next").addEventListener("click", () => {
          moveToNextSlide();
        });

        document.querySelector(".prev").addEventListener("click", () => {
          moveToPrevSlide();
        });

        dots.forEach((dot, index) => {
          dot.addEventListener("click", () => {
            moveToSlide(index);
          });
        });

        function updateActiveDot() {
          dots.forEach((dot) => dot.classList.remove("active"));
          dots[currentIndex].classList.add("active");
        }

        function moveToSlide(index) {
          currentIndex = index;
          updateCarousel();
          updateActiveDot();
        }

        function moveToNextSlide() {
          currentIndex = (currentIndex + 1) % totalSlides;
          updateCarousel();
          updateActiveDot();
        }

        function moveToPrevSlide() {
          currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
          updateCarousel();
          updateActiveDot();
        }

        function updateCarousel() {
          const slideWidth = slides[0].clientWidth;
          document.querySelector(
            ".carousel-slides"
          ).style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        }

        // Optional: Auto-slide functionality
        setInterval(moveToNextSlide, 5000); // Change slide every 5 seconds
      });
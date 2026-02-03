document.addEventListener("DOMContentLoaded", function () {

    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        menu.classList.toggle("active");
    });
    
});

document.addEventListener("DOMContentLoaded", function () {

    const track = document.getElementById("sliderTrack");
    const totalItems = 5;
    let index = 0;

    function getVisibleItems() {
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 900) return 2;
    return 3;
    }

    function slide() {
    const visible = getVisibleItems();
    const maxIndex = totalItems - visible;

    index++;
    if (index > maxIndex) index = 0;

    const translateX = -(index * (100 / visible));
    track.style.transform = `translateX(${translateX}%)`;
    }

    setInterval(slide, 3000);
    window.addEventListener("resize", () => (index = 0));

});

document.addEventListener("DOMContentLoaded", function () {

    const isMobile = 'ontouchstart' in window || window.innerWidth < 768;

    if (!isMobile) {
        let currentScroll = 0;
        let targetScroll = 0;
        let ease = 0.08;
        let isScrollbarDragging = false;
        let lastScrollbarTime = 0;

        // Detect scrollbar dragging
        document.addEventListener('mousedown', (e) => {
            // Check if click is near scrollbar (within 20px of right edge)
            if (e.clientX > window.innerWidth - 20) {
                isScrollbarDragging = true;
            }
        });

        document.addEventListener('mouseup', () => {
            isScrollbarDragging = false;
        });

        // Monitor scroll events from scrollbar
        window.addEventListener('scroll', () => {
            if (isScrollbarDragging || Date.now() - lastScrollbarTime < 100) {
                lastScrollbarTime = Date.now();
                currentScroll = window.scrollY;
                targetScroll = window.scrollY;
            }
        });

        // Smooth scroll on wheel
        window.addEventListener('wheel', (e) => {
            if (!isScrollbarDragging) {
                e.preventDefault();
                targetScroll += e.deltaY;
                clampTarget();
            }
        }, { passive: false });

        function clampTarget() {
            targetScroll = Math.max(
                0,
                Math.min(targetScroll, document.body.scrollHeight - window.innerHeight)
            );
        }

        function smoothScroll() {
            if (!isScrollbarDragging && Date.now() - lastScrollbarTime > 100) {
                currentScroll += (targetScroll - currentScroll) * ease;
                window.scrollTo(0, currentScroll);
            }
            requestAnimationFrame(smoothScroll);
        }

        smoothScroll();
    }

});


document.addEventListener("DOMContentLoaded", function () {

  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const button = item.querySelector('.faq-question');
    const icon = item.querySelector('.faq-icon');

    button.addEventListener('click', () => {
      faqItems.forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq-icon').textContent = '+';
      });

      item.classList.add('active');
      icon.textContent = '−';
    });
  });


});



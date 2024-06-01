document.addEventListener('DOMContentLoaded', (event) => {
    const dots = document.querySelectorAll('.dot');
    const slideImageContainer = document.querySelector('.slide-image');

    let currentIndex = 0;

    function updateActiveDot() {
        dots.forEach((dot, index) => {
            dot.className = dot.className.replace(' active', '');
            if (index === currentIndex) {
                dot.className += ' active';
            }
        });
    }

    function scrollToSlide(index) {
        const slideWidth = slideImageContainer.scrollWidth / dots.length;
        slideImageContainer.scrollTo({
            left: slideWidth * index,
            behavior: 'smooth'
        });
        currentIndex = index;
        updateActiveDot();
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            scrollToSlide(index);
        });
    });
    updateActiveDot();
    
});

function changeImage(element,imageId) {
    var images = document.querySelectorAll('.image-container img');
    for (var i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
    }
    document.getElementById(imageId).style.display = 'block';
    var texts= document.querySelectorAll('.text');
    for(var i=0; i<texts.length; i++){
        texts[i].classList.remove('active');
    }
    element.classList.add('active');
}

// document.addEventListener('DOMContentLoaded', function() {
//     const carousel = document.querySelector('.carousel');
//     const prevButton = document.querySelector('.carousel-button.prev');
//     const nextButton = document.querySelector('.carousel-button.next');
//     let currentIndex = 0;

//     function showSlide(index) {
//         const offset = -index * 100;
//         carousel.style.transform = `translateX(${offset}%)`;
//     }

//     prevButton.addEventListener('click', function() {
//         currentIndex = (currentIndex > 0) ? currentIndex - 1 : 4;
//         showSlide(currentIndex);
//     });

//     nextButton.addEventListener('click', function() {
//         currentIndex = (currentIndex < 4) ? currentIndex + 1 : 0;
//         showSlide(currentIndex);
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const images = document.querySelectorAll('.carousel-image');
    const indicator = document.createElement('div'); // 创建指示器
    
    // 添加指示器到轮播容器
    indicator.className = 'carousel-indicator';
    carousel.parentNode.appendChild(indicator);
    
    let currentIndex = 0;
    const totalImages = images.length;
    
    // 初始化
    updateButtons();
    updateIndicator();
    
    function updateButtons() {
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === totalImages - 1;
    }
    
    function updateIndicator() {
        indicator.textContent = `${currentIndex + 1} / ${totalImages}`;
    }
    
    function showSlide(index) {
        carousel.style.transition = 'transform 0.3s ease-in-out';
        carousel.style.transform = `translateX(${-index * 100}%)`;
        
        // 动画结束后更新状态
        setTimeout(() => {
            updateButtons();
            updateIndicator();
        }, 300);
    }
    
    prevButton.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            showSlide(currentIndex);
        }
    });
    
    nextButton.addEventListener('click', function() {
        if (currentIndex < totalImages - 1) {
            currentIndex++;
            showSlide(currentIndex);
        }
    });
});
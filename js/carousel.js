class Carousel {
    constructor() {
        this.container = document.querySelector('.carousel-track');
        this.slides = document.querySelectorAll('.carousel-slide');
        this.prevBtn = document.querySelector('.carousel-btn.prev');
        this.nextBtn = document.querySelector('.carousel-btn.next');
        
        this.currentIndex = 0;
        this.slideWidth = this.slides[0].clientWidth;
        
        this.init();
    }

    init() {
        this.prevBtn.addEventListener('click', () => this.slide('prev'));
        this.nextBtn.addEventListener('click', () => this.slide('next'));
        
        // 自动轮播
        setInterval(() => this.slide('next'), 5000);
    }

    slide(direction) {
        if (direction === 'next') {
            this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        } else {
            this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        }
        
        this.container.style.transform = `translateX(-${this.currentIndex * this.slideWidth}px)`;
    }
}

// 初始化轮播图
document.addEventListener('DOMContentLoaded', () => {
    new Carousel();
}); 
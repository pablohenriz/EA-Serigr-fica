// PRODUCTS CAROUSEL
class ProductsCarousel {
    constructor() {
        this.track = document.getElementById('productsCarouselTrack');
        this.prevBtn = document.getElementById('productsCarouselPrev');
        this.nextBtn = document.getElementById('productsCarouselNext');
        this.itemsPerView = 4;
        this.currentIndex = 0;
        this.itemWidth = 0;
        
        if (this.track) {
            this.init();
        }
    }

    init() {
        this.updateItemsPerView();
        window.addEventListener('resize', () => this.updateItemsPerView());
        
        this.prevBtn.addEventListener('click', () => this.slide('prev'));
        this.nextBtn.addEventListener('click', () => this.slide('next'));
    }

    updateItemsPerView() {
        const width = window.innerWidth;
        if (width <= 600) {
            this.itemsPerView = 1;
        } else if (width <= 900) {
            this.itemsPerView = 2;
        } else if (width <= 1200) {
            this.itemsPerView = 3;
        } else {
            this.itemsPerView = 4;
        }
        this.updatePosition();
    }

    slide(direction) {
        const items = this.track.querySelectorAll('.products-carousel-item');
        const totalItems = items.length;
        const maxIndex = Math.max(0, totalItems - this.itemsPerView);

        if (direction === 'prev') {
            this.currentIndex = Math.max(0, this.currentIndex - 1);
        } else {
            this.currentIndex = Math.min(maxIndex, this.currentIndex + 1);
        }

        this.updatePosition();
    }

    updatePosition() {
        const items = this.track.querySelectorAll('.products-carousel-item');
        if (items.length === 0) return;

        // Calcula o gap em pixels
        const gap = 1.5;
        const containerWidth = this.track.parentElement.clientWidth;
        const itemWidth = (containerWidth - (gap * (this.itemsPerView - 1))) / this.itemsPerView;
        
        const translateAmount = this.currentIndex * (itemWidth + gap);
        this.track.style.transform = `translateX(-${translateAmount}px)`;
    }
}

// Inicializa quando o DOM está pronto
document.addEventListener('DOMContentLoaded', () => {
    new ProductsCarousel();
});

// PRODUCTS CAROUSEL
class ProductsCarousel {
    constructor() {
        this.track = document.getElementById('productsCarouselTrack');
        this.prevBtn = document.getElementById('productsCarouselPrev');
        this.nextBtn = document.getElementById('productsCarouselNext');
        this.itemsPerView = 4;
        this.currentIndex = 0;
        this.itemWidth = 0;
        this.gapPx = 0;  // NOVO: cachear gap
        this.resizeTimeout = null;

        if (this.track && this.prevBtn && this.nextBtn) {
            this.init();
        }
    }

    init() {
        this.calculateDimensions(); // NOVO: calcula tamanhos uma única vez
        this.updatePosition();

        // Debounce para resize
        window.addEventListener('resize', () => {
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = setTimeout(() => {
                this.calculateDimensions(); // NOVO: recalcula após resize
                this.updatePosition();
            }, 150);
        });

        this.prevBtn.addEventListener('click', () => this.slide('prev'));
        this.nextBtn.addEventListener('click', () => this.slide('next'));

        this.updateButtons();
    }

    calculateDimensions() {
        // NOVO: calcula e cacheia os valores
        const items = this.track.querySelectorAll('.products-carousel-item');
        if (items.length === 0) return;

        // Calcula gap em pixels (1.5rem do CSS)
        const remToPx = parseFloat(getComputedStyle(document.documentElement).fontSize);
        const gapRem = 1.5;
        this.gapPx = Math.round(gapRem * remToPx); // Arredonda para inteiro

        // Calcula largura do item
        const firstItem = items[0];
        this.itemWidth = Math.round(firstItem.offsetWidth); // Arredonda para inteiro
    }

    updateItemsPerView() {
        const width = window.innerWidth;
        let newItemsPerView = 4;

        if (width <= 600) {
            newItemsPerView = 1;
        } else if (width <= 900) {
            newItemsPerView = 2;
        } else if (width <= 1200) {
            newItemsPerView = 3;
        }

        // Se mudou, reseta índice
        if (newItemsPerView !== this.itemsPerView) {
            this.itemsPerView = newItemsPerView;
            this.currentIndex = 0;
        }
    }

    slide(direction) {
        const items = this.track.querySelectorAll('.products-carousel-item');
        const totalItems = items.length;
        const maxIndex = Math.max(0, totalItems - this.itemsPerView);

        const prevIndex = this.currentIndex;

        if (direction === 'prev') {
            this.currentIndex = Math.max(0, this.currentIndex - 1);
        } else {
            this.currentIndex = Math.min(maxIndex, this.currentIndex + 1);
        }

        // Só atualiza se realmente mudou
        if (prevIndex !== this.currentIndex) {
            this.updatePosition();
            this.updateButtons();
        }
    }

    updatePosition() {
        // MODIFICADO: usa valores cacheados ao invés de recalcular
        if (this.itemWidth === 0 || this.gapPx === 0) return;

        // Calcula deslocamento: (largura + gap) * index
        const translateAmount = this.currentIndex * (this.itemWidth + this.gapPx);

        this.track.style.transform = `translateX(-${translateAmount}px)`;
    }

    updateButtons() {
        const items = this.track.querySelectorAll('.products-carousel-item');
        const totalItems = items.length;
        const maxIndex = Math.max(0, totalItems - this.itemsPerView);

        // Desabilita botão anterior no início
        this.prevBtn.disabled = this.currentIndex === 0;
        this.prevBtn.style.opacity = this.currentIndex === 0 ? '0.5' : '1';
        this.prevBtn.style.cursor = this.currentIndex === 0 ? 'not-allowed' : 'pointer';

        // Desabilita botão próximo no fim
        this.nextBtn.disabled = this.currentIndex >= maxIndex;
        this.nextBtn.style.opacity = this.currentIndex >= maxIndex ? '0.5' : '1';
        this.nextBtn.style.cursor = this.currentIndex >= maxIndex ? 'not-allowed' : 'pointer';
    }
}

// Inicializa quando o DOM está pronto
document.addEventListener('DOMContentLoaded', () => {
    new ProductsCarousel();
});


function scrollCarousel(direction) {
    const carousel = document.getElementById('carousel');
    const scrollAmount = carousel.offsetWidth; // Rola a largura visível
    carousel.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}


// FILTRO DE CATEGORIAS
const filterBtns = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active de todos
        filterBtns.forEach(b => b.classList.remove('active'));
        // Adiciona active no clicado
        btn.classList.add('active');

        const category = btn.dataset.category;

        productCards.forEach(card => {
            if (category === 'todos') {
                card.style.display = 'block';
            } else {
                if (card.dataset.category === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            }
        });
    });
});

// BUSCA
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();

    productCards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const desc = card.querySelector('.card-desc').textContent.toLowerCase();

        if (title.includes(searchTerm) || desc.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// MODAL DE PRODUTO
const modal = document.getElementById('productModal');
const modalClose = document.getElementById('modalClose');
const btnDetails = document.querySelectorAll('.btn-details');
const btnZoom = document.querySelectorAll('.btn-zoom');

// Dados dos produtos para o modal
const productData = {
    'Tintas Gênesis': {
        tag: 'Tintas',
        desc: 'Linha completa de tintas para serigrafia incluindo vinílica fosca, metálica e especialidades. Ideal para profissionais que buscam qualidade e consistência nas impressões.',
        features: [
            'Alta cobertura e rendimento',
            'Secagem uniforme',
            'Disponível em diversas cores',
            'Compatível com diversos substratos'
        ]
    },
    'Sicoltex Vinílica': {
        tag: 'Tintas',
        desc: 'Tinta vinílica fosca de alta qualidade para serigrafia. Perfeita para impressão em vinil, papel e outros materiais.',
        features: [
            'Acabamento fosco profissional',
            'Excelente opacidade',
            'Baixo odor',
            'Fácil aplicação'
        ]
    },
    'Colordex Plastisol': {
        tag: 'Tintas',
        desc: 'Plastisol de alta qualidade para impressão em tecidos e superfícies especiais. Não seca à temperatura ambiente.',
        features: [
            'Não requer catalisador',
            'Alta viscosidade',
            'Ideal para estamparia têxtil',
            'Cura por calor'
        ]
    },
    'Tintas Plastin': {
        tag: 'Tintas',
        desc: 'Vernizes e solventes profissionais para comunicação visual. Produtos de alta performance para acabamento.',
        features: [
            'Secagem rápida',
            'Alto brilho',
            'Proteção duradoura',
            'Versátil aplicação'
        ]
    },
    'Solventes SOL': {
        tag: 'Solventes',
        desc: 'Solvente desmoldante para aplicação em telas de serigrafia. Facilita a desmoldagem e limpeza.',
        features: [
            'Ação rápida',
            'Não danifica a tela',
            'Econômico',
            'Fácil de usar'
        ]
    },
    'Saturno Vinílico': {
        tag: 'Solventes',
        desc: 'Solvente vinílico de secagem rápida para limpeza de telas e equipamentos.',
        features: [
            'Evaporação rápida',
            'Eficiente na limpeza',
            'Baixa toxicidade',
            'Versátil'
        ]
    },
    'Kit Metiq': {
        tag: 'Marcadores',
        desc: 'Kit completo para escrita profissional em cartazes. Inclui marcadores em diversas cores.',
        features: [
            'Ponta feltro resistente',
            'Cores vibrantes',
            'Secagem rápida',
            'Não borra'
        ]
    },
    'Pilot Board Master': {
        tag: 'Marcadores',
        desc: 'Marcador para quadro branco de alta performance. Apagamento fácil sem deixar resíduos.',
        features: [
            'Apagamento limpo',
            'Ponta bisel',
            'Longa duração',
            'Atóxico'
        ]
    },
    'Caneta Poster': {
        tag: 'Marcadores',
        desc: 'Caneta para cartazismo com ponta feltro. Ideal para escrita em cartazes e PDV.',
        features: [
            'Ponta feltro 6mm',
            'Tinta à base de álcool',
            'Cores intensas',
            'Secagem instantânea'
        ]
    },
    'Grampeador Rocama': {
        tag: 'Ferramentas',
        desc: 'Grampeador profissional para chassis de serigrafia. Robusto e durável.',
        features: [
            'Estrutura em metal',
            'Alta capacidade',
            'Ergonômico',
            'Longa vida útil'
        ]
    },
    'Estilete Profissional': {
        tag: 'Ferramentas',
        desc: 'Estilete de precisão para corte de vinil e materiais. Lâmina retrátil de segurança.',
        features: [
            'Lâmina de aço carbono',
            'Grip ergonômico',
            'Trava de segurança',
            'Precisão no corte'
        ]
    },
    'Cartaz de Oferta': {
        tag: 'Cartazes',
        desc: 'Cartaz PDV para promoções e ofertas. Design chamativo para atrair clientes.',
        features: [
            'Impressão de alta qualidade',
            'Cores vibrantes',
            'Diversos tamanhos',
            'Pronto para uso'
        ]
    },
    'Cartaz Zig-Zag': {
        tag: 'Cartazes',
        desc: 'Cartaz explosão para destaque em promoções. Formato zig-zag que chama atenção.',
        features: [
            'Design impactante',
            'Fácil fixação',
            'Versátil',
            'Alto impacto visual'
        ]
    }
};

// Abrir modal
function openModal(card) {
    const title = card.querySelector('.card-title').textContent;
    const img = card.querySelector('.card-image img').src;
    const tag = card.querySelector('.card-tag').textContent;
    const desc = card.querySelector('.card-desc').textContent;

    document.getElementById('modalImg').src = img;
    document.getElementById('modalTag').textContent = tag;
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDesc').textContent = desc;

    // Atualizar features
    const featuresList = document.getElementById('modalFeatures');
    featuresList.innerHTML = '';

    if (productData[title]) {
        productData[title].features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Fechar modal
modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Fechar ao clicar fora
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Event listeners para botões
btnDetails.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const card = e.target.closest('.product-card');
        openModal(card);
    });
});

btnZoom.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const card = e.target.closest('.product-card');
        openModal(card);
    });
});

// Animação de scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.product-card').forEach(card => {
    observer.observe(card);
});
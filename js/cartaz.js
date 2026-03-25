/* ─── PRODUCT DATABASE ───────────────────────────────── */
const PRODUCTS = [
  {
    id: 'P001',
    name: 'Cartaz Zig-Zag',
    category: 'Cartazes',
    subtitle: 'Cartaz explosão para promoções de alto impacto em ponto de venda.',
    badge: null,
    img: '/img/Captura de tela 2026-03-17 140147.png',
    thumbs: ['/img/Captura de tela 2026-03-17 140159.png', '/img/Captura de tela 2026-03-17 140241.png'],
    price: 'Sob consulta',
    features: [
      { icon: '✓', text: 'Design zig-zag de alto impacto visual' },
      { icon: '✓', text: 'Impressão frente e verso disponível' },
      { icon: '✓', text: 'Papel couché 90g ou cartão 170g' },
      { icon: '✓', text: 'Personalização completa com sua arte' },
    ],  
    desc: 'O Cartaz Zig-Zag é o campeão de vendas para PDV. Seu formato recortado em serrilhado atrai o olhar do consumidor e aumenta conversão em prateleiras, balcões e vitrines. Disponível em tamanhos padronizados ou personalizados.',
    app: 'Supermercados, farmácias, lojas de roupa, feiras, exposições, PDV em geral.',
    spec: '<strong>Papel:</strong> Couché 90g / Cartão 170g<br><strong>Acabamento:</strong> Laminação fosca ou brilhante<br><strong>Impressão:</strong> 4 cores CMYK<br><strong>Entrega:</strong> 3 a 5 dias úteis'
  },
  {
    id: 'P002',
    name: 'Cartaz Zig-Zag',
    category: 'Cartazes',
    subtitle: 'Cartaz explosão para promoções de alto impacto em ponto de venda.',
    badge: null,
    img: '/img/Captura de tela 2026-03-17 140241.png',
    thumbs: ['/img/Captura de tela 2026-03-17 140159.png', '/img/Captura de tela 2026-03-17 140241.png'],
    price: 'Sob consulta',
    features: [
      { icon: '✓', text: 'Design zig-zag de alto impacto visual' },
      { icon: '✓', text: 'Impressão frente e verso disponível' },
      { icon: '✓', text: 'Papel couché 90g ou cartão 170g' },
      { icon: '✓', text: 'Personalização completa com sua arte' },
    ],
    desc: 'O Cartaz Zig-Zag é o campeão de vendas para PDV. Seu formato recortado em serrilhado atrai o olhar do consumidor e aumenta conversão em prateleiras, balcões e vitrines. Disponível em tamanhos padronizados ou personalizados.',
    app: 'Supermercados, farmácias, lojas de roupa, feiras, exposições, PDV em geral.',
    spec: '<strong>Papel:</strong> Couché 90g / Cartão 170g<br><strong>Acabamento:</strong> Laminação fosca ou brilhante<br><strong>Impressão:</strong> 4 cores CMYK<br><strong>Entrega:</strong> 3 a 5 dias úteis'
  },
  {
    id: 'P003',
    name: 'Cartaz Zig-Zag',
    category: 'Cartazes', 
    subtitle: 'Cartaz explosão para promoções de alto impacto em ponto de venda.',
    badge: null,
    img: '/img/Captura de tela 2026-03-17 140159.png',
    thumbs: ['/img/Captura de tela 2026-03-17 140159.png', '/img/Captura de tela 2026-03-17 140241.png'],
    price: 'Sob consulta',
    features: [
      { icon: '✓', text: 'Design zig-zag de alto impacto visual' },
      { icon: '✓', text: 'Impressão frente e verso disponível' },
      { icon: '✓', text: 'Papel couché 90g ou cartão 170g' },
      { icon: '✓', text: 'Personalização completa com sua arte' },
    ],
    desc: 'O Cartaz Zig-Zag é o campeão de vendas para PDV. Seu formato recortado em serrilhado atrai o olhar do consumidor e aumenta conversão em prateleiras, balcões e vitrines. Disponível em tamanhos padronizados ou personalizados.',
    app: 'Supermercados, farmácias, lojas de roupa, feiras, exposições, PDV em geral.',
    spec: '<strong>Papel:</strong> Couché 90g / Cartão 170g<br><strong>Acabamento:</strong> Laminação fosca ou brilhante<br><strong>Impressão:</strong> 4 cores CMYK<br><strong>Entrega:</strong> 3 a 5 dias úteis'
  },
  {
    id: 'P004',
    name: 'Cartaz Zig-Zag',
    category: 'Cartazes',
    subtitle: 'Cartaz explosão para promoções de alto impacto em ponto de venda.',
    badge: null,
    img: '/img/Captura de tela 2026-03-17 140159.png',
    thumbs: ['/img/Captura de tela 2026-03-17 140159.png', '/img/Captura de tela 2026-03-17 140241.png'],
    price: 'Sob consulta',
    features: [
      { icon: '✓', text: 'Design zig-zag de alto impacto visual' },
      { icon: '✓', text: 'Impressão frente e verso disponível' },
      { icon: '✓', text: 'Papel couché 90g ou cartão 170g' },
      { icon: '✓', text: 'Personalização completa com sua arte' },
    ],
    desc: 'O Cartaz Zig-Zag é o campeão de vendas para PDV. Seu formato recortado em serrilhado atrai o olhar do consumidor e aumenta conversão em prateleiras, balcões e vitrines. Disponível em tamanhos padronizados ou personalizados.',
    app: 'Supermercados, farmácias, lojas de roupa, feiras, exposições, PDV em geral.',
    spec: '<strong>Papel:</strong> Couché 90g / Cartão 170g<br><strong>Acabamento:</strong> Laminação fosca ou brilhante<br><strong>Impressão:</strong> 4 cores CMYK<br><strong>Entrega:</strong> 3 a 5 dias úteis'
  },
  {
    id: 'P005',
    name: 'Cartaz Zig-Zag',
    category: 'Cartazes',
    subtitle: 'Cartaz explosão para promoções de alto impacto em ponto de venda.',
    badge: null,
    img: '/img/Captura de tela 2026-03-17 140159.png',
    thumbs: ['/img/Captura de tela 2026-03-17 140159.png', '/img/Captura de tela 2026-03-17 140241.png'],
    price: 'Sob consulta',
    features: [
      { icon: '✓', text: 'Design zig-zag de alto impacto visual' },
      { icon: '✓', text: 'Impressão frente e verso disponível' },
      { icon: '✓', text: 'Papel couché 90g ou cartão 170g' },
      { icon: '✓', text: 'Personalização completa com sua arte' },
    ],
    desc: 'O Cartaz Zig-Zag é o campeão de vendas para PDV. Seu formato recortado em serrilhado atrai o olhar do consumidor e aumenta conversão em prateleiras, balcões e vitrines. Disponível em tamanhos padronizados ou personalizados.',
    app: 'Supermercados, farmácias, lojas de roupa, feiras, exposições, PDV em geral.',
    spec: '<strong>Papel:</strong> Couché 90g / Cartão 170g<br><strong>Acabamento:</strong> Laminação fosca ou brilhante<br><strong>Impressão:</strong> 4 cores CMYK<br><strong>Entrega:</strong> 3 a 5 dias úteis'
  },
  {
    id: 'P006',
    name: 'Cartaz Zig-Zag',
    category: 'Cartazes',
    subtitle: 'Cartaz explosão para promoções de alto impacto em ponto de venda.',
    badge: null,
    img: '/img/Captura de tela 2026-03-17 140241.png',
    thumbs: ['/img/Captura de tela 2026-03-17 140159.png', '/img/Captura de tela 2026-03-17 140241.png'],
    price: 'Sob consulta',
    features: [
      { icon: '✓', text: 'Design zig-zag de alto impacto visual' },
      { icon: '✓', text: 'Impressão frente e verso disponível' },
      { icon: '✓', text: 'Papel couché 90g ou cartão 170g' },
      { icon: '✓', text: 'Personalização completa com sua arte' },
    ],
    desc: 'O Cartaz Zig-Zag é o campeão de vendas para PDV. Seu formato recortado em serrilhado atrai o olhar do consumidor e aumenta conversão em prateleiras, balcões e vitrines. Disponível em tamanhos padronizados ou personalizados.',
    app: 'Supermercados, farmácias, lojas de roupa, feiras, exposições, PDV em geral.',
    spec: '<strong>Papel:</strong> Couché 90g / Cartão 170g<br><strong>Acabamento:</strong> Laminação fosca ou brilhante<br><strong>Impressão:</strong> 4 cores CMYK<br><strong>Entrega:</strong> 3 a 5 dias úteis'
  },
  {
    id: 'P007',
    name: 'Cartaz Zig-Zag',
    category: 'Cartazes',
    subtitle: 'Cartaz explosão para promoções de alto impacto em ponto de venda.',
    badge: null,
    img: '/img/Captura de tela 2026-03-17 140159.png',
    thumbs: ['/img/Captura de tela 2026-03-17 140159.png', '/img/Captura de tela 2026-03-17 140241.png'],
    price: 'Sob consulta',
    features: [
      { icon: '✓', text: 'Design zig-zag de alto impacto visual' },
      { icon: '✓', text: 'Impressão frente e verso disponível' },
      { icon: '✓', text: 'Papel couché 90g ou cartão 170g' },
      { icon: '✓', text: 'Personalização completa com sua arte' },
    ],
    desc: 'O Cartaz Zig-Zag é o campeão de vendas para PDV. Seu formato recortado em serrilhado atrai o olhar do consumidor e aumenta conversão em prateleiras, balcões e vitrines. Disponível em tamanhos padronizados ou personalizados.',
    app: 'Supermercados, farmácias, lojas de roupa, feiras, exposições, PDV em geral.',
    spec: '<strong>Papel:</strong> Couché 90g / Cartão 170g<br><strong>Acabamento:</strong> Laminação fosca ou brilhante<br><strong>Impressão:</strong> 4 cores CMYK<br><strong>Entrega:</strong> 3 a 5 dias úteis'
  }
];

/* ─── RENDER CARDS ───────────────────────── */
const grid = document.getElementById('productsGrid');

PRODUCTS.forEach(p => {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.dataset.id = p.id;
  card.innerHTML = `
    ${p.badge ? `<div class="card-badge">${p.badge}</div>` : ''}
    <div class="card-image">
      <img src="${p.img}" alt="${p.name}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22><rect fill=%22%231a1a1a%22 width=%22200%22 height=%22200%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%23444%22 font-size=%2224%22>📦</text></svg>'">
      <div class="card-overlay">
        <button class="btn-zoom" aria-label="Ver detalhes">🔍</button>
      </div>
    </div>
    <div class="card-info">
      <span class="card-tag">${p.category}</span>
      <h3 class="card-title">${p.name}</h3>
      <p class="card-desc">${p.subtitle}</p>
      <div class="card-footer">
        <span class="card-stock">✓ Em estoque</span>
        <button class="btn-details">Ver Detalhes</button>
      </div>
    </div>`;
  card.querySelector('.btn-details').addEventListener('click', () => openDrawer(p.id));
  card.querySelector('.btn-zoom').addEventListener('click', () => openDrawer(p.id));
  grid.appendChild(card);
});

/* ─── DRAWER OPEN / CLOSE ────────────────── */
const drawer  = document.getElementById('productDrawer');
const overlay = document.getElementById('drawerOverlay');
const closeBtn = document.getElementById('drawerClose');

function openDrawer(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  populateDrawer(p);
  drawer.classList.add('open');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  drawer.querySelector('.drawer-body').scrollTop = 0;
}

function closeDrawer() {
  drawer.classList.remove('open');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

closeBtn.addEventListener('click', closeDrawer);
overlay.addEventListener('click', closeDrawer);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });

/* ─── POPULATE DRAWER ────────────────────── */
function populateDrawer(p) {
  // SKU / título / subtítulo / categoria
  document.getElementById('drawerSku').textContent      = 'REF: ' + p.id;
  document.getElementById('drawerTitle').textContent    = p.name;
  document.getElementById('drawerSubtitle').textContent = p.subtitle;
  document.getElementById('drawerCat').textContent      = p.category;

  // Imagem principal
  const mainImg = document.getElementById('drawerMainImg');
  mainImg.src = p.img;
  mainImg.alt = p.name;

  // Miniaturas
  const thumbsCont = document.getElementById('drawerThumbs');
  thumbsCont.innerHTML = '';
  if (p.thumbs && p.thumbs.length > 1) {
    p.thumbs.forEach((src, i) => {
      const t = document.createElement('div');
      t.className = 'gallery-thumb' + (i === 0 ? ' active' : '');
      t.innerHTML = `<img src="${src}" alt="thumb ${i + 1}" onerror="this.parentElement.style.display='none'">`;
      t.addEventListener('click', () => {
        mainImg.style.opacity = '0';
        setTimeout(() => { mainImg.src = src; mainImg.style.opacity = '1'; }, 150);
        document.querySelectorAll('.gallery-thumb').forEach(el => el.classList.remove('active'));
        t.classList.add('active');
      });
      thumbsCont.appendChild(t);
    });
  }

  // Preço
  document.getElementById('drawerPriceMain').textContent = p.price;

  // Características
  const featCont = document.getElementById('drawerFeatures');
  featCont.innerHTML = '';
  p.features.forEach(f => {
    const div = document.createElement('div');
    div.className = 'feature-item';
    div.innerHTML = `<div class="feature-icon">${f.icon}</div><span>${f.text}</span>`;
    featCont.appendChild(div);
  });

  // Tabs: descrição / aplicações / especificações
  document.getElementById('tab-desc').innerHTML = p.desc;
  document.getElementById('tab-app').innerHTML  = p.app;
  document.getElementById('tab-spec').innerHTML = p.spec;

  // Reset tabs para "Descrição" sempre que abrir
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
  document.querySelector('.tab-btn[data-tab="desc"]').classList.add('active');
  document.getElementById('tab-desc').classList.add('active');

  // Link WhatsApp personalizado por produto
  const msg = encodeURIComponent(
    `Olá! Tenho interesse no produto: *${p.name}* (Ref: ${p.id}). Poderia me informar preço e disponibilidade?`
  );
  document.getElementById('btnWpp').href = `https://wa.me/551121566868?text=${msg}`;
}

/* ─── TABS ───────────────────────────────── */
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
  });
});

/* ─── BOTÃO ORÇAMENTO ────────────────────── */
document.getElementById('btnOrc').addEventListener('click', () => {
  const title = document.getElementById('drawerTitle').textContent;
  const msg = encodeURIComponent(
    `Olá! Gostaria de um orçamento:\n\n*Produto:* ${title}\n\nAguardo retorno, obrigado!`
  );
  window.open(`https://wa.me/551121566868?text=${msg}`, '_blank');
});

/* ─── TOAST ──────────────────────────────── */
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}
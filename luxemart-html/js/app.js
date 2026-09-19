/* ═══════════════════════════════════════════
   LuxeMart — Main App JS
   Bootstrap 5 + Vanilla ES6
═══════════════════════════════════════════ */

// ─── PRODUCT DATA ───
const PRODUCTS = [
  { id:'1', name:'Premium Wireless Headphones', desc:'Active noise cancelling with 30hr battery life. Crystal-clear sound quality with premium drivers. IPX4 water-resistant, foldable design for portability.', short:'ANC · 30hr battery · IPX4', price:2999, orig:4999, disc:40, cat:'Electronics', brand:'SoundPro', rating:4.5, rcount:128, stock:50, feat:true, freeShip:true, img:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500', tags:['headphones','wireless','ANC'] },
  { id:'2', name:"Men's Classic Oxford Shirt", desc:"Premium 100% cotton Oxford weave. Wrinkle-resistant finish with a modern slim fit that transitions effortlessly from boardroom to weekend casual.", short:'100% cotton · Slim fit · Wrinkle-free', price:1299, orig:1999, disc:35, cat:'Fashion', brand:'ClassicWear', rating:4.2, rcount:89, stock:100, feat:true, freeShip:false, img:'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=500', tags:['shirt','men','formal'] },
  { id:'3', name:'Smart Home Hub Pro', desc:'Control all your smart devices from one hub. Compatible with Alexa, Google Home, and Apple HomeKit. Schedule routines, automate your entire home effortlessly.', short:'Alexa · Google · HomeKit compatible', price:4499, orig:5999, disc:25, cat:'Electronics', brand:'SmartHome', rating:4.7, rcount:234, stock:30, feat:true, freeShip:true, img:'https://images.unsplash.com/photo-1558089687-f282ffcbc0f6?w=500', tags:['smarthome','IoT','hub'] },
  { id:'4', name:'Premium Yoga Mat', desc:'Non-slip eco-friendly TPE material with alignment lines. 6mm cushioning for superior joint support. Perfect for yoga, pilates, stretching and floor exercises.', short:'Eco TPE · 6mm cushion · Alignment lines', price:999, orig:1499, disc:33, cat:'Sports', brand:'FlexFit', rating:4.4, rcount:167, stock:80, feat:false, freeShip:false, img:'https://images.unsplash.com/photo-1601925228100-6af3d7db1a87?w=500', tags:['yoga','fitness','mat'] },
  { id:'5', name:'The Art of Innovation', desc:'A deep dive into design thinking, creative problem-solving, and building breakthrough products. Essential reading for entrepreneurs, product leaders, and creative professionals.', short:'320 pages · Bestseller · Hardcover', price:399, orig:599, disc:33, cat:'Books', brand:'InnoPress', rating:4.6, rcount:312, stock:200, feat:false, freeShip:false, img:'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500', tags:['books','business','innovation'] },
  { id:'6', name:'Luxury Scented Candle Set', desc:'Hand-poured soy wax candles with premium fragrance oils. Three calming scents: lavender, vanilla, and sandalwood. Each candle burns for 40+ hours.', short:'Soy wax · 40hr burn · 3 scents', price:799, orig:1199, disc:33, cat:'Home & Living', brand:'AromaCraft', rating:4.8, rcount:445, stock:60, feat:false, freeShip:false, img:'https://images.unsplash.com/photo-1602178697826-fb8c6abb5e11?w=500', tags:['candle','home','luxury'] },
  { id:'7', name:'4K Action Camera Pro', desc:'Waterproof to 30m, shoots 4K@60fps with built-in optical image stabilization. Perfect for surfing, skiing, hiking, and every adventure. Includes 2 batteries.', short:'4K 60fps · 30m waterproof · OIS', price:7999, orig:9999, disc:20, cat:'Electronics', brand:'ActionX', rating:4.5, rcount:203, stock:25, feat:true, freeShip:true, img:'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500', tags:['camera','4K','waterproof'] },
  { id:'8', name:"Women's Cloud-Cushion Runners", desc:'Lightweight responsive foam midsole with cloud-cushion technology absorbs impact beautifully. Breathable mesh upper keeps feet cool on long runs. Available in 6 colours.', short:'Cloud-cushion · Breathable · 230g', price:2499, orig:3499, disc:29, cat:'Sports', brand:'RunFast', rating:4.3, rcount:156, stock:45, feat:false, freeShip:false, img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500', tags:['shoes','running','women'] },
  { id:'9', name:'Vitamin C Brightening Serum', desc:'20% stabilized Vitamin C with hyaluronic acid and niacinamide. Visibly brightens dark spots in 4 weeks. Dermatologist tested, fragrance-free, suitable for all skin types.', short:'20% Vit C · Fragrance-free · 30ml', price:699, orig:999, disc:30, cat:'Beauty', brand:'GlowLab', rating:4.6, rcount:289, stock:120, feat:false, freeShip:false, img:'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500', tags:['skincare','beauty','serum'] },
  { id:'10', name:'RGB Mechanical Gaming Keyboard', desc:'Cherry MX tactile switches with per-key RGB lighting. Full N-key rollover, dedicated media controls, and a detachable braided USB-C cable. Aluminium top plate.', short:'Cherry MX · RGB · USB-C · Aluminium', price:3499, orig:4999, disc:30, cat:'Electronics', brand:'GamePro', rating:4.4, rcount:178, stock:35, feat:false, freeShip:false, img:'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500', tags:['gaming','keyboard','RGB'] },
  { id:'11', name:'Insulated Steel Water Bottle', desc:'Double-wall vacuum insulation keeps drinks cold 24hrs or hot 12hrs. BPA-free 18/8 stainless steel. Leak-proof lid. Wide mouth for easy filling and cleaning.', short:'24hr cold · 12hr hot · BPA-free · 750ml', price:499, orig:799, disc:38, cat:'Sports', brand:'HydroX', rating:4.5, rcount:523, stock:150, feat:false, freeShip:false, img:'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500', tags:['bottle','hydration','sports'] },
  { id:'12', name:'RFID Slim Leather Wallet', desc:'Genuine top-grain leather with RFID-blocking technology. Ultra-slim 8mm profile holds 8 cards plus cash. Available in 5 colours. Comes in a premium gift box.', short:'RFID block · 8 cards · Top-grain leather', price:899, orig:1299, disc:31, cat:'Fashion', brand:'SlimCraft', rating:4.3, rcount:234, stock:80, feat:false, freeShip:false, img:'https://images.unsplash.com/photo-1627123424574-724758594e93?w=500', tags:['wallet','leather','men'] },
];

const SAMPLE_REVIEWS = [
  { name:'Priya Sharma', rating:5, comment:'Absolutely love it! Build quality is outstanding. Arrived well-packaged and exactly as described. Highly recommend!', date:'Jan 15, 2024' },
  { name:'Rahul Verma', rating:4, comment:'Great product, fast delivery. Minor packaging scuff but item was perfect. Would definitely buy again!', date:'Jan 10, 2024' },
  { name:'Anita Patel', rating:5, comment:'Best purchase this year without a doubt. Exceeded all my expectations. The quality feels very premium.', date:'Jan 5, 2024' },
];

// ─── STATE ───
const state = {
  user: null,
  cart: [],
  wishlist: [],
  orders: [],
  filterCat: 'All',
  selectedProduct: null,
  checkoutStep: 1,
  coAddress: {},
  coPayment: 'cod',
};

// ─── UTILS ───
const fmt = n => '₹' + Number(n).toLocaleString('en-IN');
const stars = r => '★'.repeat(Math.round(r)) + '☆'.repeat(5 - Math.round(r));
const genId = () => 'ORD-' + Date.now() + '-' + Math.random().toString(36).substr(2,5).toUpperCase();

// ─── TOAST ───
function toast(msg, type = 'info') {
  const icons = { success:'✅', error:'❌', info:'ℹ️' };
  const c = document.getElementById('toastContainer');
  const el = document.createElement('div');
  el.className = `toast-lx t-${type}`;
  el.innerHTML = `<span class="ti">${icons[type]||'ℹ️'}</span><span class="tm">${msg}</span>`;
  c.appendChild(el);
  setTimeout(() => el.remove(), 3200);
}

// ─── THEME TOGGLE ───
document.getElementById('themeToggle').addEventListener('click', () => {
  const html = document.documentElement;
  const dark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', dark ? 'light' : 'dark');
  document.getElementById('themeIcon').className = dark ? 'bi bi-moon-fill' : 'bi bi-sun-fill';
});

// ─── USER DROPDOWN ───
function toggleUDrop() { document.getElementById('uDropMenu').classList.toggle('show'); }
function closeUDrop()  { document.getElementById('uDropMenu').classList.remove('show'); }
document.addEventListener('click', e => {
  if (!e.target.closest('.udrop')) closeUDrop();
  if (!e.target.closest('.lx-srch-wrap')) document.getElementById('lxSuggs').classList.remove('show');
});

// ─── PAGE ROUTER ───
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const pg = document.getElementById('page-' + name);
  if (!pg) return;
  pg.classList.add('active');
  state.currentPage = name;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  const renders = {
    products: renderProducts,
    orders:   renderOrders,
    wishlist: renderWishlist,
    profile:  renderProfile,
    checkout: renderCheckout,
    admin:    renderAdminDash,
  };
  if (renders[name]) renders[name]();
}

function filterAndGo(cat) {
  state.filterCat = cat;
  showPage('products');
}

function openProduct(id) {
  state.selectedProduct = PRODUCTS.find(p => p.id === id);
  document.getElementById('lxSuggs').classList.remove('show');
  document.getElementById('srchInput').value = '';
  renderDetail();
  showPage('detail');
}

// ─── UPDATE NAV UI ───
function updateUI() {
  const u = state.user;
  document.getElementById('navLoginBtn').style.display  = u ? 'none' : '';
  document.getElementById('userDropWrap').style.display = u ? '' : 'none';
  document.getElementById('wlBtn').style.display        = u ? '' : 'none';
  document.getElementById('notifBtn').style.display     = u ? '' : 'none';
  if (u) {
    document.getElementById('navUserAv').textContent = u.name[0].toUpperCase();
    document.getElementById('adminNavLink').style.display = u.role === 'admin' ? '' : 'none';
  }
  const cartCount = state.cart.reduce((s, i) => s + i.qty, 0);
  const cb = document.getElementById('cartBadge');
  cb.style.display = cartCount > 0 ? '' : 'none';
  cb.textContent = cartCount > 9 ? '9+' : cartCount;

  const wb = document.getElementById('wlBadge');
  if (wb) { wb.style.display = state.wishlist.length > 0 ? '' : 'none'; wb.textContent = state.wishlist.length; }
}

// ─── SEARCH ───
function initSearch() {
  const inp = document.getElementById('srchInput');
  const suggs = document.getElementById('lxSuggs');
  inp.addEventListener('input', () => {
    const q = inp.value.trim().toLowerCase();
    if (q.length < 2) { suggs.classList.remove('show'); return; }
    const matches = PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q)
    ).slice(0, 5);
    if (!matches.length) { suggs.classList.remove('show'); return; }
    suggs.innerHTML = matches.map(p => `
      <div class="sug-item" onclick="openProduct('${p.id}')">
        <img src="${p.img}" alt="${p.name}" loading="lazy"/>
        <div>
          <span class="sug-name">${p.name}</span>
          <span class="sug-price">${fmt(p.price)}</span>
        </div>
      </div>`).join('');
    suggs.classList.add('show');
  });
  inp.addEventListener('keydown', e => {
    if (e.key === 'Enter') { suggs.classList.remove('show'); state.filterCat = 'All'; showPage('products'); }
  });
}

// ─── PRODUCT CARD HTML ───
function productCardHTML(p) {
  const inCart = state.cart.find(i => i.id === p.id);
  const inWl   = state.wishlist.includes(p.id);
  return `
    <div class="col-6 col-md-4 col-lg-3">
      <div class="pcard" onclick="openProduct('${p.id}')">
        <div class="pcard-img">
          ${p.disc ? `<span class="badge-disc">-${p.disc}%</span>` : ''}
          ${p.freeShip ? `<span class="badge-fs">Free Ship</span>` : ''}
          <button class="btn-wl ${inWl ? 'active' : ''}" onclick="toggleWishlist(event,'${p.id}')" title="Wishlist">
            ${inWl ? '❤️' : '🤍'}
          </button>
          <img src="${p.img}" alt="${p.name}" loading="lazy"/>
        </div>
        <div class="pcard-body">
          <div class="pcard-brand">${p.brand}</div>
          <div class="pcard-name">${p.name}</div>
          <div class="pcard-stars">
            <span class="stars-txt">${stars(p.rating)}</span>
            <span class="stars-count">(${p.rcount})</span>
            <span style="font-size:.72rem;font-weight:700;color:var(--lx-text);margin-left:2px">${p.rating}</span>
          </div>
          <div class="pcard-price-row">
            <span class="pcard-price">${fmt(p.price)}</span>
            ${p.orig ? `<span class="pcard-old">${fmt(p.orig)}</span>` : ''}
          </div>
          <button class="btn-atc ${inCart ? 'in-cart' : ''}" onclick="addToCart(event,'${p.id}')">
            ${inCart ? `✓ In Cart (${inCart.qty})` : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>`;
}

// ─── HOME ───
function renderHome() {
  const featured = PRODUCTS.filter(p => p.feat);
  const trending = [...PRODUCTS].sort((a,b) => b.rcount - a.rcount).slice(0, 4);
  document.getElementById('featuredGrid').innerHTML  = featured.map(productCardHTML).join('');
  document.getElementById('trendingGrid').innerHTML  = trending.map(productCardHTML).join('');
}

// ─── PRODUCTS PAGE ───
function renderProducts() {
  const cats = ['All', ...new Set(PRODUCTS.map(p => p.cat))];

  // Sidebar filter checkboxes
  document.getElementById('filterCats').innerHTML = cats.map(c => `
    <label class="filter-opt">
      <input type="checkbox" ${state.filterCat === c || (state.filterCat === 'All' && c === 'All') ? 'checked' : ''}
        onchange="setCatFilter('${c}')"/>
      ${c}
    </label>`).join('');

  // Top category pills
  const pillCats = ['All','Electronics','Fashion','Sports','Beauty','Home & Living','Books'];
  document.getElementById('prodCatPills').innerHTML = pillCats.map(c => `
    <div class="cat-pill ${state.filterCat === c || (state.filterCat === 'All' && c === 'All') ? 'active' : ''}"
      onclick="setCatFilter('${c}')">
      <span class="cn">${c}</span>
    </div>`).join('');

  applyFilters();
}

function setCatFilter(cat) {
  state.filterCat = cat;
  renderProducts();
}

function applyFilters() {
  const maxP  = parseInt(document.getElementById('priceRange')?.value || 10000);
  const minR  = parseFloat(document.getElementById('ratingRange')?.value || 0);
  const sort  = document.getElementById('sortSel')?.value || 'popular';
  const srch  = document.getElementById('srchInput').value.trim().toLowerCase();

  let list = PRODUCTS.filter(p => {
    if (state.filterCat !== 'All' && p.cat !== state.filterCat) return false;
    if (p.price > maxP)  return false;
    if (p.rating < minR) return false;
    if (srch && !p.name.toLowerCase().includes(srch) && !p.brand.toLowerCase().includes(srch)) return false;
    return true;
  });

  list.sort((a,b) => {
    if (sort === 'price-asc')  return a.price - b.price;
    if (sort === 'price-desc') return b.price - a.price;
    if (sort === 'rating')     return b.rating - a.rating;
    if (sort === 'discount')   return b.disc - a.disc;
    return b.rcount - a.rcount;
  });

  const titleEl = document.getElementById('prodPageTitle');
  const countEl = document.getElementById('prodCount');
  if (titleEl) titleEl.textContent = state.filterCat === 'All' ? 'All Products' : state.filterCat;
  if (countEl) countEl.textContent = `${list.length} product${list.length !== 1 ? 's' : ''}`;

  const grid = document.getElementById('productsGrid');
  if (!grid) return;
  grid.innerHTML = list.length
    ? list.map(productCardHTML).join('')
    : `<div class="col-12"><div class="empty-state">
        <div class="es-icon">🔍</div>
        <h3>No products found</h3>
        <p>Try adjusting your filters or search query.</p>
        <button class="btn-lx btn-violet" onclick="resetFilters()">Reset Filters</button>
      </div></div>`;
}

function resetFilters() {
  state.filterCat = 'All';
  const pr = document.getElementById('priceRange');
  const rr = document.getElementById('ratingRange');
  if (pr) { pr.value = 10000; document.getElementById('priceVal').textContent = '10000'; }
  if (rr) { rr.value = 0;     document.getElementById('ratingVal').textContent = '0'; }
  const ss = document.getElementById('sortSel');
  if (ss) ss.value = 'popular';
  document.getElementById('srchInput').value = '';
  renderProducts();
}

// ─── PRODUCT DETAIL ───
let _detailQty = 1;
let _pickedStar = 5;

function renderDetail() {
  const p = state.selectedProduct;
  if (!p) return;
  _detailQty = 1;
  _pickedStar = 5;
  const inCart = state.cart.find(i => i.id === p.id);
  const inWl   = state.wishlist.includes(p.id);
  const similar = PRODUCTS.filter(x => x.cat === p.cat && x.id !== p.id).slice(0, 4);
  const savings = p.orig ? p.orig - p.price : 0;

  document.getElementById('detailContent').innerHTML = `
    <!-- Left: image -->
    <div class="col-12 col-md-5">
      <img class="pd-img" src="${p.img}" alt="${p.name}"/>
    </div>

    <!-- Right: info -->
    <div class="col-12 col-md-7">
      <div class="d-flex align-items-center justify-content-between mb-3">
        <span style="font-size:.74rem;font-weight:700;padding:4px 14px;border-radius:99px;background:var(--lx-violet-soft);color:var(--lx-violet)">${p.cat}</span>
        <button class="btn-wl ${inWl?'active':''}" id="detailWlBtn"
          style="position:static;width:38px;height:38px;border-radius:10px;border:1px solid var(--lx-border);font-size:1rem"
          onclick="toggleWishlist(event,'${p.id}');renderDetail()">
          ${inWl ? '❤️' : '🤍'}
        </button>
      </div>

      <h1 style="font-family:var(--font-d);font-size:1.7rem;font-weight:800;color:var(--lx-text);margin-bottom:4px">${p.name}</h1>
      <p style="font-size:.85rem;color:var(--lx-muted);margin-bottom:12px">
        by <span style="color:var(--lx-violet);font-weight:700">${p.brand}</span>
      </p>

      <div class="d-flex align-items-center gap-2 mb-3">
        <span style="color:var(--lx-amber);font-size:.95rem">${stars(p.rating)}</span>
        <span style="font-weight:800;color:var(--lx-text)">${p.rating}</span>
        <span style="font-size:.82rem;color:var(--lx-muted)">(${p.rcount} reviews)</span>
      </div>

      <div class="d-flex align-items-baseline gap-3 mb-1">
        <span class="pd-price">${fmt(p.price)}</span>
        ${p.orig ? `<span class="pd-old">${fmt(p.orig)}</span>` : ''}
      </div>
      ${savings > 0 ? `<p class="mb-3"><span class="savings-pill">You save ${fmt(savings)}!</span></p>` : '<div class="mb-3"></div>'}

      <div class="d-flex align-items-center gap-3 mb-4" style="font-size:.875rem;flex-wrap:wrap">
        <span style="font-weight:700;color:${p.stock>10?'var(--lx-emerald)':p.stock>0?'var(--lx-amber)':'var(--lx-rose)'}">
          ${p.stock>10 ? '✓ In Stock' : p.stock>0 ? `Only ${p.stock} left!` : '✗ Out of Stock'}
        </span>
        ${p.freeShip ? `<span style="color:var(--lx-muted)">·</span><span style="color:#3B82F6;font-weight:700">🚚 Free Delivery</span>` : ''}
        <span style="color:var(--lx-muted)">·</span>
        <span style="color:var(--lx-muted)">🔄 30-day returns</span>
      </div>

      <!-- Qty + CTA -->
      <div class="d-flex align-items-center gap-3 mb-4 flex-wrap">
        <div class="qty-ctrl-lg">
          <button class="qty-btn-lg" onclick="changeDetailQty(-1)">−</button>
          <span id="detailQtyDisplay" style="font-weight:800;font-size:1rem;min-width:28px;text-align:center;color:var(--lx-text)">1</span>
          <button class="qty-btn-lg" onclick="changeDetailQty(1)">+</button>
        </div>
        <button class="btn-lx btn-violet lg" style="flex:1;justify-content:center" id="detailAtcBtn" onclick="addFromDetail()">
          ${inCart ? `✓ In Cart (${inCart.qty})` : '🛒 Add to Cart'}
        </button>
        <button class="btn-lx btn-outline-v lg" onclick="addFromDetail();showPage('checkout')" ${p.stock===0?'disabled':''}>
          Buy Now
        </button>
      </div>

      <!-- Tab nav -->
      <div class="lx-tabs">
        <button class="lx-tab active" onclick="switchDetailTab(this,'dtab-desc')">Description</button>
        <button class="lx-tab" onclick="switchDetailTab(this,'dtab-spec')">Specifications</button>
        <button class="lx-tab" onclick="switchDetailTab(this,'dtab-rev')">Reviews (${SAMPLE_REVIEWS.length})</button>
      </div>

      <!-- Tab: Description -->
      <div class="tab-pane active" id="dtab-desc">
        <p style="font-size:.9rem;color:var(--lx-muted);line-height:1.7">${p.desc}</p>
        <div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:12px">
          ${p.tags.map(t=>`<span style="font-size:.74rem;font-weight:700;padding:3px 10px;border-radius:99px;background:var(--lx-violet-soft);color:var(--lx-violet)">#${t}</span>`).join('')}
        </div>
      </div>

      <!-- Tab: Spec -->
      <div class="tab-pane" id="dtab-spec">
        ${[['Brand',p.brand],['Category',p.cat],['Highlights',p.short],['Free Shipping',p.freeShip?'Yes':'No'],['Availability',p.stock>0?'In Stock':'Out of Stock'],['Returns','30-day easy returns'],['Warranty','1 year manufacturer']].map(([k,v])=>`
        <div class="spec-row"><span class="spec-k">${k}</span><span class="spec-v">${v}</span></div>`).join('')}
      </div>

      <!-- Tab: Reviews -->
      <div class="tab-pane" id="dtab-rev">
        ${state.user ? `
        <div style="background:var(--lx-bg);border-radius:12px;padding:16px;margin-bottom:16px;border:1px solid var(--lx-border)">
          <div style="font-weight:700;font-size:.9rem;color:var(--lx-text);margin-bottom:10px">✍️ Write a Review</div>
          <div style="display:flex;gap:6px;margin-bottom:10px" id="starPicker">
            ${[1,2,3,4,5].map(i=>`<span style="font-size:1.8rem;cursor:pointer;transition:transform .15s;color:var(--lx-amber)" onclick="pickStar(${i})" onmouseover="hoverStar(${i})" onmouseout="restoreStar()" data-star="${i}">☆</span>`).join('')}
          </div>
          <textarea id="reviewText" class="lx-input" rows="3" style="resize:vertical" placeholder="Share your experience with this product…"></textarea>
          <button class="btn-lx btn-violet mt-2" onclick="submitReview('${p.id}')">Submit Review</button>
        </div>` : `
        <div style="background:var(--lx-violet-soft);border-radius:10px;padding:12px 16px;font-size:.85rem;color:var(--lx-violet);font-weight:600;margin-bottom:16px">
          <a href="#" style="color:var(--lx-violet);font-weight:800" onclick="showPage('login');return false">Sign in</a> to write a review
        </div>`}
        ${SAMPLE_REVIEWS.map(r=>`
        <div class="review-card">
          <div class="d-flex align-items-center gap-2 mb-2">
            <div class="rv-avatar">${r.name[0]}</div>
            <div style="flex:1">
              <div class="rv-name">${r.name}</div>
              <div class="rv-date">${r.date}</div>
            </div>
            <span style="color:var(--lx-amber)">${stars(r.rating)}</span>
          </div>
          <div class="rv-text">${r.comment}</div>
        </div>`).join('')}
      </div>
    </div>

    <!-- Similar Products -->
    <div class="col-12 mt-3">
      <div class="sec-hdr"><h2 class="sec-title">You May Also Like</h2></div>
      <div class="row g-3">${similar.map(productCardHTML).join('')}</div>
    </div>`;
}

function switchDetailTab(btn, id) {
  document.querySelectorAll('.lx-tab').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-pane').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  const tp = document.getElementById(id);
  if (tp) tp.classList.add('active');
}

function changeDetailQty(d) {
  const p = state.selectedProduct;
  _detailQty = Math.max(1, Math.min(p ? p.stock : 10, _detailQty + d));
  const el = document.getElementById('detailQtyDisplay');
  if (el) el.textContent = _detailQty;
}

function addFromDetail() {
  const p = state.selectedProduct;
  if (!p) return;
  const ex = state.cart.find(i => i.id === p.id);
  if (ex) ex.qty = Math.min(ex.qty + _detailQty, p.stock);
  else state.cart.push({ id: p.id, product: p, qty: _detailQty });
  updateUI();
  const btn = document.getElementById('detailAtcBtn');
  const inCart = state.cart.find(i => i.id === p.id);
  if (btn && inCart) { btn.textContent = `✓ In Cart (${inCart.qty})`; btn.classList.add('in-cart'); }
  toast(`${p.name} added to cart 🛒`, 'success');
}

// Star picker
function pickStar(n)  { _pickedStar = n; renderStars(n); }
function hoverStar(n) { renderStars(n); }
function restoreStar(){ renderStars(_pickedStar); }
function renderStars(n) {
  document.querySelectorAll('#starPicker span').forEach((s, i) => {
    s.textContent = i < n ? '★' : '☆';
    s.style.transform = i < n ? 'scale(1.15)' : 'scale(1)';
  });
}

function submitReview(pid) {
  const txt = document.getElementById('reviewText')?.value?.trim();
  if (!txt) { toast('Please write a review first', 'error'); return; }
  toast('Review submitted! Thank you 🌟', 'success');
  document.getElementById('reviewText').value = '';
  _pickedStar = 5;
  renderStars(5);
}

// ─── CART ───
function addToCart(e, id) {
  e.stopPropagation();
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const ex = state.cart.find(i => i.id === id);
  if (ex) ex.qty = Math.min(ex.qty + 1, p.stock);
  else state.cart.push({ id, product: p, qty: 1 });
  updateUI();
  toast(`${p.name.slice(0,30)}… added to cart 🛒`, 'success');
  // Refresh card buttons in current view
  refreshCardButtons(id);
}

function refreshCardButtons(id) {
  const inCart = state.cart.find(i => i.id === id);
  document.querySelectorAll(`.btn-atc[data-pid="${id}"]`).forEach(btn => {
    if (inCart) { btn.textContent = `✓ In Cart (${inCart.qty})`; btn.classList.add('in-cart'); }
    else { btn.textContent = 'Add to Cart'; btn.classList.remove('in-cart'); }
  });
}

function updateCartQty(id, delta) {
  const item = state.cart.find(i => i.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  updateUI();
  renderCartCanvas();
}

function removeFromCart(id) {
  state.cart = state.cart.filter(i => i.id !== id);
  updateUI();
  renderCartCanvas();
}

function renderCartCanvas() {
  const body = document.getElementById('cartBody');
  if (!body) return;

  if (!state.cart.length) {
    body.innerHTML = `
      <div class="cart-empty">
        <div class="cei">🛒</div>
        <h5>Your cart is empty</h5>
        <p>Discover amazing products and add them here.</p>
        <button class="btn-lx btn-violet mt-3" data-bs-dismiss="offcanvas" onclick="showPage('products')">Start Shopping</button>
      </div>`;
    return;
  }

  const subtotal = state.cart.reduce((s,i) => s + i.product.price * i.qty, 0);
  const shipping  = subtotal >= 500 ? 0 : 40;
  const tax       = Math.round(subtotal * 0.18);
  const total     = subtotal + shipping + tax;

  body.innerHTML = `
    <div style="flex:1;overflow-y:auto;padding-bottom:8px">
      ${subtotal < 500
        ? `<div class="free-bar">🚚 Add ${fmt(500-subtotal)} more for free shipping!</div>`
        : `<div class="free-bar">🎉 You qualify for free shipping!</div>`}
      ${state.cart.map(item => `
      <div class="cart-item">
        <img src="${item.product.img}" alt="${item.product.name}" loading="lazy"/>
        <div style="flex:1;min-width:0">
          <div class="ci-name">${item.product.name}</div>
          <div class="ci-brand">${item.product.brand}</div>
          <div class="d-flex align-items-center gap-3 mt-1">
            <div class="qty-ctrl">
              <button class="qty-btn" onclick="updateCartQty('${item.id}',-1)">−</button>
              <span class="qty-val">${item.qty}</span>
              <button class="qty-btn" onclick="updateCartQty('${item.id}',1)">+</button>
            </div>
            <button class="btn-rm" onclick="removeFromCart('${item.id}')">✕ Remove</button>
          </div>
        </div>
        <div class="ci-price">${fmt(item.product.price * item.qty)}</div>
      </div>`).join('')}
    </div>
    <div class="cart-summary">
      <div class="cs-row"><span>Subtotal</span><span>${fmt(subtotal)}</span></div>
      <div class="cs-row"><span>Shipping</span><span style="color:${shipping===0?'var(--lx-emerald)':'inherit'}">${shipping===0?'FREE':fmt(shipping)}</span></div>
      <div class="cs-row"><span>GST (18%)</span><span>${fmt(tax)}</span></div>
      <div class="cs-row total"><span>Total</span><span>${fmt(total)}</span></div>
      <button class="btn-lx btn-violet full lg mt-3" data-bs-dismiss="offcanvas"
        onclick="${state.user ? "showPage('checkout')" : "showPage('login')"}">
        ${state.user ? '🔒 Proceed to Checkout' : '🔑 Sign In to Checkout'}
      </button>
      <p style="text-align:center;font-size:.75rem;color:var(--lx-muted);margin-top:10px;margin-bottom:0">
        🔒 Secure SSL encrypted checkout
      </p>
    </div>`;
}

document.getElementById('cartCanvas').addEventListener('show.bs.offcanvas', renderCartCanvas);

// ─── WISHLIST ───
function toggleWishlist(e, id) {
  e.stopPropagation();
  if (!state.user) { showPage('login'); toast('Sign in to save items ❤️', 'info'); return; }
  const i = state.wishlist.indexOf(id);
  if (i === -1) { state.wishlist.push(id); toast('Added to wishlist ❤️', 'info'); }
  else          { state.wishlist.splice(i, 1); toast('Removed from wishlist', 'info'); }
  updateUI();
}

function clearWishlist() {
  state.wishlist = [];
  updateUI();
  renderWishlist();
}

function renderWishlist() {
  const cont    = document.getElementById('wishlistContent');
  const clearBtn = document.getElementById('clearWlBtn');
  const prods   = PRODUCTS.filter(p => state.wishlist.includes(p.id));
  if (clearBtn) clearBtn.style.display = prods.length ? '' : 'none';
  if (!prods.length) {
    cont.innerHTML = `
      <div class="empty-state">
        <div class="es-icon">💝</div>
        <h3>Your wishlist is empty</h3>
        <p>Save items you love by tapping the heart icon on any product.</p>
        <button class="btn-lx btn-violet" onclick="showPage('products')">Discover Products</button>
      </div>`;
    return;
  }
  cont.innerHTML = `<div class="row g-3">${prods.map(productCardHTML).join('')}</div>`;
}

// ─── AUTH ───
let _isLoginMode = true;

function toggleAuth() {
  _isLoginMode = !_isLoginMode;
  document.getElementById('authTitle').textContent       = _isLoginMode ? 'Welcome Back'                  : 'Create Account';
  document.getElementById('authSub').textContent         = _isLoginMode ? 'Sign in to your LuxeMart account' : 'Join millions of happy shoppers';
  document.getElementById('authSubmitBtn').textContent   = _isLoginMode ? 'Sign In'                       : 'Create Account';
  document.getElementById('authSwitchText').textContent  = _isLoginMode ? "Don't have an account?"        : 'Already have an account?';
  document.getElementById('authSwitchLink').textContent  = _isLoginMode ? 'Sign Up'                       : 'Sign In';
  document.getElementById('signupNameWrap').style.display = _isLoginMode ? 'none' : 'block';
  document.getElementById('authAlert').innerHTML = '';
}

function submitAuth() {
  const email = document.getElementById('authEmail').value.trim();
  const pass  = document.getElementById('authPass').value;
  const name  = document.getElementById('authName')?.value?.trim();
  const alertEl = document.getElementById('authAlert');

  if (!email || !pass || (!_isLoginMode && !name)) {
    alertEl.innerHTML = `<div class="alert-lx error">Please fill in all required fields.</div>`;
    return;
  }
  if (pass.length < 4) {
    alertEl.innerHTML = `<div class="alert-lx error">Password must be at least 4 characters.</div>`;
    return;
  }

  const btn = document.getElementById('authSubmitBtn');
  btn.textContent = 'Please wait…';
  btn.disabled = true;

  setTimeout(() => {
    const displayName = _isLoginMode
      ? (email.split('@')[0].replace(/[^a-zA-Z ]/g,' ').trim() || 'User')
      : name;
    state.user = { name: displayName, email, role: email === 'admin@luxemart.com' ? 'admin' : 'user' };
    updateUI();
    showPage('home');
    toast(`Welcome, ${state.user.name}! 👋`, 'success');
    btn.textContent = _isLoginMode ? 'Sign In' : 'Create Account';
    btn.disabled = false;
    alertEl.innerHTML = '';
    // Reset form
    document.getElementById('authEmail').value = '';
    document.getElementById('authPass').value  = '';
    if (document.getElementById('authName')) document.getElementById('authName').value = '';
  }, 900);
}

function logout() {
  state.user = null;
  state.wishlist = [];
  updateUI();
  showPage('home');
  toast('Signed out successfully. See you soon!', 'info');
}

// ─── CHECKOUT ───
let _coStep = 1;

function renderCheckout() {
  if (!state.user) { showPage('login'); return; }
  if (!state.cart.length) { showPage('products'); toast('Add items to cart first!', 'info'); return; }
  _coStep = 1;
  updateCoSteps();
  renderCoStep();
}

function updateCoSteps() {
  for (let i = 1; i <= 3; i++) {
    const el = document.getElementById('cstep' + i);
    if (!el) return;
    el.classList.remove('active','done');
    if (i < _coStep) el.classList.add('done');
    else if (i === _coStep) el.classList.add('active');
  }
}

function renderCoStep() {
  const left  = document.getElementById('checkoutLeft');
  const right = document.getElementById('checkoutRight');
  if (!left || !right) return;

  const subtotal = state.cart.reduce((s,i) => s + i.product.price * i.qty, 0);
  const shipping  = subtotal >= 500 ? 0 : 40;
  const tax       = Math.round(subtotal * 0.18);
  const total     = subtotal + shipping + tax;

  // Always show order summary on right
  right.innerHTML = `
    <div style="background:var(--lx-surface);border:1px solid var(--lx-border);border-radius:var(--lx-radius);padding:22px;position:sticky;top:80px">
      <div style="font-family:var(--font-d);font-weight:800;font-size:1rem;color:var(--lx-text);margin-bottom:14px">Order Summary</div>
      ${state.cart.map(i=>`
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
        <img src="${i.product.img}" style="width:44px;height:44px;border-radius:8px;object-fit:cover;flex-shrink:0"/>
        <div style="flex:1;min-width:0">
          <div style="font-size:.82rem;font-weight:600;color:var(--lx-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i.product.name}</div>
          <div style="font-size:.74rem;color:var(--lx-muted)">Qty: ${i.qty}</div>
        </div>
        <span style="font-weight:800;font-size:.88rem;color:var(--lx-text)">${fmt(i.product.price*i.qty)}</span>
      </div>`).join('')}
      <div style="border-top:1px solid var(--lx-border);margin-top:12px;padding-top:12px">
        <div class="cs-row"><span>Subtotal</span><span>${fmt(subtotal)}</span></div>
        <div class="cs-row"><span>Shipping</span><span style="color:${shipping?'inherit':'var(--lx-emerald)'}">${shipping?fmt(shipping):'FREE 🎉'}</span></div>
        <div class="cs-row"><span>GST (18%)</span><span>${fmt(tax)}</span></div>
        <div class="cs-row total"><span>Total</span><span>${fmt(total)}</span></div>
      </div>
    </div>`;

  const a = state.coAddress;
  const card = (content) => `
    <div style="background:var(--lx-surface);border:1px solid var(--lx-border);border-radius:var(--lx-radius);padding:24px">${content}</div>`;

  if (_coStep === 1) {
    left.innerHTML = card(`
      <div style="font-family:var(--font-d);font-weight:800;font-size:1.1rem;color:var(--lx-text);margin-bottom:18px">📍 Shipping Address</div>
      <div class="row g-3">
        <div class="col-12"><label class="lx-label">Full Name *</label><input class="lx-input" id="coName" type="text" placeholder="Full name" value="${a.name||state.user?.name||''}"/></div>
        <div class="col-12"><label class="lx-label">Phone Number *</label><input class="lx-input" id="coPhone" type="tel" placeholder="+91 99999 99999" value="${a.phone||''}"/></div>
        <div class="col-12"><label class="lx-label">Street Address *</label><input class="lx-input" id="coStreet" type="text" placeholder="Flat/House no., Building, Street, Area" value="${a.street||''}"/></div>
        <div class="col-6"><label class="lx-label">City *</label><input class="lx-input" id="coCity" type="text" placeholder="City" value="${a.city||''}"/></div>
        <div class="col-6"><label class="lx-label">State *</label><input class="lx-input" id="coState" type="text" placeholder="State" value="${a.state||''}"/></div>
        <div class="col-6"><label class="lx-label">PIN Code *</label><input class="lx-input" id="coPin" type="text" placeholder="110001" value="${a.pin||''}"/></div>
        <div class="col-6"><label class="lx-label">Country</label><input class="lx-input" id="coCountry" type="text" value="${a.country||'India'}"/></div>
      </div>
      <button class="btn-lx btn-violet full lg mt-4" onclick="coNext()">Continue to Payment →</button>`);

  } else if (_coStep === 2) {
    const payOpts = [
      ['cod',  '💵','Cash on Delivery','Pay when your order arrives'],
      ['card', '💳','Credit / Debit Card','Visa, Mastercard, RuPay, Amex'],
      ['upi',  '📱','UPI Payment','PhonePe, Google Pay, Paytm, BHIM'],
      ['wallet','👜','Digital Wallet','Amazon Pay, MobiKwik, Freecharge'],
    ];
    left.innerHTML = card(`
      <div style="font-family:var(--font-d);font-weight:800;font-size:1.1rem;color:var(--lx-text);margin-bottom:18px">💳 Payment Method</div>
      ${payOpts.map(([val,icon,title,sub])=>`
      <div class="pay-opt ${state.coPayment===val?'selected':''}" onclick="selectPay('${val}',this)">
        <input type="radio" name="pay" ${state.coPayment===val?'checked':''}/>
        <span class="pay-icon">${icon}</span>
        <div><div class="pay-name">${title}</div><div class="pay-sub">${sub}</div></div>
      </div>`).join('')}
      <div class="d-flex gap-3 mt-3">
        <button class="btn-lx btn-ghost flex-fill" onclick="coBack()">← Back</button>
        <button class="btn-lx btn-violet flex-fill" onclick="coNext()">Review Order →</button>
      </div>`);

  } else if (_coStep === 3) {
    const payLabels = { cod:'Cash on Delivery', card:'Credit / Debit Card', upi:'UPI Payment', wallet:'Digital Wallet' };
    left.innerHTML = card(`
      <div style="font-family:var(--font-d);font-weight:800;font-size:1.1rem;color:var(--lx-text);margin-bottom:18px">✅ Review & Confirm</div>
      <div style="background:var(--lx-bg);border-radius:12px;padding:14px;margin-bottom:12px;font-size:.875rem">
        <div style="font-weight:700;color:var(--lx-text);margin-bottom:6px">📍 Delivering to</div>
        <div style="color:var(--lx-muted);line-height:1.6">${a.name||state.user?.name||'—'}<br>${a.street||'—'}<br>${a.city||'—'}, ${a.state||'—'} – ${a.pin||'—'}<br>${a.country||'India'}<br><strong style="color:var(--lx-text)">${a.phone||'—'}</strong></div>
      </div>
      <div style="background:var(--lx-bg);border-radius:12px;padding:14px;margin-bottom:20px;font-size:.875rem">
        <div style="font-weight:700;color:var(--lx-text);margin-bottom:4px">💳 Payment Method</div>
        <div style="color:var(--lx-muted)">${payLabels[state.coPayment]||state.coPayment}</div>
      </div>
      <div style="background:var(--lx-violet-soft);border-radius:10px;padding:10px 14px;font-size:.8rem;color:var(--lx-violet);margin-bottom:18px">
        🔒 Your payment information is encrypted and secure.
      </div>
      <div class="d-flex gap-3">
        <button class="btn-lx btn-ghost flex-fill" onclick="coBack()">← Back</button>
        <button class="btn-lx btn-emerald flex-fill lg" onclick="placeOrder()">✓ Place Order — ${fmt(total)}</button>
      </div>`);
  }
}

function coNext() {
  if (_coStep === 1) {
    const name = document.getElementById('coName')?.value?.trim();
    const phone = document.getElementById('coPhone')?.value?.trim();
    const street = document.getElementById('coStreet')?.value?.trim();
    if (!name || !phone || !street) { toast('Please fill all required fields', 'error'); return; }
    state.coAddress = {
      name, phone, street,
      city:    document.getElementById('coCity')?.value,
      state:   document.getElementById('coState')?.value,
      pin:     document.getElementById('coPin')?.value,
      country: document.getElementById('coCountry')?.value,
    };
  }
  _coStep = Math.min(3, _coStep + 1);
  updateCoSteps();
  renderCoStep();
  window.scrollTo({ top: 0, behavior:'smooth' });
}

function coBack() {
  _coStep = Math.max(1, _coStep - 1);
  updateCoSteps();
  renderCoStep();
}

function selectPay(method, el) {
  state.coPayment = method;
  document.querySelectorAll('.pay-opt').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');
  el.querySelector('input[type=radio]').checked = true;
}

function placeOrder() {
  const subtotal = state.cart.reduce((s,i) => s + i.product.price * i.qty, 0);
  const shipping  = subtotal >= 500 ? 0 : 40;
  const tax       = Math.round(subtotal * 0.18);
  const orderId   = genId();

  state.orders.unshift({
    id: orderId, num: orderId,
    items: [...state.cart],
    address: { ...state.coAddress },
    payment: state.coPayment,
    subtotal, shipping, tax,
    total: subtotal + shipping + tax,
    status: 'placed',
    date: new Date().toLocaleString('en-IN', { day:'numeric', month:'long', year:'numeric', hour:'2-digit', minute:'2-digit' }),
  });

  state.cart = [];
  updateUI();
  showToastAndSuccess(orderId, subtotal + shipping + tax);
}

function showToastAndSuccess(orderId, total) {
  const left  = document.getElementById('checkoutLeft');
  const right = document.getElementById('checkoutRight');
  if (left) left.innerHTML = `
    <div style="text-align:center;padding:48px 24px">
      <div style="width:76px;height:76px;background:#DCFCE7;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 18px;font-size:2.2rem">✅</div>
      <h2 style="font-family:var(--font-d);font-weight:800;color:var(--lx-text);margin-bottom:10px">Order Placed!</h2>
      <p style="color:var(--lx-muted);margin-bottom:4px;font-size:.9rem">Order ID: <strong style="color:var(--lx-violet);font-family:monospace">${orderId}</strong></p>
      <p style="color:var(--lx-muted);margin-bottom:6px;font-size:.88rem">Total paid: <strong style="color:var(--lx-text)">${fmt(total)}</strong></p>
      <p style="color:var(--lx-muted);font-size:.85rem;margin-bottom:28px">🚚 Expected delivery in 5–7 business days</p>
      <div class="d-flex gap-3 justify-content-center flex-wrap">
        <button class="btn-lx btn-violet" onclick="showPage('orders')">📦 Track Order</button>
        <button class="btn-lx btn-ghost" onclick="showPage('home')">Continue Shopping</button>
      </div>
    </div>`;
  if (right) right.innerHTML = '';
  toast('🎉 Order placed successfully!', 'success');
  // Update steps to done
  for (let i = 1; i <= 3; i++) {
    const el = document.getElementById('cstep' + i);
    if (el) { el.classList.remove('active'); el.classList.add('done'); }
  }
}

// ─── ORDERS ───
function renderOrders() {
  const cont = document.getElementById('ordersContent');
  if (!state.user) { cont.innerHTML = ''; showPage('login'); return; }
  if (!state.orders.length) {
    cont.innerHTML = `
      <div class="empty-state">
        <div class="es-icon">📦</div>
        <h3>No orders yet</h3>
        <p>Your order history will appear here once you shop.</p>
        <button class="btn-lx btn-violet" onclick="showPage('products')">Start Shopping</button>
      </div>`;
    return;
  }
  const statuses = ['placed','processing','shipped','delivered'];
  cont.innerHTML = state.orders.map(o => {
    const si = statuses.indexOf(o.status);
    const statusLabel = { placed:'📦 Placed', processing:'⚙️ Processing', shipped:'🚚 Shipped', delivered:'🎉 Delivered', cancelled:'❌ Cancelled' };
    return `
    <div class="order-card">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:10px;flex-wrap:wrap;gap:8px">
        <div>
          <div class="order-num">${o.num}</div>
          <div style="font-size:.78rem;color:var(--lx-muted);margin-top:2px">${o.date}</div>
        </div>
        <span class="status-badge sb-${o.status}">${statusLabel[o.status]||o.status}</span>
      </div>
      <!-- Status Timeline -->
      <div class="tl-wrap">
        ${statuses.map((s,i) => `
          <div class="tl-dot ${i<=si&&o.status!=='cancelled'?'done':''}" title="${s}">
            ${i<=si&&o.status!=='cancelled'?'✓':i+1}
          </div>
          ${i<statuses.length-1 ? `<div class="tl-line ${i<si&&o.status!=='cancelled'?'done':''}"></div>` : ''}`).join('')}
      </div>
      <!-- Item thumbnails -->
      <div style="display:flex;gap:8px;overflow-x:auto;margin-bottom:14px;padding-bottom:4px">
        ${o.items.map(i=>`<img src="${i.product.img}" title="${i.product.name} ×${i.qty}" style="width:50px;height:50px;border-radius:9px;object-fit:cover;flex-shrink:0;border:1px solid var(--lx-border)"/>`).join('')}
      </div>
      <!-- Footer -->
      <div style="display:flex;align-items:center;justify-content:space-between;border-top:1px solid var(--lx-border);padding-top:12px;flex-wrap:wrap;gap:8px">
        <div>
          <span style="font-family:var(--font-d);font-weight:900;font-size:1rem;color:var(--lx-text)">${fmt(o.total)}</span>
          <span style="font-size:.78rem;color:var(--lx-muted);margin-left:8px">${o.items.length} item${o.items.length!==1?'s':''}</span>
        </div>
        <div style="display:flex;gap:8px">
          ${o.status==='delivered' ? `<button class="btn-lx btn-ghost" style="padding:5px 12px;font-size:.78rem" onclick="toast('Invoice downloading…','info')">📄 Invoice</button><button class="btn-lx btn-ghost" style="padding:5px 12px;font-size:.78rem" onclick="toast('Review submitted!','success')">⭐ Review</button>` : ''}
          ${['placed','processing'].includes(o.status) ? `<button class="btn-lx btn-rose" style="padding:5px 12px;font-size:.78rem" onclick="cancelOrder('${o.id}')">Cancel Order</button>` : ''}
        </div>
      </div>
    </div>`;
  }).join('');
}

function cancelOrder(id) {
  const o = state.orders.find(x => x.id === id);
  if (o) { o.status = 'cancelled'; renderOrders(); toast('Order cancelled successfully', 'info'); }
}

// ─── PROFILE ───
function renderProfile() {
  const u = state.user;
  if (!u) { showPage('login'); return; }
  document.getElementById('profileContent').innerHTML = `
    <!-- Profile card -->
    <div style="background:var(--lx-surface);border:1px solid var(--lx-border);border-radius:var(--lx-radius-xl);padding:26px;margin-bottom:16px">
      <div style="display:flex;align-items:center;gap:18px;margin-bottom:22px">
        <div class="prof-avatar">${u.name[0].toUpperCase()}</div>
        <div>
          <div style="font-family:var(--font-d);font-weight:800;font-size:1.25rem;color:var(--lx-text)">${u.name}</div>
          <div style="font-size:.84rem;color:var(--lx-muted)">${u.email}</div>
          <span style="font-size:.72rem;font-weight:800;padding:2px 10px;border-radius:99px;display:inline-block;margin-top:5px;background:${u.role==='admin'?'var(--lx-violet-soft)':'#DCFCE7'};color:${u.role==='admin'?'var(--lx-violet)':'#15803D'}">
            ${u.role.toUpperCase()}
          </span>
        </div>
      </div>
      <div class="row g-3">
        <div class="col-4"><div class="stat-box"><div class="stat-box-n">${state.orders.length}</div><div class="stat-box-l">Orders</div></div></div>
        <div class="col-4"><div class="stat-box"><div class="stat-box-n">${state.wishlist.length}</div><div class="stat-box-l">Wishlist</div></div></div>
        <div class="col-4"><div class="stat-box"><div class="stat-box-n">7</div><div class="stat-box-l">Reviews</div></div></div>
      </div>
    </div>
    <!-- Menu items -->
    ${[
      ['📦','My Orders','View and track all your orders','orders'],
      ['❤️','Wishlist','Items you have saved for later','wishlist'],
      ['📍','Saved Addresses','Manage delivery addresses','profile'],
      ['🔔','Notifications','Order updates and offers','profile'],
      ['⚙️','Account Settings','Update your profile & password','profile'],
      ...(u.role==='admin'?[['🛡️','Admin Panel','Manage products & orders','admin']]:[]),
    ].map(([ic,t,s,pg])=>`
    <div class="prof-menu-item" onclick="showPage('${pg}')">
      <span class="prof-menu-icon">${ic}</span>
      <div style="flex:1"><div style="font-weight:700;font-size:.92rem;color:var(--lx-text)">${t}</div><div style="font-size:.78rem;color:var(--lx-muted)">${s}</div></div>
      <i class="bi bi-chevron-right" style="color:var(--lx-muted)"></i>
    </div>`).join('')}
    <button class="btn-lx btn-rose full mt-3" onclick="logout()">
      <i class="bi bi-box-arrow-right"></i> Sign Out
    </button>`;
}

// ─── ADMIN ───
let _adminTab = 'dashboard';

function switchAdminTab(tab, btn) {
  _adminTab = tab;
  document.querySelectorAll('.admin-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderAdminContent();
}

function renderAdminDash() {
  _adminTab = 'dashboard';
  // Reset tab buttons
  document.querySelectorAll('.admin-tab').forEach((b,i) => { b.classList.remove('active'); if(i===0) b.classList.add('active'); });
  renderAdminContent();
}

function renderAdminContent() {
  const cont = document.getElementById('adminContent');
  const totalRev = state.orders.reduce((s,o) => s + (o.status!=='cancelled'?o.total:0), 0);
  const totalOrders = state.orders.length;

  if (_adminTab === 'dashboard') {
    const topProds = [...PRODUCTS].sort((a,b) => b.rcount - a.rcount).slice(0,5);
    cont.innerHTML = `
      <!-- Stats -->
      <div class="row g-3 mb-4">
        ${[['💰','Total Revenue',fmt(totalRev),'All time'],['📦','Total Orders',totalOrders,'All time'],['🛍️','Products',PRODUCTS.length,'Active'],['👥','Users','2,847','Registered']].map(([ic,l,v,sub])=>`
        <div class="col-6 col-md-3">
          <div class="admin-stat">
            <div class="admin-stat-icon">${ic}</div>
            <div class="admin-stat-val">${v}</div>
            <div class="admin-stat-label">${l}</div>
            <div style="font-size:.72rem;color:var(--lx-violet);margin-top:4px;font-weight:600">${sub}</div>
          </div>
        </div>`).join('')}
      </div>
      <!-- Charts row -->
      <div class="row g-4">
        <div class="col-12 col-md-6">
          <div style="background:var(--lx-surface);border:1px solid var(--lx-border);border-radius:var(--lx-radius);padding:20px">
            <div style="font-family:var(--font-d);font-weight:800;color:var(--lx-text);margin-bottom:16px">🏆 Top Products</div>
            ${topProds.map((p,i)=>`
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
              <span style="font-weight:900;color:var(--lx-muted);width:22px;font-size:.8rem;text-align:right">#${i+1}</span>
              <img src="${p.img}" style="width:42px;height:42px;border-radius:9px;object-fit:cover;flex-shrink:0"/>
              <div style="flex:1;min-width:0">
                <div style="font-size:.84rem;font-weight:700;color:var(--lx-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${p.name}</div>
                <div style="font-size:.74rem;color:var(--lx-muted)">${p.rcount} reviews · ${p.cat}</div>
              </div>
              <span style="font-family:var(--font-d);font-weight:800;font-size:.9rem;color:var(--lx-text);flex-shrink:0">${fmt(p.price)}</span>
            </div>`).join('')}
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div style="background:var(--lx-surface);border:1px solid var(--lx-border);border-radius:var(--lx-radius);padding:20px;height:100%">
            <div style="font-family:var(--font-d);font-weight:800;color:var(--lx-text);margin-bottom:16px">📋 Recent Orders</div>
            ${!state.orders.length
              ? `<div class="empty-state" style="padding:30px 10px"><div class="es-icon" style="font-size:2.5rem">📦</div><p style="color:var(--lx-muted);font-size:.85rem">No orders yet. Place a test order first.</p></div>`
              : state.orders.slice(0,6).map(o=>`
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;padding-bottom:12px;border-bottom:1px solid var(--lx-border)">
                <div>
                  <div style="font-size:.78rem;font-weight:700;color:var(--lx-text);font-family:monospace">${o.num.slice(0,22)}</div>
                  <div style="font-size:.72rem;color:var(--lx-muted)">${o.items.length} items · ${o.date.split(',')[0]}</div>
                </div>
                <div style="text-align:right">
                  <div style="font-weight:800;font-size:.88rem;color:var(--lx-text)">${fmt(o.total)}</div>
                  <span class="status-badge sb-${o.status}" style="font-size:.65rem;padding:2px 8px">${o.status}</span>
                </div>
              </div>`).join('')}
          </div>
        </div>
      </div>`;

  } else if (_adminTab === 'products') {
    cont.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;flex-wrap:wrap;gap:10px">
        <span style="color:var(--lx-muted);font-size:.85rem">${PRODUCTS.length} products total</span>
        <button class="btn-lx btn-violet" style="padding:8px 18px;font-size:.84rem" onclick="toast('Product form coming soon!','info')">
          <i class="bi bi-plus-lg"></i> Add Product
        </button>
      </div>
      <div class="table-wrap" style="overflow-x:auto">
        <table class="lx-table">
          <thead>
            <tr>
              <th>Product</th><th>Category</th><th>Price</th><th>Discount</th>
              <th>Stock</th><th>Rating</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${PRODUCTS.map(p=>`
            <tr>
              <td>
                <div style="display:flex;align-items:center;gap:10px">
                  <img src="${p.img}" alt="${p.name}"/>
                  <span style="font-weight:600">${p.name}</span>
                </div>
              </td>
              <td><span style="font-size:.76rem;font-weight:700;padding:2px 10px;border-radius:99px;background:var(--lx-violet-soft);color:var(--lx-violet)">${p.cat}</span></td>
              <td style="font-family:var(--font-d);font-weight:800">${fmt(p.price)}</td>
              <td><span style="font-size:.76rem;font-weight:700;color:var(--lx-rose)">${p.disc}% off</span></td>
              <td>
                <span style="font-size:.76rem;font-weight:700;padding:2px 9px;border-radius:7px;background:${p.stock>20?'#DCFCE7':p.stock>0?'#FEF3C7':'#FEE2E2'};color:${p.stock>20?'#15803D':p.stock>0?'#92400E':'#991B1B'}">
                  ${p.stock} units
                </span>
              </td>
              <td style="color:var(--lx-amber);font-weight:700">★ ${p.rating}</td>
              <td>
                <div style="display:flex;gap:6px">
                  <button class="btn-lx btn-ghost" style="padding:4px 10px;font-size:.76rem" onclick="toast('Edit coming soon!','info')">Edit</button>
                  <button class="btn-lx btn-rose" style="padding:4px 10px;font-size:.76rem" onclick="toast('Delete coming soon!','info')">Delete</button>
                </div>
              </td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>`;

  } else if (_adminTab === 'orders') {
    cont.innerHTML = `
      <div style="margin-bottom:14px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px">
        <span style="color:var(--lx-muted);font-size:.85rem">${state.orders.length} orders total</span>
        <div style="display:flex;gap:8px">
          ${['placed','processing','shipped','delivered','cancelled'].map(s=>`
          <span style="font-size:.74rem;font-weight:700;padding:3px 10px;border-radius:99px;cursor:pointer;border:1px solid var(--lx-border)" class="status-badge sb-${s}">${s}</span>`).join('')}
        </div>
      </div>
      ${!state.orders.length
        ? `<div class="empty-state" style="padding:48px"><div class="es-icon">📦</div><h3>No orders yet</h3><p>Orders will appear here once customers checkout.</p></div>`
        : `<div class="table-wrap" style="overflow-x:auto">
            <table class="lx-table">
              <thead><tr><th>Order ID</th><th>Date</th><th>Items</th><th>Total</th><th>Payment</th><th>Status</th><th>Update</th></tr></thead>
              <tbody>
                ${state.orders.map(o=>`
                <tr>
                  <td style="font-family:monospace;font-size:.78rem;color:var(--lx-violet)">${o.num}</td>
                  <td style="font-size:.8rem;color:var(--lx-muted)">${o.date.split(',')[0]}</td>
                  <td>
                    <div style="display:flex;gap:4px">
                      ${o.items.slice(0,3).map(i=>`<img src="${i.product.img}" style="width:32px;height:32px;border-radius:6px;object-fit:cover" title="${i.product.name}"/>`).join('')}
                      ${o.items.length>3?`<div style="width:32px;height:32px;border-radius:6px;background:var(--lx-bg);display:flex;align-items:center;justify-content:center;font-size:.72rem;font-weight:800;color:var(--lx-muted)">+${o.items.length-3}</div>`:''}
                    </div>
                  </td>
                  <td style="font-family:var(--font-d);font-weight:800">${fmt(o.total)}</td>
                  <td style="text-transform:uppercase;font-size:.78rem;font-weight:700">${o.payment}</td>
                  <td><span class="status-badge sb-${o.status}" style="font-size:.7rem">${o.status}</span></td>
                  <td>
                    <select class="lx-select" style="padding:5px 10px;font-size:.76rem;width:auto" onchange="adminUpdateOrder('${o.id}',this.value)">
                      ${['placed','processing','shipped','delivered','cancelled'].map(s=>`<option value="${s}" ${o.status===s?'selected':''}>${s}</option>`).join('')}
                    </select>
                  </td>
                </tr>`).join('')}
              </tbody>
            </table>
          </div>`}`;

  } else if (_adminTab === 'users') {
    const mockUsers = [
      { name:'Aarav Singh',  email:'aarav@example.com',  role:'user',  joined:'Jan 2024', orders:3 },
      { name:'Priya Patel',  email:'priya@example.com',  role:'user',  joined:'Feb 2024', orders:7 },
      { name:'Admin User',   email:'admin@luxemart.com', role:'admin', joined:'Jan 2024', orders:0 },
      { name:'Sneha Kapoor', email:'sneha@example.com',  role:'user',  joined:'Mar 2024', orders:2 },
      ...(state.user ? [{ name:state.user.name, email:state.user.email, role:state.user.role, joined:'Today', orders:state.orders.length }] : []),
    ];
    cont.innerHTML = `
      <div style="margin-bottom:14px">
        <span style="color:var(--lx-muted);font-size:.85rem">${mockUsers.length} users total</span>
      </div>
      <div class="table-wrap" style="overflow-x:auto">
        <table class="lx-table">
          <thead><tr><th>User</th><th>Email</th><th>Role</th><th>Joined</th><th>Orders</th><th>Status</th><th>Actions</th></tr></thead>
          <tbody>
            ${mockUsers.map(u=>`
            <tr>
              <td>
                <div style="display:flex;align-items:center;gap:10px">
                  <div style="width:34px;height:34px;border-radius:9px;background:linear-gradient(135deg,var(--lx-violet),var(--lx-indigo));color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:.88rem;flex-shrink:0">${u.name[0]}</div>
                  <span style="font-weight:600">${u.name}</span>
                </div>
              </td>
              <td style="color:var(--lx-muted)">${u.email}</td>
              <td><span style="font-size:.74rem;font-weight:700;padding:2px 10px;border-radius:99px;background:${u.role==='admin'?'var(--lx-violet-soft)':'#F3F4F6'};color:${u.role==='admin'?'var(--lx-violet)':'var(--lx-muted)'}">${u.role}</span></td>
              <td style="color:var(--lx-muted);font-size:.84rem">${u.joined}</td>
              <td style="font-weight:700">${u.orders}</td>
              <td><span style="font-size:.74rem;font-weight:700;padding:2px 10px;border-radius:99px;background:#DCFCE7;color:#15803D">Active</span></td>
              <td>
                <div style="display:flex;gap:6px">
                  <button class="btn-lx btn-ghost" style="padding:4px 10px;font-size:.76rem" onclick="toast('User details coming soon!','info')">View</button>
                  <button class="btn-lx btn-rose" style="padding:4px 10px;font-size:.76rem" onclick="toast('User suspended','info')">Suspend</button>
                </div>
              </td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>`;
  }
}

function adminUpdateOrder(id, status) {
  const o = state.orders.find(x => x.id === id);
  if (o) { o.status = status; toast(`Order updated to: ${status}`, 'success'); renderAdminContent(); }
}

// ─── AI CHAT ───
async function sendChat() {
  const inp = document.getElementById('chatInput');
  const msg = inp.value.trim();
  if (!msg) return;
  inp.value = '';
  appendChatMsg(msg, 'user');
  const typing = appendTyping();

  try {
    const systemPrompt = `You are LuxeMart's friendly AI shopping assistant. Help users discover and choose products. 

Available products catalog:
${PRODUCTS.map(p=>`- ${p.name} (${p.cat}) | ${fmt(p.price)} | Rated ${p.rating}/5 | ${p.short}`).join('\n')}

Be concise, friendly, and always recommend specific products with prices when relevant. Keep responses under 120 words. Use emojis sparingly.`;

    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 1000,
        system: systemPrompt,
        messages: [{ role:'user', content: msg }],
      }),
    });
    const data = await res.json();
    typing.remove();
    const reply = data.content?.[0]?.text || "Sorry, I couldn't process that request. Please try again!";
    appendChatMsg(reply, 'bot');
  } catch(err) {
    typing.remove();
    appendChatMsg("I'm having trouble connecting right now. Please check your setup and try again!", 'bot');
  }
}

function sendChip(el) {
  document.getElementById('chatInput').value = el.textContent.trim();
  sendChat();
}

function appendChatMsg(text, type) {
  const msgs = document.getElementById('chatMsgs');
  const div  = document.createElement('div');
  div.className = `chat-msg ${type === 'user' ? 'user-msg' : ''}`;
  div.innerHTML = `
    <div class="msg-av">${type==='user'?'👤':'🤖'}</div>
    <div class="msg-bubble ${type}">${text.replace(/\n/g,'<br>')}</div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
  return div;
}

function appendTyping() {
  const msgs = document.getElementById('chatMsgs');
  const div  = document.createElement('div');
  div.className = 'chat-msg';
  div.innerHTML = `
    <div class="msg-av">🤖</div>
    <div class="msg-bubble bot" style="padding:8px 14px">
      <div class="typing"><span></span><span></span><span></span></div>
    </div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
  return div;
}

// ─── INIT ───
(function init() {
  // Init swiper
  if (typeof Swiper !== 'undefined') {
    new Swiper('.heroSwiper', {
      loop: true,
      autoplay: { delay: 5000, disableOnInteraction: false },
      pagination: { el: '.swiper-pagination', clickable: true },
    });
  }

  initSearch();
  renderHome();
  updateUI();
})();


// ===== PRICING CONFIG - EDIT DISINI UNTUK UPDATE HARGA =====

const PRICING_CONFIG = {
  // ===== HERO SKIN =====

  'skin-basic-269': { 
    id: 'skin-basic-269',
    name: 'Skin Basic (💎269)', 
    diamond: 269, 
    price: 28900,
    discount: 10,      
    category: 'hero-skin',
    recommended: false,
    stock: 1
  },
  'skin-basic-299': { 
    id: 'skin-basic-299',
    name: 'Skin Basic (💎299)', 
    diamond: 299, 
    price: 32900,
    discount: 10, 
    category: 'hero-skin',
    recommended: false,
    stock: 1
  },
  'skin-elite-399': { 
    id: 'skin-elite-399',
    name: 'Skin Elite (💎399)', 
    diamond: 399, 
    price: 46900,      
    discount: 10,
    category: 'hero-skin',
    recommended: false,
    stock: 1
  },
  'skin-elite-599': { 
    id: 'skin-elite-599',
    name: 'Skin Elite (💎599)', 
    diamond: 599, 
    price: 65900,      
    discount: 5,
    category: 'hero-skin',
    recommended: false,
    stock: 1
  },
  'hero-599': { 
    id: 'hero-599',
    name: 'Hero (💎599)', 
    diamond: 599, 
    price: 65900,
    discount: 5,
    category: 'hero-skin',
    recommended: false,
    stock: 1
  },
  'skin-epic-30off': { 
    id: 'skin-epic-30off',
    name: '(PO) Vexana Epic (💎629)', 
    diamond: 629, 
    price: 79000,
    discount: 5,
    category: 'hero-skin',
    recommended: true,
    stock: 1
  },
  'skin-special-749': { 
    id: 'skin-special-749',
    name: 'Skin Special (💎749)', 
    diamond: 749, 
    price: 85900,      
    discount: 5,      
    category: 'hero-skin',
    recommended: false,
    stock: 1
  },
  'skin-epic-899': { 
    id: 'skin-epic-899',
    name: 'Skin Epic (💎899)', 
    diamond: 899, 
    price: 102900,     
    discount: 5,      
    category: 'hero-skin',
    recommended: false,
    stock: 1
  },
  'skin-lightborn-1089': { 
    id: 'skin-lightborn-1089',
    name: 'Skin Lightborn (💎1089)', 
    diamond: 1089, 
    price: 138900,     
    discount: 15,      
    category: 'hero-skin',
    recommended: false,
    stock: 1
  },
    'skin-pace-1089': { 
    id: 'skin-pace-1089',
    name: 'Skin P-ACE (💎1089)',
    diamond: 1089, 
    price: 138900,     
    discount: 5,      
    category: 'hero-skin',
    recommended: true,
    stock: 1
  },
  // ===== ITEM SHOP =====
  'emote-79': { 
    id: 'emote-79',
    name: 'Emote (💎79)', 
    diamond: 79, 
    price: 8900,
    discount: 10,      
    category: 'item-shop',
    recommended: false,
    stock: 1
  },
  'emote-109': { 
    id: 'emote-109',
    name: 'Emote (💎109)', 
    diamond: 109, 
    price: 11900,
    discount: 5,      
    category: 'item-shop',
    recommended: true,
    stock: 1,
  },
  'rename-card-239': { 
    id: 'rename-card-239',
    name: 'Rename Card', 
    diamond: 239, 
    price: 26900,
    discount: 15, 
    category: 'item-shop',
    recommended: false,
    stock: 1,
  },
  'squad-rename-299': { 
    id: 'squad-rename-299',
    name: 'Squad Rename Card', 
    diamond: 299, 
    price: 33900,
    discount: 15,      
    category: 'item-shop',
    recommended: false,
    stock: 1,
  },
  'flag-change-300': { 
    id: 'flag-change-300',
    name: 'Flag Change Card', 
    diamond: 300, 
    price: 34900,
    discount: 10,      
    category: 'item-shop',
    recommended: false,
    stock: 1,
  },
  'creation-camp-50': { 
    id: 'creation-camp-50',
    name: 'Creation Camp', 
    diamond: 50, 
    price: 5900,
    discount: 15,      
    category: 'item-shop',
    recommended: false,
    stock: 1,
  },
  'starlight-300': { 
    id: 'starlight-300',
    name: 'Normal Starlight Card', 
    diamond: 300,
    price: 32300,      
    discount: 10,      
    category: 'item-shop',
    recommended: true,
    stock: 1,
  },
  'premium-starlight-750': { 
    id: 'premium-starlight-750',
    name: 'Premium Starlight Card', 
    diamond: 750, 
    price: 75000,      
    discount: 20,      
    category: 'item-shop',    
    recommended: false,
    stock: 1,
  },

  // ===== CHARISMA =====
  'charisma-8': { 
    id: 'charisma-8',
    name: 'Charisma (💎8)', 
    diamond: 8, 
    price: 1500,       
    discount: 50,      
    category: 'charisma',
    recommended: false,
    stock: 1,
  },
  'charisma-20': { 
    id: 'charisma-20',
    name: 'Charisma (💎20)', 
    diamond: 20, 
    price: 4000,       
    discount: 50,      
    category: 'charisma',
    recommended: false,
    stock: 1,
  },
  'angel-ark-499': { 
    id: 'angel-ark-499',
    name: 'Angel Ark', 
    diamond: 499, 
    price: 55400,      
    discount: 40,      
    category: 'charisma',
    recommended: false,
    stock: 1,
  },
  'paradise-island-499': { 
    id: 'paradise-island-499',
    name: 'Paradise Island', 
    diamond: 499, 
    price: 55400,      
    discount: 40,        
    category: 'charisma',
    recommended: false,
    stock: 0,
  },
  'goldmoon-lantern-999': { 
    id: 'goldmoon-lantern-999',
    name: 'Goldmoon Lantern', 
    diamond: 999, 
    price: 114900,     
    discount: 30,      
    category: 'charisma',
    recommended: false,
    stock: 1,
  },

  // ===== LIVE STREAM (DISKON TETAP) =====
  'flower-2': { 
    id: 'flower-2',
    name: 'Flower', 
    diamond: 2, 
    price: 200, 
    discount: 50,
    category: 'live-stream',
    recommended: false,
    stock: 1,
  },
  'jewelry-6': { 
    id: 'jewelry-6',
    name: 'Jewelry', 
    diamond: 6, 
    price: 600, 
    discount: 50,
    category: 'live-stream',
    recommended: false,
    stock: 1,
  },
  'roadster-250': { 
    id: 'roadster-250',
    name: 'Roadster', 
    diamond: 250, 
    price: 25000, 
    discount: 20,
    category: 'live-stream',
    recommended: false,
    stock: 1,
  },
  'yacht-1000': { 
    id: 'yacht-1000',
    name: 'Yacht', 
    diamond: 1000, 
    price: 100000, 
    discount: 20,
    category: 'live-stream',
    recommended: false,
    stock: 1,
  },
  'airplane-5000': { 
    id: 'airplane-5000',
    name: 'Airplane', 
    diamond: 5000, 
    price: 500000, 
    discount: 50, 
    category: 'live-stream',
    recommended: false,
    stock: 0,
  }
};

// ===== KATEGORI CONFIG =====
const CATEGORIES = [
  {
    id: "hero-skin",
    name: "Gift Hero & Skin Shop",
    icon: "🎨"
  },
  {
    id: "item-shop",
    name: "Gift Item Shop",
    icon: "🎁"
  },
  {
    id: "charisma",
    name: "Gift Charisma",
    icon: "💫"
  },
  {
    id: "live-stream",
    name: "Gift Live Stream",
    icon: "🎥"
  },
  {
    id: "collaboration",
    name: "Gift Kolaborasi & Event Limited Lainnya",
    icon: "🪞",
    special: true,
    message: "Silakan chat admin untuk info ketersediaan skin event/kolaborasi/skin terbaru selain dari list harga tercantum (harga gift awal event dan akhir event bisa saja berbeda)."
  }
];

// ===== PRICE ROUNDING CONFIG =====
// Ubah nilai ini jika ingin kelipatan pembulatan lain (mis. 1000, 100, dst.)
const PRICE_ROUNDING = 500;

// ===== THEME (TIME-BASED) CONFIG =====
// If enabled, theme switches based on Indonesia Barat (WIB) local time:
// light: from THEME_DAY_START (inclusive) to THEME_NIGHT_START (exclusive)
// dark: otherwise.
const TIME_BASED_THEME = true;
const THEME_WIB_OFFSET = 7; // UTC+7
const THEME_DAY_START = 6; // 06:00 WIB
const THEME_NIGHT_START = 18; // 18:00 WIB

// ===== MAIN APPLICATION =====
class MLBBGiftStore {
    renderFooterLastUpdate() {
    const lastUpdateEl = document.getElementById('lastUpdateFooter');
    if (lastUpdateEl) {
        lastUpdateEl.textContent = `Last update: ${this.data.storeInfo.lastUpdate}`;
    }
}
    constructor() {
        this.data = {
            storeInfo: {
                name: "MLBB Gift",
                subtitle: "Harga terjangkau • Proses cepat • Terpercaya",
                status: "open",
                lastUpdate: "31 Januari 2026",
                whatsappNumber: "62895357381660",
                requirements: "Akun harus berteman minimal 7 hari di MLBB sebelum bisa menerima gift."
            },
            pricingConfig: PRICING_CONFIG,
            categories: CATEGORIES
        };

        // Normalize pricing config: convert legacy `type: 'premium'` to `recommended: true`,
        // remove `type` field (we no longer use it for UI logic), and ensure `stock` exists.
        if (this.data && this.data.pricingConfig) {
            Object.values(this.data.pricingConfig).forEach(prod => {
                if (prod.type === 'premium') prod.recommended = true;
                // remove legacy type to avoid relying on it
                if (prod.hasOwnProperty('type')) delete prod.type;
                // ensure at least a dummy stock value for non-physical items
                if (typeof prod.stock === 'undefined') prod.stock = 1;
            });
        }

        this.state = {
            currentCategory: 'all',
            searchTerm: '',
            isDarkMode: true,
            cart: [],
            favorites: [],
            recentlyViewed: [],
            filteredItems: []
        };

        this.init();
    }

    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.initializeApp();
            });
        } else {
            this.initializeApp();
        }
    }

    initializeApp() {
        this.loadSavedState();
        // Apply time-based theme if configured and not manually disabled
        if (TIME_BASED_THEME) {
            this.setThemeByWIB();
            // Re-evaluate periodically in case user keeps page open across boundary
            this._themeInterval = setInterval(() => this.setThemeByWIB(), 15 * 60 * 1000);
            // Also re-evaluate when tab becomes visible
            document.addEventListener('visibilitychange', () => {
                if (document.visibilityState === 'visible') this.setThemeByWIB();
            });
        }
        this.bindEvents();
        this.applyTheme();
        // Ensure auto toggle UI reflects saved preference
        this.updateAutoToggleUI();
        this.renderProducts();
        this.updateCartCount();
        this.renderStoreStatus(); 
        this.renderFooterLastUpdate();
    }

    setThemeByWIB() {
        try {
            // allow user to disable auto theme switching by toggling manually
            const auto = localStorage.getItem('themeAuto');
            if (auto === 'off') return;

            const now = new Date();
            const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
            const wib = new Date(utc + (THEME_WIB_OFFSET * 60 * 60 * 1000));
            const hour = wib.getHours();

            const shouldBeDark = !(hour >= THEME_DAY_START && hour < THEME_NIGHT_START);
            this.state.isDarkMode = !!shouldBeDark;
            // apply immediately to document
            document.documentElement.setAttribute('data-color-scheme', this.state.isDarkMode ? 'dark' : 'light');
            // update theme toggle icon if present
            const themeToggle = document.getElementById('themeToggle');
            if (themeToggle) {
                const themeIcon = themeToggle.querySelector('.theme-icon');
                if (themeIcon) themeIcon.textContent = this.state.isDarkMode ? '☀️' : '🌙';
            }
            // update auto toggle UI
            this.updateAutoToggleUI();
        } catch (e) {
            console.warn('setThemeByWIB failed', e);
        }
    }

    loadSavedState() {
        this.state.isDarkMode = document.documentElement.getAttribute('data-color-scheme') === 'dark';
        try {
            const auto = localStorage.getItem('themeAuto');
            this.state.themeAuto = auto === null ? true : (auto !== 'off');
        } catch (e) {
            this.state.themeAuto = true;
        }
    }
bindEvents() {
        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        // Auto theme toggle
        const themeAutoToggle = document.getElementById('themeAutoToggle');
        if (themeAutoToggle) {
            themeAutoToggle.addEventListener('click', () => {
                try {
                    const currentlyOn = localStorage.getItem('themeAuto') !== 'off';
                    if (currentlyOn) {
                        localStorage.setItem('themeAuto', 'off');
                        this.showToast('Auto theme dimatikan', 'info');
                    } else {
                        localStorage.setItem('themeAuto', 'on');
                        this.showToast('Auto theme diaktifkan', 'success');
                        this.setThemeByWIB();
                    }
                } catch (e) {}
                this.updateAutoToggleUI();
            });
        }

        // Search
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.handleSearch(e.target.value);
            });
            searchInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                }
            });
        }

        const clearSearch = document.getElementById('clearSearch');
        if (clearSearch) {
            clearSearch.addEventListener('click', () => this.clearSearch());
        }

        // Filter tabs - attach delegation to all filter-tabs containers (top + bottom)
        document.querySelectorAll('.filter-tabs').forEach(container => {
            container.addEventListener('click', (e) => {
                const tab = e.target.closest('.filter-tab');
                if (!tab) return;
                const category = tab.getAttribute('data-category');
                this.handleCategoryFilter(category);
            });
        });

        // Cart events
        const cartBtn = document.getElementById('cartBtn');
        if (cartBtn) {
            cartBtn.addEventListener('click', () => this.openCartModal());
        }

        const closeCart = document.getElementById('closeCart');
        if (closeCart) {
            closeCart.addEventListener('click', () => this.closeCartModal());
        }

        const cartOverlay = document.getElementById('cartOverlay');
        if (cartOverlay) {
            cartOverlay.addEventListener('click', () => this.closeCartModal());
        }

        const clearCart = document.getElementById('clearCart');
        if (clearCart) {
            clearCart.addEventListener('click', () => this.clearCart());
        }

        const orderCart = document.getElementById('orderCart');
        if (orderCart) {
            orderCart.addEventListener('click', () => this.orderViaWhatsApp());
        }

        // Item modal events
        const closeItem = document.getElementById('closeItem');
        if (closeItem) {
            closeItem.addEventListener('click', () => this.closeItemModal());
        }

        const itemOverlay = document.getElementById('itemOverlay');
        if (itemOverlay) {
            itemOverlay.addEventListener('click', () => this.closeItemModal());
        }

        // Floating WhatsApp
        const floatingWhatsapp = document.getElementById('floatingWhatsapp');
        if (floatingWhatsapp) {
            floatingWhatsapp.addEventListener('click', () => this.contactAdmin());
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));

        // === EVENT DELEGATION UNTUK PRODUK ===
        const grid = document.getElementById('productsGrid');
        if (grid) {
          grid.addEventListener('click', (e) => {
            // Tombol Tambah ke Keranjang
            const addBtn = e.target.closest('.add-cart-btn');
            if (addBtn) {
              const itemId = addBtn.getAttribute('data-item-id');
              this.addToCart(itemId);
              e.stopPropagation();
              return;
            }
            // Tombol Pesan Sekarang
            const orderBtn = e.target.closest('.order-btn');
            if (orderBtn) {
              const itemId = orderBtn.getAttribute('data-item-id');
              this.orderSingleItem(itemId);
              e.stopPropagation();
              return;
            }
            // Klik di Card Produk (bukan tombol)
            const card = e.target.closest('.product-card');
            if (card && !e.target.closest('.product-actions')) {
              const itemId = card.getAttribute('data-item-id');
              this.showItemDetail(itemId);
              return;
            }
          });
        }
    }

    toggleTheme() {
        // manual toggle disables automatic time-based switching
        try { localStorage.setItem('themeAuto', 'off'); } catch (e) {}
        this.state.isDarkMode = !this.state.isDarkMode;
        this.applyTheme();
    }

    updateAutoToggleUI() {
        const btn = document.getElementById('themeAutoToggle');
        try {
            const enabled = localStorage.getItem('themeAuto') !== 'off';
            if (btn) {
                btn.textContent = `Auto: ${enabled ? 'On' : 'Off'}`;
                btn.classList.toggle('auto-off', !enabled);
            }
        } catch (e) {
            if (btn) btn.textContent = 'Auto: On';
        }
    }

    applyTheme() {
        const themeToggle = document.getElementById('themeToggle');
        if (!themeToggle) return;
        
        const themeIcon = themeToggle.querySelector('.theme-icon');
        
        if (this.state.isDarkMode) {
            document.documentElement.setAttribute('data-color-scheme', 'dark');
            if (themeIcon) themeIcon.textContent = '☀️';
        } else {
            document.documentElement.setAttribute('data-color-scheme', 'light');
            if (themeIcon) themeIcon.textContent = '🌙';
        }
    }

    handleSearch(term) {
        this.state.searchTerm = term.toLowerCase().trim();
        
        const searchInfo = document.getElementById('searchInfo');
        const searchTermEl = document.getElementById('searchTerm');
        
        if (this.state.searchTerm && searchInfo && searchTermEl) {
            searchInfo.style.display = 'flex';
            searchTermEl.textContent = term;
        } else if (searchInfo) {
            searchInfo.style.display = 'none';
        }
        
        this.renderProducts();
    }

    clearSearch() {
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.value = '';
        }
        this.handleSearch('');
    }

    handleCategoryFilter(category) {
        this.state.currentCategory = category;
        
        // Update active tab
        document.querySelectorAll('.filter-tab').forEach(tab => tab.classList.remove('active'));

        // Add active to ALL matching tabs (top + bottom)
        document.querySelectorAll(`.filter-tab[data-category="${category}"]`).forEach(t => t.classList.add('active'));
        
        this.renderProducts();
    }

    getAllItems() {
        let allItems = [];
        Object.values(this.data.pricingConfig).forEach(item => {
            const category = this.data.categories.find(cat => cat.id === item.category);
            if (category) {
                allItems.push({
                    ...item,
                    categoryName: category.name,
                    categoryIcon: category.icon
                });
            }
        });
        return allItems;
    }

    filterItems() {
        let items = this.getAllItems();
        
        // Filter by category
        if (this.state.currentCategory !== 'all') {
            items = items.filter(item => item.category === this.state.currentCategory);
        }

        // Filter by search term (do not rely on removed `type` field)
        if (this.state.searchTerm) {
            items = items.filter(item => 
                item.name.toLowerCase().includes(this.state.searchTerm) ||
                item.categoryName.toLowerCase().includes(this.state.searchTerm)
            );
        }
        
        return items;
    }

    calculateDiscountPrice(originalPrice, discount, roundingOverride) {
        // Hitung harga setelah diskon terlebih dahulu
        let result = originalPrice;
        if (discount > 0) {
            result = Math.round(originalPrice * (100 - discount) / 100);
        }

        // Determine rounding to use: per-item override > threshold-based default > global PRICE_ROUNDING
        let rounding = roundingOverride;
        if (!rounding || rounding <= 0) {
            // cheaper items get finer rounding (100) to avoid awkward prices
            rounding = result < 20000 ? 100 : PRICE_ROUNDING;
        }

        if (!rounding || rounding <= 0) return result;

        return Math.round(result / rounding) * rounding;
    }

    renderProducts() {
        const grid = document.getElementById('productsGrid');
        const emptyState = document.getElementById('emptyState');
        
        if (!grid || !emptyState) {
            console.error('Required DOM elements not found');
            return;
        }

        // Handle special collaboration category
        if (this.state.currentCategory === 'collaboration') {
            const collabCategory = this.data.categories.find(cat => cat.id === 'collaboration');
            grid.innerHTML = `
                <div class="special-category">
                    <div class="category-icon">${collabCategory.icon}</div>
                    <h3>${collabCategory.name}</h3>
                    <p>${collabCategory.message}</p>
                    <button class="btn btn--primary" onclick="window.app.contactAdmin()">
                        💬 Chat Admin untuk Info
                    </button>
                </div>
            `;
            emptyState.style.display = 'none';
            return;
        }
        
        const items = this.filterItems();
        
        if (items.length === 0) {
            grid.innerHTML = '';
            emptyState.style.display = 'block';
            return;
        }
        
        emptyState.style.display = 'none';
        
        grid.innerHTML = items.map(item => this.createProductCard(item)).join('');
        
        // Bind product events after rendering
        setTimeout(() => this.bindProductEvents(), 100);
    }

    createProductCard(item) {
        const finalPrice = this.calculateDiscountPrice(item.price, item.discount, item.rounding);
        const isFavorite = this.state.favorites.includes(item.id);
        // Recommendation handling: prefer explicit `recommended` flag, fallback to `type === 'premium'`
        const isRecommended = !!item.recommended;
        const premiumBadge = isRecommended ? `
            <div class="product-badge hot">
                🔥 Rekomendasi
            </div>
        ` : '';

        // Out-of-stock handling (optional `stock` field in product config)
        const outOfStock = (typeof item.stock !== 'undefined') && item.stock <= 0;
        const outOfStockBadge = outOfStock ? `
            <div class="product-badge out-of-stock">HABIS</div>
        ` : '';

        // Price display with discount
        const priceDisplay = item.discount > 0 ? `
            <div class="price-main">
                <span class="price-original">Rp ${item.price.toLocaleString()}</span>
                <span class="price-final">Rp ${finalPrice.toLocaleString()}</span>
                <span class="discount-badge">${item.discount}% OFF</span>
            </div>
        ` : `
            <div class="price-main">
                <span class="price-final">Rp ${item.price.toLocaleString()}</span>
            </div>
        `;

        return `
            <div class="${outOfStock ? 'product-card out-of-stock' : 'product-card'}" data-item-id="${item.id}">
                <div class="product-header">
                    <div class="product-category">
                        <span>${item.categoryIcon}</span>
                        <span>${item.categoryName}</span>
                    </div>
                    ${premiumBadge}${outOfStockBadge}
                </div>
                
                <div class="product-name">${item.name}</div>
                
                <div class="product-price">
                    ${priceDisplay}
                    <div class="price-reference">💎 ${item.diamond.toLocaleString()}</div>
                </div>
                
                <div class="product-actions">
                    ${outOfStock ? `
                        <button class="action-btn disabled" aria-disabled="true">HABIS</button>
                        <button class="action-btn" onclick="window.app.contactAdmin()">💬 Hubungi Admin</button>
                    ` : `
                        <button class="action-btn add-cart-btn" data-item-id="${item.id}">🛒 Tambah</button>
                        <button class="action-btn primary order-btn" data-item-id="${item.id}">💬 Pesan</button>
                    `}
                </div>
            </div>
        `;
    }

    bindProductEvents() {
        // Product card clicks (for details) - exclude action buttons
        document.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', (e) => {
                // Don't open detail if clicking on action buttons
                if (e.target.closest('.product-actions')) {
                    return;
                }
                const itemId = card.getAttribute('data-item-id');
                this.showItemDetail(itemId);
            });
        });

        // Favorite buttons
        document.querySelectorAll('.favorite-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const itemId = btn.getAttribute('data-item-id');
                this.toggleFavorite(itemId);
            });
        });

        // Add to cart buttons
        document.querySelectorAll('.add-cart-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const itemId = btn.getAttribute('data-item-id');
                this.addToCart(itemId);
            });
        });

        // Order buttons
        document.querySelectorAll('.order-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const itemId = btn.getAttribute('data-item-id');
                this.orderSingleItem(itemId);
            });
        });
    }

    toggleFavorite(itemId) {
        const index = this.state.favorites.indexOf(itemId);
        if (index > -1) {
            this.state.favorites.splice(index, 1);
            this.showToast('Item dihapus dari favorit', 'info');
        } else {
            this.state.favorites.push(itemId);
            this.showToast('Item ditambahkan ke favorit', 'success');
        }
        
        // Update button
        const btn = document.querySelector(`.favorite-btn[data-item-id="${itemId}"]`);
        if (btn) {
            btn.innerHTML = this.state.favorites.includes(itemId) ? '❤️' : '🤍';
        }
    }

    addToCart(itemId) {
        const item = this.getItemById(itemId);
        if (!item) {
            console.error('Item not found:', itemId);
            return;
        }
        // Prevent adding out-of-stock items
        if (typeof item.stock !== 'undefined' && item.stock <= 0) {
            this.showToast('Stock untuk item ini sedang habis', 'error');
            return;
        }
        
        const existingItem = this.state.cart.find(cartItem => cartItem.id === itemId);
        
        if (existingItem) {
            existingItem.quantity += 1;
            } else {
            this.state.cart.push({
                ...item,
                finalPrice: this.calculateDiscountPrice(item.price, item.discount, item.rounding),
                quantity: 1
            });
        }
        
        this.updateCartCount();
        this.showToast(`${item.name} ditambahkan ke keranjang`, 'success');
        this.addToRecentlyViewed(item);
    }

    removeFromCart(itemId) {
        this.state.cart = this.state.cart.filter(item => item.id !== itemId);
        this.updateCartCount();
        this.renderCartItems();
        this.showToast('Item dihapus dari keranjang', 'info');
    }

    updateCartQuantity(itemId, newQuantity) {
        const item = this.state.cart.find(cartItem => cartItem.id === itemId);
        if (item) {
            if (newQuantity <= 0) {
                this.removeFromCart(itemId);
            } else {
                item.quantity = newQuantity;
                this.renderCartItems();
                this.updateCartCount();
            }
        }
    }

    updateCartCount() {
        const count = this.state.cart.reduce((sum, item) => sum + item.quantity, 0);
        const cartCountEl = document.getElementById('cartCount');
        if (cartCountEl) {
            cartCountEl.textContent = count;
        }
    }

    clearCart() {
        if (this.state.cart.length === 0) return;
        
        this.state.cart = [];
        this.updateCartCount();
        this.renderCartItems();
        this.showToast('Keranjang dikosongkan', 'info');
    }

    openCartModal() {
        this.renderCartItems();
        const cartModal = document.getElementById('cartModal');
        if (cartModal) {
            cartModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    }

    closeCartModal() {
        const cartModal = document.getElementById('cartModal');
        if (cartModal) {
            cartModal.classList.add('hidden');
            document.body.style.overflow = '';
        }
    }

    renderCartItems() {
        const cartItems = document.getElementById('cartItems');
        const cartEmpty = document.getElementById('cartEmpty');
        const cartTotal = document.getElementById('cartTotal');
        
        if (!cartItems || !cartEmpty || !cartTotal) return;
        
        if (this.state.cart.length === 0) {
            cartItems.style.display = 'none';
            cartEmpty.style.display = 'block';
            cartTotal.textContent = 'Rp 0';
            return;
        }
        
        cartItems.style.display = 'block';
        cartEmpty.style.display = 'none';
        
        cartItems.innerHTML = this.state.cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>${item.categoryIcon} ${item.categoryName}</p>
                    <div class="cart-item-price">
                        <span class="cart-price-main">Rp ${item.finalPrice.toLocaleString()}</span>
                        <span class="cart-price-reference">💎 ${item.diamond.toLocaleString()}</span>
                    </div>
                </div>
                <div class="cart-item-actions">
                    <div class="quantity-control">
                        <button class="qty-btn" onclick="window.app.updateCartQuantity('${item.id}', ${item.quantity - 1})">-</button>
                        <div class="qty-display">${item.quantity}</div>
                        <button class="qty-btn" onclick="window.app.updateCartQuantity('${item.id}', ${item.quantity + 1})">+</button>
                    </div>
                    <button class="remove-item" onclick="window.app.removeFromCart('${item.id}')">🗑️</button>
                </div>
            </div>
        `).join('');
        
        // Calculate total
        const totalRupiah = this.state.cart.reduce((sum, item) => sum + (item.finalPrice * item.quantity), 0);
        cartTotal.textContent = `Rp ${totalRupiah.toLocaleString()}`;
    }

    async orderSingleItem(itemId) {
        const item = this.getItemById(itemId);
        if (!item) return;
        this.addToRecentlyViewed(item);

        // Prevent ordering if out-of-stock
        if (typeof item.stock !== 'undefined' && item.stock <= 0) {
            this.showToast('Maaf, item ini sedang habis. Silakan hubungi admin untuk info.', 'error');
            return;
        }

        // collect buyer info before ordering (modal)
        const buyerInfo = await this.collectBuyerInfo();
        if (!buyerInfo) return; // user cancelled or invalid

        const finalPrice = this.calculateDiscountPrice(item.price, item.discount, item.rounding);
        const message = this.createWhatsAppMessage([{...item, finalPrice, quantity: 1}], buyerInfo);
        this.sendWhatsAppMessage(message);
    }

    async orderViaWhatsApp() {
        if (this.state.cart.length === 0) {
            this.showToast('Keranjang belanja kosong', 'error');
            return;
        }
        // Check for out-of-stock items in cart
        const outOfStockItems = this.state.cart.filter(i => (typeof i.stock !== 'undefined') && i.stock <= 0);
        if (outOfStockItems.length > 0) {
            const names = outOfStockItems.map(i => i.name).join(', ');
            this.showToast(`Beberapa item habis: ${names}`, 'error');
            return;
        }

        // collect buyer info before ordering (modal)
        const buyerInfo = await this.collectBuyerInfo();
        if (!buyerInfo) {
            this.showToast('Order dibatalkan', 'info');
            return;
        }

        const message = this.createWhatsAppMessage(this.state.cart, buyerInfo);
        this.sendWhatsAppMessage(message);

        // Clear cart after ordering
        this.clearCart();
        this.closeCartModal();
    }

    createWhatsAppMessage(items, buyerInfo) {
        let message = `*MLBB GIFT ORDER*\n\n`;

        if (buyerInfo) {
            message += `ID: ${buyerInfo.id}\n`;
            if (buyerInfo.server) message += `Server: ${buyerInfo.server}\n`;
            if (buyerInfo.nickname) message += `Nickname: ${buyerInfo.nickname}\n`;
            message += `\n`;
        }
        message += `*Detail Pesanan:*\n`;
        
        let totalRupiah = 0;
        
        items.forEach(item => {
            const itemTotal = item.finalPrice * item.quantity;
            message += `• ${item.name}\n`;
            message += `  Kategori: ${item.categoryName}\n`;
            message += `  Jumlah: ${item.quantity}x\n`;
            message += `  Harga: Rp ${item.price.toLocaleString()} (Setara ${item.diamond.toLocaleString()}dm)\n`;
            if (item.discount > 0) {
                message += `  Diskon: ${item.discount}% OFF\n`;
            }
            message += `  Subtotal: Rp${itemTotal.toLocaleString()}\n\n`;
            
            totalRupiah += itemTotal;
        });
        
        message += `*Total Pembayaran: Rp ${totalRupiah.toLocaleString()}*\n\n`;
        
        message += `*Catatan:*\n`;
        message += `${this.data.storeInfo.requirements}\n\n`;
        message += `Mohon konfirmasi ketersediaan stock terlebih dahulu.\n`;
        message += `Terima kasih!`;
        
        return message;
    }

    collectBuyerInfo() {
        // Return a Promise that resolves with buyer info or null if cancelled
        return new Promise((resolve) => {
            const modal = document.getElementById('buyerInfoModal');
            const overlay = document.getElementById('buyerInfoOverlay');
            const idInput = document.getElementById('buyerIdInput');
            const serverInput = document.getElementById('buyerServerInput');
            const nicknameInput = document.getElementById('buyerNicknameInput');
            const confirmBtn = document.getElementById('buyerConfirm');
            const cancelBtn = document.getElementById('buyerCancel');
            const closeBtn = document.getElementById('buyerInfoClose');

            if (!modal || !overlay || !idInput || !serverInput || !nicknameInput || !confirmBtn || !cancelBtn || !closeBtn) {
                resolve(null);
                return;
            }

            // reset fields
            idInput.value = '';
            serverInput.value = '';
            nicknameInput.value = '';

            const closeModal = () => {
                modal.classList.add('hidden');
                document.body.style.overflow = '';
            };

            const cleanup = () => {
                confirmBtn.removeEventListener('click', onConfirm);
                cancelBtn.removeEventListener('click', onCancel);
                closeBtn.removeEventListener('click', onCancel);
                overlay.removeEventListener('click', onCancel);
            };

            const onConfirm = () => {
                const id = idInput.value.trim();
                const server = serverInput.value.trim();
                const nickname = nicknameInput.value.trim();
                if (!id) {
                    this.showToast('ID wajib diisi', 'error');
                    return;
                }
                cleanup();
                closeModal();
                resolve({ id, server, nickname });
            };

            const onCancel = () => {
                cleanup();
                closeModal();
                resolve(null);
            };

            confirmBtn.addEventListener('click', onConfirm);
            cancelBtn.addEventListener('click', onCancel);
            closeBtn.addEventListener('click', onCancel);
            overlay.addEventListener('click', onCancel);

            // show modal
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            idInput.focus();
        });
    }

    sendWhatsAppMessage(message) {
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${this.data.storeInfo.whatsappNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    }

    contactAdmin() {
        const message = `Halo! \n\nSaya ingin bertanya tentang produk/stock yang tersedia.\n\nTerima kasih!`;
        this.sendWhatsAppMessage(message);
    }

    showItemDetail(itemId) {
        const item = this.getItemById(itemId);
        if (!item) return;
        
        this.addToRecentlyViewed(item);
        
        const modal = document.getElementById('itemModal');
        const title = document.getElementById('itemModalTitle');
        const detail = document.getElementById('itemDetail');
        
        if (!modal || !title || !detail) return;
        
        title.textContent = item.name;
        
        const isFavorite = this.state.favorites.includes(item.id);
        const finalPrice = this.calculateDiscountPrice(item.price, item.discount, item.rounding);
        const isRecommended = !!item.recommended;
        const outOfStock = (typeof item.stock !== 'undefined') && item.stock <= 0;

        detail.innerHTML = `
            <div class="item-detail-content">
                <div class="item-category">
                    <span style="font-size: 2rem;">${item.categoryIcon}</span>
                    <h4>${item.categoryName}</h4>
                </div>
                
                <div class="item-info">
                    <h3>${item.name}</h3>
                    ${isRecommended ? '<div class="item-type hot">🔥 Rekomendasi</div>' : ''}
                    ${outOfStock ? '<div class="item-type out-of-stock">HABIS</div>' : ''}
                </div>
                
                <div class="item-pricing">
                    <div class="price-row">
                        <span class="price-label">💰 Harga:</span>
                        <div class="price-detail">
                            ${item.discount > 0 ? `
                                <span class="price-original-small">Rp ${item.price.toLocaleString()}</span>
                                <span class="price-final-large">Rp ${finalPrice.toLocaleString()}</span>
                                <span class="discount-small">${item.discount}% OFF</span>
                            ` : `
                                <span class="price-final-large">Rp ${item.price.toLocaleString()}</span>
                            `}
                        </div>
                    </div>
                    <div class="price-row">
                        <span class="price-label">💎 Diamond:</span>
                        <span class="price-value">${item.diamond.toLocaleString()}</span>
                    </div>
                </div>
                
                <div class="item-actions">
                    ${outOfStock ? `
                        <button class="btn btn--outline disabled" aria-disabled="true">HABIS</button>
                        <button class="btn btn--primary" onclick="window.app.contactAdmin()">💬 Hubungi Admin</button>
                    ` : `
                        <button class="btn btn--outline" onclick="window.app.addToCartAndClose('${item.id}')">🛒 Tambah ke Keranjang</button>
                        <button class="btn btn--primary" onclick="window.app.orderSingleItemAndClose('${item.id}')">💬 Pesan Sekarang</button>
                    `}
                </div>
            </div>
        `;
        
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    renderStoreStatus() {
        const statusEl = document.getElementById('storeStatus');
        if (!statusEl) return;
        if (this.data.storeInfo.status === 'open') {
            statusEl.textContent = '🟢 OPEN';
            statusEl.className = 'store-status open';
        } else {
            statusEl.textContent = '🔴 CLOSE';
            statusEl.className = 'store-status closed';
        }
    }

    // Helper methods for modal actions

    addToCartAndClose(itemId) {
        this.addToCart(itemId);
        this.closeItemModal();
    }

    orderSingleItemAndClose(itemId) {
        this.orderSingleItem(itemId);
        this.closeItemModal();
    }

    closeItemModal() {
        const modal = document.getElementById('itemModal');
        if (modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        }
    }

    getItemById(itemId) {
        const item = this.data.pricingConfig[itemId];
        if (!item) return undefined;
        const category = this.data.categories.find(cat => cat.id === item.category);
        return {
            ...item,
            categoryName: category ? category.name : '',
            categoryIcon: category ? category.icon : ''
        };
    }

    addToRecentlyViewed(item) {
        // Remove if already exists
        this.state.recentlyViewed = this.state.recentlyViewed.filter(viewedItem => viewedItem.id !== item.id);
        
        // Add to beginning
        this.state.recentlyViewed.unshift(item);
        
        // Keep only last 5 items
        this.state.recentlyViewed = this.state.recentlyViewed.slice(0, 5);
        
        this.renderRecentlyViewed();
    }

    renderRecentlyViewed() {
        const container = document.getElementById('recentlyViewed');
        const itemsContainer = document.getElementById('recentItems');
        
        if (!container || !itemsContainer) return;
        
        if (this.state.recentlyViewed.length === 0) {
            container.style.display = 'none';
            return;
        }
        
        container.style.display = 'block';
        
        itemsContainer.innerHTML = this.state.recentlyViewed.map(item => {
            const finalPrice = this.calculateDiscountPrice(item.price, item.discount, item.rounding);
            return `
                <div class="recent-item" onclick="window.app.showItemDetail('${item.id}')">
                    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                        <span>${item.categoryIcon}</span>
                        <strong>${item.name}</strong>
                    </div>
                    <div style="color: var(--color-text-secondary); font-size: 12px;">
                        Rp ${finalPrice.toLocaleString()} • 💎 ${item.diamond.toLocaleString()}
                    </div>
                </div>
            `;
        }).join('');
    }

    showToast(message, type = 'info') {
        const container = document.getElementById('toastContainer');
        if (!container) return;
        
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        toast.innerHTML = `
            <span>${message}</span>
            <button class="toast-close" onclick="this.parentElement.remove()">×</button>
        `;
        
        container.appendChild(toast);
        
        // Auto remove after 3 seconds
        setTimeout(() => {
            if (toast.parentElement) {
                toast.remove();
            }
        }, 3000);
    }

    handleKeyboard(e) {
        // ESC to close modals
        if (e.key === 'Escape') {
            this.closeCartModal();
            this.closeItemModal();
        }
        
        // Ctrl/Cmd + K to focus search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.getElementById('searchInput');
            if (searchInput) {
                searchInput.focus();
            }
        }
    }
}

// Debounce search
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}


// RAF Throttle for animations
function rafThrottle(callback) {
  let requestId = null;
  
  return (...args) => {
    if (requestId) return;
    
    requestId = requestAnimationFrame(() => {
      callback.apply(this, args);
      requestId = null;
    });
  };
}

// Passive scroll listeners
document.addEventListener('scroll', rafThrottle(() => {
  // Scroll handling code
}), {passive: true});

// Touch optimization
const touchHandler = {
  handleStart(e) {
    // Touch start logic
  },
  handleMove(e) {
    // Touch move logic with RAF
  },
  handleEnd(e) {
    // Touch end logic
  }
};

document.addEventListener('touchstart', touchHandler.handleStart, {passive: true});
document.addEventListener('touchmove', touchHandler.handleMove, {passive: true}); 
document.addEventListener('touchend', touchHandler.handleEnd);

// Initialize the application and make it globally available
window.app = new MLBBGiftStore();

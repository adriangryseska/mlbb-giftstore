// ===== PRICING CONFIG - EDIT DISINI UNTUK UPDATE HARGA =====
const PRICING_CONFIG = {
  'skin-basic-269': { 
    id: 'skin-basic-269',
    name: 'Skin Basic', 
    diamond: 269, 
    price: 26900, 
    discount: 0, // percentage discount
    type: 'normal',
    category: 'hero-skin'
  },
  'skin-basic-299': { 
    id: 'skin-basic-299',
    name: 'Skin Basic', 
    diamond: 299, 
    price: 29900, 
    discount: 10, 
    type: 'normal',
    category: 'hero-skin'
  },
  'skin-elite-399': { 
    id: 'skin-elite-399',
    name: 'Skin Elite', 
    diamond: 399, 
    price: 39900, 
    discount: 0,
    type: 'normal',
    category: 'hero-skin'
  },
  'skin-elite-599': { 
    id: 'skin-elite-599',
    name: 'Skin Elite', 
    diamond: 599, 
    price: 61900, 
    discount: 5, 
    type: 'normal',
    category: 'hero-skin'
  },
  'hero-599': { 
    id: 'hero-599',
    name: 'Hero', 
    diamond: 599, 
    price: 61900, 
    discount: 0,
    type: 'normal',
    category: 'hero-skin'
  },
  'skin-special-749': { 
    id: 'skin-special-749',
    name: 'Skin Special', 
    diamond: 749, 
    price: 81000, 
    discount: 5,
    type: 'normal',
    category: 'hero-skin'
  },
  'skin-epic-899': { 
    id: 'skin-epic-899',
    name: 'Skin Epic', 
    diamond: 899, 
    price: 100000, 
    discount: 5, 
    type: 'premium',
    category: 'hero-skin'
  },
  'skin-lightborn-1089': { 
    id: 'skin-lightborn-1089',
    name: 'Skin Lightborn', 
    diamond: 1089, 
    price: 125000, 
    discount: 10,
    type: 'premium',
    category: 'hero-skin'
  },
  'emote-79': { 
    id: 'emote-79',
    name: 'Emote', 
    diamond: 79, 
    price: 7500, 
    discount: 5,
    type: 'normal',
    category: 'item-shop'
  },
  'emote-109': { 
    id: 'emote-109',
    name: 'Emote', 
    diamond: 109, 
    price: 12000, 
    discount: 5,
    type: 'normal',
    category: 'item-shop'
  },
  'rename-card-239': { 
    id: 'rename-card-239',
    name: 'Rename Card', 
    diamond: 239, 
    price: 24000, 
    discount: 10,
    type: 'normal',
    category: 'item-shop'
  },
  'squad-rename-299': { 
    id: 'squad-rename-299',
    name: 'Squad Rename Card', 
    diamond: 299, 
    price: 30000, 
    discount: 5,
    type: 'normal',
    category: 'item-shop'
  },
  'flag-change-300': { 
    id: 'flag-change-300',
    name: 'Flag Change Card', 
    diamond: 300, 
    price: 32000, 
    discount: 5,
    type: 'normal',
    category: 'item-shop'
  },
  'creation-camp-50': { 
    id: 'creation-camp-50',
    name: 'Creation Camp', 
    diamond: 50, 
    price: 6000, 
    discount: 5,
    type: 'normal',
    category: 'item-shop'
  },
  'starlight-300': { 
    id: 'starlight-300',
    name: 'Starlight', 
    diamond: 300, 
    price: 32000, 
    discount: 5,
    type: 'premium',
    category: 'item-shop'
  },
  'premium-starlight-750': { 
    id: 'premium-starlight-750',
    name: 'Premium Starlight', 
    diamond: 750, 
    price: 74000, 
    discount: 10, 
    type: 'premium',
    category: 'item-shop'
  },
  'charisma-8': { 
    id: 'charisma-8',
    name: 'Charisma', 
    diamond: 8, 
    price: 300, 
    discount: 20,
    type: 'normal',
    category: 'charisma'
  },
  'charisma-20': { 
    id: 'charisma-20',
    name: 'Charisma', 
    diamond: 20, 
    price: 800, 
    discount: 20,
    type: 'normal',
    category: 'charisma'
  },
  'angel-ark-499': { 
    id: 'angel-ark-499',
    name: 'Angel Ark', 
    diamond: 499, 
    price: 44000, 
    discount: 5,
    type: 'normal',
    category: 'charisma'
  },
  'paradise-island-499': { 
    id: 'paradise-island-499',
    name: 'Paradise Island', 
    diamond: 499, 
    price: 44000, 
    discount: 20,
    type: 'normal',
    category: 'charisma'
  },
  'goldmoon-lantern-999': { 
    id: 'goldmoon-lantern-999',
    name: 'Goldmoon Lantern', 
    diamond: 999, 
    price: 85000, 
    discount: 5, 
    type: 'premium',
    category: 'charisma'
  },
  'flower-2': { 
    id: 'flower-2',
    name: 'Flower', 
    diamond: 2, 
    price: 240, 
    discount: 10,
    type: 'normal',
    category: 'live-stream'
  },
  'jewelry-6': { 
    id: 'jewelry-6',
    name: 'Jewelry', 
    diamond: 6, 
    price: 710, 
    discount: 10,
    type: 'normal',
    category: 'live-stream'
  },
  'roadster-250': { 
    id: 'roadster-250',
    name: 'Roadster', 
    diamond: 250, 
    price: 28000, 
    discount: 10,
    type: 'normal',
    category: 'live-stream'
  },
  'yacht-1000': { 
    id: 'yacht-1000',
    name: 'Yacht', 
    diamond: 1000, 
    price: 105000, 
    discount: 20,
    type: 'premium',
    category: 'live-stream'
  },
  'airplane-5000': { 
    id: 'airplane-5000',
    name: 'Airplane', 
    diamond: 5000, 
    price: 490000, 
    discount: 40, 
    type: 'premium',
    category: 'live-stream'
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
    name: "Gift Skin Kolaborasi",
    icon: "🪞",
    special: true,
    message: "Silakan chat admin untuk info ketersediaan dan harga skin kolaborasi terbaru (harga gift awal event dan akhir event akan berbeda)."
  }
];

// ===== MAIN APPLICATION =====
class MLBBGiftStore {
    constructor() {
        this.data = {
            storeInfo: {
                name: "MLBB Gift",
                subtitle: "Harga terjangkau • Proses cepat • Terpercaya",
                status: "open",
                lastUpdate: "5 September 2025",
                whatsappNumber: "62895357381660",
                requirements: "Akun harus berteman minimal 7 hari di MLBB sebelum bisa menerima gift."
            },
            pricingConfig: PRICING_CONFIG,
            categories: CATEGORIES
        };

        this.state = {
            currentCategory: 'all',
            searchTerm: '',
            isDarkMode: false,
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
        this.bindEvents();
        this.applyTheme();
        this.renderProducts();
        this.updateCartCount();
        this.renderStoreStatus(); // Tambahkan baris ini
    }

    loadSavedState() {
        this.state.isDarkMode = document.documentElement.getAttribute('data-color-scheme') === 'dark';
    }

    bindEvents() {
        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
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

        // Filter tabs
        document.querySelectorAll('.filter-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                const category = e.currentTarget.getAttribute('data-category');
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
    }

    toggleTheme() {
        this.state.isDarkMode = !this.state.isDarkMode;
        this.applyTheme();
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
        document.querySelectorAll('.filter-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        
        const activeTab = document.querySelector(`[data-category="${category}"]`);
        if (activeTab) {
            activeTab.classList.add('active');
        }
        
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
        
        // Filter by search term
        if (this.state.searchTerm) {
            items = items.filter(item => 
                item.name.toLowerCase().includes(this.state.searchTerm) ||
                item.categoryName.toLowerCase().includes(this.state.searchTerm) ||
                item.type.toLowerCase().includes(this.state.searchTerm)
            );
        }
        
        return items;
    }

    calculateDiscountPrice(originalPrice, discount) {
        if (discount > 0) {
            return Math.round(originalPrice * (100 - discount) / 100);
        }
        return originalPrice;
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
        const finalPrice = this.calculateDiscountPrice(item.price, item.discount);
        const isFavorite = this.state.favorites.includes(item.id);

        // Only show premium badge if item is premium type
        const premiumBadge = item.type === 'premium' ? `
            <div class="product-type premium">
                ✨ BEST SELLER
            </div>
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
            <div class="product-card" data-item-id="${item.id}">
                <div class="product-header">
                    <div class="product-category">
                        <span>${item.categoryIcon}</span>
                        <span>${item.categoryName}</span>
                    </div>
                    ${premiumBadge}
                </div>
                
                <div class="product-name">${item.name}</div>
                
                <div class="product-price">
                    ${priceDisplay}
                    <div class="price-reference">💎 ${item.diamond.toLocaleString()}</div>
                </div>
                
                <div class="product-actions">
                    <button class="action-btn add-cart-btn" data-item-id="${item.id}">
                        🛒 Tambah
                    </button>
                    <button class="action-btn primary order-btn" data-item-id="${item.id}">
                        💬 Pesan
                    </button>
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
        
        const existingItem = this.state.cart.find(cartItem => cartItem.id === itemId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.state.cart.push({
                ...item,
                finalPrice: this.calculateDiscountPrice(item.price, item.discount),
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

    orderSingleItem(itemId) {
        const item = this.getItemById(itemId);
        if (!item) return;
        
        this.addToRecentlyViewed(item);
        
        const finalPrice = this.calculateDiscountPrice(item.price, item.discount);
        const message = this.createWhatsAppMessage([{...item, finalPrice, quantity: 1}]);
        this.sendWhatsAppMessage(message);
    }

    orderViaWhatsApp() {
        if (this.state.cart.length === 0) {
            this.showToast('Keranjang belanja kosong', 'error');
            return;
        }
        
        const message = this.createWhatsAppMessage(this.state.cart);
        this.sendWhatsAppMessage(message);
        
        // Clear cart after ordering
        this.clearCart();
        this.closeCartModal();
    }

    createWhatsAppMessage(items) {
        let message = `🎮 *MLBB GIFT ORDER*\n\n`;
        message += `📋 *Detail Pesanan:*\n`;
        
        let totalRupiah = 0;
        
        items.forEach(item => {
            const itemTotal = item.finalPrice * item.quantity;
            message += `• ${item.name}\n`;
            message += `  Kategori: ${item.categoryName}\n`;
            message += `  Jumlah: ${item.quantity}x\n`;
            message += `  Harga: Rp${item.finalPrice.toLocaleString()} (💎${item.diamond.toLocaleString()})\n`;
            if (item.discount > 0) {
                message += `  Diskon: ${item.discount}% OFF\n`;
            }
            message += `  Subtotal: Rp${itemTotal.toLocaleString()}\n\n`;
            
            totalRupiah += itemTotal;
        });
        
        message += `💰 *Total Pembayaran: Rp ${totalRupiah.toLocaleString()}*\n\n`;
        
        message += `📝 *Catatan:*\n`;
        message += `${this.data.storeInfo.requirements}\n\n`;
        message += `Mohon konfirmasi ketersediaan stock terlebih dahulu.\n`;
        message += `Terima kasih! 🙏`;
        
        return message;
    }

    sendWhatsAppMessage(message) {
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${this.data.storeInfo.whatsappNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    }

    contactAdmin() {
        const message = `Halo admin MLBB Gift Store! 👋\n\nSaya ingin bertanya tentang produk/layanan Anda.\n\nTerima kasih!`;
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
        const finalPrice = this.calculateDiscountPrice(item.price, item.discount);
        
        detail.innerHTML = `
            <div class="item-detail-content">
                <div class="item-category">
                    <span style="font-size: 2rem;">${item.categoryIcon}</span>
                    <h4>${item.categoryName}</h4>
                </div>
                
                <div class="item-info">
                    <h3>${item.name}</h3>
                    ${item.type === 'premium' ? '<div class="item-type premium">✨ Premium</div>' : ''}
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
                    <button class="btn btn--outline" onclick="window.app.addToCartAndClose('${item.id}')">
                        🛒 Tambah ke Keranjang
                    </button>
                    <button class="btn btn--primary" onclick="window.app.orderSingleItemAndClose('${item.id}')">
                        💬 Pesan Sekarang
                    </button>
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
            statusEl.textContent = '🟢 Toko Buka';
            statusEl.className = 'store-status open';
        } else {
            statusEl.textContent = '🔴 Toko Tutup';
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
            const finalPrice = this.calculateDiscountPrice(item.price, item.discount);
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

// Initialize the application and make it globally available
window.app = new MLBBGiftStore();

/* ==========================================
   AURA FASHION - DIWALI SALE 2026 STYLESHEET
   ========================================== */

:root {
    --bg-primary: #12081f;       /* Deep dark purple */
    --bg-secondary: #1e1132;     /* Rich purple card bg */
    --bg-card: #281842;          
    --gold: #d4af37;             /* Luxurious gold */
    --gold-light: #f3e5ab;
    --gold-dark: #aa8c2c;
    --maroon: #6e1728;           /* Festive maroon */
    --cream: #faf6ee;            /* Cream text / light bg */
    --text-main: #f3f0ea;
    --text-muted: #b8b2cb;
    --accent-red: #e63946;
    --transition: all 0.3s ease;
    --box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    --border-radius: 12px;
}

/* Reset & Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    font-size: 16px;
}

body {
    font-family: 'Plus Jakarta Sans', sans-serif;
    background-color: var(--bg-primary);
    color: var(--text-main);
    line-height: 1.6;
    overflow-x: hidden;
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Cinzel', serif;
    font-weight: 700;
    letter-spacing: 0.5px;
}

ul {
    list-style: none;
}

a {
    text-decoration: none;
    color: inherit;
    transition: var(--transition);
}

img {
    max-width: 100%;
    display: block;
}

.container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 2rem;
}

/* Announcement Bar */
.announcement-bar {
    background: linear-gradient(90deg, var(--maroon), var(--gold-dark), var(--maroon));
    color: var(--cream);
    text-align: center;
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.5px;
}

.announcement-bar strong {
    color: var(--gold-light);
}

/* Header & Navigation */
.header {
    position: sticky;
    top: 0;
    z-index: 1000;
    background-color: rgba(18, 8, 31, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(212, 175, 55, 0.2);
}

.nav-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 1.2rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    font-family: 'Cinzel', serif;
    font-size: 1.8rem;
    font-weight: 900;
    color: var(--gold-light);
    letter-spacing: 2px;
}

.logo span {
    color: var(--cream);
}

.nav-links {
    display: flex;
    gap: 2.5rem;
}

.nav-links a {
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--text-main);
    position: compounding;
}

.nav-links a:hover,
.nav-links a.active {
    color: var(--gold);
}

.nav-actions {
    display: flex;
    align-items: center;
    gap: 1.2rem;
}

.icon-btn {
    background: none;
    border: none;
    color: var(--text-main);
    font-size: 1.2rem;
    cursor: pointer;
    position: relative;
    transition: var(--transition);
}

.icon-btn:hover {
    color: var(--gold);
}

.badge {
    position: absolute;
    top: -8px;
    right: -10px;
    background-color: var(--gold);
    color: var(--bg-primary);
    font-size: 0.7rem;
    font-weight: 700;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hamburger {
    display: none;
    background: none;
    border: none;
    color: var(--cream);
    font-size: 1.5rem;
    cursor: pointer;
}

/* Search Overlay */
.search-overlay {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: var(--bg-secondary);
    padding: 1.5rem 2rem;
    box-shadow: var(--box-shadow);
    display: none;
    border-bottom: 1px solid var(--gold-dark);
}

.search-overlay.active {
    display: block;
}

.search-container {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    position: relative;
}

.search-container input {
    width: 100%;
    padding: 0.9rem 3rem 0.9rem 1.2rem;
    background-color: var(--bg-primary);
    border: 1px solid var(--gold-dark);
    border-radius: var(--border-radius);
    color: var(--cream);
    font-size: 1rem;
    outline: none;
}

.search-container input:focus {
    border-color: var(--gold);
}

#search-close {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: var(--text-muted);
    font-size: 1.2rem;
    cursor: pointer;
}

#search-close:hover {
    color: var(--gold);
}

/* Hero Section */
.hero {
    min-height: 85vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 2rem;
    position: relative;
    gap: 3rem;
}

.hero-content {
    flex: 1;
    z-index: 2;
}

.hero-tag {
    display: inline-block;
    background-color: rgba(212, 175, 55, 0.15);
    color: var(--gold-light);
    padding: 0.4rem 1rem;
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    border: 1px solid rgba(212, 175, 55, 0.3);
}

.hero-content h1 {
    font-size: 3.5rem;
    line-height: 1.2;
    margin-bottom: 1rem;
    color: var(--cream);
}

.hero-subtitle {
    font-size: 1.15rem;
    color: var(--text-muted);
    margin-bottom: 1.5rem;
}

.hero-offer-badge {
    display: inline-block;
    font-family: 'Cinzel', serif;
    font-size: 1.8rem;
    font-weight: 900;
    color: var(--gold);
    margin-bottom: 2rem;
    letter-spacing: 1px;
}

.hero-btns {
    display: flex;
    gap: 1.2rem;
}

.btn {
    padding: 0.9rem 2rem;
    border-radius: var(--border-radius);
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    transition: var(--transition);
    border: none;
}

.btn-primary {
    background: linear-gradient(135deg, var(--gold), var(--gold-dark));
    color: var(--bg-primary);
    box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(212, 175, 55, 0.5);
}

.btn-outline {
    background: transparent;
    color: var(--cream);
    border: 1px solid var(--gold);
}

.btn-outline:hover {
    background-color: rgba(212, 175, 55, 0.1);
    color: var(--gold);
}

.hero-image-wrapper {
    flex: 1;
    position: relative;
    display: flex;
    justify-content: center;
}

.hero-img {
    width: 100%;
    max-width: 480px;
    height: 580px;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: var(--box-shadow);
    border: 2px solid rgba(212, 175, 55, 0.3);
}

.diya-glow {
    position: absolute;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(212, 175, 55, 0.25) 0%, rgba(110, 23, 40, 0.1) 60%, transparent 80%);
    border-radius: 50%;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    filter: blur(20px);
}

/* General Section Styling */
.section {
    padding: 5rem 0;
}

.section-header {
    text-align: center;
    margin-bottom: 3.5rem;
}

.sub-title {
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--gold);
    font-weight: 700;
    display: block;
    margin-bottom: 0.5rem;
}

.section-header h2 {
    font-size: 2.5rem;
    color: var(--cream);
    margin-bottom: 0.5rem;
}

.section-header p {
    color: var(--text-muted);
    font-size: 1rem;
}

/* Section 3: Diwali Special Offers */
.offers-section {
    background-color: var(--bg-secondary);
}

.offer-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
}

.offer-card {
    height: 320px;
    border-radius: var(--border-radius);
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    box-shadow: var(--box-shadow);
    border: 1px solid rgba(212, 175, 55, 0.2);
}

.offer-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(18, 8, 31, 0.95) 20%, rgba(18, 8, 31, 0.3) 100%);
    z-index: 1;
}

.women-offer {
    background-image: url('https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80');
}

.men-offer {
    background-image: url('https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80');
}

.kids-offer {
    background-image: url('https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=600&q=80');
}

.offer-text {
    position: relative;
    z-index: 2;
}

.discount-tag {
    background-color: var(--maroon);
    color: var(--cream);
    padding: 0.3rem 0.8rem;
    font-size: 0.75rem;
    font-weight: 700;
    border-radius: 4px;
    display: inline-block;
    margin-bottom: 0.8rem;
    border: 1px solid var(--gold);
}

.offer-card h3 {
    font-size: 1.5rem;
    color: var(--cream);
    margin-bottom: 0.4rem;
}

.offer-card p {
    color: var(--text-muted);
    font-size: 0.9rem;
    margin-bottom: 1rem;
}

.offer-link {
    font-weight: 600;
    font-size: 0.9rem;
    color: var(--gold);
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
}

.offer-link:hover {
    gap: 0.7rem;
    color: var(--gold-light);
}

/* Section 4: Featured Collections */
.collections-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
}

.collection-card {
    position: relative;
    height: 400px;
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: var(--box-shadow);
    cursor: pointer;
}

.collection-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
}

.collection-card:hover img {
    transform: scale(1.08);
}

.collection-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 2rem;
    background: linear-gradient(to top, rgba(18, 8, 31, 0.95), transparent);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
}

.collection-overlay h3 {
    font-size: 1.25rem;
    color: var(--cream);
}

.btn-sm {
    background-color: var(--gold);
    color: var(--bg-primary);
    border: none;
    padding: 0.5rem 1.2rem;
    border-radius: 6px;
    font-weight: 600;
    font-size: 0.8rem;
    cursor: pointer;
    transition: var(--transition);
}

.btn-sm:hover {
    background-color: var(--gold-light);
}

/* Section 5: Trending Products */
.trending-section {
    background-color: var(--bg-secondary);
}

.filter-tabs {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 3rem;
}

.tab-btn {
    background-color: var(--bg-card);
    border: 1px solid rgba(212, 175, 55, 0.2);
    color: var(--text-muted);
    padding: 0.6rem 1.5rem;
    border-radius: 30px;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    transition: var(--transition);
}

.tab-btn:hover,
.tab-btn.active {
    background-color: var(--gold);
    color: var(--bg-primary);
    border-color: var(--gold);
}

.product-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
}

.product-card {
    background-color: var(--bg-card);
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: var(--box-shadow);
    transition: var(--transition);
    border: 1px solid rgba(212, 175, 55, 0.15);
    display: flex;
    flex-direction: column;
}

.product-card:hover {
    transform: translateY(-6px);
    border-color: var(--gold-dark);
}

.product-img-wrapper {
    position: relative;
    height: 300px;
    overflow: hidden;
}

.product-img-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.product-card:hover .product-img-wrapper img {
    transform: scale(1.1);
}

.product-discount-badge {
    position: absolute;
    top: 12px;
    left: 12px;
    background-color: var(--accent-red);
    color: var(--cream);
    font-size: 0.75rem;
    font-weight: 700;
    padding: 0.25rem 0.6rem;
    border-radius: 4px;
}

.wishlist-icon-btn {
    position: absolute;
    top: 12px;
    right: 12px;
    background-color: rgba(18, 8, 31, 0.7);
    border: none;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    color: var(--cream);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: var(--transition);
}

.wishlist-icon-btn:hover,
.wishlist-icon-btn.active {
    background-color: var(--gold);
    color: var(--bg-primary);
}

.product-info {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.product-rating {
    color: var(--gold);
    font-size: 0.85rem;
    margin-bottom: 0.5rem;
}

.product-name {
    font-size: 1.05rem;
    color: var(--cream);
    margin-bottom: 0.8rem;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 600;
    flex-grow: 1;
}

.product-pricing {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-bottom: 1.2rem;
}

.current-price {
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--gold-light);
}

.original-price {
    font-size: 0.95rem;
    color: var(--text-muted);
    text-decoration: line-through;
}

.add-to-cart-btn {
    width: 100%;
    padding: 0.8rem;
    background-color: transparent;
    border: 1px solid var(--gold);
    color: var(--gold);
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    transition: var(--transition);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
}

.add-to-cart-btn:hover {
    background-color: var(--gold);
    color: var(--bg-primary);
}

/* Section 6: Diwali Countdown Timer */
.countdown-section {
    background: linear-gradient(135deg, var(--bg-secondary), var(--maroon));
    text-align: center;
}

.countdown-container {
    max-width: 800px;
}

.countdown-content h2 {
    font-size: 2.5rem;
    color: var(--cream);
    margin: 0.5rem 0 1rem 0;
}

.countdown-content p {
    color: var(--text-muted);
    margin-bottom: 2.5rem;
}

.timer-grid {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
}

.timer-box {
    background-color: rgba(18, 8, 31, 0.8);
    border: 1px solid var(--gold);
    padding: 1.5rem;
    border-radius: var(--border-radius);
    min-width: 100px;
    box-shadow: var(--box-shadow);
}

.timer-box span {
    display: block;
}

.timer-box span:first-child {
    font-size: 2.5rem;
    font-family: 'Cinzel', serif;
    font-weight: 700;
    color: var(--gold-light);
    margin-bottom: 0.3rem;
}

.timer-label {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--text-muted);
}

.sale-message {
    margin-top: 2rem;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--gold);
    font-family: 'Cinzel', serif;
}

.hidden {
    display: none;
}

/* Section 7: Why Choose Us? */
.features-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
}

.feature-card {
    background-color: var(--bg-secondary);
    padding: 2.5rem 2rem;
    border-radius: var(--border-radius);
    text-align: center;
    border: 1px solid rgba(212, 175, 55, 0.15);
    transition: var(--transition);
}

.feature-card:hover {
    transform: translateY(-5px);
    border-color: var(--gold);
}

.feature-icon {
    font-size: 2.5rem;
    color: var(--gold);
    margin-bottom: 1.2rem;
}

.feature-card h3 {
    font-size: 1.2rem;
    color: var(--cream);
    margin-bottom: 0.8rem;
}

.feature-card p {
    color: var(--text-muted);
    font-size: 0.9rem;
}

/* Section 8: Customer Testimonials */
.testimonials-section {
    background-color: var(--bg-secondary);
}

.testimonials-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
}

.testimonial-card {
    background-color: var(--bg-primary);
    padding: 2.5rem;
    border-radius: var(--border-radius);
    border: 1px solid rgba(212, 175, 55, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.stars {
    color: var(--gold);
    font-size: 0.9rem;
    margin-bottom: 1.2rem;
}

.review-text {
    font-size: 0.95rem;
    color: var(--text-main);
    font-style: italic;
    margin-bottom: 2rem;
    flex-grow: 1;
}

.customer-info {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.customer-info img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--gold);
}

.customer-info h4 {
    font-size: 1rem;
    color: var(--cream);
    font-family: 'Plus Jakarta Sans', sans-serif;
}

.customer-info span {
    font-size: 0.8rem;
    color: var(--text-muted);
}

/* Section 9: Newsletter Subscription */
.newsletter-section {
    background: linear-gradient(180deg, var(--bg-primary), var(--bg-secondary));
}

.newsletter-box {
    max-width: 900px;
    background: linear-gradient(135deg, var(--bg-card), var(--maroon));
    border: 1px solid var(--gold);
    padding: 4rem 3rem;
    border-radius: 20px;
    text-align: center;
    box-shadow: var(--box-shadow);
}

.newsletter-content h2 {
    font-size: 2.2rem;
    color: var(--cream);
    margin-bottom: 0.8rem;
}

.newsletter-content p {
    color: var(--text-muted);
    max-width: 600px;
    margin: 0 auto 2rem auto;
    font-size: 1rem;
}

.newsletter-form {
    max-width: 500px;
    margin: 0 auto;
}

.input-group {
    display: flex;
    gap: 0.8rem;
    background-color: var(--bg-primary);
    padding: 0.4rem;
    border-radius: var(--border-radius);
    border: 1px solid var(--gold-dark);
}

.input-group input {
    flex-grow: 1;
    background: none;
    border: none;
    padding: 0.8rem 1rem;
    color: var(--cream);
    font-size: 0.95rem;
    outline: none;
}

.newsletter-msg {
    margin-top: 1rem;
    font-size: 0.9rem;
    font-weight: 600;
}

.newsletter-msg.success {
    color: #4bb543;
}

.newsletter-msg.error {
    color: var(--accent-red);
}

/* Section 10: Footer */
.footer {
    background-color: var(--bg-primary);
    border-top: 1px solid rgba(212, 175, 55, 0.2);
    padding-top: 5rem;
}

.footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1.5fr;
    gap: 3rem;
    padding-bottom: 4rem;
}

.footer-logo {
    font-family: 'Cinzel', serif;
    font-size: 1.6rem;
    font-weight: 900;
    color: var(--gold-light);
    display: inline-block;
    margin-bottom: 1rem;
}

.footer-logo span {
    color: var(--cream);
}

.footer-col p {
    color: var(--text-muted);
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
}

.social-icons {
    display: flex;
    gap: 1rem;
}

.social-icons a {
    width: 38px;
    height: 38px;
    background-color: var(--bg-secondary);
    border: 1px solid rgba(212, 175, 55, 0.3);
    color: var(--gold);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
}

.social-icons a:hover {
    background-color: var(--gold);
    color: var(--bg-primary);
}

.footer-col h3 {
    font-size: 1.1rem;
    color: var(--cream);
    margin-bottom: 1.5rem;
}

.footer-col ul li {
    margin-bottom: 0.8rem;
}

.footer-col ul li a {
    color: var(--text-muted);
    font-size: 0.9rem;
}

.footer-col ul li a:hover {
    color: var(--gold);
    padding-left: 5px;
}

.contact-list li {
    display: flex;
    gap: 0.8rem;
    color: var(--text-muted);
    font-size: 0.9rem;
    margin-bottom: 1rem;
}

.contact-list i {
    color: var(--gold);
    margin-top: 3px;
}

.footer-bottom {
    background-color: #0b0414;
    padding: 1.5rem 0;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.footer-bottom-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer-bottom p {
    font-size: 0.85rem;
    color: var(--text-muted);
}

.footer-legal {
    display: flex;
    gap: 1.5rem;
}

.footer-legal a {
    font-size: 0.85rem;
    color: var(--text-muted);
}

.footer-legal a:hover {
    color: var(--gold);
}

/* Back to Top Button */
.back-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: var(--gold);
    color: var(--bg-primary);
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: none;
    font-size: 1.1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: var(--box-shadow);
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);
    z-index: 999;
}

.back-to-top.show {
    opacity: 1;
    visibility: visible;
}

.back-to-top:hover {
    background-color: var(--gold-light);
    transform: translateY(-3px);
}

/* Cart & Wishlist Slide-out Drawers */
.cart-drawer, .wishlist-drawer {
    position: fixed;
    top: 0;
    right: -420px;
    width: 400px;
    height: 100vh;
    background-color: var(--bg-secondary);
    box-shadow: -5px 0 25px rgba(0,0,0,0.5);
    z-index: 1100;
    transition: right 0.4s ease;
    display: flex;
    flex-direction: column;
    border-left: 1px solid rgba(212, 175, 55, 0.2);
}

.cart-drawer.open, .wishlist-drawer.open {
    right: 0;
}

.cart-header, .wishlist-header {
    padding: 1.5rem;
    border-bottom: 1px solid rgba(212, 175, 55, 0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.cart-header h3, .wishlist-header h3 {
    font-size: 1.2rem;
    color: var(--cream);
}

.cart-items, .wishlist-items {
    flex-grow: 1;
    overflow-y: auto;
    padding: 1.5rem;
}

.cart-item-card, .wishlist-item-card {
    display: flex;
    gap: 1rem;
    background-color: var(--bg-primary);
    padding: 1rem;
    border-radius: 10px;
    margin-bottom: 1rem;
    border: 1px solid rgba(212, 175, 55, 0.15);
    position: relative;
}

.cart-item-img, .wishlist-item-img {
    width: 70px;
    height: 85px;
    object-fit: cover;
    border-radius: 6px;
}

.cart-item-details, .wishlist-item-details {
    flex-grow: 1;
}

.cart-item-title, .wishlist-item-title {
    font-size: 0.95rem;
    color: var(--cream);
    margin-bottom: 0.3rem;
    font-weight: 600;
}

.cart-item-price, .wishlist-item-price {
    font-size: 0.9rem;
    color: var(--gold);
    font-weight: 700;
    margin-bottom: 0.8rem;
}

.cart-item-actions {
    display: flex;
    align-items: center;
    gap: 0.8rem;
}

.qty-btn {
    background: var(--bg-secondary);
    border: 1px solid var(--gold-dark);
    color: var(--cream);
    width: 24px;
    height: 24px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.8rem;
}

.qty-btn:hover {
    background: var(--gold);
    color: var(--bg-primary);
}

.remove-item-btn {
    background: none;
    border: none;
    color: var(--accent-red);
    font-size: 0.9rem;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 12px;
}

.cart-footer {
    padding: 1.5rem;
    border-top: 1px solid rgba(212, 175, 55, 0.2);
    background-color: var(--bg-primary);
}

.cart-total-row {
    display: flex;
    justify-content: space-between;
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--cream);
    margin-bottom: 0.5rem;
}

.cart-total-row span:last-child {
    color: var(--gold);
}

.cart-shipping-note {
    font-size: 0.8rem;
    color: var(--text-muted);
    margin-bottom: 1.2rem;
}

.checkout-btn {
    width: 100%;
}

.cart-overlay, .wishlist-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(3px);
    z-index: 1050;
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);
}

.cart-overlay.open, .wishlist-overlay.open {
    opacity: 1;
    visibility: visible;
}

.empty-state {
    text-align: center;
    color: var(--text-muted);
    padding: 3rem 1rem;
}

.empty-state i {
    font-size: 3rem;
    color: var(--gold-dark);
    margin-bottom: 1rem;
}

/* Toast Notification */
.toast {
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%) translateY(100px);
    background-color: var(--gold);
    color: var(--bg-primary);
    padding: 0.8rem 1.8rem;
    border-radius: 50px;
    font-weight: 700;
    box-shadow: var(--box-shadow);
    transition: transform 0.4s ease;
    z-index: 1200;
}

.toast.show {
    transform: translateX(-50%) translateY(0);
}

/* Responsive Media Queries */
@media (max-width: 1024px) {
    .offer-grid, .collections-grid, .product-grid, .features-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .hero-content h1 {
        font-size: 2.8rem;
    }

    .footer-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 2.5rem;
    }
}

@media (max-width: 768px) {
    .navbar {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background-color: var(--bg-secondary);
        flex-direction: column;
        align-items: center;
        padding: 2rem 0;
        box-shadow: var(--box-shadow);
        clip-path: circle(0% at 100% 0%);
        transition: clip-path 0.5s ease-in-out;
    }

    .navbar.active {
        clip-path: circle(150% at 100% 0%);
    }

    .nav-links {
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
    }

    .hamburger {
        display: block;
    }

    .hero {
        flex-direction: column-reverse;
        text-align: center;
        padding: 3rem 1rem;
    }

    .hero-btns {
        justify-content: center;
    }

    .hero-content h1 {
        font-size: 2.3rem;
    }

    .offer-grid, .collections-grid, .product-grid, .features-grid, .testimonials-grid {
        grid-template-columns: 1fr;
    }

    .timer-grid {
        gap: 0.8rem;
    }

    .timer-box {
        min-width: 70px;
        padding: 1rem 0.5rem;
    }

    .timer-box span:first-child {
        font-size: 1.8rem;
    }

    .footer-grid {
        grid-template-columns: 1fr;
    }

    .footer-bottom-flex {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
    }

    .cart-drawer, .wishlist-drawer {
        width: 100%;
        right: -100%;
    }
}
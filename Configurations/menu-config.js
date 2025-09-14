/*
===========================================
MENU CONFIGURATION - CENTRALIZED MANAGEMENT
===========================================
This file contains all the menu structure and content.
Modify this file to customize your full-screen menu overlay.

QUICK CUSTOMIZATION GUIDE:
1. Enable/disable menu sections using the 'enabled' property
2. Add/remove menu columns in the 'columns' array
3. Modify promotional content in the 'promotional' section
4. Update social links in the 'social' section
5. Customize styling properties in the 'styling' section

For detailed instructions, see MENU-GUIDE.md
*/

// ===========================================
// MENU CONFIGURATION OBJECT
// ===========================================

const MENU_CONFIG = {
    // Global menu settings
    settings: {
        enabled: true,                    // Master toggle for menu functionality
        closeOnLinkClick: true,           // Close menu when a link is clicked
        enableKeyboardNavigation: true,   // Enable keyboard navigation (Tab, Escape)
        animationDuration: 300,           // Menu open/close animation duration (ms)
        showPromotionalBox: true,         // Show promotional box at top
        showSocialLinks: true,            // Show social media links
        enableSearchInMenu: false,        // Show search bar in menu (optional)
    },

    // Promotional box content (appears at top of menu)
    promotional: {
        enabled: true,
        title: "🚀 Rocketpot Casino",
        subtitle: "Exceptional security • Instant crypto withdrawals",
        description: "Massive game selection, provably fair, and rich cashback bonuses.",
        productLogo: {
            enabled: true,                        // Show product logo
            src: "./assets/images/casino_test/rocketpot_text_logo_black.webp", // Path to product logo
            alt: "Rocketpot Casino Logo",              // Alt text for logo
            width: "80px",                        // Logo width
            height: "80px",                       // Logo height
            
            // Responsive scaling for different device sizes
            responsive: {
                desktop: {
                    scale: 2.5                    // ← Desktop logo scaling (1.0 = 100%, 2.5 = 250%)
                },
                tablet: {
                    scale: 1.5                    // ← Tablet logo scaling (smaller than desktop)
                },
                mobile: {
                    scale: 1.5                    // ← Mobile logo scaling (smaller for mobile)
                },
                extraSmall: {
                    scale: 1.5                    // ← Extra small logo scaling (smallest for tiny screens)
                }
            },
            
            // Legacy scale property (fallback for backwards compatibility)
            scale: 2.5                           // Logo scale multiplier (1.0 = 100%, 1.2 = 120%, etc.)
        },
        
        // Button configuration
        ctaButton: {
            text: "Play on Rocketpot",
            icon: "fas fa-dice",                // FontAwesome icon class
            link: "https://rocketpot.io/",          // CTA button link
            class: "promo-btn primary-btn"        // CTA button CSS class
        },
        
        reviewButton: {
            enabled: false,                        // Show review button
            text: "Read Review",                  // Review button text
            icon: "fas fa-search",                // FontAwesome icon class
            link: "#editors-choice-review",       // Review button link
            class: "promo-btn secondary-btn"      // Review button CSS class
        },
        
        // Background configuration - choose one
        background: {
            type: "gradient",                     // "gradient" or "image"
            
            // For gradient background
            gradientClass: "promo-box-gradient",  // CSS class for gradient styling
            
            // For image background (when type is "image")
            image: {
                src: "",                          // Background image URL
                position: "center",               // Background position
                size: "cover",                    // Background size
                overlay: "rgba(0,0,0,0.3)"       // Optional overlay color
            }
        }
    },

    // Menu columns configuration
    columns: [
        {
            id: "main-categories",
            title: "Crypto Sportsbooks",
            enabled: true,
            links: [
                { text: "🏆 Top 10 Rankings", url: "./index.html#top10", description: "Best crypto sportsbooks 2025" },
                { text: "⚖️ Compare Options", url: "./index.html#comparison", description: "Side-by-side comparison" },
                { text: "📝 Latest Articles", url: "./blog.html", description: "Reviews and guides (bonuses, limits)" },
                { text: "📞 Contact Us", url: "./contact.html", description: "Get in touch" },
                /* { text: "🎁 Best Deals", url: "./index.html#deals", description: "Exclusive offers" } */
            ]
        },
        {
            id: "top-partners",
            title: "Featured Sportsbooks",
            enabled: true,
            links: [
                { text: "⚡ Stake", url: "./index.html#review-1", description: "Best UX – Crypto-native" },
                { text: "🚀 Cloudbet", url: "./index.html#review-2", description: "High limits – 40+ coins" },
                { text: "💎 Sportsbet.io", url: "./index.html#review-3", description: "Cash Out & Price Boosts" },
                /* { text: "🔥 Hot Deals", url: "#hot-deals", description: "Limited time offers" }, */
                { text: "📊 All Rankings", url: "./index.html#top10", description: "View complete list" }
            ]
        },
        {
            id: "resources",
            title: "Resources & Guides", 
            enabled: true,
            links: [
                { text: "🎓 Crypto Sportsbook Guide", url: "./blogpost1.html", description: "How to choose the right book" },
                { text: "📉 Cash Out vs Bet Builders", url: "./blogpost2.html", description: "Which adds more value?" },
                { text: "🎁 Bonus Terms Explained", url: "./blogpost3.html", description: "Rollover, expiry, limits" },
                { text: "❓ FAQ", url: "./contact.html#faq", description: "Common questions" },
                { text: "📈 Crypto Sportsbook News", url: "./blog.html", description: "Latest updates" }
            ]
        },
        {
            id: "legal-info",
            title: "Legal & Support",
            enabled: true,
            links: [
                { text: "🛡️ Privacy Policy", url: "./privacy.html", description: "Your data protection" },
                { text: "📋 Terms of Service", url: "./disclaimer.html", description: "Usage terms" },
                { text: "⚠️ Disclaimer", url: "./disclaimer.html#disclaimer", description: "Important notices" },
                { text: "📧 Support Center", url: "./contact.html", description: "Help & assistance" }
            ]
        },
        // Second row of columns with varying link counts
        {
            id: "gaming-categories",
            title: "Gaming Categories",
            enabled: false,
            links: [
                { text: "🎮 Action Games", url: "#action-games", description: "Fast-paced gaming" },
                { text: "🧩 Strategy Games", url: "#strategy-games", description: "Think and plan" },
                { text: "🏎️ Racing Games", url: "#racing-games", description: "Speed and thrills" },
                { text: "🎯 Shooter Games", url: "#shooter-games", description: "Competitive gaming" },
                { text: "🌍 Open World", url: "#open-world", description: "Explore vast worlds" },
                { text: "👥 Multiplayer", url: "#multiplayer", description: "Play with friends" },
                { text: "📱 Mobile Gaming", url: "#mobile-gaming", description: "Gaming on the go" },
                { text: "🕹️ Retro Games", url: "#retro-games", description: "Classic gaming" }
            ]
        },
        {
            id: "platform-specific",
            title: "Platform Specific",
            enabled: false,
            links: [
                { text: "🖥️ PC Gaming", url: "#pc-gaming", description: "Desktop & laptop gaming" },
                { text: "🎮 Console Gaming", url: "#console-gaming", description: "PlayStation, Xbox, Switch" },
                { text: "📱 Mobile Gaming", url: "#mobile-gaming", description: "iOS & Android" }
            ]
        },
        {
            id: "special-features",
            title: "Special Features",
            enabled: false,
            links: [
                { text: "🎁 Free Games", url: "#free-games", description: "No cost to play" },
                { text: "💰 Best Deals", url: "#deals", description: "Save money on games" },
                { text: "🆕 New Releases", url: "#new-releases", description: "Latest game launches" },
                { text: "🏆 Award Winners", url: "#award-winners", description: "Critically acclaimed" },
                { text: "👶 Family Friendly", url: "#family-games", description: "Safe for all ages" },
                { text: "🔞 Mature Content", url: "#mature-games", description: "18+ rated games" }
            ]
        },
        {
            id: "community",
            title: "Community",
            enabled: true,
            links: [
                { text: "📺 Reviews", url: "./index.html#reviews", description: "Detailed casino reviews" },
                /* { text: "🏅 Tournaments", url: "#tournaments", description: "Competitive events" }, */
                { text: "📰 News", url: "./blog.html", description: "Latest gaming news" },
                /* { text: "📸 Screenshots", url: "#screenshots", description: "Share your moments" } */
            ]
        }
    ],

    // Social media links
    social: {
        enabled: false,
        title: "Follow Us",
        links: [
            { 
                platform: "x", 
                url: "https://x.com/yourhandle", 
                icon: "fab fa-x-twitter",
                color: "#000000",
                text: "𝕏"
            },
            { 
                platform: "facebook", 
                url: "https://facebook.com/yourpage", 
                icon: "fab fa-facebook",
                color: "#4267B2",
                text: "Facebook"
            },
            { 
                platform: "youtube", 
                url: "https://youtube.com/yourchannel", 
                icon: "fab fa-youtube",
                color: "#FF0000",
                text: "YouTube"
            },
            { 
                platform: "telegram", 
                url: "https://t.me/yourchannel", 
                icon: "fab fa-telegram",
                color: "#0088cc",
                text: "Telegram"
            }
        ]
    },

    // Styling configuration
    styling: {
        // Background and overlay
        overlayBackground: "rgba(0, 0, 0, 0.95)",     // Semi-transparent black
        menuBackground: "var(--background-color)",     // Use theme background
        
        // Typography
        headerColor: "var(--primary-color)",           // Column headers
        linkColor: "var(--text-color)",               // Regular links
        linkHoverColor: "var(--primary-color)",       // Link hover state
        descriptionColor: "var(--text-muted)",        // Link descriptions
        
        // Promotional box
        promoBackground: "linear-gradient(135deg, var(--primary-color), var(--secondary-color))",
        promoTextColor: "#ffffff",
        
        // Layout
        maxWidth: "1200px",                           // Maximum menu width
        columnGap: "2rem",                            // Space between columns
        linkSpacing: "0.75rem",                       // Space between links
        
        // Animations
        fadeInDuration: "0.3s",
        slideInDuration: "0.4s",
        staggerDelay: "0.1s"                          // Delay between column animations
    },

    // Advanced customization options
    advanced: {
        // Custom CSS classes
        customClasses: {
            menuOverlay: "custom-menu-overlay",
            menuContainer: "custom-menu-container",
            promoBox: "custom-promo-box",
            menuColumn: "custom-menu-column"
        },
        
        // Custom HTML injection points
        customHTML: {
            beforePromo: "",                          // HTML before promotional box
            afterPromo: "",                           // HTML after promotional box
            beforeColumns: "",                        // HTML before menu columns
            afterColumns: "",                         // HTML after menu columns
            beforeSocial: "",                         // HTML before social links
            afterSocial: ""                           // HTML after social links
        },
        
        // Event callbacks
        callbacks: {
            onMenuOpen: null,                         // Function to call when menu opens
            onMenuClose: null,                        // Function to call when menu closes
            onLinkClick: null                         // Function to call when link is clicked
        }
    }
};

// ===========================================
// HELPER FUNCTIONS
// ===========================================

/**
 * Get menu configuration
 * @returns {Object} Complete menu configuration
 */
function getMenuConfig() {
    return MENU_CONFIG;
}

/**
 * Get enabled columns only
 * @returns {Array} Array of enabled menu columns
 */
function getEnabledColumns() {
    return MENU_CONFIG.columns.filter(column => column.enabled);
}

/**
 * Get promotional content if enabled
 * @returns {Object|null} Promotional content or null if disabled
 */
function getPromotionalContent() {
    return MENU_CONFIG.promotional.enabled ? MENU_CONFIG.promotional : null;
}

/**
 * Get social links if enabled
 * @returns {Object|null} Social links or null if disabled
 */
function getSocialLinks() {
    return MENU_CONFIG.social.enabled ? MENU_CONFIG.social : null;
}

/**
 * Update menu configuration
 * @param {Object} updates - Partial configuration updates
 */
function updateMenuConfig(updates) {
    // Deep merge updates into existing config
    Object.keys(updates).forEach(key => {
        if (typeof updates[key] === 'object' && !Array.isArray(updates[key])) {
            MENU_CONFIG[key] = { ...MENU_CONFIG[key], ...updates[key] };
        } else {
            MENU_CONFIG[key] = updates[key];
        }
    });
}

/**
 * Add new menu column
 * @param {Object} column - Column configuration
 */
function addMenuColumn(column) {
    if (!column.id || !column.title) {
        console.error('Menu column must have id and title');
        return;
    }
    
    // Check if column already exists
    const existingIndex = MENU_CONFIG.columns.findIndex(col => col.id === column.id);
    if (existingIndex !== -1) {
        MENU_CONFIG.columns[existingIndex] = { ...MENU_CONFIG.columns[existingIndex], ...column };
    } else {
        MENU_CONFIG.columns.push({
            enabled: true,
            links: [],
            ...column
        });
    }
}

/**
 * Remove menu column
 * @param {string} columnId - ID of column to remove
 */
function removeMenuColumn(columnId) {
    const index = MENU_CONFIG.columns.findIndex(col => col.id === columnId);
    if (index !== -1) {
        MENU_CONFIG.columns.splice(index, 1);
    }
}

/**
 * Add link to existing column
 * @param {string} columnId - ID of target column
 * @param {Object} link - Link configuration
 */
function addLinkToColumn(columnId, link) {
    const column = MENU_CONFIG.columns.find(col => col.id === columnId);
    if (column) {
        column.links.push(link);
    } else {
        console.error(`Column with id '${columnId}' not found`);
    }
}

/**
 * Remove link from column
 * @param {string} columnId - ID of target column
 * @param {number} linkIndex - Index of link to remove
 */
function removeLinkFromColumn(columnId, linkIndex) {
    const column = MENU_CONFIG.columns.find(col => col.id === columnId);
    if (column && column.links[linkIndex]) {
        column.links.splice(linkIndex, 1);
    }
}

// ===========================================
// EXPORT CONFIGURATION
// ===========================================

// Make functions available globally
window.MenuConfig = {
    get: getMenuConfig,
    getEnabledColumns,
    getPromotionalContent,
    getSocialLinks,
    update: updateMenuConfig,
    addColumn: addMenuColumn,
    removeColumn: removeMenuColumn,
    addLink: addLinkToColumn,
    removeLink: removeLinkFromColumn
};

// Make MENU_CONFIG globally available for search system
if (typeof window !== 'undefined') {
    window.MENU_CONFIG = MENU_CONFIG;
    window.MenuConfig = MenuConfig;
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        MENU_CONFIG,
        getMenuConfig,
        getEnabledColumns,
        getPromotionalContent,
        getSocialLinks,
        updateMenuConfig,
        addMenuColumn,
        removeMenuColumn,
        addLinkToColumn,
        removeLinkFromColumn
    };
} 
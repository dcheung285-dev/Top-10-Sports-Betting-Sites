/*
===========================================
AFFILIATE WEBSITE TEMPLATE - CONFIGURATION
===========================================
🎯 CHANGE YOUR MAIN SETTINGS HERE - ONLY EDIT THESE LINES:
*/

// ========== MAIN SETTINGS - EDIT THESE LINES ONLY ==========
const NICHE = "Crypto Sportsbooks";                          // ← Your niche (e.g., "Gaming Laptops", "Coffee Makers")
const PRODUCT_TYPE = "Crypto Sportsbooks";                   // ← Product type eg. "Gaming Laptops"
const AUDIENCE = "Crypto Sportsbook Buyers";                       // ← Target audience eg. "Gamers"
const CONTACT_EMAIL = "contact@CryptoSportsbookScout.com";           // ← Your contact email "eg. contact@yoursite.com"
// const SITE_URL = "{{Site URL}}";                // ← COMMENTED OUT - using smart detection below instead


// 🔧 SMART URL DETECTION (ALTERNATIVE):
// Replace the SITE_URL line above with this code for automatic dev/production switching:

const SITE_URL = (() => {
    // Auto-detect development environment
    if (window.location.hostname === 'localhost' || 
        window.location.hostname === '127.0.0.1' || 
        window.location.hostname.includes('gitpod') ||
        window.location.hostname.includes('codesandbox') ||
        window.location.hostname.includes('stackblitz')) {
        const devUrl = window.location.origin;
        console.log('🔧 Development mode detected - Using URL:', devUrl);
        return devUrl; // Use current development URL
    }
    
    // Production URL - CHANGE THIS to your live domain
    const prodUrl = "https://cryptosportsbookscout.com";
    console.log('🌍 Production mode detected - Using URL:', prodUrl);
    return prodUrl;
})();


const FAVICON = "./assets/images/sports-betting/bet-icon4.png";       // ← Your favicon path (browser tab icon)

// Don't touch INDEX_PAGE_TITLE - it's automatically generated from the settings above
const INDEX_PAGE_TITLE = "Top 10 Crypto Sportsbooks - Best Crypto Sportsbook Reviews 2025"; // ← Homepage browser tab title 

// ========== TRUST INDICATORS - EDIT THESE ==========
const REVIEW_COUNT = "100 million";                      // ← Number of reviews "+"
const USER_COUNT = "10 million";                         // ← Users helped "+"
const LAST_UPDATE = "September 2025";                   // ← Last updated
const NUMBER_TESTED = "50+"                    // ← Products tested "+" this is for the Editor's choice section

// ========== HERO SECTION CONFIGURATION ==========
const HERO_CONFIG = {
    // Hero image settings
    image: {
        src: "./assets/images/sports-betting/sports-betting-hero.jpg",  // ← Change this to use different hero image
        alt: "{{PRODUCT_TYPE}} Product Reviews",  // ← Alt text for the hero image (shows what the site reviews)
        fallback: "./assets/images/hero-image.jpg"  // ← Fallback image if main image fails to load
    },
    
    // Optional: Video settings
    video: {
        enabled: false,  // ← Set to true to enable video functionality
        src: "./assets/videos/Monti's_test_video.mp4",        // ← Add your video URL here (MP4, WebM, or OGV)
        type: "video/mp4", // ← Video MIME type (video/mp4, video/webm, video/ogg)
        text: "Watch Our Review Video", // ← Placeholder text when no video URL
        autoplay: false, // ← Set to true for autoplay (not recommended)
        muted: false,    // ← Set to true to start muted
        loop: false,     // ← Set to true to loop video
        poster: "",      // ← Optional: Video poster image URL
        
        // Supported video formats and guidelines:
        // MP4: Best compatibility (recommended) - file.mp4
        // WebM: Good for web, smaller file sizes - file.webm  
        // OGV: Ogg format for Firefox - file.ogv
        // 
        // Video Guidelines:
        // - Recommended size: 1920x1080 (Full HD) or 1280x720 (HD)
        // - Duration: 30-60 seconds for hero videos
        // - File size: Keep under 10MB for good loading speed
        // - Format: MP4 H.264 codec for best compatibility
        // - Add captions/subtitles for accessibility
    }
    
    // HERO IMAGE GUIDELINES:
    // - Should show multiple products grouped together
    // - Represents the product category you review (coffee makers, laptops, etc.)
    // - Builds trust by showing you test multiple products
    // - Recommended size: 800x600px minimum (1200x900px preferred)
    // - Supported formats: .jpg, .webp, .png
    // - Alt text should describe what products you review, not "comparison"
};

// Make HERO_CONFIG globally available
window.HERO_CONFIG = HERO_CONFIG;

// ========== EDITOR'S CHOICE CONFIGURATION ==========
const EDITORS_CHOICE_CONFIG = {
    // =============================================
    // CHOOSE YOUR EDITOR'S CHOICE PRODUCT
    // =============================================
    // Option 1: Use any product from your product list
    // Change this to any product key: 'product1', 'product2', 'product3', etc.
    selectedProduct: 'product3',  // ← CHANGE THIS LINE TO SWITCH PRODUCTS
    
    // =============================================
    // EDITOR'S CHOICE BADGE CONFIGURATION
    // =============================================
    badgeSettings: {
        // For product cards: add editor's choice badge next to existing badge
        addToProductCard: true,              // ← Show "EDITOR'S CHOICE" badge on product cards
        replaceProductBadge: false,          // ← Replace product badge with editor's choice badge (set true to replace, false to show both)
        
        // Badge text and styling
        badgeText: "EDITOR'S CHOICE",        // ← Text for the editor's choice badge
        badgeIcon: "fas fa-crown"            // ← Icon for the editor's choice badge
    },
    
    // Option 2: Manual override (set useManualOverride to true)
    useManualOverride: false,     // ← Set to true to use manual data below instead of product data
    
    // Manual override data (only used if useManualOverride is true)
    manualOverride: {
        name: "Rocketpot — OG Crypto Brand, Sports + Casino",  // doesn't have sports betting??
        
        // =============================================
        // TITLE DISPLAY CONFIGURATION
        // =============================================
        titleDisplay: {
            type: 'text',                    // ← 'text', 'image', or 'combined'
            logoImage: '', // ← Logo image path
            logoScale: 1.0,                  // ← Logo scaling (1.0 = 100%, 1.5 = 150%, etc.)
            logoAlt: '', // ← Alt text for logo
            gap: '24px'                      // ← Gap between logo and text in combined mode (e.g., '24px', '-10px', '2rem', '-50px' for overlapping)
        },
        description: "Live since 2019, Rocketpot built a sizable casino and added a sportsbook vertical, emphasizing fast crypto banking and volume‑based rewards. Ownership and licensing are Curaçao‑based (Danneskjold Ventures B.V.; Curacao license references appear in T&Cs).",
        productLogo: "./assets/images/casino_test/rocketpot_text_logo_black.webp",
        productImage: "./assets/images/sports-betting/rocketpot_website.webp",
        rating: 4.9,
        reviewCount: 1200,

        // =============================================
        // RANK BADGE DISPLAY SETTINGS
        // =============================================
        badgeSettings: {
            showOnProductCard: true,     // ← Show/hide rank badge on product cards (true/false)
            showOnDetailedReview: true   // ← Show/hide rank badge on detailed review cards (true/false)
        },
        
        // ========== UNIVERSAL TEMPLATE FIELDS ==========
        // Physical Products (default)
        price: "",
        originalPrice: "",
        discount: "",
        
        // Casino Websites
        welcomeBonus: "",
        welcomePackage: "",
        addedBonus: "",
        
        // Sports Betting
        signupBonus: "Rotating deposit matches and tournaments (see site)",
        oddsBoost: "",
        freeBet: "",
        
        // Software/SaaS
        monthlyPrice: "£166/month",
        yearlyPrice: "£1,999/year",
        trialPeriod: "14-day free trial",
        
        affiliateLink: "https://www.apple.com/uk/shop/buy-mac/macbook-pro/14-inch-m4-max",
        ctaText: "Buy Now",
        
        /*
        logoScale: {
            grid: 1.0,  // Scale for grid view (1.0 = 100%, 1.2 = 120%, etc.)
            list: 1.0   // Scale for list view
        }, */
        
        // Product image scaling settings for product cards
        imageScale: {
            grid: 1.0,       // Scale for product image in grid view
            list: 1.0        // Scale for product image in list view
        },
        
        // Product image positioning settings for product cards
        imagePositioning: {
            grid: {
                objectPosition: 'center',  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'cover'         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Logo positioning settings for product cards
        logoPositioning: {
            grid: {
                left: '0px',     // Horizontal positioning for grid view
                top: '0px'       // Vertical positioning for grid view
            },
            list: {
                left: '0px',     // Horizontal positioning for list view
                top: '0px'       // Vertical positioning for list view
            }
        },
        
        // Detailed review scaling settings
        detailedReviewScale: {
            productImage: 1.0,  // Scale for product image in detailed reviews
            productLogo: 2.0    // Scale for product logo in detailed reviews
        },
        
        // Detailed review positioning settings
        detailedReviewPositioning: {
            productLogo: {
                left: '0px',     // Horizontal positioning for detailed review logo
                top: '-0.5rem'       // Vertical positioning for detailed review logo
            },
            productImage: {
                left: '0px',           // Horizontal positioning for detailed review image
                top: '0px',            // Vertical positioning for detailed review image
                objectPosition: 'top left', // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'fill'     // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Product ranking and affiliate data
        rank: "1st",
        rankBadge: "EDITOR'S PICK",

        // CTA section configuration for detailed reviews
        cta: {
            title: "Test the waters: 0.002 BTC in",
            description: "Try a quick cashout before you scale.",
            boxInfo: "Min deposit examples: 0.002 BTC • confirm your asset network",
            // CTA box display controls
            display: {
                showTitle: false,        // Show/hide CTA title
                showDescription: false,  // Show/hide CTA description  
                showBoxInfo: false,      // Show/hide additional box info
                showPricingInfo: true   // Show/hide pricing info section
            }
        },
        
        // Features for product cards (short list) - LAPTOP FEATURES
        features: [
            { text: "M4 Max 16-Core CPU", icon: "fas fa-microchip" },
            { text: "40-Core GPU Performance", icon: "fas fa-desktop" },
            { text: "16-inch Liquid Retina XDR", icon: "fas fa-tv" },
            { text: "21-Hour Battery Life", icon: "fas fa-battery-full" },
            { text: "32GB Unified Memory", icon: "fas fa-memory" }
        ],
        
        // Detailed review content
        fullReview: {
            tagline: "The ultimate creative powerhouse with groundbreaking M4 Max performance",
            paragraphs: [
                "The MacBook Pro M4 Max represents the pinnacle of laptop technology. After extensive testing, we've confirmed this laptop offers performance that surpasses any other laptop in its class, making it our clear Editor's Choice.",
                "What makes this MacBook truly exceptional is its revolutionary M4 Max chip with 16-core CPU and 40-core GPU, delivering unprecedented performance for video editing, 3D rendering, and creative workflows that professionals demand.",
                "Our comprehensive testing confirmed the MacBook Pro M4 Max delivers unmatched performance, exceptional build quality, and industry-leading 21-hour battery life that exceeds all expectations for a high-performance laptop."
            ]
        },
        
        // Perks for product cards and detailed reviews - LAPTOP PERKS
        perks: [
            { text: "M4 Max Chip Performance", icon: "fas fa-rocket" },
            { text: "Premium Aluminum Build", icon: "fas fa-shield-alt" },
            { text: "Liquid Retina XDR Display", icon: "fas fa-tv" },
            { text: "21-Hour Battery Life", icon: "fas fa-battery-full" },
            { text: "Thunderbolt 5 Ports", icon: "fas fa-bolt" },
            { text: "Studio-Quality Mics", icon: "fas fa-microphone" },
            { text: "1080p FaceTime Camera", icon: "fas fa-camera" },
            { text: "AppleCare+ Available", icon: "fas fa-headset" }
        ],
        
        // Technical specifications - LAPTOP SPECS
        specifications: [
            { name: "Processor", value: "Apple M4 Max (16-core CPU, 40-core GPU)", icon: "fas fa-microchip" },
            { name: "Memory", value: "32GB unified memory, up to 128GB available", icon: "fas fa-memory" },
            { name: "Storage", value: "1TB SSD, configurable up to 8TB", icon: "fas fa-hdd" },
            { name: "Display", value: "16-inch Liquid Retina XDR, 120Hz ProMotion", icon: "fas fa-tv" },
            { name: "Battery", value: "100Wh lithium-polymer, up to 21 hours", icon: "fas fa-battery-full" },
            { name: "Connectivity", value: "Thunderbolt 5, HDMI, MagSafe 3, Wi-Fi 7", icon: "fas fa-wifi" }
        ]
    }
    
    // =============================================
    // HOW THE SYSTEM WORKS:
    // =============================================
    // 1. PRODUCT SELECTION: If useManualOverride = false, the system uses 
    //    the product specified in selectedProduct (e.g., 'product2')
    //    
    // 2. MANUAL OVERRIDE: If useManualOverride = true, the system uses
    //    the custom data from manualOverride object
    //    
    // 3. GOLD STYLING: The selected product gets gold gradient styling
    //    that overrides any theme, making it stand out as editor's choice
    //    
    // 4. SMART SCROLLING: The "Read Full Review" button automatically
    //    scrolls to the correct review section:
    //    - For product selection: scrolls to that product's review
    //    - For manual override: scrolls to special editor's choice review
    //    
    // 5. DYNAMIC REVIEW CARDS: If manual override is used, a special
    //    gold-themed review card is created automatically
    //    
    // EXAMPLES:
    // - selectedProduct: 'product1' → Uses product1 data, scrolls to review-1
    // - selectedProduct: 'product8' → Uses product8 data, scrolls to review-8  
    // - useManualOverride: true → Uses custom data, creates special review card
};

// Make EDITORS_CHOICE_CONFIG globally available
window.EDITORS_CHOICE_CONFIG = EDITORS_CHOICE_CONFIG;

// ========== PRODUCT DATA CONFIGURATION ==========
const PRODUCTS_CONFIG = {
    // Product 1 Configuration - #1 Ranked Gaming Laptop - ASUS ZenBook Pro 14 OLED
    product1: {
        name: "Stake",
        description: "Stake is a crypto-first sportsbook with slick UX, deep in-play markets and community features. It supports 20+ coins and is known for rapid crypto withdrawals and constant promos. Live streaming and Same Game Multi (bet builder) round out the product for high-tempo bettors.",
        productLogo: "./assets/images/casino_test/stake_text_logo_black.svg",     // Product logo for content area
        productImage: "./assets/images/sports-betting/stake_website.webp",          // Main product image for grid view and reviews
        logoScale: {
            grid: 1.3,    // Scale for grid view (1.0 = 100%, 1.2 = 120%, etc.)
            list: 1.0,    // Scale for list view
            tablet: {
                grid: 1.0,  // Scale for tablet grid view
                list: 0.5   // Scale for tablet list view
            }
        },
        
        // Product image scaling settings for product cards
        imageScale: {
            grid: 1.0,       // Scale for product image in grid view
            list: 1.0        // Scale for product image in list view
        },
        
        // Product image positioning settings for product cards
        imagePositioning: {
            grid: {
                objectPosition: 'top left',  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'cover'         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Logo positioning settings for product cards
        logoPositioning: {
            grid: {
                left: '0px',     // Horizontal positioning for grid view
                top: '0px'       // Vertical positioning for grid view
            },
            list: {
                left: '0px',     // Horizontal positioning for list view
                top: '0px'       // Vertical positioning for list view
            }
        },
        
        // Detailed review scaling settings
        detailedReviewScale: {
            productImage: 1.0,  // Scale for product image in detailed reviews
            productLogo: 1.0    // Scale for product logo in detailed reviews
        },
        
        // Detailed review positioning settings
        detailedReviewPositioning: {
            productLogo: {
                left: '0px',     // Horizontal positioning for detailed review logo
                top: '-0.5rem'   // Vertical positioning for detailed review logo
            },
            productImage: {
                left: '0px',           // Horizontal positioning for detailed review image
                top: '0px',            // Vertical positioning for detailed review image
                objectPosition: 'top left', // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'cover'     // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Product ranking and affiliate data
        rank: 1,
        rankBadge: "BEST UX",
        rating: 4.8,
        reviewCount: 3156,
        
        // =============================================
        // RANK BADGE DISPLAY SETTINGS
        // =============================================
        badgeSettings: {
            showOnProductCard: true,     // ← Show/hide rank badge on product cards (true/false)
            showOnDetailedReview: true   // ← Show/hide rank badge on detailed review cards (true/false)
        },
        
        // ========== UNIVERSAL TEMPLATE FIELDS ==========
        // Physical Products (default)
        price: "",
        originalPrice: "",
        discount: "",
        
        // Casino Websites
        welcomeBonus: "",
        welcomePackage: "",
        addedBonus: "",
        
        // Sports Betting
        signupBonus: "Prize Pools, Free Swings, and Raffles",
        oddsBoost: "Price Boosts",
        freeBet: "Decision Insurance and Money Back Offers",
        
        affiliateLink: "https://stake.com/",
        ctaText: "Bet Now",
        
        // CTA section configuration for detailed reviews
        cta: {
            title: "Bet live in seconds—go crypto-fast.",
            description: "36+ Sports Markets",
            boxInfo: "20+ coins supported • fast withdrawals • 24/7 live chat",
            // CTA box display controls
            display: {
                showTitle: false,        // Show/hide CTA title
                showDescription: false,  // Show/hide CTA description  
                showBoxInfo: false,      // Show/hide additional box info
                showPricingInfo: true   // Show/hide pricing info section
            }
        },
        
        // Features for product cards (short list)
        features: [
            { text: "20+ cryptocurrencies supported", icon: "fas fa-coins" },
            { text: "Live betting hub + streaming", icon: "fas fa-broadcast-tower" },
            { text: "Same Game Multi (bet builder)", icon: "fas fa-project-diagram" },
            { text: "Crypto-native cashier", icon: "fas fa-wallet" },
            { text: "24/7 live chat & help center", icon: "fas fa-headset" }
        ],
        
        // Detailed review content
        fullReview: {
            tagline: "Crypto-Native Powerhouse",
            paragraphs: [
                "Stake's interface is among the cleanest in crypto betting, with quick bet placement and an in-play console that updates smoothly. The Same Game Multi execution is reliable and pairs well with live streaming for select leagues.",
                "Banking is the superpower: support for more than twenty coins means you can optimize fees and speed by network. The help center covers limits and features, and support is 24/7.",
                "Pricing is competitive on major markets with broad props. The site is stable during peak events and cashout behavior is consistent. Promos change—always read terms and confirm availability in your region."
            ]
        },
        
        // Perks for product cards and detailed reviews - Simple format: text + icon
        perks: [
            { text: "Fast crypto withdrawals", icon: "fas fa-bolt" },
            { text: "Wide coin choice", icon: "fas fa-coins" },
            { text: "Live streams on select events", icon: "fas fa-video" },
            { text: "Bet builder (Same Game)", icon: "fas fa-sitemap" },
            { text: "Active promos & VIP", icon: "fas fa-gift" },
            { text: "Responsible gambling tools", icon: "fas fa-life-ring" },
            { text: "Responsive mobile site", icon: "fas fa-mobile-alt" },
            { text: "Global sports menu", icon: "fas fa-globe" }
        ],
        
        // Technical specifications - Simple format: name + value + icon
        specifications: [
            { name: "License", value: "Multiple licenses incl. Curaçao (see official page)", icon: "fas fa-id-badge" },
            { name: "Currencies", value: "20+ cryptocurrencies", icon: "fas fa-coins" },
            { name: "Features", value: "Live streaming; Same Game Multi; broad in-play", icon: "fas fa-stream" },
            { name: "Support", value: "24/7 live chat & help center", icon: "fas fa-headset" },
            { name: "Limits/Controls", value: "Betting limits & RG tools", icon: "fas fa-sliders-h" }
        ]
    },
    
    // Product 2 Configuration - Cloudbet — High Limits & 40+ Coins
    product2: {
        name: "Cloudbet",
        description: "Launched in 2013, Cloudbet is a stalwart of crypto betting with high max stakes (and even no-limit on some main markets), wide sport coverage, and a polished live section. Supports 40+ cryptocurrencies.",
        productLogo: "./assets/images/sports-betting/cloudbet_logo.png",
        productImage: "./assets/images/sports-betting/cloudbet_website.png",
        logoScale: {
            grid: 3.5,
            list: 2.5,
            tablet: {
                grid: 3.0,  // Scale for tablet grid view
                list: 1.8   // Scale for tablet list view
            }
        },
        
        // Product image scaling settings for product cards
        imageScale: {
            grid: 1.0,       // Scale for product image in grid view
            list: 1.0        // Scale for product image in list view
        },
        
        // Product image positioning settings for product cards
        imagePositioning: {
            grid: {
                objectPosition: 'top left',  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'cover'         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Logo positioning settings for product cards
        logoPositioning: {
            grid: {
                left: '0px',    // Horizontal positioning for grid view
                top: '0rem'    // Vertical positioning for grid view
            },
            list: {
                left: '0px',     // Horizontal positioning for list view
                top: '0rem'       // Vertical positioning for list view
            }
        },
        
        // Detailed review scaling settings
        detailedReviewScale: {
            productImage: 1.0,  // Scale for product image in detailed reviews
            productLogo: 3.0    // Scale for product logo in detailed reviews
        },
        
        // Detailed review positioning settings
        detailedReviewPositioning: {
            productLogo: {
                left: '0px',    // Horizontal positioning for detailed review logo
                top: '-0.25rem'   // Vertical positioning for detailed review logo
            },
            productImage: {
                left: '0px',           // Horizontal positioning for detailed review image
                top: '0px',            // Vertical positioning for detailed review image
                objectPosition: 'top left', // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'cover'     // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Product ranking and affiliate data
        rank: 2,
        rankBadge: "HIGH LIMITS",
        rating: 4.7,
        reviewCount: 2156,
        
        // =============================================
        // RANK BADGE DISPLAY SETTINGS
        // =============================================
        badgeSettings: {
            showOnProductCard: true,     // ← Show/hide rank badge on product cards (true/false)
            showOnDetailedReview: true   // ← Show/hide rank badge on detailed review cards (true/false)
        },
        
        // ========== UNIVERSAL TEMPLATE FIELDS ==========
        // Physical Products (default)
        price: "",
        originalPrice: "",
        discount: "",
        
        // Casino Websites
        welcomeBonus: "",
        welcomePackage: "",
        addedBonus: "",
        
        // Sports Betting
        signupBonus: "Up to $2,500 cash rewards and 10% rakeback",
        oddsBoost: "Loyalty Rewards",
        freeBet: "No Rollover Requirements",
        
        affiliateLink: "https://www.cloudbet.com/",
        ctaText: "Bet Now",
        
        // CTA section configuration for detailed reviews
        cta: {
            title: "Unlock big limits with 40+ coins",
            description: "Request higher limits; polished live betting and esports.",
            boxInfo: "28+ Sports Markets",
            // CTA box display controls
            display: {
                showTitle: false,        // Show/hide CTA title
                showDescription: false,  // Show/hide CTA description  
                showBoxInfo: false,      // Show/hide additional box info
                showPricingInfo: true   // Show/hide pricing info section
            }
        },
        
        // Features for product cards (short list)
        features: [
            { text: "40+ cryptocurrencies supported", icon: "fas fa-coins" },
            { text: "High-limit sportsbook (some no-limit markets)", icon: "fas fa-chart-line" },
            { text: "Strong in-play with polished UI", icon: "fas fa-stopwatch" },
            { text: "Esports & virtuals available", icon: "fas fa-gamepad" },
            { text: "Request higher limits via support", icon: "fas fa-headset" }
        ],
        
        // Detailed review content
        fullReview: {
            tagline: "Serious limits for serious bettors.",
            paragraphs: [
                "Cloudbet's value is scale: liquidity is reliable on top leagues, and the platform tolerates bigger action than most crypto peers. Limit policies and the option to request higher caps are compelling for sharp and casual bettors alike.",
                "The cashier accepts 40+ coins—one of the broadest menus in the segment. Navigation is classic sportsbook with strong coverage and a functional live console; esports and virtuals add off‑peak volume.",
                "Watch outs: bonus mechanics and geo restrictions vary; licensing is Curaçao (not UKGC). For limits + coin flexibility, Cloudbet is elite—read terms and confirm availability."
            ]
        },
        
        // Perks for product cards and detailed reviews
        perks: [
            { text: "Large welcome ceiling", icon: "fas fa-gift" },
            { text: "High-limit markets", icon: "fas fa-bullseye" },
            { text: "Quick crypto banking", icon: "fas fa-bolt" },
            { text: "Veteran brand since 2013", icon: "fas fa-shield-alt" },
            { text: "Responsive support for limit requests", icon: "fas fa-headset" },
            { text: "Esports & virtuals coverage", icon: "fas fa-gamepad" },
            { text: "Mobile-optimized site", icon: "fas fa-mobile-alt" },
            { text: "Polished live section", icon: "fas fa-stream" }
        ],
        
        // Technical specifications
        specifications: [
            { name: "License", value: "Curaçao Gaming Authority", icon: "fas fa-id-badge" },
            { name: "Currencies", value: "40+ cryptocurrencies (BTC, ETH, USDT, etc.)", icon: "fas fa-coins" },
            { name: "Limits", value: "High max stakes; some markets no‑limit; request higher caps", icon: "fas fa-chart-line" },
            { name: "Features", value: "Strong in‑play, esports & virtuals, mobile‑optimized", icon: "fas fa-stopwatch" },
            { name: "Welcome", value: "Up to $2,5000 cash rewards and 10% rakeback", icon: "fas fa-gift" }
        ]
    },
    
    // Product 3 Configuration - Sportsbet.io — Feature-Rich & Club Partnerships
    product3: {
        name: "Sportsbet.io",
        description: "Sportsbet.io blends crypto banking with a deep features suite: Price Boost, Cash Out, and bet builders, alongside a busy promo calendar. Licensed in Curaçao and operated by mBet Solutions N.V. (Yolo Group).",
        productLogo: "./assets/images/sports-betting/sportsbet.io_logo.png",
        productImage: "./assets/images/sports-betting/sportsbet.io_website.png",
        logoScale: {
            grid: 4.0,
            list: 2.5,
            tablet: {
                grid: 3.0,  // Scale for tablet grid view
                list: 1.2   // Scale for tablet list view
            }
        },
        
        // Product image scaling settings for product cards
        imageScale: {
            grid: 1.0,       // Scale for product image in grid view
            list: 1.0        // Scale for product image in list view
        },
        
        // Product image positioning settings for product cards
        imagePositioning: {
            grid: {
                objectPosition: 'top left',  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'cover'         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Logo positioning settings for product cards
        logoPositioning: {
            grid: {
                left: '0px',     // Horizontal positioning for grid view
                top: '0rem'       // Vertical positioning for grid view
            },
            list: {
                left: '0px',     // Horizontal positioning for list view
                top: '0px'       // Vertical positioning for list view
            }
        },
        
        // Detailed review scaling settings
        detailedReviewScale: {
            productImage: 1.0,  // Scale for product image in detailed reviews
            productLogo: 2.5    // Scale for product logo in detailed reviews
        },
        
        // Detailed review positioning settings
        detailedReviewPositioning: {
            productLogo: {
                left: '0px',     // Horizontal positioning for detailed review logo
                top: '-0.25rem'       // Vertical positioning for detailed review logo
            },
            productImage: {
                left: '0px',           // Horizontal positioning for detailed review image
                top: '0px',            // Vertical positioning for detailed review image
                objectPosition: 'top left', // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'fill'     // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Product ranking and affiliate data
        rank: 3,
        rankBadge: "FEATURE SET",
        rating: 4.6,
        reviewCount: 1843,
        
        // =============================================
        // RANK BADGE DISPLAY SETTINGS
        // =============================================
        badgeSettings: {
            showOnProductCard: false,     // ← Show/hide rank badge on product cards (true/false)
            showOnDetailedReview: false   // ← Show/hide rank badge on detailed review cards (true/false)
        },
        
        // ========== UNIVERSAL TEMPLATE FIELDS ==========
        // Physical Products (default)
        price: "",
        originalPrice: "",
        discount: "",
        
        // Casino Websites
        welcomeBonus: "",
        welcomePackage: "",
        addedBonus: "",
        
        // Sports Betting
        signupBonus: "10% Cashback on selected sports markets",
        oddsBoost: "Multiple Prize Pools",
        freeBet: "Weekly Free Bets",
        
        affiliateLink: "https://sportsbet.io/",
        ctaText: "Bet Now",
        
        // CTA section configuration for detailed reviews
        cta: {
            title: "Boost your odds & cash out on your terms",
            description: "Modern crypto cashier with builders and Price Boosts.",
            boxInfo: "Club partnerships; certificate-backed license",
            // CTA box display controls - Example with some elements hidden
            display: {
                showTitle: false,         // Show CTA title
                showDescription: false,  // Hide CTA description  
                showBoxInfo: false,       // Show additional box info
                showPricingInfo: true   // Hide pricing info section
            }
        },
        
        // Features for product cards (short list)
        features: [
            { text: "Cash Out guides & Price Boost", icon: "fas fa-bolt" },
            { text: "Bet builder + esports focus", icon: "fas fa-project-diagram" },
            { text: "Crypto onboarding with network tips", icon: "fas fa-wallet" },
            { text: "Rotating promos (no static welcome bonus)", icon: "fas fa-gift" },
            { text: "Club partnerships (e.g., Newcastle)", icon: "fas fa-futbol" }
        ],
        
        // Detailed review content
        fullReview: {
            tagline: "Feature-Rich & Club Partnerships",
            paragraphs: [
                "Sportsbet.io stands out for feature depth. Cash Out is widely available and documented; Price Boost adds value on match days; builders are smooth. The live interface handles congestion well.",
                "Crypto onboarding is straightforward with clear coin/network guidance. The brand leans on ongoing promos rather than a single welcome—good for frequent bettors hunting boosts.",
                "Keep in mind Trustpilot sentiment is mixed and licensing is Curaçao—read terms, confirm KYC flows. For tools + promos + crypto, it's a highly usable all‑rounder."
            ]
        },
        
        // Perks for product cards and detailed reviews
        perks: [
            { text: "Regular promos over static welcome", icon: "fas fa-gift" },
            { text: "Cash Out availability", icon: "fas fa-sign-out-alt" },
            { text: "Price Boost features", icon: "fas fa-bolt" },
            { text: "Clubhouse/community", icon: "fas fa-users" },
            { text: "Modern, uncluttered design", icon: "fas fa-check" },
            { text: "Esports coverage", icon: "fas fa-gamepad" },
            { text: "Mobile-first site", icon: "fas fa-mobile-alt" },
            { text: "License certificate link", icon: "fas fa-id-badge" }
        ],
        
        // Technical specifications
        specifications: [
            { name: "License", value: "Curaçao (certificate link available)", icon: "fas fa-id-badge" },
            { name: "Currencies", value: "BTC, USDT and others; ERC‑20 supported", icon: "fas fa-coins" },
            { name: "Features", value: "Cash Out; Price Boost; Builders; Clubhouse", icon: "fas fa-bolt" },
            { name: "Promotions", value: "Rotating sports/casino promos (no static welcome)", icon: "fas fa-gift" },
            { name: "Partnerships", value: "Newcastle United, São Paulo, etc.", icon: "fas fa-futbol" }
        ]
    },
    
    // Product 4 Configuration - Lucky Block — Huge Welcome, Big Markets
    product4: {
        name: "Lucky Block",
        description: "Lucky Block delivers a combined casino + sportsbook with 10–12+ cryptos supported, card on‑ramps, and weekly promos. Reviews highlight an Anjouan license (and Curaçao references) and large market coverage with third‑party odds providers.",
        productLogo: "./assets/images/casino_test/luckyblock_text_logo_black.webp",
        productImage: "./assets/images/sports-betting/luckyblock_website.png",
        logoScale: {
            grid: 3.1,
            list: 2.3,
            tablet: {
                grid: 2.5,  // Scale for tablet grid view
                list: 1.2   // Scale for tablet list view
            }
        },
        
        // Product image scaling settings for product cards
        imageScale: {
            grid: 1.0,       // Scale for product image in grid view
            list: 1.0        // Scale for product image in list view
        },
        
        // Product image positioning settings for product cards
        imagePositioning: {
            grid: {
                objectPosition: 'top left',  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'cover'         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Logo positioning settings for product cards
        logoPositioning: {
            grid: {
                left: '0px',     // Horizontal positioning for grid view
                top: '0rem'      // Vertical positioning for grid view
            },
            list: {
                left: '0px',     // Horizontal positioning for list view
                top: '0rem'      // Vertical positioning for list view
            }
        },
        
        // Detailed review scaling settings
        detailedReviewScale: {
            productImage: 1.0,  // Scale for product image in detailed reviews
            productLogo: 2.4    // Scale for product logo in detailed reviews
        },
        
        // Detailed review positioning settings
        detailedReviewPositioning: {
            productLogo: {
                left: '0px',     // Horizontal positioning for detailed review logo
                top: '-0.25rem'      // Vertical positioning for detailed review logo
            },
            productImage: {
                left: '0px',           // Horizontal positioning for detailed review image
                top: '0px',            // Vertical positioning for detailed review image
                objectPosition: 'top left', // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'fill'     // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Product ranking and affiliate data
        rank: 4,
        rankBadge: "MEGA BONUS",
        rating: 4.5,
        reviewCount: 1967,

        // =============================================
        // RANK BADGE DISPLAY SETTINGS
        // =============================================
        badgeSettings: {
            showOnProductCard: true,     // ← Show/hide rank badge on product cards (true/false)
            showOnDetailedReview: true   // ← Show/hide rank badge on detailed review cards (true/false)
        },
        
        // ========== UNIVERSAL TEMPLATE FIELDS ==========
        // Physical Products (default)
        price: "",
        originalPrice: "",
        discount: "",
        
        // Casino Websites
        welcomeBonus: "",
        welcomePackage: "",
        addedBonus: "",
        
        // Sports Betting
        signupBonus: "200% up to €25,000 + 50 FS",
        oddsBoost: "Weekly €2,500 Football Tournament",
        freeBet: "Mid Week 40% Bonus Missions",
        
        affiliateLink: "https://luckyblock.com/",
        ctaText: "Bet Now",
        
        // CTA section configuration for detailed reviews
        cta: {
            title: "Go big: 200% to €25k",
            description: "Crypto + cards; live betting across thousands of markets.",
            boxInfo: "€20 min deposit typical for welcome eligibility",
            // CTA box display controls
            display: {
                showTitle: false,        // Show/hide CTA title
                showDescription: false,  // Show/hide CTA description  
                showBoxInfo: false,      // Show/hide additional box info
                showPricingInfo: true   // Show/hide pricing info section
            }
        },
        
        // Features for product cards (short list)
        features: [
            { text: "Very large welcome ceiling", icon: "fas fa-gift" },
            { text: "Crypto + card deposits (on‑ramp)", icon: "fas fa-credit-card" },
            { text: "Live betting across thousands of markets", icon: "fas fa-stopwatch" },
            { text: "Weekly reloads & cashbacks", icon: "fas fa-sync" },
            { text: "Mobile‑ready sportsbook UI", icon: "fas fa-mobile-alt" }
        ],
        
        // Detailed review content
        fullReview: {
            tagline: "Big Bonuses, Big Markets.",
            paragraphs: [
                "Lucky Block's 200% up to €25k + 50 FS headline is gigantic for bankroll builders, and the blend of crypto + card payments lowers onboarding friction for new bettors.",
                "Market coverage is robust via third‑party odds providers, and weekly reloads/cashbacks keep value flowing. The site is mobile‑ready and supports multiple languages.",
                "Risk context: independent indices vary (e.g., low Safety Index and withdrawal caps cited by reviewers). Always read bonus release steps and test a small withdrawal before scaling."
            ]
        },
        
        // Perks for product cards and detailed reviews
        perks: [
            { text: "Flexible payments (12 cryptos + cards)", icon: "fas fa-wallet" },
            { text: "Large casino catalog (4,500+ games)", icon: "fas fa-dice" },
            { text: "Buy crypto on‑site via partners", icon: "fas fa-shopping-cart" },
            { text: "Competitive odds providers", icon: "fas fa-percentage" },
            { text: "Frequent tournaments & promos", icon: "fas fa-trophy" },
            { text: "Multi‑language 24/7 support", icon: "fas fa-headset" },
            { text: "Mobile friendly", icon: "fas fa-mobile-alt" },
            { text: "Transparent payment pages", icon: "fas fa-file-alt" }
        ],
        
        // Technical specifications
        specifications: [
            { name: "License", value: "Anjouan (with Curaçao references in reviews)", icon: "fas fa-id-badge" },
            { name: "Payments", value: "~12 cryptos + Visa/Mastercard on‑ramp", icon: "fas fa-credit-card" },
            { name: "Limits", value: "€4k/day, €10k/week, €20k/month", icon: "fas fa-sliders-h" },
            { name: "Welcome", value: "200% up to €25,000 + 50 FS", icon: "fas fa-gift" },
            { name: "Coverage", value: "Odds via leading providers; live markets", icon: "fas fa-stopwatch" }
        ]
    },
    
    // Product 5 Configuration - Shuffle — Deep Crypto Support, Modern UX
    product5: {
        name: "Shuffle",
        description: "Shuffle blends a modern UI with heavy crypto coverage—the help center lists 20+ assets for deposits/withdrawals. Promos span sportsbook and casino, with MoonPay/Swapped on‑ramps for card and mobile wallet users.",
        productLogo: "./assets/images/casino_test/shuffle_text_logo_black.webp",
        productImage: "./assets/images/sports-betting/shuffle_website.png",
        logoScale: {
            grid: 3.0,
            list: 2.0,
            tablet: {
                grid: 2.5,  // Scale for tablet grid view
                list: 1.0   // Scale for tablet list view
            }
        },
        
        // Product image scaling settings for product cards
        imageScale: {
            grid: 1.0,       // Scale for product image in grid view
            list: 1.0        // Scale for product image in list view
        },
        
        // Product image positioning settings for product cards
        imagePositioning: {
            grid: {
                objectPosition: 'top left',  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'cover'         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Logo positioning settings for product cards
        logoPositioning: {
            grid: {
                left: '0px',     // Horizontal positioning for grid view
                top: '0rem'      // Vertical positioning for grid view
            },
            list: {
                left: '0px',     // Horizontal positioning for list view
                top: '0rem'      // Vertical positioning for list view
            }
        },
        
        // Detailed review scaling settings
        detailedReviewScale: {
            productImage: 1.0,  // Scale for product image in detailed reviews
            productLogo: 2.3    // Scale for product logo in detailed reviews
        },
        
        // Detailed review positioning settings
        detailedReviewPositioning: {
            productLogo: {
                left: '0px',     // Horizontal positioning for detailed review logo
                top: '-0.25rem'      // Vertical positioning for detailed review logo
            },
            productImage: {
                left: '0px',           // Horizontal positioning for detailed review image
                top: '0px',            // Vertical positioning for detailed review image
                objectPosition: 'top left', // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'cover'     // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Product ranking and affiliate data
        rank: 5,
        rankBadge: "COIN CHOICES",
        rating: 4.4,
        reviewCount: 1654,

        // =============================================
        // RANK BADGE DISPLAY SETTINGS
        // =============================================
        badgeSettings: {
            showOnProductCard: false,     // ← Show/hide rank badge on product cards (true/false)
            showOnDetailedReview: false   // ← Show/hide rank badge on detailed review cards (true/false)
        },
        
        // ========== UNIVERSAL TEMPLATE FIELDS ==========
        // Physical Products (default)
        price: "",
        originalPrice: "",
        discount: "",
        
        // Casino Websites
        welcomeBonus: "",
        welcomePackage: "",
        addedBonus: "",
        
        // Sports Betting
        signupBonus: "100% Deposit Bonus up to $1,000",
        oddsBoost: "Level-up rewards, Reload and Recent Play Bonuses",
        freeBet: "Prize Pools, Bonus Boosts, and Tournaments",
        
        affiliateLink: "https://shuffle.com/",
        ctaText: "Bet Now",
        
        // CTA section configuration for detailed reviews
        cta: {
            title: "Pick your chain, place your bet",
            description: "20+ assets supported",
            boxInfo: "100% up to $1,000",
            // CTA box display controls
            display: {
                showTitle: false,        // Show/hide CTA title
                showDescription: false,  // Show/hide CTA description  
                showBoxInfo: false,      // Show/hide additional box info
                showPricingInfo: true   // Show/hide pricing info section
            }
        },
        
        // Features for product cards (short list)
        features: [
            { text: "20+ coins & tokens supported", icon: "fas fa-coins" },
            { text: "Loyalty Rewards", icon: "fas fa-award" },
            { text: "Sports + casino unified wallet", icon: "fas fa-dice" },
            { text: "Regular promos", icon: "fas fa-gift" },
            { text: "Modern, fast UI", icon: "fas fa-mobile-alt" }
        ],
        
        // Detailed review content
        fullReview: {
            tagline: "Every sport. Every market. Total support. Next-gen UX",
            paragraphs: [
                "Shuffle's supported‑assets page is one of the widest in the niche—ideal if you distribute balances across chains and want to avoid bridging fees.",
                "Onboarding is smoothed by MoonPay/Swapped on‑ramps for cards and mobile wallets. Promos rotate across sportsbook and casino; the UI is quick and tidy.",
                "Terms matter: 100% welcome deposit bonus up to $1,000 often carry ~35x rollover. Complete KYC early, verify limits, and confirm network before large withdrawals."
            ]
        },
        
        // Perks for product cards and detailed reviews
        perks: [
            { text: "Fast on‑chain withdrawals", icon: "fas fa-bolt" },
            { text: "Wallet flexibility (ERC20/TRC20/SOL/POL)", icon: "fas fa-project-diagram" },
            { text: "100% deposit bonus up to $1,000", icon: "fas fa-gift" },
            { text: "Global language reach", icon: "fas fa-globe" },
            { text: "Active complaint resolution logs", icon: "fas fa-clipboard-check" },
            { text: "Unified wallet across products", icon: "fas fa-dice" },
            { text: "Mobile responsive", icon: "fas fa-mobile-alt" },
            { text: "On‑site purchase options", icon: "fas fa-shopping-cart" }
        ],
        
        // Technical specifications
        specifications: [
            { name: "License", value: "Curacao/Antillephone framework (brand under Natural Nine noted)", icon: "fas fa-id-badge" },
            { name: "Assets", value: "20+ supported (BTC, ETH, USDT/USDC, SOL, XRP, DOGE, BNB, AVAX, TON, etc.)", icon: "fas fa-coins" },
            { name: "On‑ramp", value: "MoonPay & Swapped integrations", icon: "fas fa-credit-card" },
            { name: "Welcome", value: "100% Deposit Bonus up to $1,000", icon: "fas fa-gift" },
            { name: "Safety", value: "~7.2/10 Safety Index in complaint pages (reviewer refs)", icon: "fas fa-shield-alt" }
        ]
    },
    
    // Product 6 Configuration - Thunderpick — Esports-Led, Crypto-Only
    product6: {
        name: "Thunderpick",
        description: "Thunderpick is a crypto sportsbook with deep esports menus plus mainstream sports. Licensed by the Curaçao Gaming Authority (active certificate).",
        productLogo: "./assets/images/sports-betting/thunderpick_logo.png",
        productImage: "./assets/images/sports-betting/thunderpick_website.png",
        logoScale: {
            grid: 2.5,
            list: 2.0,
            tablet: {
                grid: 2.3,  // Scale for tablet grid view
                list: 0.8   // Scale for tablet list view
            }
        },
        
        // Product image scaling settings for product cards
        imageScale: {
            grid: 1.0,       // Scale for product image in grid view
            list: 1.0        // Scale for product image in list view
        },
        
        // Product image positioning settings for product cards
        imagePositioning: {
            grid: {
                objectPosition: 'top left',  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'cover'         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Logo positioning settings for product cards
        logoPositioning: {
            grid: {
                left: '0px',     // Horizontal positioning for grid view
                top: '0rem'      // Vertical positioning for grid view
            },
            list: {
                left: '0px',     // Horizontal positioning for list view
                top: '0rem'      // Vertical positioning for list view
            }
        },
        
        // Detailed review scaling settings
        detailedReviewScale: {
            productImage: 1.0,  // Scale for product image in detailed reviews
            productLogo: 2.0    // Scale for product logo in detailed reviews
        },
        
        // Detailed review positioning settings
        detailedReviewPositioning: {
            productLogo: {
                left: '0px',     // Horizontal positioning for detailed review logo
                top: '-0.25rem'      // Vertical positioning for detailed review logo
            },
            productImage: {
                left: '0px',           // Horizontal positioning for detailed review image
                top: '0px',            // Vertical positioning for detailed review image
                objectPosition: 'top left', // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'cover'     // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Product ranking and affiliate data
        rank: 6,
        rankBadge: "ESPORTS",
        rating: 4.3,
        reviewCount: 1245,

        // =============================================
        // RANK BADGE DISPLAY SETTINGS
        // =============================================
        badgeSettings: {
            showOnProductCard: true,     // ← Show/hide rank badge on product cards (true/false)
            showOnDetailedReview: true   // ← Show/hide rank badge on detailed review cards (true/false)
        },
        
        // ========== UNIVERSAL TEMPLATE FIELDS ==========
        // Physical Products (default)
        price: "",
        originalPrice: "",
        discount: "",
        
        // Casino Websites
        welcomeBonus: "",
        welcomePackage: "",
        addedBonus: "",
        
        // Sports Betting
        signupBonus: "100% Welcome Bonus up to €600",
        oddsBoost: "€8,000 in Weekly Giveaways.",
        freeBet: "€4,000 Races",
        
        affiliateLink: "https://www.thunderpick.io/",
        ctaText: "Bet Now",
        
        // CTA section configuration for detailed reviews
        cta: {
            title: "Load crypto, lock a 100% boost",
            description: "Esports-first markets with modern crypto cashier.",
            boxInfo: "100% Welcome Bonus up to €600",
            // CTA box display controls
            display: {
                showTitle: false,        // Show/hide CTA title
                showDescription: false,  // Show/hide CTA description  
                showBoxInfo: false,      // Show/hide additional box info
                showPricingInfo: true   // Show/hide pricing info section
            }
        },
        
        // Features for product cards (short list)
        features: [
            { text: "Esports coverage (20+ titles)", icon: "fas fa-gamepad" },
            { text: "Live betting + contests", icon: "fas fa-stopwatch" },
            { text: "Crypto-only cashier", icon: "fas fa-wallet" },
            { text: "Frequent reloads/prize pools", icon: "fas fa-gift" },
            { text: "Mobile site (no native app)", icon: "fas fa-mobile-alt" }
        ],
        
        // Detailed review content
        fullReview: {
            tagline: "Built for esports, ready for sports.",
            paragraphs: [
                "Thunderpick's esports coverage is standout, with rapid in‑play pricing and wide title support. The UI is lean and fast, and the cashier focuses on crypto for quick deposits.",
                "Regular reloads and community contests keep volume flowing beyond the welcome. The lack of a native app isn't a deal‑breaker—the mobile site is solid.",
                "Downsides: public reviews are mixed and live streaming is limited. For esports + crypto, Thunderpick earns a spot."
            ]
        },
        
        // Perks for product cards and detailed reviews
        perks: [
            { text: "Low min deposits (some methods)", icon: "fas fa-level-down-alt" },
            { text: "Esports depth", icon: "fas fa-gamepad" },
            { text: "Ongoing contests", icon: "fas fa-trophy" },
            { text: "Quick signup", icon: "fas fa-check" },
            { text: "CGA certificate‑verified", icon: "fas fa-id-badge" },
            { text: "Crypto-only banking", icon: "fas fa-coins" },
            { text: "Modern UI", icon: "fas fa-desktop" },
            { text: "Reload cadence", icon: "fas fa-sync" }
        ],
        
        // Technical specifications
        specifications: [
            { name: "License", value: "CGA certificate (active)", icon: "fas fa-id-badge" },
            { name: "Welcome", value: "100% up to $600 • 10x (reviewers)", icon: "fas fa-gift" },
            { name: "Esports", value: "20+ titles covered", icon: "fas fa-gamepad" },
            { name: "App", value: "No native app; mobile site only", icon: "fas fa-mobile-alt" },
            { name: "Sentiment", value: "Mixed public reviews", icon: "fas fa-comment" }
        ]
    },
    
    // Product 7 Configuration - BC.Game — Huge Coin Menu & Tiered Bonuses
    product7: {
        name: "BC.Game",
        description: "Crypto-only casino + sportsbook with an unusually large coin list and frequent tiered deposit offers. Operated under Curaçao framework; reviewers note extensive coin/network support.",
        productLogo: "./assets/images/casino_test/bc.game_text_logo_black.png",
        productImage: "./assets/images/sports-betting/bc.game_website.png",
        logoScale: {
            grid: 2.5,
            list: 2.0,
            tablet: {
                grid: 2.0,  // Scale for tablet grid view
                list: 1.0   // Scale for tablet list view
            }
        },
        
        // Product image scaling settings for product cards
        imageScale: {
            grid: 1.0,       // Scale for product image in grid view
            list: 1.0        // Scale for product image in list view
        },
        
        // Product image positioning settings for product cards
        imagePositioning: {
            grid: {
                objectPosition: 'top left',  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'fill'         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },

        // Logo positioning settings for product cards
        logoPositioning: {
            grid: {
                left: '0px',     // Horizontal positioning for grid view
                top: '0rem'      // Vertical positioning for grid view
            },
            list: {
                left: '0px',     // Horizontal positioning for list view
                top: '0rem'      // Vertical positioning for list view
            }
        },
        
        // Detailed review scaling settings
        detailedReviewScale: {
            productImage: 1.0,  // Scale for product image in detailed reviews
            productLogo: 2.0    // Scale for product logo in detailed reviews
        },

        // Detailed review positioning settings
        detailedReviewPositioning: {
            productLogo: {
                left: '0px',     // Horizontal positioning for detailed review logo
                top: '-0.25rem'      // Vertical positioning for detailed review logo
            },
            productImage: {
                left: '0px',           // Horizontal positioning for detailed review image
                top: '0px',            // Vertical positioning for detailed review image
                objectPosition: 'top left', // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'fill'     // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Product ranking and affiliate data
        rank: 7,
        rankBadge: "Betting Insights",
        rating: 4.3,
        reviewCount: 1876,

        // =============================================
        // RANK BADGE DISPLAY SETTINGS
        // =============================================
        badgeSettings: {
            showOnProductCard: false,     // ← Show/hide rank badge on product cards (true/false)
            showOnDetailedReview: false   // ← Show/hide rank badge on detailed review cards (true/false)
        },
        
        // ========== UNIVERSAL TEMPLATE FIELDS ==========
        // Physical Products (default)
        price: "",
        originalPrice: "",
        discount: "",
        
        // Casino Websites
        welcomeBonus: "",
        welcomePackage: "",
        addedBonus: "",
        
        // Sports Betting
        signupBonus: "Multi‑tier welcome bonuses up to 150% Bonus + 20FB",
        oddsBoost: "Weekly Raffle and Daily Contests",
        freeBet: "Extra 80% Bonus + 5 Free Bet in Sports",
        
        affiliateLink: "https://bc.game/",
        ctaText: "Bet Now",
        
        // CTA section configuration for detailed reviews
        cta: {
            title: "Multi‑tier welcome bonuses up to 150% Bonus + 20FB",
            description: "50–100+ coins and networks incl. stables.",
            boxInfo: "Extra 80% Bonus + 5 Free Bet in Sports",
            // CTA box display controls
            display: {
                showTitle: false,        // Show/hide CTA title
                showDescription: false,  // Show/hide CTA description  
                showBoxInfo: false,      // Show/hide additional box info
                showPricingInfo: true   // Show/hide pricing info section
            }
        },
        
        // Features for product cards (short list)
        features: [
            { text: "50–100+ cryptocurrencies supported", icon: "fas fa-coins" },
            { text: "Sportsbook + casino hub", icon: "fas fa-dice" },
            { text: "Quests/loyalty + cashback", icon: "fas fa-gift" },
            { text: "Sports Betting Insights, Trends, & Predictions ", icon: "fas fa-chart-line" },
            { text: "Guides and Betting Academy", icon: "fas fa-book" }
        ],
        
        // Detailed review content
        fullReview: {
            tagline: "All the coins, all in one wallet & Tiered Bonuses",
            paragraphs: [
                "If you juggle many coins, BC.Game is hard to beat. The wallet supports dozens of networks and stablecoins, and deposits clear fast. The sportsbook is competent with a clean in‑play flow.",
                "Bonus cadence is aggressive—expect rotating recharge/cashback alongside tiered deposits. The product is web‑first and snappy on mobile.",
                "Cautions: public sentiment is uneven and licensing remains Curaçao‑class. Read bonus terms carefully and plan around network fees. As a coin‑maximalist home base with a working book, it earns a slot."
            ]
        },
        
        // Perks for product cards and detailed reviews
        perks: [
            { text: "Flexible networks (e.g., TRC20/Polygon)", icon: "fas fa-project-diagram" },
            { text: "Frequent promos & quests", icon: "fas fa-trophy" },
            { text: "Large coin list", icon: "fas fa-coins" },
            { text: "Community features", icon: "fas fa-users" },
            { text: "Cashback/recharge cadence", icon: "fas fa-sync" },
            { text: "Mobile responsive", icon: "fas fa-mobile-alt" },
            { text: "Responsible tools", icon: "fas fa-life-ring" },
            { text: "Help center guidance", icon: "fas fa-book" }
        ],
        
        // Technical specifications
        specifications: [
            { name: "Licensing", value: "Curacao-licensed brand (reviewer refs)", icon: "fas fa-id-badge" },
            { name: "Coins", value: "50–100+ supported; ERC20/TRC20 stables", icon: "fas fa-coins" },
            { name: "Bonuses", value: "Multi‑tier welcomes; frequent recharge/cashback", icon: "fas fa-gift" },
            { name: "Payments", value: "Guides cover deposit/withdrawal timing", icon: "fas fa-book" },
            { name: "Sentiment", value: "Trustpilot currently low; review T&Cs", icon: "fas fa-comment" }
        ]
    },
    
    // Product 8 Configuration - FortuneJack — Established Crypto Book with Transparent Licensing
    product8: {
        name: "FortuneJack",
        description: "Long-running crypto casino/sportsbook known for consistent operations and a clear licensing trail. Certificate of Operation and licensing paperwork publicly posted.",
        productLogo: "./assets/images/sports-betting/fortunejack_logo.png",
        productImage: "./assets/images/sports-betting/fortunejack_website.png",
        logoScale: {
            grid: 2.8,
            list: 2.2,
            tablet: {
                grid: 2.5,  // Scale for tablet grid view
                list: 1.0   // Scale for tablet list view
            }
        },
        
        // Product image scaling settings for product cards
        imageScale: {
            grid: 1.0,       // Scale for product image in grid view
            list: 1.0        // Scale for product image in list view
        },
        
        // Product image positioning settings for product cards
        imagePositioning: {
            grid: {
                objectPosition: 'top left',  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'cover'         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },

        // Logo positioning settings for product cards
        logoPositioning: {
            grid: {
                left: '0px',     // Horizontal positioning for grid view
                top: '0rem'      // Vertical positioning for grid view
            },
            list: {
                left: '0px',     // Horizontal positioning for list view
                top: '0rem'      // Vertical positioning for list view
            }
        },
        
        // Detailed review scaling settings
        detailedReviewScale: {
            productImage: 1.0,  // Scale for product image in detailed reviews
            productLogo: 2.0    // Scale for product logo in detailed reviews
        },

        // Detailed review positioning settings
        detailedReviewPositioning: {
            productLogo: {
                left: '0px',     // Horizontal positioning for detailed review logo
                top: '-0.25rem'      // Vertical positioning for detailed review logo
            },
            productImage: {
                left: '0px',           // Horizontal positioning for detailed review image
                top: '0px',            // Vertical positioning for detailed review image
                objectPosition: 'top left', // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'cover'     // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Product ranking and affiliate data
        rank: 8,
        rankBadge: "TRANSPARENCY",
        rating: 4.3,
        reviewCount: 1567,

        // =============================================
        // RANK BADGE DISPLAY SETTINGS
        // =============================================
        badgeSettings: {
            showOnProductCard: true,     // ← Show/hide rank badge on product cards (true/false)
            showOnDetailedReview: true   // ← Show/hide rank badge on detailed review cards (true/false)
        },
        
        // ========== UNIVERSAL TEMPLATE FIELDS ==========
        // Physical Products (default)
        price: "",
        originalPrice: "",
        discount: "",
        
        // Casino Websites
        welcomeBonus: "",
        welcomePackage: "",
        addedBonus: "",
        
        // Sports Betting
        signupBonus: "Welcome Pack Up to 200,000 USDT",
        oddsBoost: "x4 100%+ Deposit Bonus or 20% Cashback",
        freeBet: "250 Free Spins and 100% Free Bet",
        
        affiliateLink: "https://fortunejack.com/",
        ctaText: "Bet Now",
        
        // CTA section configuration for detailed reviews
        cta: {
            title: "Bet crypto with a veteran operator",
            description: "Shoot & Win - win every combo you lose",
            boxInfo: "Multi Bet Builder",
            // CTA box display controls
            display: {
                showTitle: false,        // Show/hide CTA title
                showDescription: false,  // Show/hide CTA description  
                showBoxInfo: false,      // Show/hide additional box info
                showPricingInfo: true   // Show/hide pricing info section
            }
        },
        
        // Features for product cards (short list)
        features: [
            { text: "License certificate & operation docs", icon: "fas fa-id-badge" },
            { text: "Crypto sportsbook + casino", icon: "fas fa-dice" },
            { text: "Live markets; multi-coin cashier", icon: "fas fa-coins" },
            { text: "Transparent territory exclusions", icon: "fas fa-map" },
            { text: "12 Years if Trust", icon: "fas fa-shield-alt" }
        ],
        
        // Detailed review content
        fullReview: {
            tagline: "Established Crypto Book and Steady Sportsbook with Transparent Licensing",
            paragraphs: [
                "FortuneJack's biggest plus is operational maturity. The sportsbook covers the main global leagues and runs reliably during marquee events. Crypto deposits/withdrawals are routine.",
                "The brand publishes its licensing status and transition certificate—rare transparency that builds trust. Excluded territories are clearly listed to avoid signup confusion.",
                "Fewer flashy features than newer rivals; bonus minimums/structures can be BTC‑centric. If you value a steady book with visible paperwork, FortuneJack works."
            ]
        },
        
        // Perks for product cards and detailed reviews
        perks: [
            { text: "Public license documentation", icon: "fas fa-file-alt" },
            { text: "Steady odds/markets", icon: "fas fa-chart-line" },
            { text: "Frequent promos", icon: "fas fa-gift" },
            { text: "Straightforward onboarding", icon: "fas fa-sign-in-alt" },
            { text: "Multi‑coin cashier", icon: "fas fa-coins" },
            { text: "Live markets support", icon: "fas fa-stopwatch" },
            { text: "Veteran operator", icon: "fas fa-shield-alt" }
        ],
        
        // Technical specifications
        specifications: [
            { name: "License/Status", value: "Valid certificate; CGA transition", icon: "fas fa-id-badge" },
            { name: "Territories", value: "Excluded list published (e.g., US, UK)", icon: "fas fa-map" },
            { name: "Docs", value: "License PDF & certificate page public", icon: "fas fa-file-alt" },
            { name: "Sportsbook", value: "Crypto sports hub across major leagues", icon: "fas fa-football-ball" },
            { name: "Reviews", value: "Latest buzz", icon: "fas fa-bolt" }
        ]
    },
    
    // Product 9 Configuration - Vave — Crypto Book with Big Market Reach
    product9: {
        name: "Vave",
        description: "Vave is a crypto‑first casino + sportsbook (TechOptions Group B.V.) under Curaçao licensing with 30+ sports, live betting, and frequent reloads/cashback. Reviewers note fast transactions and privacy‑minded flows.",
        productLogo: "./assets/images/casino_test/vave_text_logo_black.webp",
        productImage: "./assets/images/sports-betting/vave_website.png",
        logoScale: {
            grid: 2.0,
            list: 1.6,
            tablet: {
                grid: 1.7,  // Scale for tablet grid view
                list: 1.0   // Scale for tablet list view
            }
        },
        
        // Product image scaling settings for product cards
        imageScale: {
            grid: 1.0,       // Scale for product image in grid view
            list: 1.0        // Scale for product image in list view
        },
        
        // Product image positioning settings for product cards
        imagePositioning: {
            grid: {
                objectPosition: 'top left',  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'cover'         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },

        // Logo positioning settings for product cards
        logoPositioning: {
            grid: {
                left: '0px',     // Horizontal positioning for grid view
                top: '0rem'      // Vertical positioning for grid view
            },
            list: {
                left: '0px',     // Horizontal positioning for list view
                top: '0rem'      // Vertical positioning for list view
            }
        },
        
        // Detailed review scaling settings
        detailedReviewScale: {
            productImage: 1.0,  // Scale for product image in detailed reviews
            productLogo: 1.5    // Scale for product logo in detailed reviews
        },

        // Detailed review positioning settings
        detailedReviewPositioning: {
            productLogo: {
                left: '0px',     // Horizontal positioning for detailed review logo
                top: '-0.25rem'      // Vertical positioning for detailed review logo
            },
            productImage: {
                left: '0px',           // Horizontal positioning for detailed review image
                top: '0px',            // Vertical positioning for detailed review image
                objectPosition: 'top left', // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'fill'     // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Product ranking and affiliate data
        rank: 9,
        rankBadge: "ALL-AROUNDER",
        rating: 4.2,
        reviewCount: 1834,

        // =============================================
        // RANK BADGE DISPLAY SETTINGS
        // =============================================
        badgeSettings: {
            showOnProductCard: false,     // ← Show/hide rank badge on product cards (true/false)
            showOnDetailedReview: false   // ← Show/hide rank badge on detailed review cards (true/false)
        },
        
        // ========== UNIVERSAL TEMPLATE FIELDS ==========
        // Physical Products (default)
        price: "",
        originalPrice: "",
        discount: "",
        
        // Casino Websites
        welcomeBonus: "",
        welcomePackage: "",
        addedBonus: "",
        
        // Sports Betting
        signupBonus: "100% sports deposit bonus up to 1 BTC",
        oddsBoost: "Thursday Reload Bonus 100% up to 2500 USDT",
        freeBet: "Sport VIP Program",
        
        affiliateLink: "https://vave.com/",
        ctaText: "Bet Now",
        
        // CTA section configuration for detailed reviews
        cta: {
            title: "100% sports deposit bonus up to 1 BTC",
            description: "Deposit at least 20 USDT to qualify.",
            boxInfo: "4 Deposit Bonuses",
            // CTA box display controls
            display: {
                showTitle: false,        // Show/hide CTA title
                showDescription: false,  // Show/hide CTA description  
                showBoxInfo: false,      // Show/hide additional box info
                showPricingInfo: true   // Show/hide pricing info section
            }
        },
        
        // Features for product cards (short list)
        features: [
            { text: "Crypto‑native cashier with fast approvals", icon: "fas fa-wallet" },
            { text: "30+ sports with in‑play", icon: "fas fa-futbol" },
            { text: "Weekly reloads/cashback + VIP tracks", icon: "fas fa-sync" },
            { text: "Mobile‑ready UI", icon: "fas fa-mobile-alt" },
            { text: "Transparent sports/casino balances", icon: "fas fa-columns" }
        ],
        
        // Detailed review content
        fullReview: {
            tagline: "Crypto Book with Big Market Reach",
            paragraphs: [
                "Vave is designed for crypto convenience: deposits are quick, and a 20 USDT entry point is common for welcome eligibility. Sports coverage sits in the mid‑to‑broad range with standard in‑play.",
                "We like the separation between sports and casino balances for cleaner bonus tracking, plus weekly reloads/cashbacks. Mobile experience is polished.",
                "Safety indices vary across the sector; Vave's scores trend above average but always read T&Cs, verify KYC/limits, and test a small withdrawal early."
            ]
        },
        
        // Perks for product cards and detailed reviews
        perks: [
            { text: "Fast crypto transactions", icon: "fas fa-bolt" },
            { text: "Two VIP programs (sports & casino)", icon: "fas fa-crown" },
            { text: "Card on‑ramp via partners", icon: "fas fa-credit-card" },
            { text: "Competitive odds & promos", icon: "fas fa-percentage" },
            { text: "Multi‑language site", icon: "fas fa-globe" },
            { text: "High provider count (casino)", icon: "fas fa-layer-group" },
            { text: "Transparent bonus structure", icon: "fas fa-file-alt" },
            { text: "Mobile‑first", icon: "fas fa-mobile-alt" }
        ],
        
        // Technical specifications
        specifications: [
            { name: "License", value: "Curaçao (TechOptions Group B.V.)", icon: "fas fa-id-badge" },
            { name: "Welcome", value: "100% up to 500 USDT (sports) • verify terms", icon: "fas fa-gift" },
            { name: "Banking", value: "BTC, ETH, LTC, DOGE, TRX, USDT, XRP, ADA, BNB, BCH, etc.", icon: "fas fa-coins" },
            { name: "Coverage", value: "30+ sports with in‑play; mobile‑ready", icon: "fas fa-futbol" },
            { name: "Transparency", value: "Separate sports/casino balances; clear promos", icon: "fas fa-columns" }
        ]
    },
    
    // Product 10 Configuration - Rainbet — Fast Payouts, Crypto-First
    product10: {
        name: "Rainbet — Fast Payouts, Crypto-First",
        description: "Rainbet runs a crypto casino and sportsbook with instant BTC deposits/withdrawals and broad market coverage. Operated by RBGAMING N.V. and licensed in Anjouan (Comoros).",
        productLogo: "./assets/images/casino_test/rainbet_text_logo_black.webp",
        productImage: "./assets/images/sports-betting/rainbet_website.png",
        logoScale: {
            grid: 2.5,
            list: 2.2,
            tablet: {
                grid: 2.5,  // Scale for tablet grid view
                list: 1.0   // Scale for tablet list view
            }
        },
        
        // Product image scaling settings for product cards
        imageScale: {
            grid: 1.0,       // Scale for product image in grid view
            list: 1.0        // Scale for product image in list view
        },
        
        // Product image positioning settings for product cards
        imagePositioning: {
            grid: {
                objectPosition: 'top center',  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'cover'         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },

        // Logo positioning settings for product cards
        logoPositioning: {
            grid: {
                left: '0px',     // Horizontal positioning for grid view
                top: '0rem'      // Vertical positioning for grid view
            },
            list: {
                left: '0px',     // Horizontal positioning for list view
                top: '0rem'      // Vertical positioning for list view
            }
        },
        
        // Detailed review scaling settings
        detailedReviewScale: {
            productImage: 1.0,  // Scale for product image in detailed reviews
            productLogo: 2.0    // Scale for product logo in detailed reviews
        },

        // Detailed review positioning settings
        detailedReviewPositioning: {
            productLogo: {
                left: '0px',     // Horizontal positioning for detailed review logo
                top: '-0.25rem'      // Vertical positioning for detailed review logo
            },
            productImage: {
                left: '0px',           // Horizontal positioning for detailed review image
                top: '0px',            // Vertical positioning for detailed review image
                objectPosition: 'top left', // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'fill'     // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Product ranking and affiliate data
        rank: 10,
        rankBadge: "FAST CASHOUTS",
        rating: 4.1,
        reviewCount: 1456,

        // =============================================
        // RANK BADGE DISPLAY SETTINGS
        // =============================================
        badgeSettings: {
            showOnProductCard: false,     // ← Show/hide rank badge on product cards (true/false)
            showOnDetailedReview: false   // ← Show/hide rank badge on detailed review cards (true/false)
        },
        
        // ========== UNIVERSAL TEMPLATE FIELDS ==========
        // Physical Products (default)
        price: "",
        originalPrice: "",
        discount: "",
        
        // Casino Websites
        welcomeBonus: "",
        welcomePackage: "",
        addedBonus: "",
        
        // Sports Betting
        signupBonus: "100% Deposit Bonus up to $700 + 20 FS",
        oddsBoost: "First Deposit Bonus No Wager Lock",
        freeBet: "Daily, Weekly, and Monthly Bonuses",
        
        affiliateLink: "https://rainbet.com/",
        ctaText: "Bet Now",
        
        // CTA section configuration for detailed reviews
        cta: {
            title: "Daily, Weekly, and Monthly Races",
            description: "Ride live odds with instant BTC payouts.",
            boxInfo: "$20,000 Weekly raffle, Daily Reloads, and VIP Bonuses",
            // CTA box display controls
            display: {
                showTitle: false,        // Show/hide CTA title
                showDescription: false,  // Show/hide CTA description  
                showBoxInfo: false,      // Show/hide additional box info
                showPricingInfo: true   // Show/hide pricing info section
            }
        },
        
        // Features for product cards (short list)
        features: [
            { text: "Instant crypto transactions (BTC and others)", icon: "fas fa-bolt" },
            { text: "In‑play betting across major sports", icon: "fas fa-futbol" },
            { text: "Regular promos incl. No Wager Lock", icon: "fas fa-gift" },
            { text: "Responsible gambling links in footer", icon: "fas fa-life-ring" },
            { text: "Multi‑asset deposits & withdrawals", icon: "fas fa-coins" }
        ],
        
        // Detailed review content
        fullReview: {
            tagline: "Bet fast, cash out faster.",
            paragraphs: [
                "Rainbet's win is speed: deposits/withdrawals in core coins like BTC and USDT are quick, with testers noting smooth confirmations. Sportsbook rules are public, aiding clarity on settlement.",
                "Licensing is disclosed as Anjouan via terms (RBGAMING N.V.). Market depth is solid for a crypto‑first book, and the multi‑asset cashier suits cross‑chain users.",
                "Promos such as No Wager Lock provide steady value lanes. Independent safety scores sit above average for newer crypto books; always read promo/KYC terms and test a small withdrawal first."
            ]
        },
        
        // Perks for product cards and detailed reviews
        perks: [
            { text: "Fast BTC cashouts (reviewer‑verified)", icon: "fas fa-bolt" },
            { text: "Crypto & fiat on‑ramps (per reviews)", icon: "fas fa-credit-card" },
            { text: "24/7 live chat & email support", icon: "fas fa-headset" },
            { text: "Casino + sportsbook shared wallet", icon: "fas fa-dice" },
            { text: "Frequent bonus drops", icon: "fas fa-gift" },
            { text: "Transparent policy links", icon: "fas fa-file-alt" }
        ],
        
        // Technical specifications
        specifications: [
            { name: "License & operator", value: "Anjouan (AOFA) • RBGAMING N.V.", icon: "fas fa-id-badge" },
            { name: "Assets", value: "BTC, ETH, USDT, LTC, XRP, TRX, SOL, BNB, ADA, TON, USDC, DAI, …", icon: "fas fa-coins" },
            { name: "Min deposit context", value: "$30", icon: "fas fa-level-down-alt" },
            { name: "Features", value: "In‑play; instant crypto; responsible gambling links", icon: "fas fa-futbol" },
            { name: "Safety index", value: "~7.2/10 (reviewer refs)", icon: "fas fa-shield-alt" }
        ]
    }
};

// ========== SECTION TITLES CONFIGURATION ==========
const SECTION_TITLES = {
    // Section titles and icons (easily customizable for your niche) - FOR DETAILED REVIEW CARDS and comparison section titles
    perks: {
        title: 'Perks & Benefits', // ← CHANGEABLE: Title when showing perks in product cards
        icon: 'fas fa-gift',   // promos/perks icon
        color: '#f59e0b'        // ← CHANGEABLE: Color for perks icons in detailed review cards
    },
    specs: {
        title: 'Specifications', // ← sportsbook‑focused
        icon: 'fas fa-shield-alt',    // ← licensing icon
        color: '#06b6d4'        // ← CHANGEABLE: Color for specs icons in detailed review cards
    },
    features: {
        title: 'Sportsbook Features', // ← CHANGEABLE: Title when showing features in product cards
        icon: 'fas fa-football-ball',    // sportsbook features icon
        color: '#10b981'        // ← CHANGEABLE: Color for features icons in detailed review cards
    },
    reviews: {
        title: 'Detailed Reviews',
        icon: 'fas fa-star'
    },
    comparison: 'Sportsbook Comparison',                  // ← Gets overridden by the comparison section Below
    
    // Helper function to get section info with backward compatibility
    getSection: function(sectionName) {
        const section = this[sectionName];
        if (typeof section === 'string') {
            // Backward compatibility for old string format
            return { title: section, icon: 'fas fa-star' };
        } else if (section && section.title) {
            // New object format
            return section;
        } else {
            // Fallback defaults
            const defaults = {
                perks: { title: 'Perks', icon: 'fas fa-star' },
                specs: { title: 'Specs', icon: 'fas fa-cogs' },
                features: { title: 'Features', icon: 'fas fa-list' },
                reviews: { title: 'Detailed Reviews', icon: 'fas fa-star' }
            };
            return defaults[sectionName] || { title: 'Section', icon: 'fas fa-star' };
        }
    },
    
    // Product card display options
    productCards: {
        displaySection: 'features'                        // ← 'perks', 'specs', or 'features'
    },
    
    // Sort options configuration
    sortOptions: {
        // Configure which sort options to show (reorder or remove as needed)
        enabled: [
            { value: 'rank', label: 'Sort by Rank', field: 'rank' },
            { value: 'rating', label: 'Sort by Rating', field: 'rating' },
            { value: 'primary', label: 'Sort by {{PRIMARY_FIELD}}', field: 'primary' },
            { value: 'secondary', label: 'Sort by {{SECONDARY_FIELD}}', field: 'secondary' }
        ],
        // Field mappings based on template type - customize labels for your niche
        fieldLabels: {
            physical_products: {
                primary: 'Price',
                secondary: 'Original Price'
            },
            casino_websites: {
                primary: 'Welcome Bonus',
                secondary: 'Welcome Package'
            },
            sports_betting: {
                primary: 'Sign Up Bonus',
                secondary: 'Deposit Match'
            }
            // Add more template types here as needed
        }
    },
    
    // Editor's Choice section configuration
    editorsChoice: {
        title: 'Editor\'s Choice',                          // ← Title for editor's choice section
        subtitle: 'Our top recommendation',                 // ← Subtitle
        ctaText: 'Get Started',                            // ← Call-to-action button text
        featureCount: 5,                                   // ← CONFIGURABLE: Number of features/specs/perks to show (3, 4, 5, 7, etc.)
        displaySection: 'features',                          // ← 'perks', 'features', or 'specs' to show in editor's choice
    },
    
    // Editor's Pick Cards configuration
    editorsPicks: {
        title: 'Editor\'s Picks',                          // ← Title for editor's picks section
        subtitle: 'Handpicked recommendations',            // ← Subtitle 
        featureCount: 5,                                   // ← CONFIGURABLE: Number of features/specs/perks to show in each pick card (3, 4, 5, 7, etc.)
        displaySection: 'features',                          // ← 'perks', 'features', or 'specs' to show in pick cards
    },

    // Comparison section configuration
    comparisonSection: {
        title: 'Sportsbook Comparison',                       // ← Title for comparison section
        subtitle: 'Select 2-3 sportsbooks to compare licensing, coins, features and promos side by side', // ← Subtitle
        placeholderTitle: 'Select products to compare',   // ← Placeholder title when no products selected
        placeholderDescription: 'Choose 2-3 products from the dropdowns above to see a detailed comparison', // ← Placeholder description
        resultsTitle: 'Comparison Results',               // ← Title shown above comparison results
        resultsSubtitle: 'Comparing {count} products',    // ← Subtitle for results (use {count} for product count)
        featureCount: 5,                                  // ← CONFIGURABLE: Max features/specs/perks to show per product in comparison (5, 7, 10, etc.)
        
        // Dropdown configuration
        dropdownLabels: {
            product1: 'Sportsbook 1:',                       // ← Label for first dropdown
            product2: 'Sportsbook 2:',                       // ← Label for second dropdown
            product3: 'Sportsbook 3 (Optional):'            // ← Label for third dropdown
        },
        dropdownPlaceholder: 'Select a sportsbook...',      // ← Placeholder text in dropdown options
        
        // Comparison table header icons and colors (separate from detailed review cards)
        sectionTitles: { //titles for comparison chosen in const SECTION_TITLES = { up above in the detailed review titles part
            perks: {
                icon: 'fas fa-gift',                      // promos & perks
                color: '#f59e0b'
            },
            features: {
                icon: 'fas fa-football-ball',             // sportsbook features
                color: '#10b981'
            },
            specs: {
                icon: 'fas fa-shield-alt',                // licensing/compliance
                color: '#06b6d4'
            }
        }
    }
};

// Make configurations globally available
window.PRODUCTS_CONFIG = PRODUCTS_CONFIG;
window.SECTION_TITLES = SECTION_TITLES;



// ========== TEMPLATE TYPE CONFIGURATION ==========
// Choose your template type to customize what displays in place of pricing
const TEMPLATE_TYPE = "sports_betting"; // ← CHANGE THIS TO MATCH YOUR WEBSITE TYPE

// Available template types:
// "physical_products"    - Shows price, original price, discount (default)
// "casino_websites"      - Shows bonus offers, welcome packages, free spins
// "sports_betting"       - Shows sign-up bonuses, odds boosts, free bets
// "software_saas"        - Shows subscription plans, trial info, monthly/yearly pricing
// "streaming_services"   - Shows subscription cost, trial period, content highlights
// "vpn_services"         - Shows pricing plans, server count, speed info
// "crypto_exchanges"     - Shows trading fees, supported coins, security features
// "web_hosting"          - Shows hosting plans, storage, bandwidth, uptime
// "restaurants"          - Shows price range, cuisine type, special offers
// "hotels_travel"        - Shows room rates, amenities, location highlights

// Template type display configurations
const TEMPLATE_DISPLAY_CONFIG = {
    physical_products: {
        primaryField: "price",
        secondaryField: "originalPrice", 
        tertiaryField: "discount",
        primaryLabel: "Price",
        secondaryLabel: "Original Price",
        tertiaryLabel: "Discount",
        icon: "💰",
        ctaDefault: "Buy Now",
        fieldsToShow: 3, // Show all 3 fields
        // New flexible field selection
        displayFields: ["primary", "secondary", "tertiary"], // Which fields to show
        secondaryFieldCrossthrough: true // Enable crossthrough styling for secondary field
    },
    casino_websites: {
        primaryField: "welcomeBonus",
        secondaryField: "welcomePackage",
        tertiaryField: "addedBonus", // Remove free spins - not needed
        primaryLabel: "Welcome Bonus",
        secondaryLabel: "Welcome Package",
        tertiaryLabel: "Added Bonus",
        icon: "🎰",
        ctaDefault: "Claim Bonus",
        fieldsToShow: 3, // Show only 2 fields
        // New flexible field selection
        displayFields: ["primary", "secondary", "tertiary"], // Only show Welcome Bonus and Welcome Package
        secondaryFieldCrossthrough: false // No crossthrough for casino welcome packages
    },
    sports_betting: {
        primaryField: "signupBonus",
        secondaryField: "oddsBoost", 
        tertiaryField: "freeBet",
        primaryLabel: "Welcome Package",
        secondaryLabel: "Welcome Bonus",
        tertiaryLabel: "Added Bonus",
        icon: "⚽",
        ctaDefault: "Get Bonus",
        fieldsToShow: 3, // Show all 3 fields
        // New flexible field selection
        displayFields: ["primary", "secondary", "tertiary"], // Which fields to show
        secondaryFieldCrossthrough: false // No crossthrough for sports betting
    },
    software_saas: {
        primaryField: "monthlyPrice",
        secondaryField: "yearlyPrice",
        tertiaryField: "trialPeriod",
        primaryLabel: "Monthly Price",
        secondaryLabel: "Yearly Price",
        tertiaryLabel: "Free Trial",
        icon: "💻",
        ctaDefault: "Start Free Trial",
        fieldsToShow: 3, // Show all 3 fields
        // New flexible field selection
        displayFields: ["primary", "secondary", "tertiary"], // Which fields to show
        secondaryFieldCrossthrough: false // No crossthrough for SaaS yearly pricing
    },
    streaming_services: {
        primaryField: "monthlyPrice",
        secondaryField: "trialPeriod",
        tertiaryField: "contentHighlight",
        primaryLabel: "Monthly Price",
        secondaryLabel: "Free Trial",
        tertiaryLabel: "4K Content",
        icon: "📺",
        ctaDefault: "Start Watching",
        fieldsToShow: 3, // Show all 3 fields
        // New flexible field selection
        displayFields: ["primary", "secondary", "tertiary"], // Which fields to show
        secondaryFieldCrossthrough: false // No crossthrough for streaming services
    },
    vpn_services: {
        primaryField: "monthlyPrice",
        secondaryField: "serverCount",
        tertiaryField: "speedInfo",
        primaryLabel: "Monthly Price",
        secondaryLabel: "Server Network",
        tertiaryLabel: "High Speed",
        icon: "🛡️",
        ctaDefault: "Get VPN",
        fieldsToShow: 3, // Show all 3 fields
        // New flexible field selection
        displayFields: ["primary", "secondary", "tertiary"], // Which fields to show
        secondaryFieldCrossthrough: false // No crossthrough for VPN services
    },
    crypto_exchanges: {
        primaryField: "tradingFee",
        secondaryField: "supportedCoins",
        tertiaryField: "securityRating",
        primaryLabel: "Trading Fee",
        secondaryLabel: "Coin Support",
        tertiaryLabel: "Security Rating",
        icon: "💰",
        ctaDefault: "Start Trading",
        fieldsToShow: 3, // Show all 3 fields
        // New flexible field selection
        displayFields: ["primary", "secondary", "tertiary"], // Which fields to show
        secondaryFieldCrossthrough: false // No crossthrough for crypto exchanges
    },
    web_hosting: {
        primaryField: "monthlyPrice",
        secondaryField: "storage",
        tertiaryField: "uptime",
        primaryLabel: "Monthly Price",
        secondaryLabel: "Storage",
        tertiaryLabel: "Uptime Guarantee",
        icon: "🌐",
        ctaDefault: "Get Hosting",
        fieldsToShow: 3, // Show all 3 fields
        // New flexible field selection
        displayFields: ["primary", "secondary", "tertiary"], // Which fields to show
        secondaryFieldCrossthrough: false // No crossthrough for web hosting
    },
    restaurants: {
        primaryField: "priceRange",
        secondaryField: "specialOffer",
        tertiaryField: null, // Only show 2 fields
        primaryLabel: "Price Range",
        secondaryLabel: "Special Offers",
        tertiaryLabel: null,
        icon: "🍕",
        ctaDefault: "Make Reservation",
        fieldsToShow: 2, // Only show 2 fields
        // New flexible field selection
        displayFields: ["primary", "secondary"], // Only show primary and secondary
        secondaryFieldCrossthrough: false // No crossthrough for restaurants
    },
    hotels_travel: {
        primaryField: "roomRate",
        secondaryField: "amenities",
        tertiaryField: null, // Only show 2 fields
        primaryLabel: "Room Rate",
        secondaryLabel: "Premium Amenities",
        tertiaryLabel: null,
        icon: "🏨",
        ctaDefault: "Book Now",
        fieldsToShow: 2, // Only show 2 fields
        // New flexible field selection
        displayFields: ["primary", "secondary"], // Only show primary and secondary
        secondaryFieldCrossthrough: false // No crossthrough for hotels
    }
};

// Make template configuration globally available
window.TEMPLATE_TYPE = TEMPLATE_TYPE;
window.TEMPLATE_DISPLAY_CONFIG = TEMPLATE_DISPLAY_CONFIG;
window.CURRENT_TEMPLATE_CONFIG = TEMPLATE_DISPLAY_CONFIG[TEMPLATE_TYPE];

/*
===========================================
Everything below automatically uses the settings above.
Don't edit below unless you need advanced customization.
===========================================
*/

// ===========================================
// MAIN SITE CONFIGURATION
// ===========================================

const SITE_CONFIG = {
    // Basic Site Information
    brand: {
        name: "Brand Name", // Will be overridden by brand-config.js
        tagline: "Brand Tagline", // Will be overridden by brand-config.js
        description: `We review and rank the best ${PRODUCT_TYPE.toLowerCase()} to help you make informed decisions.`,
        logo: "./assets/images/logo.png", // Will be overridden by brand-config.js
        favicon: FAVICON // Browser tab icon
    },
    
    // SEO Settings
    seo: {
        title: `Top 10 ${NICHE} - Best ${PRODUCT_TYPE} Reviews 2025`,
        description: `Discover the best ${PRODUCT_TYPE.toLowerCase()} with our comprehensive reviews. Compare features, prices, and user ratings.`,
        keywords: `${NICHE.toLowerCase()}, best ${PRODUCT_TYPE.toLowerCase()}, reviews, top 10, comparison, 2025`,
        ogImage: "./assets/images/og-image.jpg", // Social media preview image (1200x630px recommended)
        siteUrl: SITE_URL,
        author: "Brand Name", // Will be overridden by brand-config.js
        language: "en-US"
    },
    
    // Legal Pages
    legal: {
        privacyPolicy: "./privacy.html",
        termsOfService: "./terms.html",
        affiliateDisclosure: "./disclaimer.html",
        cookiePolicy: "./cookies.html",
        contactPage: "./contact.html"
    }
};

// ===========================================
// NICHE-SPECIFIC CONFIGURATION
// ===========================================

const NICHE_CONFIG = {
    // Main Topic Settings
    niche: NICHE,
    productType: PRODUCT_TYPE,
    audience: AUDIENCE,
    
    // Hero Section Content
    hero: {
        title: `The Top 10 ${NICHE} Reviewed & Ranked for 2025`,
        subtitle: `We've tested ${NUMBER_TESTED} ${PRODUCT_TYPE.toLowerCase()} and ranked the best ones. Save hours of research with our expert recommendations.`,
        ctaText: "See Our Top Pick",
        secondaryCtaText: "Compare All Options",
        
        // Trust Indicators
        trustIndicators: {
            reviewCount: REVIEW_COUNT,
            userCount: USER_COUNT,
            lastUpdate: LAST_UPDATE,
            numberTested: NUMBER_TESTED
        }
    },
    
    // Navigation Menu
    navigation: {
        menuItems: [
            { text: "Home", url: "#home" },
            { text: `🏆 Top 10 ${NICHE}`, url: "#top10", highlight: true },
            { text: "Reviews", url: "#reviews" },
            { text: "Compare", url: "#comparison" },
            { text: "Blog", url: "./blog.html" },
            { text: "Contact", url: "#contact" }
        ]
    },
    
    // Top Pick Section
    topPick: {
        badge: "EDITOR'S CHOICE",
        title: "Breville Barista Express",
        description: "The perfect balance of convenience and quality. This coffee maker delivers exceptional espresso with built-in grinder and milk frother.",
        rating: "4.8",
        reviewCount: "1,247",
        price: "£699",
        priceNote: "Starting at",
        features: [
            "Built-in conical burr grinder",
            "15-bar pressure pump",
            "Milk frother for lattes"
        ],
        ctaText: "Get Best Price",
        affiliateLink: "https://example.com/affiliate-link-1" // REPLACE WITH YOUR ACTUAL AFFILIATE LINK
    }
};

// ===========================================
// STYLING CONFIGURATION
// ===========================================

const STYLE_CONFIG = {
    // Color Scheme - Change these to match your brand
    colors: {
        primary: "#2563eb",        // Main brand color
        primaryHover: "#1d4ed8",   // Darker shade for hover
        secondary: "#64748b",      // Secondary color
        accent: "#10b981",         // Accent color (green)
        warning: "#f59e0b",        // Warning color (yellow)
        danger: "#ef4444",         // Danger color (red)
        success: "#10b981",        // Success color
        
        // Background colors
        bgPrimary: "#ffffff",      // Main background
        bgSecondary: "#f9fafb",    // Secondary background
        bgDark: "#1f2937",         // Dark background
        bgCard: "#ffffff",         // Card backgrounds
        
        // Text colors
        textPrimary: "#1f2937",    // Main text
        textSecondary: "#6b7280",  // Secondary text
        textLight: "#9ca3af",      // Light text
        textWhite: "#ffffff"       // White text
    },
    
    // Typography
    fonts: {
        primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        secondary: "'Georgia', serif",
        monospace: "'Fira Code', monospace"
    },
    
    // Spacing (in rem)
    spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "3rem",
        "3xl": "4rem"
    },
    
    // Border radius
    borderRadius: {
        sm: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem"
    },
    
    // Animations
    animations: {
        fast: "0.15s ease-in-out",
        normal: "0.3s ease-in-out",
        slow: "0.5s ease-in-out"
    }
};

// ===========================================
// TRACKING CONFIGURATION
// ===========================================

const TRACKING_CONFIG = {
    // Analytics Settings
    analytics: {
        googleAnalytics: {
            enabled: true,
            trackingId: "G-BQKJMHS9XZ", // REPLACE WITH YOUR GA4 MEASUREMENT ID
            anonymizeIp: true,
            cookieDomain: "auto"
        },
        
        metaPixel: {
            enabled: true,
            pixelId: "YOUR_PIXEL_ID", // REPLACE WITH YOUR META PIXEL ID
            advancedMatching: true
        },
        
        // Add other tracking services as needed
        customTracking: {
            enabled: false,
            // Replace this with your Google Apps Script Web App URL after deployment
            endpointUrl: "https://script.google.com/macros/s/AKfycbx36STHE0byk1X2HPKF-alEWYL4iakVnYygBT58A96Y5KpbKqOLfGb4VNnGaPKsemgEYA/exec"
        }
    },
    
    // Event Tracking Settings
    events: {
        affiliateClicks: true,
        emailCapture: true,
        scrollDepth: true,
        timeOnPage: true,
        exitIntent: true
    },
    
    // Conversion Tracking
    conversions: {
        primaryGoal: "affiliate_click",
        secondaryGoal: "email_capture",
        conversionValue: 0.50 // Average value per conversion
    }
};

// ===========================================
// FEATURE FLAGS
// ===========================================

const FEATURE_FLAGS = {
    // Enable/disable features
    mobileMenu: true,
    backToTop: true,
    floatingCTA: true,
    emailCapture: true,
    socialSharing: true,
    darkMode: false,
    animations: true,
    lazyLoading: true,
    
    // A/B Testing flags
    testVariants: {
        heroLayout: "default", // "default", "minimal", "video"
        ctaStyle: "default",   // "default", "animated", "minimal"
        productLayout: "grid"  // "grid", "list", "cards"
    }
};

// ===========================================
// THIRD-PARTY INTEGRATIONS
// ===========================================

const INTEGRATIONS = {
    // Email Marketing
    emailService: {
        provider: "mailchimp", // "mailchimp", "convertkit", "klaviyo", "custom"
        apiKey: "YOUR_API_KEY",
        listId: "YOUR_LIST_ID",
        apiUrl: "https://api.mailchimp.com/3.0/"
    },
    
    // Form Handling
    formService: {
        provider: "netlify", // "netlify", "formspree", "custom"
        actionUrl: "https://formspree.io/f/YOUR_FORM_ID"
    },
    
    // CDN and Performance
    cdn: {
        images: "https://your-cdn.com/images/",
        assets: "https://your-cdn.com/assets/"
    },
    
    // Reviews and Ratings
    reviews: {
        provider: "trustpilot", // "trustpilot", "google", "custom"
        accountId: "YOUR_ACCOUNT_ID"
    }
};

// ===========================================
// RESPONSIVE BREAKPOINTS
// ===========================================

const BREAKPOINTS = {
    mobile: "767px",
    tablet: "1023px",
    desktop: "1024px",
    large: "1200px",
    xlarge: "1400px"
};

// ===========================================
// EXPORT CONFIGURATION
// ===========================================

// Make configurations available globally
if (typeof window !== 'undefined') {
    window.SITE_CONFIG = SITE_CONFIG;
    window.NICHE_CONFIG = NICHE_CONFIG;
    window.PRODUCTS_CONFIG = PRODUCTS_CONFIG;
    window.STYLE_CONFIG = STYLE_CONFIG;
    window.TRACKING_CONFIG = TRACKING_CONFIG;
    window.FEATURE_FLAGS = FEATURE_FLAGS;
    window.INTEGRATIONS = INTEGRATIONS;
    window.BREAKPOINTS = BREAKPOINTS;
}

// Export for Node.js/modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        SITE_CONFIG,
        NICHE_CONFIG,
        PRODUCTS_CONFIG,
        STYLE_CONFIG,
        TRACKING_CONFIG,
        FEATURE_FLAGS,
        INTEGRATIONS,
        BREAKPOINTS
    };
}

// ===========================================
// CONFIGURATION HELPERS
// ===========================================

/**
 * Helper function to get configuration value
 */
function getConfig(path, defaultValue = null) {
    const keys = path.split('.');
    let value = window;
    
    for (const key of keys) {
        value = value?.[key];
        if (value === undefined) {
            return defaultValue;
        }
    }
    
    return value;
}

/**
 * Helper function to update configuration
 */
function updateConfig(path, newValue) {
    const keys = path.split('.');
    const lastKey = keys.pop();
    let target = window;
    
    for (const key of keys) {
        if (!target[key]) {
            target[key] = {};
        }
        target = target[key];
    }
    
    target[lastKey] = newValue;
}

/**
 * Replace placeholders in DOM elements
 */
function replacePlaceholdersInDOM() {
    // Replace all text content that contains placeholders
    const allElements = document.querySelectorAll('*');
    
    allElements.forEach(element => {
        // Skip script and style elements
        if (element.tagName === 'SCRIPT' || element.tagName === 'STYLE') {
            return;
        }
        
        // Replace text content
        if (element.childNodes.length > 0) {
            element.childNodes.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE && node.textContent.includes('{{')) {
                    node.textContent = replacePlaceholders(node.textContent);
                }
            });
        }
        
        // Replace attributes that might contain placeholders
        const attributes = ['href', 'src', 'alt', 'title', 'placeholder'];
        attributes.forEach(attr => {
            if (element.hasAttribute(attr)) {
                const value = element.getAttribute(attr);
                if (value && value.includes('{{')) {
                    element.setAttribute(attr, replacePlaceholders(value));
                }
            }
        });
    });
    
    // Handle data attributes
    const elementsWithDataConfig = document.querySelectorAll('[data-config]');
    elementsWithDataConfig.forEach(element => {
        const configPath = element.getAttribute('data-config');
        const value = getConfig(configPath);
        if (value !== null) {
            element.textContent = value;
        }
    });
    
    console.log('✅ Placeholders replaced in DOM');
}

// Helper function to get editor's choice product
function getEditorsChoiceProduct() {
    const editorsConfig = window.EDITORS_CHOICE_CONFIG || EDITORS_CHOICE_CONFIG;
    
    // Check if manual override is enabled
    if (editorsConfig.useManualOverride) {
        return editorsConfig.manualOverride;
    }
    
    // Otherwise use selected product from config
    const selectedProductKey = editorsConfig.selectedProduct || 'product1';
    return PRODUCTS_CONFIG[selectedProductKey] || PRODUCTS_CONFIG.product1;
}

// Helper functions to get template-aware values for top pick section
function getTopPickPrimaryValue() {
    const product = getEditorsChoiceProduct();
    const templateConfig = TEMPLATE_DISPLAY_CONFIG[TEMPLATE_TYPE];
    
    if (templateConfig && templateConfig.primaryField) {
        return product[templateConfig.primaryField] || product.price || '£699';
    }
    return product.price || '£699';
}

function getTopPickSecondaryValue() {
    const product = getEditorsChoiceProduct();
    const templateConfig = TEMPLATE_DISPLAY_CONFIG[TEMPLATE_TYPE];
    
    if (templateConfig && templateConfig.secondaryField) {
        return product[templateConfig.secondaryField] || product.originalPrice || '£799';
    }
    return product.originalPrice || '£799';
}

function getTopPickTertiaryValue() {
    const product = getEditorsChoiceProduct();
    const templateConfig = TEMPLATE_DISPLAY_CONFIG[TEMPLATE_TYPE];
    
    if (templateConfig && templateConfig.tertiaryField) {
        return product[templateConfig.tertiaryField] || product.discount || '13% OFF';
    }
    return product.discount || '13% OFF';
}

// Helper functions for feature text/icons removed - now handled dynamically by TopPickManager


/**
 * Helper function to replace placeholders in text
 */
function replacePlaceholders(text, config = {}) {
    const allConfig = {
        // Basic settings
        SITE_NAME: SITE_CONFIG.brand.name,
        SITE_TAGLINE: SITE_CONFIG.brand.tagline,
        NICHE: NICHE,
        PRODUCT_TYPE: PRODUCT_TYPE,
        AUDIENCE: AUDIENCE,
        CONTACT_EMAIL: CONTACT_EMAIL,
        SITE_URL: SITE_URL,
        REVIEW_COUNT: REVIEW_COUNT,
        USER_COUNT: USER_COUNT,
        LAST_UPDATE: LAST_UPDATE,
        NUMBER_TESTED: NUMBER_TESTED,
        
        // Product 1 placeholders
        PRODUCT_1_NAME: PRODUCTS_CONFIG.product1?.name || 'Product 1',
        PRODUCT_1_DESCRIPTION: PRODUCTS_CONFIG.product1?.description || 'Product description',
        RATING_1: PRODUCTS_CONFIG.product1?.rating || '4.5',
        REVIEW_COUNT_1: PRODUCTS_CONFIG.product1?.reviewCount || '100',
        PRICE_1: PRODUCTS_CONFIG.product1?.price || '£99',
        ORIGINAL_PRICE_1: PRODUCTS_CONFIG.product1?.originalPrice || '£129',
        DISCOUNT_1: PRODUCTS_CONFIG.product1?.discount || '23% OFF',
        AFFILIATE_LINK_1: PRODUCTS_CONFIG.product1?.affiliateLink || '#',
        CTA_TEXT_1: PRODUCTS_CONFIG.product1?.ctaText || 'Get Best Price',
        
        // Product 2 placeholders
        PRODUCT_2_NAME: PRODUCTS_CONFIG.product2?.name || 'Product 2',
        PRODUCT_2_DESCRIPTION: PRODUCTS_CONFIG.product2?.description || 'Product description',
        RATING_2: PRODUCTS_CONFIG.product2?.rating || '4.3',
        REVIEW_COUNT_2: PRODUCTS_CONFIG.product2?.reviewCount || '85',
        PRICE_2: PRODUCTS_CONFIG.product2?.price || '£79',
        ORIGINAL_PRICE_2: PRODUCTS_CONFIG.product2?.originalPrice || '£99',
        DISCOUNT_2: PRODUCTS_CONFIG.product2?.discount || '20% OFF',
        AFFILIATE_LINK_2: PRODUCTS_CONFIG.product2?.affiliateLink || '#',
        CTA_TEXT_2: PRODUCTS_CONFIG.product2?.ctaText || 'Get Best Price',
        
        // Product 3 placeholders
        PRODUCT_3_NAME: PRODUCTS_CONFIG.product3?.name || 'Product 3',
        PRODUCT_3_DESCRIPTION: PRODUCTS_CONFIG.product3?.description || 'Product description',
        RATING_3: PRODUCTS_CONFIG.product3?.rating || '4.2',
        REVIEW_COUNT_3: PRODUCTS_CONFIG.product3?.reviewCount || '72',
        PRICE_3: PRODUCTS_CONFIG.product3?.price || '£149',
        ORIGINAL_PRICE_3: PRODUCTS_CONFIG.product3?.originalPrice || '£179',
        DISCOUNT_3: PRODUCTS_CONFIG.product3?.discount || '17% OFF',
        AFFILIATE_LINK_3: PRODUCTS_CONFIG.product3?.affiliateLink || '#',
        CTA_TEXT_3: PRODUCTS_CONFIG.product3?.ctaText || 'Get Best Price',
        
        // Product 4 placeholders
        PRODUCT_4_NAME: PRODUCTS_CONFIG.product4?.name || 'Product 4',
        PRODUCT_4_DESCRIPTION: PRODUCTS_CONFIG.product4?.description || 'Product description',
        RATING_4: PRODUCTS_CONFIG.product4?.rating || '4.4',
        REVIEW_COUNT_4: PRODUCTS_CONFIG.product4?.reviewCount || '567',
        PRICE_4: PRODUCTS_CONFIG.product4?.price || '£179',
        ORIGINAL_PRICE_4: PRODUCTS_CONFIG.product4?.originalPrice || '£219',
        DISCOUNT_4: PRODUCTS_CONFIG.product4?.discount || '18% OFF',
        AFFILIATE_LINK_4: PRODUCTS_CONFIG.product4?.affiliateLink || '#',
        CTA_TEXT_4: PRODUCTS_CONFIG.product4?.ctaText || 'Get Best Price',
        
        // Product 5 placeholders
        PRODUCT_5_NAME: PRODUCTS_CONFIG.product5?.name || 'Product 5',
        PRODUCT_5_DESCRIPTION: PRODUCTS_CONFIG.product5?.description || 'Product description',
        RATING_5: PRODUCTS_CONFIG.product5?.rating || '4.2',
        REVIEW_COUNT_5: PRODUCTS_CONFIG.product5?.reviewCount || '743',
        PRICE_5: PRODUCTS_CONFIG.product5?.price || '£89',
        ORIGINAL_PRICE_5: PRODUCTS_CONFIG.product5?.originalPrice || '£119',
        DISCOUNT_5: PRODUCTS_CONFIG.product5?.discount || '25% OFF',
        AFFILIATE_LINK_5: PRODUCTS_CONFIG.product5?.affiliateLink || '#',
        CTA_TEXT_5: PRODUCTS_CONFIG.product5?.ctaText || 'Get Best Price',
        
        // Product 6 placeholders
        PRODUCT_6_NAME: PRODUCTS_CONFIG.product6?.name || 'Product 6',
        PRODUCT_6_DESCRIPTION: PRODUCTS_CONFIG.product6?.description || 'Product description',
        RATING_6: PRODUCTS_CONFIG.product6?.rating || '4.3',
        REVIEW_COUNT_6: PRODUCTS_CONFIG.product6?.reviewCount || '789',
        PRICE_6: PRODUCTS_CONFIG.product6?.price || '£149',
        ORIGINAL_PRICE_6: PRODUCTS_CONFIG.product6?.originalPrice || '£179',
        DISCOUNT_6: PRODUCTS_CONFIG.product6?.discount || '17% OFF',
        AFFILIATE_LINK_6: PRODUCTS_CONFIG.product6?.affiliateLink || '#',
        CTA_TEXT_6: PRODUCTS_CONFIG.product6?.ctaText || 'Get Best Price',
        
        // Product 7 placeholders
        PRODUCT_7_NAME: PRODUCTS_CONFIG.product7?.name || 'Product 7',
        PRODUCT_7_DESCRIPTION: PRODUCTS_CONFIG.product7?.description || 'Product description',
        RATING_7: PRODUCTS_CONFIG.product7?.rating || '4.0',
        REVIEW_COUNT_7: PRODUCTS_CONFIG.product7?.reviewCount || '334',
        PRICE_7: PRODUCTS_CONFIG.product7?.price || '£39',
        ORIGINAL_PRICE_7: PRODUCTS_CONFIG.product7?.originalPrice || '£59',
        DISCOUNT_7: PRODUCTS_CONFIG.product7?.discount || '34% OFF',
        AFFILIATE_LINK_7: PRODUCTS_CONFIG.product7?.affiliateLink || '#',
        CTA_TEXT_7: PRODUCTS_CONFIG.product7?.ctaText || 'Get Best Price',
        
        // Product 8 placeholders
        PRODUCT_8_NAME: PRODUCTS_CONFIG.product8?.name || 'Product 8',
        PRODUCT_8_DESCRIPTION: PRODUCTS_CONFIG.product8?.description || 'Product description',
        RATING_8: PRODUCTS_CONFIG.product8?.rating || '4.1',
        REVIEW_COUNT_8: PRODUCTS_CONFIG.product8?.reviewCount || '256',
        PRICE_8: PRODUCTS_CONFIG.product8?.price || '£49',
        ORIGINAL_PRICE_8: PRODUCTS_CONFIG.product8?.originalPrice || '£69',
        DISCOUNT_8: PRODUCTS_CONFIG.product8?.discount || '29% OFF',
        AFFILIATE_LINK_8: PRODUCTS_CONFIG.product8?.affiliateLink || '#',
        CTA_TEXT_8: PRODUCTS_CONFIG.product8?.ctaText || 'Get Best Price',
        
        // Product 9 placeholders
        PRODUCT_9_NAME: PRODUCTS_CONFIG.product9?.name || 'Product 9',
        PRODUCT_9_DESCRIPTION: PRODUCTS_CONFIG.product9?.description || 'Product description',
        RATING_9: PRODUCTS_CONFIG.product9?.rating || '4.6',
        REVIEW_COUNT_9: PRODUCTS_CONFIG.product9?.reviewCount || '189',
        PRICE_9: PRODUCTS_CONFIG.product9?.price || '£159',
        ORIGINAL_PRICE_9: PRODUCTS_CONFIG.product9?.originalPrice || '£189',
        DISCOUNT_9: PRODUCTS_CONFIG.product9?.discount || '16% OFF',
        AFFILIATE_LINK_9: PRODUCTS_CONFIG.product9?.affiliateLink || '#',
        CTA_TEXT_9: PRODUCTS_CONFIG.product9?.ctaText || 'Get Best Price',
        
        // Product 10 placeholders
        PRODUCT_10_NAME: PRODUCTS_CONFIG.product10?.name || 'Product 10',
        PRODUCT_10_DESCRIPTION: PRODUCTS_CONFIG.product10?.description || 'Product description',
        RATING_10: PRODUCTS_CONFIG.product10?.rating || '4.2',
        REVIEW_COUNT_10: PRODUCTS_CONFIG.product10?.reviewCount || '167',
        PRICE_10: PRODUCTS_CONFIG.product10?.price || '£129',
        ORIGINAL_PRICE_10: PRODUCTS_CONFIG.product10?.originalPrice || '£159',
        DISCOUNT_10: PRODUCTS_CONFIG.product10?.discount || '19% OFF',
        AFFILIATE_LINK_10: PRODUCTS_CONFIG.product10?.affiliateLink || '#',
        CTA_TEXT_10: PRODUCTS_CONFIG.product10?.ctaText || 'Get Best Price',
        
        // Top pick placeholders (using EDITORS_CHOICE_CONFIG) - consistent with product naming
        TOP_PICK_NAME: getEditorsChoiceProduct()?.name || 'Top Pick Product',
        TOP_PICK_DESCRIPTION: getEditorsChoiceProduct()?.description || 'Top pick description',
        TOP_PICK_RATING: getEditorsChoiceProduct()?.rating || '4.8',
        TOP_PICK_REVIEW_COUNT: getEditorsChoiceProduct()?.reviewCount || '1247',
        TOP_PICK_AFFILIATE_LINK: getEditorsChoiceProduct()?.affiliateLink || '#',
        TOP_PICK_CTA_TEXT: getEditorsChoiceProduct()?.ctaText || 'Get Best Price',
        
        // Top pick features are now handled dynamically by TopPickManager
        
        // Hero section placeholders
        HERO_IMAGE_SRC: HERO_CONFIG?.image?.src || './assets/images/hero-image.jpg',
        HERO_IMAGE_ALT: HERO_CONFIG?.image?.alt || '{{PRODUCT_TYPE}} Reviews',
        HERO_VIDEO_TEXT: HERO_CONFIG?.video?.text || 'Watch Our Review Video',
        
        // Spread all config objects
        ...SITE_CONFIG.brand,
        ...SITE_CONFIG.seo,
        ...SITE_CONFIG.contact,
        ...NICHE_CONFIG,
        ...NICHE_CONFIG.hero,
        ...NICHE_CONFIG.hero.trustIndicators,
        ...NICHE_CONFIG.topPick,
        ...SECTION_TITLES.comparisonSection, // Add comparison section config
        ...config
    };
    
    return text.replace(/\{\{([^}]+)\}\}/g, (match, key) => {
        // Handle nested properties
        const keys = key.trim().split('.');
        let value = allConfig;
        
        for (const k of keys) {
            value = value?.[k];
            if (value === undefined) {
                break;
            }
        }
        
        return value !== undefined ? value : match;
    });
}

/**
 * Apply configuration to page elements
 */
function applyConfigToPage() {
    // Update page title for homepage
    const currentPage = window.location.pathname.toLowerCase();
    const title = document.querySelector('title');
    if (title && (currentPage.includes('index.html') || currentPage === '/' || currentPage === '')) {
        title.textContent = replacePlaceholders(INDEX_PAGE_TITLE);
    }
    
    // Update favicon
    let favicon = document.querySelector('link[rel="icon"]') || document.querySelector('link[rel="shortcut icon"]');
    if (!favicon) {
        favicon = document.createElement('link');
        favicon.rel = 'icon';
        document.head.appendChild(favicon);
    }
    favicon.href = FAVICON;
    
    // Update meta descriptions
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', replacePlaceholders(metaDescription.getAttribute('content') || ''));
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
        metaKeywords.setAttribute('content', replacePlaceholders(metaKeywords.getAttribute('content') || ''));
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
        ogTitle.setAttribute('content', replacePlaceholders(ogTitle.getAttribute('content') || ''));
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
        ogDescription.setAttribute('content', replacePlaceholders(ogDescription.getAttribute('content') || ''));
    }
    
    // Update Open Graph image
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
        ogImage.setAttribute('content', SITE_CONFIG.seo.ogImage);
    }
    
    console.log('✅ Configuration applied to page elements');
}

/**
 * Initialize configuration and replace placeholders
 */
function initializeConfig() {
    console.log('🎯 Affiliate Template Configuration Loading...');
    console.log('📊 Niche:', NICHE_CONFIG.niche);
    console.log('🎨 Brand:', SITE_CONFIG.brand.name);
    console.log('📈 Tracking:', TRACKING_CONFIG.analytics.googleAnalytics.enabled ? 'Enabled' : 'Disabled');
    
    // Apply configuration to page
    applyConfigToPage();
    
    // Replace placeholders in HTML
    replacePlaceholdersInDOM();
    
    console.log('✅ Configuration initialization complete');
}

// Make helpers available globally
if (typeof window !== 'undefined') {
    window.getConfig = getConfig;
    window.updateConfig = updateConfig;
    window.replacePlaceholders = replacePlaceholders;
    window.applyConfigToPage = applyConfigToPage;
    window.initializeConfig = initializeConfig;
}

/**

 * Top pick icons are now managed directly through product.features in config
 * Edit the manual override product.features array to change icons
 */

// Initialize when DOM is loaded
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', initializeConfig);
} 

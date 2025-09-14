/*
===========================================
BLOG CONFIGURATION SYSTEM
===========================================
🎯 CHANGE YOUR BLOG SETTINGS HERE - EDIT THESE LINES ONLY:
Configure individual blog posts with all their content, images, categories, and badges.
*/

// ========== BLOG HERO SECTION ==========
const BLOG_HERO = {
    title: "Crypto Sportsbook Blog",                                    // ← Blog page main title
    subtitle: "Verified bonuses, licensing insights, banking limits, and live-betting strategy for crypto-friendly sportsbooks. Always check local laws and play responsibly."  // ← Blog page description
};

// ========== BLOG CTA BANNER CONFIGURATION ==========
const BLOG_CTA_BANNER = {
    enabled: true,                                              // ← Show/hide the CTA banner
    background: {
        type: "gradient",                                          // ← Switch back to image
        imageUrl: "./assets/images/ad_banner_test.jpg",     // ← Test with known working image
        imageOverlay: "rgba(0, 0, 0, 0.4)",                       // ← Image overlay color (when type is "image")
        imageSize: "cover",                                     // ← "cover", "contain", "auto", or "custom"
        imagePosition: "top",                                // ← "center", "top", "bottom", "left", "right"
        customSize: {                                           // ← Custom size settings (when imageSize is "custom")
            width: "100%",                                      // ← Image width ("100%", "800px", "50vw", etc.)
            height: "auto"                                      // ← Image height ("auto", "200px", "50vh", etc.)
        },
        scale: 1.0,                                            // ← Reset to normal scale for testing
    },
    content: {
        icon: "fas fa-football-ball",                                  // ← Header icon
        title: "Looking for the Best Crypto Sportsbooks?",      // ← Main headline
        subtitle: "We verify bonuses, licenses, coin support and key features—so you don't have to.", // ← Description text
        button: {
            text: "View Our Top 10 Sportsbooks",              // ← Button text
            icon: "fas fa-trophy",                                // ← Button icon
            link: "./index.html#top10"                         // ← Button link
        }
    }
};

// ========== INDIVIDUAL BLOG POSTS CONFIGURATION ==========
const BLOG_POSTS = {
    // Blog Post 1 - Stake Review
    post1: {
        title: "Stake Review 2025: Fast Crypto Bets, Faster Payouts",
        excerpt: "Stake is a crypto-first sportsbook with 20+ coins, rapid withdrawals, live streaming and a solid Same Game Multi. We cover licensing context, limits, and key features.",
        image: "./assets/images/sports-betting/stake_website.webp",
        imageAlt: "Stake crypto sportsbook review",
        
        // Image positioning and scaling settings
        imageScale: 1.0,                                               // Scale for blog post image (1.0 = 100%, 1.2 = 120%, etc.)
        imagePositioning: {
            objectPosition: 'top left',                                  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
            objectFit: 'cover'                                         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
        },
        date: "September 10, 2025",
        category: "Sportsbook Review",
        categoryColor: "primary",
        link: "./index.html#review-1",
        badges: [
            { text: "Editor's Pick", type: "primary" },
            { text: "Best UX", type: "success" }
        ],
        ctaText: "⚡ Ready to bet?",
        ctaMessage: "Visit <a href=\"https://stake.com/\" class=\"text-primary\">Stake</a> and bet crypto responsibly."
    },

    // Blog Post 2 - Cloudbet Review
    post2: {
        title: "Cloudbet Review: High Limits, 40+ Coins",
        excerpt: "Launched in 2013, Cloudbet offers big-limit capability, reliable liquidity and a cashier supporting 40+ cryptocurrencies. We walk through bonuses, limits and licensing.",
        image: "./assets/images/sports-betting/cloudbet_website.png",
        imageAlt: "Cloudbet crypto sportsbook review",
        
        // Image positioning and scaling settings
        imageScale: 1.0,                                               // Scale for blog post image (1.0 = 100%, 1.2 = 120%, etc.)
        imagePositioning: {
            objectPosition: 'top left',                                  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
            objectFit: 'cover'                                         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
        },
        date: "September 9, 2025",
        category: "Sportsbook Review",
        categoryColor: "accent",
        link: "./index.html#review-2",
        badges: [
            { text: "High Limits", type: "secondary" },
            { text: "40+ Coins", type: "accent" }
        ],
        ctaText: "🚀 Bet big:",
        ctaMessage: "Visit <a href=\"https://www.cloudbet.com/\" class=\"text-primary\">Cloudbet</a> to explore high limits and 40+ coins."
    },

    // Blog Post 3 - Sportsbook Buying Guide
    post3: {
        title: "Crypto Sportsbook Guide: How to Choose the Right Book",
        excerpt: "Licensing, banking (coins/networks), limits, features (cashout/builders/streams) and promos—our checklist for picking a crypto-friendly sportsbook.",
        image: "./assets/images/sports-betting/guide.jpg",
        imageAlt: "Crypto sportsbook guide",
        
        // Image positioning and scaling settings
        imageScale: 1.0,                                               // Scale for blog post image (1.0 = 100%, 1.2 = 120%, etc.)
        imagePositioning: {
            objectPosition: 'center',                                  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
            objectFit: 'cover'                                         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
        },
        date: "September 8, 2025",
        category: "Sportsbook Guide",
        categoryColor: "primary",
        link: "./blogpost1.html",
        badges: [
            { text: "Sportsbook Guide", type: "primary" },
            { text: "Expert Tips", type: "secondary" }
        ],
        ctaText: "🎯 Need the right book?",
        ctaMessage: "Find your match in our <a href=\"./index.html#top10\" class=\"text-primary\">Top 10 sportsbooks</a>."
    },

    // Blog Post 4 - Cashout vs. Builders
    post4: {
        title: "Cash Out vs Bet Builders: Which Adds More Value?",
        excerpt: "We compare cashout implementations and same-game builders across major crypto sportsbooks—when to use each and pitfalls to avoid.",
        image: "./assets/images/sports-betting/bet-builder.png",
        imageAlt: "Cash out vs bet builder explainer",
        
        // Image positioning and scaling settings
        imageScale: 1.0,                                               // Scale for blog post image (1.0 = 100%, 1.2 = 120%, etc.)
        imagePositioning: {
            objectPosition: 'center',                                  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
            objectFit: 'cover'                                         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
        },
        date: "September 7, 2025",
        category: "Strategy",
        categoryColor: "success",
        link: "./blogpost2.html",
        badges: [
            { text: "Cash Out", type: "secondary" },
            { text: "Builders", type: "success" }
        ],
        ctaText: "📊 Learn the edges:",
        ctaMessage: "See our <a href=\"./index.html#top10\" class=\"text-primary\">Top 10 sportsbooks</a> for strong builders and cashout."
    },

    // Blog Post 5 - Bonus/Rollover Guide
    post5: {
        title: "Crypto Bonus Terms Explained: Rollover, Expiry, Limits",
        excerpt: "Read crypto bonus terms like a pro—rollover math, expiry windows, market restrictions, and how to avoid common traps.",
        image: "./assets/images/sports-betting/bonus-terms.jpg",
        imageAlt: "Crypto sportsbook bonus terms guide",
        
        // Image positioning and scaling settings
        imageScale: 1.0,                                               // Scale for blog post image (1.0 = 100%, 1.2 = 120%, etc.)
        imagePositioning: {
            objectPosition: 'center',                                  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
            objectFit: 'cover'                                         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
        },
        date: "September 6, 2025",
        category: "Bonus Guide",
        categoryColor: "success",
        link: "./blogpost3.html",
        badges: [
            { text: "Rollover", type: "success" },
            { text: "Expiry", type: "secondary" }
        ],
        ctaText: "🎁 Claim smart:",
        ctaMessage: "Compare current offers in our <a href=\"./index.html#top10\" class=\"text-primary\">Top 10 list</a>."
    },

    // Blog Post 6 - Sportsbet.io Review
    post6: {
        title: "Sportsbet.io Review: Feature-Rich Crypto Betting",
        excerpt: "Cash Out, Price Boosts, builders and a modern crypto cashier. We cover license, promos, and partnerships.",
        image: "./assets/images/sports-betting/sportsbet.io_website.png",
        imageAlt: "Sportsbet.io crypto sportsbook review",
        
        // Image positioning and scaling settings
        imageScale: 1.0,                                               // Scale for blog post image (1.0 = 100%, 1.2 = 120%, etc.)
        imagePositioning: {
            objectPosition: 'top left',                                  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
            objectFit: 'cover'                                         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
        },
        date: "September 5, 2025",
        category: "Sportsbook Review",
        categoryColor: "accent",
        link: "./index.html#review-7",
        badges: [
            { text: "Feature Set", type: "accent" },
            { text: "Price Boosts", type: "primary" }
        ],
        ctaText: "🏟️ Want feature depth?",
        ctaMessage: "Explore <a href=\"https://sportsbet.io/\" class=\"text-primary\">Sportsbet.io</a> and bet responsibly."
    }
};

// ========== BLOG DISPLAY SETTINGS ==========
const BLOG_DISPLAY_CONFIG = {
    showAllPosts: true,                     // Show all posts or limit to specific ones
    postsToShow: ['post1', 'post2', 'post3', 'post4', 'post5', 'post6'], // Which posts to display
    gridColumns: "repeat(auto-fit, minmax(350px, 1fr))",  // CSS grid columns
    showCTABanner: true,                    // Show the top 10 CTA banner
    enableHoverEffects: true                // Enable hover animations
};

// ========== CATEGORY COLOR MAPPINGS ==========
const CATEGORY_COLORS = {
    primary: "var(--primary-color)",
    secondary: "var(--secondary-color)", 
    accent: "var(--accent-color)",
    success: "#22c55e",
    warning: "#f59e0b", 
    danger: "#ef4444"
};

// ========== BADGE TYPE MAPPINGS ==========
const BADGE_TYPES = {
    primary: "badge-primary",
    secondary: "badge-secondary",
    accent: "badge-accent",
    success: "badge-success", 
    warning: "badge-warning",
    danger: "badge-danger"
};

/*
===========================================
🚀 BLOG DYNAMIC CONTENT SYSTEM
Everything below automatically uses the settings above.
Don't edit below unless you need advanced customization.
===========================================
*/

class BlogContentManager {
    constructor() {
        this.init();
    }
    
    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }
    
    setup() {
        this.loadHeroContent();
        this.loadCTABanner();
        this.generateBlogPosts();
        this.updatePageTitle();
        console.log('✅ Blog content system loaded with', Object.keys(BLOG_POSTS).length, 'posts');
    }
    
    /**
     * Load hero section content
     */
    loadHeroContent() {
        const heroTitle = document.querySelector('.hero-title');
        const heroSubtitle = document.querySelector('.hero-subtitle');
        
        if (heroTitle) {
            heroTitle.innerHTML = this.replacePlaceholders(BLOG_HERO.title);
        }
        
        if (heroSubtitle) {
            heroSubtitle.innerHTML = this.replacePlaceholders(BLOG_HERO.subtitle);
        }
    }
    
    /**
     * Load and generate CTA banner dynamically
     */
    loadCTABanner() {
        const ctaBannerContainer = document.querySelector('.top10-ad-box');
        
        if (!BLOG_CTA_BANNER.enabled) {
            // Remove banner if disabled
            if (ctaBannerContainer) {
                ctaBannerContainer.remove();
            }
            return;
        }
        
        if (!ctaBannerContainer) {
            console.warn('CTA banner container not found');
            return;
        }
        
        // Build banner HTML
        const bannerHTML = this.createCTABannerHTML();
        ctaBannerContainer.outerHTML = bannerHTML;
        
        console.log('✅ CTA banner loaded with dynamic configuration');
    }
    
    /**
     * Create CTA banner HTML from configuration
     */
    createCTABannerHTML() {
        const config = BLOG_CTA_BANNER;
        const content = config.content;
        const background = config.background;
        
        // Determine CSS class based on background type
        let cssClass = 'top10-ad-box';
        let additionalStyle = '';
        
        if (background.type === 'image') {
            cssClass += ' top10-ad-box-image';
            
            // Build image styles
            let imageStyles = [`background-image: url(${background.imageUrl})`];
            
            // Add image size handling
            if (background.imageSize === 'custom' && background.customSize) {
                imageStyles.push(`background-size: ${background.customSize.width} ${background.customSize.height}`);
            } else {
                let baseSize = background.imageSize || 'cover';
                
                // Apply scale if specified and not using custom size
                if (background.scale && background.scale !== 1.0) {
                    if (baseSize === 'cover' || baseSize === 'contain') {
                        // For cover/contain, scale using percentage
                        const scalePercent = Math.round(background.scale * 100);
                        baseSize = `${scalePercent}%`;
                    } else if (baseSize === 'auto') {
                        // For auto, we'll use CSS transform on the container
                        cssClass += ' top10-ad-box-scaled';
                        additionalStyle += ` transform: scale(${background.scale});`;
                    }
                }
                
                imageStyles.push(`background-size: ${baseSize}`);
            }
            
            // Add image position
            if (background.imagePosition) {
                imageStyles.push(`background-position: ${background.imagePosition}`);
            }
            
            // Add repeat setting
            imageStyles.push('background-repeat: no-repeat');
            
            additionalStyle = imageStyles.join('; ') + ';';
            
            // Add overlay if specified
            if (background.imageOverlay) {
                additionalStyle += ` background-blend-mode: multiply; background-color: ${background.imageOverlay};`;
            }
        } else if (background.type === 'solid') {
            cssClass += ' top10-ad-box-solid';
        } else {
            cssClass += ' top10-ad-box-gradient'; // Default gradient
        }
        
        return `
            <div class="${cssClass}" style="${additionalStyle}">
                <h3>
                    <i class="${content.icon}"></i>
                    ${this.replacePlaceholders(content.title)}
                </h3>
                <p>
                    ${this.replacePlaceholders(content.subtitle)}
                </p>
                <a href="${content.button.link}" class="btn btn-secondary">
                    <i class="${content.button.icon}"></i>
                    ${content.button.text}
                </a>
            </div>
        `;
    }
    
    /**
     * Generate blog posts dynamically
     */
    generateBlogPosts() {
        const blogGrid = document.querySelector('.blog-grid');
        if (!blogGrid) {
            console.warn('Blog grid container not found');
            return;
        }
        
        // Clear existing content
        blogGrid.innerHTML = '';
        
        // Generate posts based on configuration
        const postsToRender = BLOG_DISPLAY_CONFIG.showAllPosts ? 
            Object.keys(BLOG_POSTS) : 
            BLOG_DISPLAY_CONFIG.postsToShow;
            
        postsToRender.forEach(postKey => {
            const post = BLOG_POSTS[postKey];
            if (!post) {
                console.warn(`Blog post ${postKey} not found in configuration`);
                return;
            }
            
            const blogPostHTML = this.createBlogPostHTML(post);
            blogGrid.insertAdjacentHTML('beforeend', blogPostHTML);
        });
        
        // Apply grid styling
        if (BLOG_DISPLAY_CONFIG.gridColumns) {
            blogGrid.style.gridTemplateColumns = BLOG_DISPLAY_CONFIG.gridColumns;
        }
    }
    
    /**
     * Create HTML for individual blog post
     */
    createBlogPostHTML(post) {
        const categoryColor = CATEGORY_COLORS[post.categoryColor] || CATEGORY_COLORS.primary;
        const badgesHTML = post.badges.map(badge => 
            `<span class="badge ${BADGE_TYPES[badge.type] || 'badge-secondary'}">${this.replacePlaceholders(badge.text)}</span>`
        ).join('');
        
        // Determine if link is external (starts with http/https) or internal
        const isExternalLink = post.link.startsWith('http://') || post.link.startsWith('https://');
        const linkAttributes = isExternalLink ? 'target="_blank" rel="noopener noreferrer"' : '';
        
        return `
            <article class="blog-post">
                <div class="blog-post-image">
                    <img src="${post.image}" 
                         alt="${this.replacePlaceholders(post.imageAlt)}" 
                         loading="lazy"
                         style="transform: scale(${post.imageScale || 1.0}); 
                                object-position: ${post.imagePositioning?.objectPosition || 'center'}; 
                                object-fit: ${post.imagePositioning?.objectFit || 'cover'};">
                </div>
                <div class="blog-post-content">
                    <div class="blog-post-meta">
                        <span class="blog-date">${post.date}</span>
                        <span class="blog-category" style="background: ${categoryColor};">${post.category}</span>
                    </div>
                    <h2 class="blog-post-title">
                        <a href="${post.link}" ${linkAttributes}>${this.replacePlaceholders(post.title)}</a>
                    </h2>
                    <p class="blog-post-excerpt">
                        ${this.replacePlaceholders(post.excerpt)}
                    </p>
                    
                    <!-- Internal Link CTA -->
                    <div class="blog-cta-inline">
                        <p><strong>${post.ctaText}</strong> ${this.replacePlaceholders(post.ctaMessage)}</p>
                    </div>
                    
                    <div class="blog-post-footer">
                        <a href="${post.link}" ${linkAttributes} class="btn btn-outline">Read More</a>
                        <div class="blog-post-tags">
                            ${badgesHTML}
                        </div>
                    </div>
                </div>
            </article>
        `;
    }
    
    /**
     * Update page title
     */
    updatePageTitle() {
        const titleElement = document.querySelector('title');
        if (titleElement) {
            const currentTitle = titleElement.textContent;
            titleElement.textContent = this.replacePlaceholders(currentTitle);
        }
    }
    
    /**
     * Replace placeholders with actual values
     */
    replacePlaceholders(text) {
        if (!text) return '';
        
        let result = text;
        
        // Replace from global config
        if (typeof window !== 'undefined') {
            if (window.NICHE_CONFIG && window.NICHE_CONFIG.niche) {
                result = result.replace(/\{\{NICHE\}\}/g, window.NICHE_CONFIG.niche);
            }
            if (window.NICHE_CONFIG && window.NICHE_CONFIG.productType) {
                result = result.replace(/\{\{PRODUCT_TYPE\}\}/g, window.NICHE_CONFIG.productType);
            }
            if (window.BRAND_NAME_TEXT) {
                result = result.replace(/\{\{BRAND_NAME_TEXT\}\}/g, window.BRAND_NAME_TEXT);
            }
            
            // Try brand config
            if (window.BrandManager) {
                const brandConfig = window.BrandManager.get();
                result = result.replace(/\{\{BRAND_NAME_TEXT\}\}/g, brandConfig.text.name);
            }
        }
        
        return result;
    }
}

// Initialize the blog content manager
const blogContentManager = new BlogContentManager();

// Make configurations available globally
if (typeof window !== 'undefined') {
    window.BLOG_HERO = BLOG_HERO;
    window.BLOG_CTA_BANNER = BLOG_CTA_BANNER;
    window.BLOG_POSTS = BLOG_POSTS;
    window.BLOG_DISPLAY_CONFIG = BLOG_DISPLAY_CONFIG;
    window.CATEGORY_COLORS = CATEGORY_COLORS;
    window.BADGE_TYPES = BADGE_TYPES;
    window.blogContentManager = blogContentManager;
}

// Export for Node.js environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        BLOG_HERO,
        BLOG_CTA_BANNER,
        BLOG_POSTS,
        BLOG_DISPLAY_CONFIG,
        CATEGORY_COLORS,
        BADGE_TYPES,
        BlogContentManager
    };
} 
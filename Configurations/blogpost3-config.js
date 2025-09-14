// ===================================================================
// BLOG POST 3 CONFIGURATION - Crypto Bonus Terms Explained: Rollover, Expiry, Limits
// ===================================================================
// This file controls all content for the individual blog post page
// Edit this file to customize the blog post content, meta data, and styling

// ========== POST META DATA ==========
const BLOGPOST_META = {
    title: "Crypto Bonus Terms Explained: Rollover, Expiry, Limits",
    excerpt: "Read crypto bonus terms like a pro—rollover math, expiry windows, market restrictions, and how to avoid common traps.",
    category: "Bonus Guide",
    categoryColor: "success",
    date: "January 6, 2025",
    author: "Crypto Sportsbook Scout Team",
    readTime: 9,
    keywords: "crypto bonus terms, rollover, expiry, max bet, eligible markets, sportsbook bonus guide",
    
    // Featured Image
    image: "./assets/images/sports-betting/bonus-terms.jpg",
    imageAlt: "Crypto sportsbook bonus terms guide",
    
    // Image positioning and scaling
    imageScale: 1.0,
    imagePositioning: {
        objectPosition: 'center',
        objectFit: 'cover'
    },
    
    // Social sharing
    socialImage: "./assets/images/sports-betting/bonus-terms.jpg",
    
    // Tags for the post
    tags: [
        { text: "Rollover", type: "success" },
        { text: "Expiry", type: "primary" },
        { text: "Limits", type: "accent" },
        { text: "Eligibility", type: "secondary" }
    ]
};

// ========== ARTICLE CONTENT ==========
const ARTICLE_CONTENT = {
    // Table of Contents
    tableOfContents: [
        { id: "intro", title: "Why Terms Matter", level: 1 },
        { id: "rollover", title: "Rollover Math", level: 1 },
        { id: "eligibility", title: "Eligible Markets & Max Bets", level: 1 },
        { id: "expiry", title: "Expiry Windows & Triggers", level: 1 },
        { id: "tips", title: "Smart Bonus Tips", level: 1 }
    ],
    
    // Main article sections
    sections: [
        {
            id: "intro",
            title: "Why Terms Matter",
            content: `
                <p>Bonuses can add value—but only if you understand <strong>rollover math</strong>, <strong>eligibility</strong>, <strong>expiry</strong> and <strong>limits</strong>. Here’s how to read them fast.</p>
            `
        },
        {
            id: "rollover",
            title: "Rollover Math",
            content: `
                <ul>
                    <li>Rollover = (deposit + bonus) × multiplier; some use stake or winnings only.</li>
                    <li>Track contributing markets and minimum odds.</li>
                    <li>Partial releases vs all‑or‑nothing—confirm the release structure.</li>
                </ul>
            `
        },
        {
            id: "eligibility",
            title: "Eligible Markets & Max Bets",
            content: `
                <ul>
                    <li>Which markets count? Books may exclude props, low tiers, or short‑odds legs.</li>
                    <li>Max bet per leg or per ticket can slow rollover progress.</li>
                    <li>Boosts/free bets often have separate eligibility rules.</li>
                </ul>
            `
        },
        {
            id: "expiry",
            title: "Expiry Windows & Triggers",
            content: `
                <ul>
                    <li>Common windows: 7–30 days; check pause conditions and timezones.</li>
                    <li>Triggers: withdrawal, market types, or cash out may void/stop progress.</li>
                    <li>Verify how progress is calculated in live builders/cash out contexts.</li>
                </ul>
            `
        },
        {
            id: "tips",
            title: "Smart Bonus Tips",
            content: `
                <ul>
                    <li>Start small: prove withdrawals and support responsiveness first.</li>
                    <li>Log which wagers count; track rollover math in a simple sheet.</li>
                    <li>Prefer recurring reloads if you bet often; one‑time welcome if you ladder once.</li>
                </ul>
            `
        }
    ]
};

// ========== CTA CONTENT ==========
const CTA_CONTENT = {
    title: "🎁 Compare Current Offers Smartly",
    description: "Check rollover, expiry and eligible markets before opting in.",
    buttonText: "View Top 10 Sportsbooks",
    buttonLink: "./index.html#top10"
};

// ========== RELATED POSTS ==========
const RELATED_POSTS = [
    {
        title: "Crypto Sportsbook Guide: How to Choose the Right Book",
        excerpt: "Licensing, banking, limits, features and promos—your checklist.",
        image: "./assets/images/sports-betting/guide.jpg",
        imageScale: 1.0,
        imagePositioning: {
            objectPosition: 'top center',
            objectFit: 'cover'
        },
        link: "./blogpost1.html",
        category: "Sportsbook Guide",
        date: "January 8, 2025"
    },
    {
        title: "Cash Out vs Bet Builders: Which Adds More Value?",
        excerpt: "When to use each feature and what to avoid.",
        image: "./assets/images/sports-betting/bet-builder.png",
        imageScale: 1.0,
        imagePositioning: {
            objectPosition: 'top left',
            objectFit: 'cover'
        },
        link: "./blogpost2.html",
        category: "Strategy",
        date: "January 7, 2025"
    }
    /* you can add more related posts here */
];

// ========== DYNAMIC CONTENT SYSTEM ==========
class BlogPost3Manager {
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
        this.updatePageMeta();
        this.populateContent();
        this.generateTableOfContents();
        this.populateTags();
        this.populateCTA();
        this.populateRelatedPosts();
        console.log('✅ Blog Post 3 content system loaded');
    }
    
    updatePageMeta() {
        // Update page title
        document.title = this.replacePlaceholders(BLOGPOST_META.title + " | {{BRAND_NAME}}");
        
        // Update meta tags
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) metaDescription.content = BLOGPOST_META.excerpt;
        
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) metaKeywords.content = BLOGPOST_META.keywords;
        
        // Update Open Graph tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.content = BLOGPOST_META.title;
        
        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) ogDescription.content = BLOGPOST_META.excerpt;
        
        const ogImage = document.querySelector('meta[property="og:image"]');
        if (ogImage) ogImage.content = BLOGPOST_META.socialImage;
    }
    
    populateContent() {
        // Update hero section
        const categoryBadge = document.getElementById('category-badge');
        if (categoryBadge) {
            categoryBadge.textContent = BLOGPOST_META.category;
            categoryBadge.className = `badge badge-${BLOGPOST_META.categoryColor}`;
        }
        
        const postTitle = document.getElementById('post-title');
        if (postTitle) postTitle.textContent = BLOGPOST_META.title;
        
        const postDate = document.getElementById('post-date');
        if (postDate) postDate.textContent = BLOGPOST_META.date;
        
        const readTime = document.getElementById('read-time');
        if (readTime) readTime.textContent = `${BLOGPOST_META.readTime} min read`;
        
        const postAuthor = document.getElementById('post-author');
        if (postAuthor) postAuthor.textContent = BLOGPOST_META.author;
        
        const postExcerpt = document.getElementById('post-excerpt');
        if (postExcerpt) postExcerpt.textContent = BLOGPOST_META.excerpt;
        
        // Update featured image
        const featuredImage = document.getElementById('featured-image');
        if (featuredImage) {
            featuredImage.src = BLOGPOST_META.image;
            featuredImage.alt = BLOGPOST_META.imageAlt;
            featuredImage.style.transform = `scale(${BLOGPOST_META.imageScale || 1.0})`;
            featuredImage.style.objectPosition = BLOGPOST_META.imagePositioning?.objectPosition || 'center';
            featuredImage.style.objectFit = BLOGPOST_META.imagePositioning?.objectFit || 'cover';
        }
        
        // Populate article content
        const articleContent = document.getElementById('article-content');
        if (articleContent) {
            let contentHTML = '';
            
            ARTICLE_CONTENT.sections.forEach(section => {
                contentHTML += `
                    <section id="${section.id}" style="margin-bottom: var(--spacing-xl);">
                        <h2 style="color: var(--text-primary); margin-bottom: var(--spacing-lg); padding-bottom: var(--spacing-sm); border-bottom: 2px solid var(--primary-color);">
                            ${section.title}
                        </h2>
                        <div class="section-content" style="line-height: 1.8; color: var(--text-secondary);">
                            ${section.content}
                        </div>
                    </section>
                `;
            });
            
            articleContent.innerHTML = contentHTML;
        }
    }
    
    generateTableOfContents() {
        const tocContainer = document.createElement('div');
        tocContainer.className = 'table-of-contents';
        tocContainer.style.cssText = `
            background: var(--background-secondary);
            padding: var(--spacing-lg);
            border-radius: var(--border-radius-lg);
            margin-bottom: var(--spacing-xl);
            border-left: 4px solid var(--primary-color);
        `;
        
        let tocHTML = '<h3 style="margin-bottom: var(--spacing-md); color: var(--text-primary);">📋 Table of Contents</h3><ul style="list-style: none; padding: 0;">';
        
        ARTICLE_CONTENT.tableOfContents.forEach((item, index) => {
            const indent = item.level === 2 ? 'margin-left: var(--spacing-lg);' : '';
            tocHTML += `
                <li style="${indent} margin-bottom: var(--spacing-sm);">
                    <a href="#${item.id}" style="color: var(--primary-color); text-decoration: none; display: block; padding: var(--spacing-xs) 0; border-radius: var(--border-radius-sm); transition: all 0.3s ease;">
                        ${index + 1}. ${item.title}
                    </a>
                </li>
            `;
        });
        
        tocHTML += '</ul>';
        tocContainer.innerHTML = tocHTML;
        
        const articleContent = document.getElementById('article-content');
        if (articleContent) {
            articleContent.insertBefore(tocContainer, articleContent.firstChild);
        }
    }
    
    populateTags() {
        const tagsContainer = document.getElementById('tags-container');
        if (tagsContainer) {
            const tagsHTML = BLOGPOST_META.tags.map(tag => 
                `<span class="badge badge-${tag.type}" style="font-size: 0.9rem;">${tag.text}</span>`
            ).join('');
            tagsContainer.innerHTML = tagsHTML;
        }
    }
    
    populateCTA() {
        const ctaContent = document.getElementById('post-cta-content');
        if (ctaContent) {
            ctaContent.innerHTML = `
                <h3 style="margin-bottom: var(--spacing-md); color: var(--text-primary);">${CTA_CONTENT.title}</h3>
                <p style="margin-bottom: var(--spacing-lg); color: var(--text-secondary);">${CTA_CONTENT.description}</p>
                <a href="${CTA_CONTENT.buttonLink}" class="btn btn-primary" style="display: inline-block; padding: var(--spacing-md) var(--spacing-lg); text-decoration: none; border-radius: var(--border-radius-md); font-weight: 600;">
                    ${CTA_CONTENT.buttonText}
                </a>
            `;
        }
    }
    
    populateRelatedPosts() {
        const relatedGrid = document.getElementById('related-posts-grid');
        if (relatedGrid) {
            const postsHTML = RELATED_POSTS.map(post => `
                <article class="related-post-card" style="background: var(--background-primary); border-radius: var(--border-radius-lg); overflow: hidden; box-shadow: var(--shadow-md); transition: transform 0.3s ease, box-shadow 0.3s ease; cursor: pointer;" onclick="window.location.href='${post.link}'">
                    <div class="post-image" style="height: 200px; overflow: hidden;">
                        <img src="${post.image}" alt="${post.title}" style="width: 100%; height: 100%; object-fit: ${post.imagePositioning?.objectFit || 'cover'}; object-position: ${post.imagePositioning?.objectPosition || 'center center'}; transform: scale(${post.imageScale || 1.0}); transition: transform 0.3s ease;">
                    </div>
                    <div class="post-content" style="padding: var(--spacing-lg);">
                        <div class="post-meta" style="margin-bottom: var(--spacing-sm);">
                            <span class="category" style="font-size: 0.85rem; color: var(--primary-color); font-weight: 600;">${post.category}</span>
                            <span style="margin: 0 var(--spacing-xs); color: var(--text-light);">•</span>
                            <span class="date" style="font-size: 0.85rem; color: var(--text-light);">${post.date}</span>
                        </div>
                        <h4 style="margin-bottom: var(--spacing-sm); color: var(--text-primary); font-size: 1.1rem; line-height: 1.4;">${post.title}</h4>
                        <p style="color: var(--text-secondary); font-size: 0.9rem; line-height: 1.5; margin: 0;">${post.excerpt}</p>
                    </div>
                </article>
            `).join('');
            
            relatedGrid.innerHTML = postsHTML;
        }
    }
    
    replacePlaceholders(text) {
        return text
            .replace(/\{\{BRAND_NAME\}\}/g, (window.BRAND_CONFIG && window.BRAND_CONFIG.name) || 'DC\'s Top 10')
            .replace(/\{\{NICHE\}\}/g, (window.NICHE_CONFIG && window.NICHE_CONFIG.niche) || 'Products')
            .replace(/\{\{PRODUCT_TYPE\}\}/g, (window.NICHE_CONFIG && window.NICHE_CONFIG.productType) || 'products');
    }
}

// Initialize the blog post manager
const blogPost3Manager = new BlogPost3Manager();

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        BLOGPOST_META,
        ARTICLE_CONTENT,
        CTA_CONTENT,
        RELATED_POSTS,
        BlogPost3Manager
    };
}

console.log('🎯 Blog Post 3 configuration loaded successfully');



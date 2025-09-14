// ===================================================================
// BLOG POST 2 CONFIGURATION - Cash Out vs Bet Builders: Which Adds More Value?
// ===================================================================
// This file controls all content for the individual blog post page
// Edit this file to customize the blog post content, meta data, and styling

// ========== POST META DATA ==========
const BLOGPOST_META = {
    title: "Cash Out vs Bet Builders: Which Adds More Value?",
    excerpt: "We compare cashout implementations and same‑game builders across major crypto sportsbooks—when to use each and pitfalls to avoid.",
    category: "Strategy",
    categoryColor: "success",
    date: "January 7, 2025",
    author: "Crypto Sportsbook Scout Team",
    readTime: 8,
    keywords: "cash out, bet builder, same game multi, sportsbook strategy, crypto betting tools",
    
    // Featured Image
    image: "./assets/images/sports-betting/bet-builder.png",
    imageAlt: "Cash out vs bet builder explainer",
    
    // Image positioning and scaling
    imageScale: 1.0,
    imagePositioning: {
        objectPosition: 'center',
        objectFit: 'cover'
    },
    
    // Social sharing
    socialImage: "./assets/images/sports-betting/bet-builder.jpg",
    
    // Tags for the post
    tags: [
        { text: "Cash Out", type: "secondary" },
        { text: "Builders", type: "success" },
        { text: "Strategy", type: "accent" },
        { text: "Crypto Sportsbook", type: "primary" }
    ]
};

// ========== ARTICLE CONTENT ==========
const ARTICLE_CONTENT = {
    // Table of Contents
    tableOfContents: [
        { id: "intro", title: "What Are These Features?", level: 1 },
        { id: "cashout", title: "Cash Out: Pros, Cons, Edge Cases", level: 1 },
        { id: "builders", title: "Bet Builders: Value Windows", level: 1 },
        { id: "live", title: "Live Context: Pricing, Delays, Limits", level: 1 },
        { id: "when", title: "When to Use Each", level: 1 },
        { id: "summary", title: "Quick Summary", level: 1 }
    ],
    
    // Main article sections
    sections: [
        {
            id: "intro",
            title: "What Are These Features?",
            content: `
                <p><strong>Cash Out</strong> lets you settle a position before full-time, while <strong>Bet Builders</strong> combine selections (often within one match). Both can be valuable if used deliberately.</p>
            `
        },
        {
            id: "cashout",
            title: "Cash Out: Pros, Cons, Edge Cases",
            content: `
                <ul>
                    <li><strong>Pros:</strong> risk management, reduce variance, exit stale positions.</li>
                    <li><strong>Cons:</strong> implied vig; poor pricing near rapid changes.</li>
                    <li><strong>Edge cases:</strong> suspension windows, partial cash outs, market availability.</li>
                </ul>
            `
        },
        {
            id: "builders",
            title: "Bet Builders: Value Windows",
            content: `
                <ul>
                    <li>Correlation can be priced tightly; value appears in niche combos.</li>
                    <li>Use player minutes/injury news; confirm settlement rules.</li>
                    <li>Small stakes; spread exposure; beware boost traps.</li>
                </ul>
            `
        },
        {
            id: "live",
            title: "Live Context: Pricing, Delays, Limits",
            content: `
                <ul>
                    <li>Expect suspensions near key events; confirm cash out during VAR/timeouts.</li>
                    <li>Builders may be disabled/live only for select markets.</li>
                    <li>Limit behavior differs by book; test small first.</li>
                </ul>
            `
        },
        {
            id: "when",
            title: "When to Use Each",
            content: `
                <ul>
                    <li><strong>Cash Out:</strong> volatile live spots, injury events, hedging multi‑legs.</li>
                    <li><strong>Builders:</strong> niche correlations you’ve modeled; small edge stacking.</li>
                </ul>
            `
        },
        {
            id: "summary",
            title: "Quick Summary",
            content: `
                <p><strong>Cash Out:</strong> manage variance; mind the vig. <strong>Builders:</strong> target niche correlations; watch limits. Test with small stakes and track outcomes.</p>
            `
        }
    ]
};

// ========== CTA CONTENT ==========
const CTA_CONTENT = {
    title: "📊 Find Books With Good Cash Out/Builders",
    description: "Compare feature depth and live performance across our Top 10.",
    buttonText: "Compare Now",
    buttonLink: "./index.html#comparison"
};

// ========== RELATED POSTS ==========
const RELATED_POSTS = [
    {
        title: "Crypto Sportsbook Guide: How to Choose the Right Book",
        excerpt: "Crypto-first sportsbook with 20+ coins, live streaming and SGM.",
        image: "./assets/images/sports-betting/guide.jpg",
        imageScale: 1.0,
        imagePositioning: {
            objectPosition: 'top center',
            objectFit: 'cover'
        },
        link: "./blogpost1.html",
        category: "Sportsbook Guide",
        date: "January 5, 2025"
    },
    {
        title: "Crypto Bonus Terms Explained: Rollover, Expiry, Limits",
        excerpt: "BTC, ETH, TRC20/Polygon stables—optimize costs and speed.",
        image: "./assets/images/sports-betting/bonus-terms.jpg",
        imageScale: 1.0,
        imagePositioning: {
            objectPosition: 'center',
            objectFit: 'fill'
        },
        link: "./blogpost3.html",
        category: "Bonus Guide",
        date: "January 4, 2025"
    }
    /* you can add more related posts here */
];

// ========== DYNAMIC CONTENT SYSTEM ==========
class BlogPost2Manager {
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
        console.log('✅ Blog Post 2 content system loaded');
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
        if (readTime) postDate && (readTime.textContent = `${BLOGPOST_META.readTime} min read`);
        
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
const blogPost2Manager = new BlogPost2Manager();

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        BLOGPOST_META,
        ARTICLE_CONTENT,
        CTA_CONTENT,
        RELATED_POSTS,
        BlogPost2Manager
    };
}

console.log('🎯 Blog Post 2 configuration loaded successfully');

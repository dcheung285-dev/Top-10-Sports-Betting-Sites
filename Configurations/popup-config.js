// Popup Overlay Configuration
// 
// QUICK MODE SWITCHING:
// Test Mode: Set testMode: true, showDelay: 0, maxShowsPerSession: 100
// Production Mode: Set testMode: false, showDelay: 180000, maxShowsPerSession: 1
//
window.POPUP_CONFIG = {
    // Global popup settings
    enabled: true,
    testMode: false, // CHANGE TO FALSE FOR PRODUCTION
    showDelay: 120000, // CHANGE TO 120000 (3 minutes) FOR PRODUCTION
    showOnAllPages: true,
    maxShowsPerSession: 100, // CHANGE TO 1 FOR PRODUCTION
    cookieExpiry: 0.2, // CHANGE TO 24 FOR PRODUCTION

    // Test mode settings (only applies when testMode: true)
    testModeSettings: {
        enabled: true,
        showImmediately: true, // Show popup immediately when page loads
        ignoreSessionLimits: true, // Ignore session and cookie limits
        showButton: true, // Add a test button to force show popup
        resetOnRefresh: true, // Reset all tracking on page refresh
        consoleLogging: true // Enable detailed console logging
    },

    // Overlay styling
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.85)', // Dark transparent background
        backdropFilter: 'blur(5px)',
        zIndex: 10000,
        animation: 'fadeIn 0.5s ease-out'
    },

    // Top curved section styling
    topSection: {
        enabled: true,
        height: '150px',
        background: 'linear-gradient(135deg, #87CEEB 0%, #4682B4 100%)', // Light blue gradient
        borderRadius: '20px 20px 50% 50%'
    },

    // Popup container styling
    container: {
        maxWidth: '500px',
        borderRadius: '20px',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
        position: 'relative',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        padding: '0',
        overflow: 'visible',
        // Border styling
        border: {
            width: '3px',
            color: 'rgba(255, 255, 255, 0.4)', // Light border color
            style: 'solid'
        }
    },

    // Close button styling
    closeButton: {
        background: 'rgba(255, 255, 255, 0.2)', // Circle background color
        color: '#FFFFFF', // X icon color
        hoverBackground: 'rgba(255, 255, 255, 0.3)', // Circle background on hover
        hoverColor: '#FFFFFF', // X icon color on hover
        size: '40px', // Button size
        fontSize: '20px' // X icon size
    },

    // Animation/Video at top
    topAnimation: {
        enabled: true,
        type: 'image', // 'video', 'animation', 'image'
        
        // Video settings
        video: {
            src: '', // Leave empty for animated gift box
            autoplay: true,
            loop: true,
            muted: true,
            preload: 'auto',
            playsinline: true,
            disablePictureInPicture: true
        },
        
        // Animation settings (CSS-based)
        animation: {
            type: 'giftBox', // 'giftBox', 'coins', 'trophy', 'custom'
            colors: ['#FFD700', '#FFA500', '#FF4757'],
            scale: 2.0,
            floatHeight: '50px'
        },
        
        // Image fallback
        image: {
            src: 'assets/images/casino_test/rocketpot_rocket.png',
            alt: 'Rocketpot Casino Rocket'
        },
        
        // Positioning
        position: {
            top: '-40px', // Partially outside container
            left: '50%',
            transform: 'translateX(-50%)',
            width: '90px',
            height: '90px'
        }
    },

    // Product/Brand info
    product: {
        name: 'Rocketpot Casino', // Only shows when logo type is 'text'
        
        // Logo configuration - supports both text and image logos
        logo: {
            type: 'image', // 'text', 'image', 'combined'
            
            // Text logo (emoji or icon) - Shows product name below
            text: {
                content: '🚀', // Emoji or icon class
                size: '50px',
                background: 'transparent',
                nameTextSize: '50px',
                nameTextColor: '#000000',
                layout: 'row',
                spacing: '0px'
            },
            
            // Image logo - Only shows image, no text
            image: {
                src: 'assets/images/casino_test/rocketpot_text_logo_white.webp', // leave path
                alt: 'Rocketpot Casino Logo',
                scale: 1.0,
                background: 'transparent'
            },
            
            // Combined logo (image + text)
            combined: {
                imageSrc: 'assets/images/casino_test/rocketpot_text_logo_white.webp',
                imageAlt: 'Rocketpot Casino Logo',
                imageWidth: '48px',
                imageHeight: '48px',
                imageScale: 1.2,
                textContent: 'Casino',
                textSize: '50px',
                textColor: '#000000',
                layout: 'row',
                spacing: '10px',
                background: 'transparent'
            }
        }
    },

    // Main content
    content: {
        title: 'EDITOR\'S CHOICE CASINO 2025!',
        titleColor: '#FFFFFF',
        titleSize: '32px',
        titleWeight: '800',
        titleShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        highlights: [
            { text: '20% Cashback', color: '#ffffff', background: 'rgba(192, 192, 192, 0.3)', border: '2px solid #87CEEB', fontSize: '18px', padding: '8px 16px', borderRadius: '25px' },
            { text: '100% Deposit Bonus', color: '#ffffff', background: 'rgba(192, 192, 192, 0.3)', border: '2px solid #87CEEB', fontSize: '18px', padding: '8px 16px', borderRadius: '25px' }
        ],
        description: '3,000+ games | 20+ coins | No posted withdrawal max\nTop Pick with fast payouts',
        descriptionColor: 'rgba(255, 255, 255, 0.9)',
        descriptionSize: '14px',
        descriptionLineHeight: '1.5'
    },

    // Call-to-action button
    cta: {
        text: 'Play Now at Rocketpot',
        link: 'https://rocketpot.io/',
        target: '_blank',
        background: 'linear-gradient(45deg, #87CEEB, #4682B4)',
        color: '#FFFFFF',
        fontSize: '18px',
        fontWeight: '700',
        padding: '15px 40px',
        borderRadius: '30px',
        border: 'none',
        boxShadow: '0 8px 20px rgba(70, 130, 180, 0.4)',
        hover: {
            glowColor: '#87CEEB',
            glowIntensity: '0.8',
            glowSize: '25px',
            backgroundHover: 'linear-gradient(45deg, #87CEEB, #4682B4)',
            transform: 'translateY(-22px)',
            transition: 'all 0.3s ease'
        },
        animation: { hover: 'pulse 2s infinite', click: 'bounce 0.3s ease' }
    },

    // Close button
    closeButton: {
        size: '40px',
        background: 'rgba(255, 255, 255, 0.2)',
        color: '#FFFFFF',
        borderRadius: '50%',
        position: 'absolute',
        top: '15px',
        right: '15px',
        fontSize: '20px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        transition: 'all 0.3s ease'
    },

    // Advanced options
    advanced: {
        // Custom CSS classes
        customClasses: {
            overlay: 'custom-popup-overlay',
            container: 'custom-popup-container',
            content: 'custom-popup-content'
        },
        
        // Trigger conditions
        triggers: {
            timeOnPage: true, // Use showDelay
            scrollPercentage: false, // Alternative trigger
            scrollValue: 50, // Percentage of page scrolled
            exitIntent: false, // Show when user tries to leave
            pageViews: false, // Show after X page views
            pageViewCount: 3
        },
        
        // A/B testing
        variants: [
            {
                name: 'default',
                weight: 100 // Percentage chance to show this variant
            }
        ]
    }
};

// Helper functions for easy mode switching
window.POPUP_HELPERS = {
    // Switch to test mode for development
    enableTestMode: function() {
        window.POPUP_CONFIG.testMode = true;
        window.POPUP_CONFIG.showDelay = 0;
        window.POPUP_CONFIG.maxShowsPerSession = 100;
        window.POPUP_CONFIG.cookieExpiry = 0;
        console.log('✅ Popup TEST MODE enabled');
        console.log('- Immediate showing');
        console.log('- Test buttons added');
        console.log('- No session limits');
        console.log('- Refresh page to see changes');
    },
    
    // Switch to production mode
    enableProductionMode: function() {
        window.POPUP_CONFIG.testMode = false;
        window.POPUP_CONFIG.showDelay = 180000; // 3 minutes
        window.POPUP_CONFIG.maxShowsPerSession = 1;
        window.POPUP_CONFIG.cookieExpiry = 24; // 24 hours
        console.log('🚀 Popup PRODUCTION MODE enabled');
        console.log('- 3 minute delay');
        console.log('- Once per session');
        console.log('- 24 hour cookie expiry');
        console.log('- Refresh page to see changes');
    },
    
    // Show popup immediately for testing
    showNow: function() {
        if (window.popupManager) {
            window.popupManager.forceShow();
        } else {
            console.log('❌ Popup manager not initialized yet');
        }
    },
    
    // Reset all popup tracking
    reset: function() {
        if (window.popupManager) {
            window.popupManager.reset();
            console.log('🔄 Popup tracking reset');
        } else {
            console.log('❌ Popup manager not initialized yet');
        }
    }
};

// Export for module usage if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = window.POPUP_CONFIG;
} 
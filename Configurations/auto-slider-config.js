/**
 * AUTO SLIDER CONFIGURATION
 * 
 * This file configures the auto slider system that can be integrated into any page.
 * Similar to the nav bar and newsletter system, this creates modular sliders.
 */

const AUTO_SLIDER_CONFIG = {
    // Global slider settings
    global: {
        animationSpeed: 30, // Speed of animation in pixels per second
        pauseOnHover: true, // Pause animation when hovering
        showControls: false, // Show play/pause controls
        responsive: true, // Enable responsive behavior
        // NOTE: Gaps are now set manually for each image using the 'gap' property
    },

    // Slider 1 - Top slider (moving left) - Text Logos
    slider1: {
        id: 'auto-slider-1',
        direction: 'left', // 'left' or 'right'
        height: '120px', // Height of the slider
        animationSpeed: 35, // Override global speed if needed
        images: [
            {
                src: './assets/images/casino_test/rocketpot_text_logo_black.webp',
                alt: 'Rocketpot',
                width: 'auto', // 'auto' or specific width like '120px'
                height: '60px', // Height of individual images
                scale: 1.2, // Scale factor (1.0 = 100%, 1.2 = 120%, 0.8 = 80%, etc.)
                gap: 25     // Manual gap after this image (in pixels)
            },
            {
                src: './assets/images/casino_test/stake_text_logo_black.svg',
                alt: 'Stake',
                width: 'auto', // 'auto' or specific width like '120px'
                height: '60px', // Height of individual images
                scale: 0.75, // Scale factor (1.0 = 100%, 1.2 = 120%, 0.8 = 80%, etc.)
                gap: 90 // Manual gap after this image (in pixels)
            },
            {
                src: './assets/images/sports-betting/cloudbet_logo.png',
                alt: 'Cloudbet',
                width: 'auto',
                height: '60px',
                scale: 2.7,
                gap: 85 // Manual gap after this image (in pixels)
            },
            {
                src: './assets/images/sports-betting/sportsbet.io_logo.png',
                alt: 'Sportsbet.io',
                width: 'auto',
                height: '60px',
                scale: 1.0,
                gap: 85   // Larger gap for scaled image
            },
            {
                src: './assets/images/casino_test/luckyblock_text_logo_black.webp',
                alt: 'LuckyBlock',
                width: 'auto',
                height: '60px',
                scale: 2.0,
                gap: 90    // Larger gap for scaled image
            },
            {
                src: './assets/images/casino_test/shuffle_text_logo_black.webp',
                alt: 'Shuffle',
                width: 'auto',
                height: '60px',
                scale: 1.2,
                gap: -60    // Larger gap for scaled image
            },
            {
                src: './assets/images/sports-betting/thunderpick_logo.png',
                alt: 'Thunderpick',
                width: 'auto',
                height: '60px',
                scale: 0.5,
                gap: -30    // Larger gap for scaled image
            },
            {
                src: './assets/images/casino_test/bc.game_text_logo_black.png',
                alt: 'BC.Game',
                width: 'auto',
                height: '60px',
                scale: 1.4,
                gap: 85 // Much larger gap for heavily scaled image
            },
            {
                src: './assets/images/sports-betting/fortunejack_logo.png',
                alt: 'FortuneJack',
                width: 'auto',
                height: '60px',
                scale: 1.3,
                gap: 65 // Medium gap for moderately scaled image
            },
            {
                src: './assets/images/casino_test/vave_text_logo_black.webp',
                alt: 'Vave',
                width: 'auto',
                height: '60px',
                scale: 1.0,
                gap: 1    // Large gap for heavily scaled image
            },
            {
                src: './assets/images/casino_test/rainbet_text_logo_black.webp',
                alt: 'Rainbet',
                width: 'auto',
                height: '60px',
                scale: 1.0,
                gap: 1    // Large gap for heavily scaled image
            },
        ],
        styling: {
            backgroundColor: 'transparent',
            borderRadius: '12px',
            padding: '10px 0',
            margin: '20px 0',
            boxShadow: 'none',
            border: 'none'
        }
    },

    // Slider 2 - Bottom slider (moving right) - Bigger with Casino Images
    slider2: {
        id: 'auto-slider-2',
        direction: 'right', // 'left' or 'right'
        height: '360px', // Bigger height for the slider
        animationSpeed: 25, // Different speed for variety
        images: [
            {
                src: 'assets/images/sports-betting/sport1.avif',
                alt: 'Sport1',
                width: 'auto',
                height: '180px', // Bigger images
                scale: 1.0, // Scale factor for individual sizing adjustments
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/sports-betting/sport2.webp',
                alt: 'Sport2',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/sports-betting/sport3.jpeg',
                alt: 'Sport3',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/sports-betting/sport4.jpg',
                alt: 'Sport4',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/sports-betting/sport5.webp',
                alt: 'Sport5',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/sports-betting/sport6.webp',
                alt: 'Sport6',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/sports-betting/sport7.webp',
                alt: 'Sport7',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/sports-betting/sport8.webp',
                alt: 'Sport8',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/sports-betting/sport9.jpg',
                alt: 'Sport9',
                width: 'auto',
                height: '180px',
                scale: 1.0
            },
            {
                src: 'assets/images/sports-betting/sport10.jpg',
                alt: 'Sport10',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/sports-betting/sport11.jpg',
                alt: 'Sport11',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/sports-betting/sport12.jpg',
                alt: 'Sport12',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/sports-betting/sport13.avif',
                alt: 'Sport13',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/sports-betting/sport14.webp',
                alt: 'Sport14',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/sports-betting/sport15.jpg',
                alt: 'Sport15',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/sports-betting/sport16.webp',
                alt: 'Sport16',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/sports-betting/sport17.jpg',
                alt: 'Sport17',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/sports-betting/sport18.jpeg',
                alt: 'Sport18',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/sports-betting/sport19.webp',
                alt: 'Sport19',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/sports-betting/sport20.jpg',
                alt: 'Sport20',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/sports-betting/sport21.webp',
                alt: 'Sport21',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/sports-betting/sport22.jpg',
                alt: 'Sport22',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/sports-betting/sport23.jpg',
                alt: 'Sport23',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
        ],
        styling: {
            backgroundColor: 'transparent',
            borderRadius: '12px',
            padding: '10px 0',
            margin: '20px 0',
            boxShadow: 'none',
            border: 'none'
        }
    },
/*
    // Slider 3 - Top slider (moving left) - crypto icons
    slider3: {
        id: 'auto-slider-3',
        direction: 'left', // 'left' or 'right'
        height: '120px', // Height of the slider
        animationSpeed: 35, // Override global speed if needed
        images: [
            {
                src: 'assets/images/casino_test/tether.webp',
                alt: 'Tether',
                width: 'auto', // 'auto' or specific width like '120px'
                height: '60px', // Height of individual images
                scale: 1.5, // Scale factor (1.0 = 100%, 1.2 = 120%, 0.8 = 80%, etc.)
                gap: 20     // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/casino_test/bitcoin.jpg',
                alt: 'Bitcoin',
                width: 'auto', // 'auto' or specific width like '120px'
                height: '60px', // Height of individual images
                scale: 1.5, // Scale factor (1.0 = 100%, 1.2 = 120%, 0.8 = 80%, etc.)
                gap: 20 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/casino_test/eth.webp',
                alt: 'Ethereum',
                width: 'auto',
                height: '60px',
                scale: 1.5,
                gap: 20 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/casino_test/solana.webp',
                alt: 'Solana',
                width: 'auto',
                height: '60px',
                scale: 1.5,
                gap: 20    // Larger gap for scaled image
            },
            {
                src: 'assets/images/casino_test/doge.webp',
                alt: 'Dogecoin',
                width: 'auto',
                height: '60px',
                scale: 1.5,
                gap: 20    // Larger gap for scaled image
            },
            {
                src: 'assets/images/casino_test/litecoin.webp',
                alt: 'Litecoin',
                width: 'auto',
                height: '60px',
                scale: 1.2,
                gap: 20    // Larger gap for scaled image
            },
            {
                src: 'assets/images/casino_test/tether.webp',
                alt: 'Tether',
                width: 'auto', // 'auto' or specific width like '120px'
                height: '60px', // Height of individual images
                scale: 1.5, // Scale factor (1.0 = 100%, 1.2 = 120%, 0.8 = 80%, etc.)
                gap: 20     // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/casino_test/bitcoin.jpg',
                alt: 'Bitcoin',
                width: 'auto', // 'auto' or specific width like '120px'
                height: '60px', // Height of individual images
                scale: 1.5, // Scale factor (1.0 = 100%, 1.2 = 120%, 0.8 = 80%, etc.)
                gap: 20 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/casino_test/eth.webp',
                alt: 'Ethereum',
                width: 'auto',
                height: '60px',
                scale: 1.5,
                gap: 20 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/casino_test/solana.webp',
                alt: 'Solana',
                width: 'auto',
                height: '60px',
                scale: 1.5,
                gap: 20    // Larger gap for scaled image
            },
            {
                src: 'assets/images/casino_test/doge.webp',
                alt: 'Dogecoin',
                width: 'auto',
                height: '60px',
                scale: 1.5,
                gap: 20    // Larger gap for scaled image
            },
            {
                src: 'assets/images/casino_test/litecoin.webp',
                alt: 'Litecoin',
                width: 'auto',
                height: '60px',
                scale: 1.2,
                gap: 20    // Larger gap for scaled image
            },
        ],
        styling: {
            backgroundColor: 'transparent',
            borderRadius: '12px',
            padding: '10px 0',
            margin: '20px 0',
            boxShadow: 'none',
            border: 'none'
        }
    }, */

    // Responsive settings for different screen sizes
    responsive: {
        desktop: {
            // Top slider (text logos)
            slider1Height: '120px',
            slider1ImageHeight: '60px',
            // Bottom slider (casino images - bigger)
            slider2Height: '360px',
            slider2ImageHeight: '180px',
            // Crypto slider (same as text logos)
            slider3Height: '120px',
            slider3ImageHeight: '60px',
            gap: '30px'
        },
        tablet: {
            // Top slider (text logos)
            slider1Height: '70px',
            slider1ImageHeight: '35px',
            // Bottom slider (casino images)
            slider2Height: '100px',
            slider2ImageHeight: '75px',
            // Crypto slider (same as text logos)
            slider3Height: '70px',
            slider3ImageHeight: '35px',
            gap: '20px'
        },
        mobile: {
            // Top slider (text logos)
            slider1Height: '60px',
            slider1ImageHeight: '30px',
            // Bottom slider (casino images)
            slider2Height: '80px',
            slider2ImageHeight: '60px',
            // Crypto slider (same as text logos)
            slider3Height: '60px',
            slider3ImageHeight: '30px',
            gap: '15px'
        },
        extraSmall: {
            // Top slider (text logos)
            slider1Height: '50px',
            slider1ImageHeight: '25px',
            // Bottom slider (casino images)
            slider2Height: '70px',
            slider2ImageHeight: '50px',
            // Crypto slider (same as text logos)
            slider3Height: '50px',
            slider3ImageHeight: '25px',
            gap: '10px'
        }
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AUTO_SLIDER_CONFIG;
}

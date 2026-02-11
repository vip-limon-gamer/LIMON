// Add this code to the TOP of your script.js file

// Auto-play background music
document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('background-music');
    
    // Try to play music automatically
    const playMusic = () => {
        music.play().catch(() => {
            // If autoplay is blocked, play on first user interaction
            const startMusic = () => {
                music.play();
                document.removeEventListener('click', startMusic);
                document.removeEventListener('touchstart', startMusic);
            };
            document.addEventListener('click', startMusic);
            document.addEventListener('touchstart', startMusic);
        });
    };
    
    // Start music after loading screen
    setTimeout(playMusic, 3500);
});
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('main-content');

    setTimeout(() => {
        loader.classList.add('hidden');
        mainContent.classList.add('visible');
        document.body.style.overflow = 'auto';
    }, 3000);
});

document.addEventListener('DOMContentLoaded', () => {
    document.body.style.overflow = 'hidden';
    
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('main-content');

    setTimeout(() => {
        loader.classList.add('hidden');
        mainContent.classList.add('visible');
        document.body.style.overflow = 'auto';
    }, 3500);
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

window.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const galleryItems = document.querySelectorAll('.gallery-item');

    cards.forEach(card => observer.observe(card));
    galleryItems.forEach(item => observer.observe(item));
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.profile-image-wrapper');
            
            parallaxElements.forEach(el => {
                const speed = 0.5;
                el.style.transform = `translateY(${scrolled * speed}px)`;
            });
            
            ticking = false;
        });
        ticking = true;
    }
});

// Disable right-click on images
document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
        
        // Show custom message
        const message = document.createElement('div');
        message.textContent = 'Image downloading is disabled';
        message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0, 217, 255, 0.9);
            color: #fff;
            padding: 20px 40px;
            border-radius: 10px;
            font-size: 18px;
            z-index: 10001;
            animation: fadeOut 2s forwards;
        `;
        
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.remove();
        }, 2000);
        
        return false;
    }
});

// Disable keyboard shortcuts for saving images
document.addEventListener('keydown', (e) => {
    // Disable Ctrl+S, Cmd+S
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        return false;
    }
    // Disable Print Screen
    if (e.key === 'PrintScreen') {
        e.preventDefault();
        return false;
    }
});

// Disable drag and drop on all images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('dragstart', (e) => {
        e.preventDefault();
        return false;
    });
    
    img.addEventListener('mousedown', (e) => {
        e.preventDefault();
        return false;
    });
});

// Disable long press on mobile devices
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('touchstart', (e) => {
        e.preventDefault();
    });
    
    img.addEventListener('touchmove', (e) => {
        e.preventDefault();
    });
});

// Add fadeOut animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        0% { opacity: 1; }
        70% { opacity: 1; }
        100% { opacity: 0; }
    }
`;
document.head.appendChild(style);

// Create floating hearts background
function createFloatingHearts() {
    const container = document.getElementById('floatingHearts');
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 15 + 's';
        heart.style.animationDuration = (Math.random() * 10 + 10) + 's';
        heart.style.fontSize = (Math.random() * 25 + 15) + 'px';
        container.appendChild(heart);
    }
}

createFloatingHearts();

// Click button functionality
document.getElementById('clickBtn').addEventListener('click', function() {
    this.classList.add('hidden');
    
    setTimeout(() => {
        this.style.display = 'none';
        const container = document.getElementById('animationContainer');
        container.classList.add('active');
        
        // Start all animations
        startAnimations();
    }, 500);
});

function startAnimations() {
    const pandaImage = document.getElementById('pandaImage');
    const heartOutline = document.getElementById('heartOutline');
    const heartPhoto = document.getElementById('heartPhoto');
    const loveText = document.getElementById('loveText');
    const contentWrapper = document.getElementById('contentWrapper');

    // Step 1: Panda appears (0-2s)
    pandaImage.classList.add('show');

    // Step 2: Love text appears smoothly right after panda (2-4s) - STAYS VISIBLE
    loveText.classList.add('show');

    // Step 3: Couple photo fades in smoothly inside the red heart (6.5-8.5s)
    // Red heart stays visible, photo appears on top with 0 to 80% opacity
    heartPhoto.classList.add('show');

    // Step 4: Heart pulse effect starts right after photo appears (9s+)
    setTimeout(() => {
        heartOutline.classList.add('pulse');
    }, 9000);

    // Step 5: Glow effect starts with heartbeat (9s+)
    setTimeout(() => {
        contentWrapper.classList.add('glow');
        createSparkles();
    }, 9000);

    // Create continuous particles
    setInterval(() => {
        createParticle();
    }, 300);
}

// Sparkle effects around the content
function createSparkles() {
    const container = document.querySelector('.animation-container');
    const positions = [
        { top: '10%', left: '15%' },
        { top: '20%', left: '85%' },
        { top: '40%', left: '10%' },
        { top: '40%', left: '90%' },
        { top: '60%', left: '12%' },
        { top: '60%', left: '88%' },
        { top: '75%', left: '20%' },
        { top: '75%', left: '80%' },
        { top: '15%', left: '50%' },
        { top: '85%', left: '50%' },
        { top: '30%', left: '30%' },
        { top: '30%', left: '70%' },
        { top: '55%', left: '25%' },
        { top: '55%', left: '75%' },
    ];

    positions.forEach((pos, i) => {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.top = pos.top;
            sparkle.style.left = pos.left;
            sparkle.style.animationDelay = (Math.random() * 2) + 's';
            container.appendChild(sparkle);
            sparkle.classList.add('active');
        }, i * 80);
    });
}

// Particle effects floating up
function createParticle() {
    const container = document.querySelector('.panda-heart-container');
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const startX = Math.random() * 100;
    const endX = (Math.random() - 0.5) * 100;
    
    particle.style.left = startX + '%';
    particle.style.bottom = '0';
    particle.style.setProperty('--tx', endX + 'px');
    particle.style.animationDelay = (Math.random() * 2) + 's';
    particle.style.animationDuration = (Math.random() * 2 + 3) + 's';
    
    container.appendChild(particle);
    particle.classList.add('active');
    
    // Remove after animation
    setTimeout(() => {
        particle.remove();
    }, 6000);
}

// Extra floating hearts during animation
function addExtraHearts() {
    const container = document.getElementById('floatingHearts');
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.innerHTML = '💕';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
            heart.style.animationDuration = (Math.random() * 8 + 8) + 's';
            container.appendChild(heart);
        }, i * 1000);
    }
}

// Trigger extra hearts after text appears
setTimeout(() => {
    addExtraHearts();
}, 11000);
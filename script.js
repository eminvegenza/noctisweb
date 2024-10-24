document.addEventListener("DOMContentLoaded", function() {
    const metinElementi = document.getElementById("metin");
    const yazilacakMetin = `
    4 yıldır yazılımla ilgileniyorum.  
    C#, JavaScript, Python, HTML ve CSS dilleriyle projeler geliştirdim.  
    C# ile masaüstü, JavaScript ve HTML/CSS ile web uygulamaları oluşturdum.  
    Python ise veri analizi ve otomasyonda kullandığım güçlü bir araç oldu.  
    Bu süreçte becerilerimi geliştirdim ve yeni teknolojilere adapte olmayı öğrendim.
    
    
    E♥Z
    `;

    let index = 0;

    // Function to type the text
    function yazdir() {
        if (index < yazilacakMetin.length) {
            metinElementi.innerHTML += yazilacakMetin[index];
            index++;
            setTimeout(yazdir, 15); 
        } else {
            // Once text finishes typing, reveal social icons
            revealSocialIcons();
        }
    }

    // Start typing
    yazdir();

    // Function to reveal social icons
    function revealSocialIcons() {
        const socialItems = document.querySelectorAll('.social-item');
        socialItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('revealed');
            }, index * 300); // Stagger by 300ms
        });
    }

    // Scroll effect for navbar
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            navbar.classList.add('scrolled'); // Add class on scroll
        } else {
            navbar.classList.remove('scrolled'); // Remove class when at the top
        }
    });

    // Adjust navbar glow effect based on mouse position
    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { offsetWidth, offsetHeight, getBoundingClientRect } = navbar;
        const rect = getBoundingClientRect();
        const centerX = rect.left + offsetWidth / 2;
        const centerY = rect.top + offsetHeight / 2;

        // Calculate distance from the center of the navbar
        const deltaX = clientX - centerX;
        const deltaY = clientY - centerY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        // Define the glow intensity based on the distance
        const maxGlow = 30; // Maximum glow radius
        const glowDistance = Math.max(0, maxGlow - distance / 3); // Adjust divisor for sensitivity
        navbar.style.boxShadow = `0 0 ${glowDistance}px rgba(76, 0, 255, 1), 0 0 ${glowDistance * 1.5}px rgba(76, 0, 255, 0.5)`;
    });
});

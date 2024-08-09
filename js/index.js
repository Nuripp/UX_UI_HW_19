console.log("Your index.js file is loaded correctly!");


/* Nav hover state */
$('nav li').hover(
    function() {
        // mouse enter
        if (!$(this).find('a').hasClass('active')) {
            $(this).addClass('nav-hover');
        }
    },
    function() {
        // mouse leaves
        if (!$(this).find('a').hasClass('active')) {
            $(this).removeClass('nav-hover');
        }
    }
);

/* text animation */
document.addEventListener("DOMContentLoaded", function() {
    const text = "Hello, I'm Nuri! Nice to meet you";
    let index = 0;
    const typingSpeed = 100; 
    const typingElement = document.getElementById('typing-text');
    const cursorElement = document.getElementById('cursor');

    function type() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, typingSpeed);
        } else {
            cursorElement.style.display = 'inline';
        }
    }

    type();
});


/* Back to Top button */
document.addEventListener("DOMContentLoaded", function() {
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


/* Mobile hamburger menu*/
document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const overlayNav = document.getElementById('overlay-nav');
    const mobileHeader = document.querySelector('.mobile-header');

    menuIcon.addEventListener('click', function() {
        overlayNav.classList.toggle('show');
        if (overlayNav.classList.contains('show')) {
            mobileHeader.style.display = 'none';
        } else {
            mobileHeader.style.display = 'flex';
        }
    });

    closeIcon.addEventListener('click', function() {
        overlayNav.classList.remove('show');
        mobileHeader.style.display = 'flex';
    });
});
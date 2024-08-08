console.log("Your index.js file is loaded correctly!");

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

document.addEventListener("DOMContentLoaded", function() {
    const text = "Hello, I'm Nuri! Nice to meet you";
    let index = 0;
    const typingSpeed = 100; // 타이핑 속도 조정 (밀리초 단위)
    const typingElement = document.getElementById('typing-text');
    const cursorElement = document.getElementById('cursor');

    function type() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, typingSpeed);
        } else {
            cursorElement.style.display = 'inline'; // 타이핑이 끝나면 커서 표시
        }
    }

    type();
});
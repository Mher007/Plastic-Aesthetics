// JavaScript для анимации появления блоков при прокрутке
window.addEventListener('scroll', () => {
    const blocks = document.querySelectorAll('.container');
    blocks.forEach(block => {
        if (window.innerHeight > block.getBoundingClientRect().top + 100) {
            block.classList.add('show');
        }
    });
});

// JavaScript для анимации появления кнопки при загрузке страницы
window.addEventListener('load', () => {
    const btn = document.querySelector('.btn');
    btn.classList.add('show');
});


    // git status
    // git add .
    // git commit -m "1"
    // git push
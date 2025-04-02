const blockWindow = document.querySelector('.reveal');

const blocks = document.querySelectorAll('.reveal')

blocks.forEach(e => {

    setInterval(() => {

        const top2 = e.getBoundingClientRect().top;
        const bottom2 = e.getBoundingClientRect().bottom;
    
        if (top2 < window.innerHeight) {
            e.classList.add('reveal_active');
        }
    
        if (bottom2 < 0) {
            e.classList.remove('reveal_active');
        } else if (top2 > window.innerHeight) {
            e.classList.remove('reveal_active');
        }

    }, 500)

})
const blockWindow = document.querySelectorAll('.reveal')

blockWindow.forEach(e => {

    const { top, bottom } = e.getBoundingClientRect();

    if (bottom < 0) {
        e.classList.add('reveal_active')
    }

    if (top > window.innerHeight) {
        e.classList.add('reveal_active')
    }
    
})
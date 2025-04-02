// блок текста
const textBlock = document.querySelector('.book__content');

const buttonBlock = document.querySelectorAll('.font-size')

// 'font-size_active'

Array.from(buttonBlock).forEach(el => {

    el.addEventListener('click', function() {
        if (Array.from(buttonBlock).indexOf(el) === 0) {
            textBlock.classList.toggle('font-size_small');
            textBlock.classList.remove('font-size_big');
        } else if (Array.from(buttonBlock).indexOf(el) === 1) {
            textBlock.classList.remove('font-size_big');
            textBlock.classList.remove('font-size_small');
        } else {
            textBlock.classList.add('font-size_big');
            textBlock.classList.remove('font-size_small');
        }

        for (let i = 0; i < Array.from(buttonBlock).length; i++) {
            Array.from(buttonBlock)[i].classList.remove('font-size_active')
        }

        el.classList.add('font-size_active')

    })

})


const links = document.querySelectorAll('a')

links.forEach(el => {
    el.onclick = () => {return false}
})
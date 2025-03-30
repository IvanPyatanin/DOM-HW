// блок текста
const textBlock = document.querySelector('.book__content');

// блок с копками
// const buttonBlock = document.querySelector('.book__control_font-size').children;

const buttonBlock = document.querySelectorAll('.font-size')

Array.from(buttonBlock).forEach(el => {

    el.addEventListener('click', function() {
        if (Array.from(buttonBlock).indexOf(el) === 0) {
            textBlock.classList.add('font-size_small')
        } else if (Array.from(buttonBlock).indexOf(el) === 1) {
            textBlock.classList.add('font-size_active')
        } else {
            textBlock.classList.add('font-size_big')
        }
    })

})


const links = document.querySelectorAll('a')

links.forEach(el => {
    el.onclick = () => {return false}
})
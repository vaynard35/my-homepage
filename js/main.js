
//init responsive navbar
const nav = new NavComponent('nav')
nav.init()


//init 'matrix animation
const canvas = document.querySelector('canvas')
initMatrix(canvas)


//init text animations on computer screen at the top
const typedElement1 = document.querySelector('.first-line')
const typedElement2 = document.querySelector('.second-line')
const typedElement3 = document.querySelector('.third-line')
const typedElement4 = document.querySelector('.fourth-line')
        

const texts = ['Paweł Kołaciński','Programowanie WWW', 'Frontend oraz Backend', 'Specjalizacja: React i Laravel' ]

setTimeout( () => {
            initTypingAnimation(typedElement1, texts[0], 100)
            setTimeout(() => initTypingAnimation(typedElement2,texts[1] , 100),texts[0].length*100)
            setTimeout(() => initTypingAnimation(typedElement3,texts[2] , 100),(texts[0].length+texts[1].length)*100)
            setTimeout(() => initTypingAnimation(typedElement4, texts[3], 100),(texts[0].length + texts[1].length + texts[2].length)*100)
}, 1000);


//handle form submission

const form = document.querySelector('form')
const formUrl = 'http://127.0.0.1:5500/index.html'


form.addEventListener('submit', e => {
    e.preventDefault()

    const data = new FormData(e.target)


    fetch(formUrl, {body: data, method: 'POST' } )
        .then(respnse => {

            form.reset()
            document.querySelector('.response_ok').classList.remove('hide')
            document.querySelector('.response_error').classList.add('hide')

        })
        .catch(error => {
            document.querySelector('.response_ok').classList.add('hide')
            document.querySelector('.response_error').classList.remove('hide')
            document.querySelector('.error_message').innerHTML = error.message
        }
            )

    
})
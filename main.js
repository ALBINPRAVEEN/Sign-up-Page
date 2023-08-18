const lang = document.querySelector('.lang')
const menu = document.querySelector('.lang-menu')

lang.addEventListener('click' , ()=>{
    menu.classList.toggle('drop')
})

const input = document.querySelectorAll('.input')

input.forEach(btn=>{
    btn.addEventListener('focus' , ()=>{
        btn.classList.add('active')
    })

    btn.addEventListener('blur' , ()=>{

        if(btn.value === ''){

            btn.classList.remove('active')
        }
    })
})


const toggleIcon = document.querySelector('.icons')
const passInput = document.querySelector('.pass')


toggleIcon.addEventListener('click' ,()=>{
    if(passInput.type === 'password'){
        passInput.type = 'text'
    }else{
        passInput.type = 'password'
    }
    toggleIcon.classList.toggle('active')
})

const btn = document.querySelector('.filters-1')
const dropContent = document.querySelector('.filters-2')
const apply = document.querySelector('.centerBox')
const back = document.querySelector('#back')
const callback = () => {
    if(dropContent.classList.contains('active')){
        dropContent.classList.remove('active')
        btn.classList.add('active')
    }
}

const callback1 = () =>{
    console.log('Hel')
    dropContent.classList.add('active')
    btn.classList.remove('active')
}
btn.addEventListener('click', callback)
apply.addEventListener('click', callback1)
back.addEventListener('click', callback1)
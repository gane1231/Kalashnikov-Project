
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



function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }else{
      change.target.classList.remove('element-show');
    }
  });
}

let options = {
  threshold: [0] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
  observer.observe(elm);
}
const button = document.querySelector('.top-search-button');
const form = document.querySelector('.bottom-search-form');

button.addEventListener('click', function(evt){
    // debugger;
    evt.preventDefault();
    form.classList.remove('display-none');
    form.classList.add('form-animation');
});

console.log(button);
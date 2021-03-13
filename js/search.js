const button = document.querySelector('.top-search-button');
const form = document.querySelector('.bottom-search-form');

button.addEventListener('click', function(evt){
    evt.preventDefault();
    button.classList.add('display-none');
});


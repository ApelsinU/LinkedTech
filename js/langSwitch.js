document.addEventListener('DOMContentLoaded', function() {

    const switchBtn = document.querySelector('.lang-switch__btn');
    const langList = document.querySelector('.lang-switch__list');
    const langSwitch = document.querySelector('.lang-switch');

    switchBtn.addEventListener('click', function(){
        switchBtn.classList.toggle('clicked');

        if (langList.style.display === 'none') {
            langList.style.display = 'flex';
        } else {
            langList.style.display = 'none';
        }
    });


    langSwitch.addEventListener('mouseleave', function(event) {
        langList.style.display = 'none';
        switchBtn.classList.remove('clicked');
    });

    window.onload = function ready() {
        langList.style.display = 'none';
    }

}, false);

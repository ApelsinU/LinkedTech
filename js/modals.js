document.addEventListener('DOMContentLoaded', function() {

    const modalImg = document.querySelector('.modal-product_img');

    function modalShow(openBtnList, productPhotosList) {
        const closeBtn = document.getElementById('#modalCloseBtn');
        const productModal = document.getElementById('#productModal');
        const body = document.getElementsByTagName('body');

        openBtnList.forEach(function(btn){
            btn.addEventListener('click', function() {
                let currBtn = btn.getAttribute('data-attr');

                productModal.style.display = 'flex';
                body[0].classList.add('no-scroll');

                modalImg.src = productPhotosList[currBtn].src;
            });
        });

        closeBtn.addEventListener('click', function() {
            productModal.style.display = 'none';
            body[0].classList.remove('no-scroll');
        });
    }

    function likeToggle(likeBtnList) {
        likeBtnList.forEach(function(btn){
            btn.addEventListener('click', function() {
                btn.classList.toggle('fas');
                btn.classList.toggle('far');

                // create cool like-animation
            });
        });
    }

    const tabsBtn = document.querySelectorAll('.product__nav-btn');
    tabsBtn.forEach(function (btn) {
        btn.addEventListener('click', function() {
            let btnList = document.querySelectorAll('.open-btn');
            let photoList = document.querySelectorAll('.product__card__photo__img');
            modalShow(btnList, photoList);

            const likeBtnList = document.querySelectorAll('.like-btn');
            likeToggle(likeBtnList);
        });
    });

    const defaultTabsBtn = document.querySelector('.product__nav-btn');
    defaultTabsBtn.click();

}, false);










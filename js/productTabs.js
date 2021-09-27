document.addEventListener('DOMContentLoaded', function() {

    const products = [
        [                                                       // RECENT ARRIVAL
            [
                "Get up to 10% off Today Only!",
                [
                    "../images/product/mouse-white.jpg", // white
                    "../images/product/mouse-black.jpg", // black
                ],
                "iOS Mouse",
                "$ 277.99",
                "$ 249.99"
            ],
            [
                "Get up to 20% off Today Only!",
                ["../images/product/2.png"],
                "Black iPhone Speaker",
                "$ 312.99",
                "$ 249.99"
            ],
            [
                "Get up to 50% off Today Only!",
                ["../images/product/3.png"],
                "iOS Keyboard",
                "$ 499.99",
                "$ 249.99"
            ],

            [
                "Get up to 50% off Today Only!",
                ["../images/product/4.png"],
                "Mackbook Pro",
                "$ 4099.99",
                "$ 2049.99"
            ],
            [
                "Get up to 50% off Today Only!",
                ["../images/product/5.png"],
                "Black Headphone",
                "$ 499.99",
                "$ 249.99"
            ],
            [
                "Get up to 50% off Today Only!",
                ["../images/product/6.png"],
                "iPhone Speaker",
                "$ 499.99",
                "$ 249.99"
            ],
        ],
        [                                               // BEST SELLERS
            [
                "Get up to 50% off Today Only!",
                ["../images/product/6.png"],
                "iPhone Speaker",
                "$ 499.99",
                "$ 249.99"
            ],
                [
                "Get up to 50% off Today Only!",
                ["../images/product/4.png"],
                "Mackbook Pro",
                "$ 4099.99",
                "$ 2049.99"
            ],
            [
                "Get up to 50% off Today Only!",
                ["../images/product/6.png"],
                "iPhone Speaker",
                "$ 499.99",
                "$ 249.99"
            ],

            [
                "Get up to 50% off Today Only!",
                ["../images/product/6.png"],
                "iPhone Speaker",
                "$ 499.99",
                "$ 249.99"
            ],
                [
                "Get up to 50% off Today Only!",
                ["../images/product/4.png"],
                "Mackbook Pro",
                "$ 4099.99",
                "$ 2049.99"
            ],
            [
                "Get up to 50% off Today Only!",
                ["../images/product/6.png"],
                "iPhone Speaker",
                "$ 499.99",
                "$ 249.99"
            ],
        ],
        [                                                   // SPECIAL OFFERS
            [
                "Get up to 50% off Today Only!",
                ["../images/product/3.png"],
                "iOS Keyboard",
                "$ 499.99",
                "$ 249.99"
            ],
            [
                "Get up to 50% off Today Only!",
                ["../images/product/5.png"],
                "Black Headphone",
                "$ 499.99",
                "$ 249.99"
            ],
            [
                "Get up to 50% off Today Only!",
                ["../images/product/3.png"],
                "iOS Keyboard",
                "$ 499.99",
                "$ 249.99"
            ],

            [
                "Get up to 50% off Today Only!",
                ["../images/product/3.png"],
                "iOS Keyboard",
                "$ 499.99",
                "$ 249.99"
            ],
            [
                "Get up to 50% off Today Only!",
                ["../images/product/5.png"],
                "Black Headphone",
                "$ 499.99",
                "$ 249.99"
            ],
            [
                "Get up to 50% off Today Only!",
                ["../images/product/3.png"],
                "iOS Keyboard",
                "$ 499.99",
                "$ 249.99"
            ],
        ],
        [                                                       // FEATURED IN

        ]
    ];

    const cardsContainer = document.getElementById('cards-container');

    function removeCards() {
        let remList = document.querySelectorAll('.product__card');
        remList.forEach(function (remCard) {
            remCard.parentNode.removeChild(remCard);
        })
    }

    function printCards(k) {

        if (products[k].length == 0) {
           /* const emptyCard = `
                <div class="product__card product__card--empty">
                    <div class="empty-card__inner">
                        <span class="empty-card__title">No products yet in this section, view all products or try later</span>
                        <i class="empty-card__smile far fa-smile-beam"></i>
                    </div>
                </div>`
            cardsContainer.insertAdjacentHTML('afterBegin', emptyCard); */
        } else {
            for (i = products[k].length-1; i >= 0; i--) {
                let color = 0;
                let card = `
                    <div class="product__card">
                        <p class="product__card__discount">${products[`${k}`][`${i}`][0]}</p>

                        <div class="product__card__photo">
                            <div class="product__card__photo__inner"><img class="product__card__photo__img" src="${products[`${k}`][`${i}`][1][`${color}`]}" alt=""></div>
                        </div>

                        <div class="product__card__content">
                            <h3 class="product-card__title">${products[`${k}`][`${i}`][2]}</h3>
                            <div class="product-card__price">
                                <p class="product-card__price__text">${products[`${k}`][`${i}`][3]}</p>
                                <p class="product-card__price__devider">/</p>
                                <p class="product-card__price__text product-card__price__text--crossed">${products[`${k}`][`${i}`][4]}</p>
                            </div>
                            <div class="product-card__stars product-card__stars--large">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                        <div class="hover-content">
                            <div class="hover-content__inner">
                                <div class="hover-content__row">
                                    <button class="hover-content__btn">
                                        <i class="fas fa-shopping-cart"></i>
                                    </button>
                                    <button class="hover-content__btn open-btn" data-attr="${i}">
                                        <i class="fas fa-search-plus"></i>
                                    </button>
                                    <button class="hover-content__btn">
                                        <i class="like-btn far fa-heart"></i>
                                    </button>
                                    <button class="hover-content__btn">
                                        <i class="fas fa-retweet"></i>
                                    </button>
                                </div>
                                <div class="hover-content__row">
                                    <div class="hover-content__col">
                                        <div class="product-card__price product-card__price--hover-content">
                                            <p class="product-card__price__text">${products[`${k}`][`${i}`][3]}</p>
                                            <p class="product-card__price__devider">/</p>
                                            <p class="product-card__price__text product-card__price__text--crossed">${products[`${k}`][`${i}`][4]}</p>
                                        </div>
                                        <div class="product-card__stars">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                    </div>
                                    <!-- <div class="hover-content__col">
                                        <div class="hover-content__palette">
                                            <div class="palette__border active">
                                                <div class="palette__color  palette__color--first"></div>
                                            </div>
                                            <div class="palette__border">
                                                <div class="palette__color palette__color--second"></div>
                                            </div>
                                            <div class="palette__border">
                                                <div class="palette__color palette__color--third"></div>
                                            </div>
                                        </div>
                                    </div>
-->
                                </div>
                            </div>
                        </div>
                    </div> <!-- ./product__card -->
                `;
                cardsContainer.insertAdjacentHTML('afterBegin', card);
            }
        }
    }

    let firstClick = 'false';
    let pressedBtn = 0;
    const tabsBtn = document.querySelectorAll('.product__nav-btn');
    tabsBtn.forEach(function (btn) {

        btn.addEventListener('click', function() {
            tabsBtn.forEach(function (btn){
                btn.classList.remove('active');
            });
            btn.classList.add('active');

            pressedBtn = btn.getAttribute('data-attr');

            if (firstClick) {
                firstClick = false;
                printCards(pressedBtn);
            } else {
                removeCards();
                if (products[pressedBtn].length != 0) {
                    printCards(pressedBtn);
                } else {
                    const emptyCard = `
                        <div class="product__card product__card--empty">
                            <div class="empty-card__inner">
                                <span class="empty-card__title">No products yet in this section, view all products or try later</span>
                                <i class="empty-card__smile far fa-smile-beam"></i>
                            </div>
                        </div>`
                    cardsContainer.insertAdjacentHTML('afterBegin', emptyCard);
                }

            }

        });
    });

    const viewAllBtn = document.querySelector('.product__view-all');
    viewAllBtn.addEventListener('click', function(e) {
        e.preventDefault();

        removeCards();
        tabsBtn.forEach(function (btn){
            btn.classList.remove('active');
        });

        for (let atr = 0; atr <= 3; atr++) {
            if (atr != pressedBtn) {
                printCards(atr);
            }
        }

        printCards(pressedBtn);
    });

    const defaultTabsBtn = document.querySelector('.product__nav-btn');
    defaultTabsBtn.click();
    defaultTabsBtn.classList.add('active');


    // на кнопку view all циклом вызывается 4 раза метод print со всеми k

}, false);

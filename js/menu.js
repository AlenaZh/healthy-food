'use strict';

(function () {
    const TABLET_WIDTH = 770;

    let burgerButton = document.querySelector('.main-navigation__burger');
    let burgerRow = document.querySelector('.burger__row');
    let menuBlock = document.querySelector('.page-header__wrapper');
    let contentWrapper = document.querySelector('.content-wrapper');
    let header = document.querySelector('.page-header');
    let main = document.querySelector('.page__content');
    let footer = document.querySelector('.page__footer');
    let isMenuOpen = false;

    header.classList.remove('page-header--nojs');

    let handleMenuClick = function () {
        if (contentWrapper) {
            contentWrapper.classList.toggle('content-wrapper--open-menu');
        }

        if (header) {
            header.classList.toggle('page-header--open-menu');
        }

        if (burgerRow) {
            burgerRow.classList.toggle('burger__row--open');
        }

        if (menuBlock) {
            menuBlock.classList.toggle('page-header__wrapper--open');
        }

        if (main) {
            main.classList.toggle('page__content--open-menu');
        }

        if (footer) {
            footer.classList.toggle('page__footer--open-menu');
        }
    };

    let handleWindowResize = function () {
        if (window.innerWidth <= TABLET_WIDTH) {
            if (burgerButton && !isMenuOpen) {
                burgerButton.addEventListener('click', handleMenuClick);
                isMenuOpen = true;
            }
        } else if (isMenuOpen) {
            burgerButton.removeEventListener('click', handleMenuClick);
            isMenuOpen = false;
        }
    };

    handleWindowResize();   

    window.addEventListener('resize', window.debounce(handleWindowResize, 1000));
})();

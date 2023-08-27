'use strict';

const sliderItems = document.getElementsByClassName('slider__item');
const sliderList = document.getElementsByClassName('slider__list')[0];
const buttonPrev = document.querySelector('.slider__button--prev');
const buttonNext = document.querySelector('.slider__button--next');
let slideIndex = 0;

document.addEventListener('DOMContentLoaded', function () {
    /*регистрируем обработчик для события 'click' у кнопки "Previous slide"*/
    buttonPrev.addEventListener('click', previousSlide);

    /*регистрируем обработчик для события 'click' у кнопки "Next slide"*/
    buttonNext.addEventListener('click', nextSlide);

    function nextSlide() {
        showSlide(++slideIndex, 1);
    }

    function previousSlide() {
        showSlide(--slideIndex, -1);
    }

    function showSlide(index, direction) {
        if (index === sliderItems.length - 1) {
            buttonNext.classList.add('slider__button--disabled');
            buttonNext.disabled = true;

            if (buttonPrev.classList.contains('slider__button--disabled')) {
                buttonPrev.disabled = false
                buttonPrev.classList.remove('slider__button--disabled');
            }
        } else if (index === 0) {
            buttonPrev.classList.add('slider__button--disabled');
            buttonPrev.disabled = true;

            if (buttonNext.classList.contains('slider__button--disabled') ) {
                buttonNext.disabled = false
                buttonNext.classList.remove('slider__button--disabled');
            }
        } else if (buttonNext.classList.contains('slider__button--disabled') || buttonPrev.classList.contains('slider__button--disabled')) {
            buttonNext.classList.remove('slider__button--disabled');
            buttonPrev.classList.remove('slider__button--disabled');
            buttonNext.disabled = false;
            buttonPrev.disabled = false;
        }

        sliderList.style.transform = `translateX(${-100 * direction + Number(sliderList.style.transform.replace(/[^-^\d.]/g, ''))}%)`;
    }
});
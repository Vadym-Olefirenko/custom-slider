
function slider() {
    const slides = document.querySelectorAll('.slide');
    addDots(slides);
    const dotsCollection = document.querySelectorAll('.dot__item');
    dotsCollection[0].classList.add('dot__item-active');
    const sliderNavigation = document.querySelectorAll('.slider__navigation');
    let i = 0;
    sliderNavigation.forEach(el => {
        el.addEventListener('click', e => {
            e.target.classList[1] === 'next__arr' ? i = i + 1 : i = i - 1;
            i < 0 ? i = slides.length - 1 : i;
            slides.forEach((el) => {
                el.classList.remove('slide__visible');
            });
            if (i < slides.length) {
                slides[i].classList.add('slide__visible');
            }
            else {
                slides[0].classList.add('slide__visible');
                i = 0;
            }

            dotsCollection.forEach(el => {
                el.classList.remove('dot__item-active');
                dotsCollection[i].classList.add('dot__item-active');
            });
        });
    });
}

const addDots = (arg) => {
    const wrapper = document.querySelector('.slider__wrapper');
    const dotsBox = document.createElement("div");
    dotsBox.classList.add('dots__box');
    wrapper.appendChild(dotsBox);

   for (let i = 0; i < arg.length; i++) {
        const dot = document.createElement("div");
        dot.classList.add('dot__item');
        dotsBox.appendChild(dot);
   };
}


;

slider();
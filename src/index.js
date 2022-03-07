export default function (Alpine) {
    Alpine.magic('animate', (el, {Alpine}) => {
        return function (durationInSec = 0) {
            el.style.setProperty('transition-duration', `${durationInSec}s`, 'important');

            let propertiesToAnimate = Alpine.evaluate(el, el.getAttribute('x-animate'));

            for (let property in propertiesToAnimate) {
                if (propertiesToAnimate.hasOwnProperty(property)) {
                    el.style.setProperty(property, propertiesToAnimate[property]);
                }
            }
        }.bind(this);
    });

    Alpine.magic('animateReset', (el, {Alpine}) => {
        return function (durationInSec = 0) {
            el.style.setProperty('transition-duration', `${durationInSec}s`, 'important');

            if (el.hasAttribute('x-animate.reset')) {
                let propertiesToAnimate = Alpine.evaluate(el, el.getAttribute('x-animate.reset'));

                for (let property in propertiesToAnimate) {
                    if (propertiesToAnimate.hasOwnProperty(property)) {
                        el.style.setProperty(property, propertiesToAnimate[property]);
                    }
                }
            } else {
                let propertiesToAnimate = Alpine.evaluate(el, el.getAttribute('x-animate'));

                for (let property in propertiesToAnimate) {
                    if (propertiesToAnimate.hasOwnProperty(property)) {
                        el.style.setProperty(property, null);
                    }
                }
            }
        }.bind(this);
    });
}
export default function (Alpine) {
    Alpine.magic('animate', (el, {Alpine}) => {
        let propertiesToAnimate = Alpine.evaluate(el, el.getAttribute('x-animate'));

        for (let property in propertiesToAnimate) {
            if (propertiesToAnimate.hasOwnProperty(property)) {
                el.style.setProperty(property, propertiesToAnimate[property]);
            }
        }
    });

    Alpine.magic('animateReset', (el, {Alpine}) => {
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
    });
}
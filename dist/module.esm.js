// src/index.js
function src_default(Alpine) {
  Alpine.magic("animate", (el, {Alpine: Alpine2}) => {
    let propertiesToAnimate = Alpine2.evaluate(el, el.getAttribute("x-animate"));
    for (let property in propertiesToAnimate) {
      if (propertiesToAnimate.hasOwnProperty(property)) {
        el.style.setProperty(property, propertiesToAnimate[property]);
      }
    }
  });
  Alpine.magic("animateReset", (el, {Alpine: Alpine2}) => {
    if (el.hasAttribute("x-animate.reset")) {
      let propertiesToAnimate = Alpine2.evaluate(el, el.getAttribute("x-animate.reset"));
      for (let property in propertiesToAnimate) {
        if (propertiesToAnimate.hasOwnProperty(property)) {
          el.style.setProperty(property, propertiesToAnimate[property]);
        }
      }
    } else {
      let propertiesToAnimate = Alpine2.evaluate(el, el.getAttribute("x-animate"));
      for (let property in propertiesToAnimate) {
        if (propertiesToAnimate.hasOwnProperty(property)) {
          el.style.setProperty(property, null);
        }
      }
    }
  });
}

// builds/module.js
var module_default = src_default;
export {
  module_default as default
};

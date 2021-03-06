var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};

// builds/module.js
__markAsModule(exports);
__export(exports, {
  default: () => module_default
});

// src/index.js
function src_default(Alpine) {
  Alpine.magic("animate", (el, {Alpine: Alpine2}) => {
    return function(durationInSec = 0) {
      el.style.setProperty("transition-duration", `${durationInSec}s`, "important");
      let propertiesToAnimate = Alpine2.evaluate(el, el.getAttribute("x-animate"));
      for (let property in propertiesToAnimate) {
        if (propertiesToAnimate.hasOwnProperty(property)) {
          el.style.setProperty(property, propertiesToAnimate[property]);
        }
      }
    }.bind(this);
  });
  Alpine.magic("animateReset", (el, {Alpine: Alpine2}) => {
    return function(durationInSec = 0) {
      el.style.setProperty("transition-duration", `${durationInSec}s`, "important");
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
    }.bind(this);
  });
}

// builds/module.js
var module_default = src_default;

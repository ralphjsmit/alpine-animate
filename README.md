# Animate your ALpine components🚀

This package provides you with a simple helper to animate your ALpine.js components.

## Installation

The recommended way to install the package is via NPM:

```bash
npm install @ralphjsmit/alpine-animate
```

Next, import and initialize the package in your `js` file:

```js
import Alpine from 'alpinejs'
import Animate from '@ralphjsmit/alpine-animate'

Alpine.plugin(Animate)

window.Alpine = Alpine
Alpine.start()
```

You can also install the package via a CDN:

```html

<script src="https://unpkg.com/@ralphjsmit/alpine-animate@1.0.0/dist/cdn.min.js" defer></script>
```

## Usage

To prepare an animation on your component, you can add the `x-animate` and `x-animate.reset` attributes to it:

```html

<div x-data="{ isAnimating: false }" x-cloak class="duration-[800ms]"
     x-on:notify.window="
    if (isAnimating) return;

    isAnimating = true;
    
    // Let's animate the notification. The animation should take 200ms.
    $animate(0.2);
    
    // The animation will take roughly 200 ms. When the notification is animating, we'll also 
    // start the process to hide it again.
    setTimeout(() => {
        // The 'reset animation' will take 0ms, so we'll just hide the notification immediately.
        $animateReset(0);
                
        isAnimating = false;
    }, 300);
  "
<!-- When the component initializes, we'll call the $animateReset() magic helper to reset the state. We can use x-cloak to hide the component before this initialization has happened. -->
x-init="$animateReset(0)"
x-animate="{
top: '100px',
right: '12px',
opacity: '1.0'
}"
x-animate.reset="{
top: '100px',
right: '-200px',
opacity: '0.0',
}">
```

As you can see, you can call the `$animate()` helper to update the CSS properties to their new values. This is done inline, via the `style` attribute. When you want to revert the animation state, you can use the `$animateReset()` helper to reset the animation to it's initial state.

### Calling the animation from a different component

An interesting and useful technique is to call the `$animate()` and `$animateReset()` helpers from another element. To do so, you can use the `Alpine.evaluate()` helper:

```js
<div x-data>
    <button type="button"
    @click="Alpine.evaluate($el.nextElementSibling, '$animate()')">Click me!
</button>
<div class="bg-[red]" x-animate="{ background-color: 'orange' }"></div>
</div>
```

## General

🐞 If you spot a bug, please submit a detailed issue and I'll try to fix it as soon as possible.

🙌 If you want to contribute, please submit a pull request. All PRs will be fully credited. If you're unsure whether I'd accept your idea, feel free to contact me!

🙋‍♂️ [Ralph J. Smit](https://ralphjsmit.com)

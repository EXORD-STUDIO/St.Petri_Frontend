import { gsap } from "gsap";
import { getElement, getElements } from "./handler";

/* Setting up html elements for animations */
const setElement = (element, axis, px, _setOpacity = false) => {
    gsap.set(element, {
        y: axis === "y" ? px : 0,
        x: axis === "x" ? px : 0,
        opacity: _setOpacity ? 0 : 1
    })
}

const slideIn = (_element, _duration, _delay, _setOpacity = true) => {
    gsap.to(_element, {
        y: 0,
        x: 0,
        opacity: _setOpacity ? 1 : 0,
        duration: _duration,
        delay: _delay,
        ease: "power2.out"
    })
}

const slideOut = (_element, _amount, _axis, _duration, _delay, _setOpacity = true) => {
    gsap.to(_element, {
        y: _axis === "y" ? _amount : 0,
        x: _axis === "x" ? _amount : 0,
        opacity: _setOpacity ? 1 : 0,
        duration: _duration,
        delay: _delay,
        ease: "power2.out"
    })
}

const headingAnimation = (element) => {
    slideIn(element, 1.5, 0)
}

const logoAnimationIn = () => {
    // get all of the svg pieces from logo
    let upperPart = getElements("upper__logo");
    let middlePart = getElements("mid__logo");
    let lowerPart = getElements("lower__logo");

    for(let i = 0; i < upperPart.length; i++) {
        slideIn(upperPart[i], 1, 0);
    }

    for(let i = 0; i < middlePart.length; i++) {
        slideIn(middlePart[i], 1.4, 0);
    }

    for(let i = 0; i < lowerPart.length; i++) {
        slideIn(lowerPart[i], 1.8, 0);
    }
}

const logoAnimationOut = () => {
    // get all of the svg pieces from logo
    let upperPart = getElements("upper__logo");
    let middlePart = getElements("mid__logo");
    let lowerPart = getElements("lower__logo");

    for(let i = 0; i < upperPart.length; i++) {
        slideOut(upperPart[i], -10, "y", 1, 0);
    }

    for(let i = 0; i < middlePart.length; i++) {
        slideOut(middlePart[i], 15, "x", 1.4, 0);
    }

    for(let i = 0; i < lowerPart.length; i++) {
        slideOut(lowerPart[i], 10, "y", 1.8, 0);
    }
}

const eventsAnimation = () => {
    let eventRowElements = getElements("row");
    let delay = 0

    for(let i = 0; i < eventRowElements.length; i++) {
        slideIn(eventRowElements[i], 1, delay);
        delay += 0.1;
    }
}

export { setElement, logoAnimationIn, logoAnimationOut, headingAnimation, eventsAnimation }
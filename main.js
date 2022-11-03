import { setElement, logoAnimationIn, headingAnimation, eventsAnimation } from "./scripts/animations";
import { setupMouseoverListenerLogo } from "./scripts/setup";
import { getElement } from "./scripts/handler";

const init = () => {
    // Logo Animation
    //setElement()
    logoAnimationIn();
    headingAnimation(getElement("main__heading"))
    setupMouseoverListenerLogo();
    eventsAnimation();
}

init()
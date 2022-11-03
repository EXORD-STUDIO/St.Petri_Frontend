import { logoAnimationOut, logoAnimationIn } from "./animations"
import { getElement } from "./handler"

const setupMouseoverListenerLogo = () => {
    getElement("logo").addEventListener("mouseover", (e) => {
        logoAnimationOut();
    })

    getElement("logo").addEventListener("mouseleave", (e) => {
        logoAnimationIn();
    })
}

export { setupMouseoverListenerLogo }
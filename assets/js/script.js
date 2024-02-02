import { menuContent } from "./modules/menuContent.js";
import { initMenu } from "./modules/menu.js";
import { startSlider } from './modules/slider.js';
import { initCart } from './modules/panier.js';



globalThis.menuContent = menuContent;

const cart = initCart();
cart.attachEventToShopNowButtons();
startSlider();
initMenu(menuContent);

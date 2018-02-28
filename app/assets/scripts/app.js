import MobileMenu from './modules/menu';
import RevealOnScroll from './modules/revealOnScroll';
import StickyHeader from './modules/header';

var menu = new MobileMenu();
new RevealOnScroll('.feature-item', '85%');
new RevealOnScroll('.testimonial', '60%');
var stickyHeader = new StickyHeader();

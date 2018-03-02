import MobileMenu from './modules/menu';
import RevealOnScroll from './modules/revealOnScroll';
import StickyHeader from './modules/header';
import Modal from './modules/modal';

var menu = new MobileMenu();
new RevealOnScroll('.feature-item', '85%');
new RevealOnScroll('.testimonial', '60%');
var stickyHeader = new StickyHeader();
var modal = new Modal();

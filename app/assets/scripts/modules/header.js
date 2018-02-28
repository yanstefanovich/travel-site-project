import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';


class StickyHeader{
  constructor() {
    this.siteHeader = $('.site-header');
    this.triggerElement = $('.large-hero__title');
    this.createHeaderWaypoint();

    this.pageSections = $('.page-section');
    this.headerLinks = $('.site-nav a');
    this.createPageSectionWaypoints();

    this.addSmoothScrolling();
  }

  createHeaderWaypoint() {
    var element = this.triggerElement[0];
    var that = this;

    new Waypoint({
      element,
      handler: function(direction) {
        if (direction === 'down') {
          that.siteHeader.addClass('site-header--fill-dark');
        } else {
          that.siteHeader.removeClass('site-header--fill-dark');
        }
      }
    });
  }

  createPageSectionWaypoints(){
    var that = this;
    this.pageSections.each(function() {
      var currentPageSection = this;

      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if (direction === 'down') {
            var matchingHeaderLink = currentPageSection.getAttribute('data-link-match');
            that.headerLinks.removeClass('is-current-link');
            $(matchingHeaderLink).addClass('is-current-link');
          }
        },
        offset: '18%'
      });

      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if (direction === 'up') {
            var matchingHeaderLink = currentPageSection.getAttribute('data-link-match');
            that.headerLinks.removeClass('is-current-link');
            $(matchingHeaderLink).addClass('is-current-link');
          }
        },
        offset: '-40%'
      });
    });

    new Waypoint({
      element: this.pageSections[0],
      handler: function(direction) {
        if (direction === 'up') {
          that.headerLinks.removeClass('is-current-link');
        }
      },
      offset: '25%'
    });
  }

  addSmoothScrolling() {
    this.headerLinks.smoothScroll();
  }
}

export default StickyHeader;

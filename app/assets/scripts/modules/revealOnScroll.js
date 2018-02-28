import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor(elements, offset) {
    this.itemsToReveal = $(elements);
    this.offset = offset;
    this.hideInitially();
    this.createWaypoints();
  }

  hideInitially() {
    this.itemsToReveal.addClass('reveal-item');
  }

  createWaypoints() {
    var that = this;
    this.itemsToReveal.each(function() {
      var element = this;
      new Waypoint({
        element,
        handler: function() {
          $(element).addClass('reveal-item--is-visible')
        },
        offset: that.offset
      });
    });
  }
}

export default RevealOnScroll;

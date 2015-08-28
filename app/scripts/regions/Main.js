define([
	'backbone',
	'regions/BaseRegion'
],
function( Backbone, BaseRegion) {
    'use strict';

	/* Return a Region class definition */
	return BaseRegion.extend({
		el:'#region-main',
		initialize: function() {
			console.log("initialize a Main Region");
		}
	});

});

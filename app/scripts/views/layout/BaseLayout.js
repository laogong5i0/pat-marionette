define([
	'backbone',
	'hbs!tmpl/layout/BaseLayout_tmpl'
],
function( Backbone, BaselayoutTmpl  ) {
    'use strict';

	/* Return a Layout class definition */
	return Backbone.Marionette.Layout.extend({

		initialize: function() {
			console.log("initialize a Baselayout Layout");
		},
		
    	template: BaselayoutTmpl,
    	

    	/* Layout sub regions */
    	regions: {},

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});

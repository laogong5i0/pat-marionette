define([
	'backbone',
	'hbs!tmpl/header/MainHeader_tmpl'
],
function( Backbone, HeaderMainheaderTmpl  ) {
    'use strict';

	/* Return a Layout class definition */
	return Backbone.Marionette.Layout.extend({

		tagName:"header",

		initialize: function() {
			console.log("initialize a HeaderMainheader Layout");
		},
		
    	template: HeaderMainheaderTmpl,
    	

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

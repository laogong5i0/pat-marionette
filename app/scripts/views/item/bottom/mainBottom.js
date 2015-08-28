define([
	'backbone',
	'hbs!tmpl/bottom/MainBottom_tmpl'
],
function( Backbone, BottomMainbottomTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({
		tagName:'nav',
		initialize: function() {
			console.log("initialize a BottomMainbottom ItemView", BottomMainbottomTmpl);
		},
		
    	template: BottomMainbottomTmpl,
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});

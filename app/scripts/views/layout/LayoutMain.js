define([
	'backbone',
	'hbs!tmpl/layout/LayoutMain_tmpl'
],
function( Backbone, LayoutmainTmpl  ) {
    'use strict';

	/* Return a Layout class definition */
	return Backbone.Marionette.Layout.extend({
		id: 'moduld-main',
		tagName: 'ul',
		initialize: function() {
			console.log("initialize a Layoutmain Layout");
		},
		
    	template: LayoutmainTmpl,
    	

    	/* Layout sub regions */
    	regions: {
    		regionHeader: "#modul-main-header",
    		regionContent: "#modul-main-content",
    		regionBottom: "#modul-main-bottom"
    	},

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {
			console.log("layout main onRender", LayoutmainTmpl)
		}
	});

});

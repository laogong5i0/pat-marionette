define([
	'backbone',
	'application',
	'regions/Main',
	'views/item/bottom/mainBottom',
	'views/layout/header/mainHeader',
	'views/layout/LayoutMain'
],
function( Backbone, Application, Main, MainBottom, MainHeader, LayoutMain ) {
    'use strict';

	return Backbone.Marionette.Controller.extend({

		initialize: function( options ) {
			var regionMain = Application.getRegion('regionMain');
			this.layoutView = new LayoutMain();
			regionMain.show(this.layoutView);
			this.initHeader();
			this.initBottom();
		}, 

		initHeader: function(){
			var header = new MainHeader();
			this.layoutView.regionHeader.show(header);
		},
		initBottom: function(){
			var bottom = new MainBottom();
			this.layoutView.regionBottom.show(bottom);
		}
	});

});

define([
	'backbone',
	'communicator',
	'regionManager',
	'hbs!tmpl/welcome'
],

function( Backbone, Communicator, RegionManager, Welcome_tmpl ) {
    'use strict';

	if(window.App) return window.App;
	//
	var MyApp = Backbone.Marionette.Application.extend({

		navigate: function(route, options){
			Backbone.history.navigate(route, options);
		},
		getCurrentRoute: function(){
			var frag = Backbone.history.fragment
			if(frag)
				return frag;
			else
				return null;
		},
		// getCurrentRoute: function(frament){
		// 	if(frament){
		// 		Backbone.history.frament = frament;
		// 	}
		// },
		startHistory: function(){
			if(Backbone.history)
				Backbone.history.start();
		},

		getRegion: function(region){
			return this._regionManager.get(region);
			// this._region
		}

	})

	var welcomeTmpl = Welcome_tmpl;

	var App = new MyApp();

	/* Add application regions here */
	// App.addRegions({});

	/* Add initializers here */
	App.addInitializer( function () {
		// document.body.innerHTML = welcomeTmpl({ success: "CONGRATS!" });
		Communicator.mediator.trigger("APP:START");
	});
	App.on('start', function(){
		this.startHistory();
	})
	window.App = App;
	return App;
});

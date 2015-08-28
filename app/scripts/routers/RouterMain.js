define([
	'backbone',
	'controllers/ControllerMain'
],
function(Backbone, ControllerMain){
    'use strict';

	return Backbone.Router.extend({
		/* Backbone routes hash */
		routes: {
			'': 'main',
			'index/:id/:obj': 'mainparam' //http://localhost:9000/#index/12
		},
		main: function(){
			console.log("-----------------------------initialize main-----------------------------", ControllerMain)
			new ControllerMain();
		},
		mainparam: function(param, obj){
			console.log("--------------------------------main param", param, obj);
		}
	});
});

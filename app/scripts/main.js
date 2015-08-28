require([
	'backbone',
	'application',
	'regionManager',
	'routers/RouterMain'
],
function ( Backbone, App, RegionManager, RouterMain ) {
    'use strict';

    App.addRegions({
    	regionMain: '#main',
    	loadingRegion: 'loading',
    	dialog: ''
    })
	// RegionManager.addRegion('regionMain', 'main');
	// RegionManager.addRegion('regionLoading', 'loading');
	// RegionManager.addRegion('regionDialog', 'dialog');

    App.addInitializer(function(){
    	new RouterMain();
    })
	App.start();
});

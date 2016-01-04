define([
    'jquery',
    'backbone'
], function($, Backbone) {
    var Config = {
    	configPath: 'tabs-data/tabs.json',
	    getData: function () {
	        return $.getJSON(this.configPath);
	    }
	};

    return Config;

});
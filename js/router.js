define([
    'jquery',
    'underscore',
    'backbone',
    'config'
], function($, _, Backbone, config) {

    var initialize = function(){

        var promise = config.getData();

        promise.success(function(data) {

            var config = data;
            var router_config = {};

            config.forEach(function (tab) {
                router_config[tab.id] = tab.order;
            });

            router_config['*default'] = 'default';

            var AppRouter = Backbone.Router.extend({
                routes: router_config
            });

            var app_router = new AppRouter;

            config.forEach(function (tab) {

                var route_string = 'route:' + tab.order;
                var moduleName = tab.path;

                app_router.on(route_string, function(){

                    require([moduleName], function(view_module){
                        var projectsView = new view_module();
                        projectsView.render();
                    })

                });

            });

            app_router.on('route:default', function(){
                app_router.navigate(config[0].id, true);
            });


            Backbone.history.start();
        });

    };
    return {
        initialize: initialize
    };
});


define([
    'jquery',
    'underscore',
    'backbone',
    'config',
    'header'
], function ($, _, Backbone, config, header) {

    function generateRouterConfig(config) {
        var routerConfig = {};

        config.forEach(function (tab) {
            routerConfig[tab.id] = tab.order;
        });

        routerConfig['*default'] = 'default';

        return routerConfig;
    }

    function setRoutes(config, appRouter) {
        config.forEach(function (tab) {
            var route_string = 'route:' + tab.order;
            var moduleName = tab.path;

            appRouter.on(route_string, function () {
                require([moduleName], function (view_module) {
                    var projectsView = new view_module();
                    projectsView.render();
                })
            });
        });

        appRouter.on('route:default', function () {
            appRouter.navigate(config[0].id, true);
        });
    }

    function initHeader() {
        var headerView = new header();
        headerView.render();
    }

    function initialize() {
        config.getData().success(function (data) {
            var appRouter = new (Backbone.Router.extend({
                routes: generateRouterConfig(data)
            }))();

            setRoutes(data, appRouter);
            initHeader();
            Backbone.history.start();
        });
    }

    return {
        initialize: initialize
    };
});

define([
    'jquery',
    'backbone'
], function($, Backbone) {

    return Backbone.View.extend({

        el: $("#header"),

        events: {
            "click button": "changeRoute"
        },

        changeRoute: function (e) {
            this.router.navigate($(e.target).text(), true);
        },

        initialize: function (config, router) {
            this.model = config;
            this.router = router;
        },

        render: function () {
            var that = this;
            this.$el.html('');
            this.model.forEach(function(mod) {
                that.$el.append('<button>' + mod.id + '</button> ');
            });
        }

    })
});
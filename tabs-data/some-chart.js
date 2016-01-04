define([
    'jquery',
    'backbone'
], function($, Backbone) {

    return Backbone.View.extend({

        el: $("#page"),

        render: function() {
            this.$el.html('<span>Dummy Chart</span>');
        }

    })
});
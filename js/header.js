define([
    'jquery',
    'backbone'
], function($, Backbone) {

    return Backbone.View.extend({

        el: $("#header"),

        render: function() {
            this.$el.html('Header');
        }

    })
});
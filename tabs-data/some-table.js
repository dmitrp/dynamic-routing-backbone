define([
    'jquery',
    'backbone'
], function($, Backbone) {

    return Backbone.View.extend({

        el: $("#page"),

        render: function() {
            this.$el.html('<table><tr><td>Dummy</td><td>Table</td></tr></table>');
        }

    })
});
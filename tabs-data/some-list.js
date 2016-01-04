define([
    'jquery',
    'backbone'
], function($, Backbone) {

    return Backbone.View.extend({

        el: $("#page"),

        render: function() {
            this.$el.html('<ul><li>Dummy</li><li>List</li></ul>');
        }

    })
});
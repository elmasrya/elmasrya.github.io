(function(){

  App.Views.Game = Parse.View.extend({

    el                : '#middle',


    template        : _.template($('#gameTemp').html()),

    events: {

    },

    initialize   : function () {
      this.render();

    },

    render  : function () {
      this.$el.html(this.template);

    }

  });

}());
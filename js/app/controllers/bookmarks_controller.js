App.BookmarksController = Ember.ArrayController.extend({
  pop: function() {
    App.view = App.AlertView.create({ message: "Hello!" });
    App.view.append();
  }
});

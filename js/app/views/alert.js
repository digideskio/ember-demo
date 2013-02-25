App.AlertView = Ember.View.extend({
  timeout: 2,
  templateName: "_alert",
  classNames: ["alert-box"],

  click: function() {
    this.remove();
  },

  didInsertElement: function() {
    this.set("message",
      this.get("message")
    + ". I'm going to disappear in "
    + this.get("timeout")
    + " seconds..."
    );
    
    var view = this;

    setTimeout(function() {
      view.$().fadeOut(200,function() {
        view.remove();
      })
    } , this.get("timeout") * 1000)
  }
});

App.AlertView = Ember.View.extend({
  timeout: 2,
  templateName: "_alert",
  classNames: ["alert-box"],

, templateName: "_alert"
, classNameBindings: [ "defaultClass", "kind" ]
, defaultClass: "alert-box"
, kind: null

, click: function() {
    this.$().fadeOut(300, function() { this.remove(); });
  }
, didInsertElement: function() {
    this.$().hide().fadeIn(300);
  }
});

// Shim console.log in IE
if (typeof console == "undefined") {
  this.console = {log: function() {}};
}
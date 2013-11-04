function IndAppState() {
  this.index = 0;
  this.list = [];
  this.currentView = null;
  this.getIndex = function() {
    return this.index
  };
  this.incrementIndex = function() {
    this.index++
  };
  this.decrementIndex = function() {
    this.index--
  };
  this.setIndex = function(a) {
    this.index = a
  };
  this.setList = function(b) {
    this.list = [];
    for (var a = 0; a < b.length; a++) {
      this.list.push(a)
    }
  };
  this.resetToEnd = function() {
    this.index = this.list.length - 1
  };
  this.listSize = function() {
    return this.list.length - 1
  };
  this.isListEmpty = function() {
    if (this.list === "" || this.list === null || this.list === undefined || this.list.length === 0) {
      return true
    }
    return false
  };
  this.atEnd = function() {
    if (this.isListEmpty()) {
      return true
    } else {
      if (this.index === (this.list.length - 1)) {
        return true
      }
    }
    return false
  };
  this.atStart = function() {
    if (this.isListEmpty()) {
      return true
    } else {
      if (this.index === 0) {
        return true
      }
    }
    return false
  };
  this.reset = function() {
    this.index = 0;
    this.list = []
  };
  this.getCurrentView = function() {
    return this.currentView
  };
  this.setCurrentView = function(a) {
    this.currentView = a
  };
  this.resetCurrentView = function() {
    this.currentView = null
  }
}
var indAppState = new IndAppState();
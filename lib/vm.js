var CucubObject = require('./cucub_object');
var ObjectsHub = require('./objects_hub');

var VM = function VM() {
  this.objectsHub = new ObjectsHub;
  this.initClass = function(className) {
    var self = this;
    var handler = global[className];
    var oldPrototype = new handler;
    var bindToHandler = function () {
      this.constructor = bindToHandler;
      CucubObject.call(this, className, self.objectsHub);
    };
    bindToHandler.prototype = oldPrototype;
    return function() {
      global[className] = bindToHandler;
    }
  }
}

var vm = new VM;

module.exports = vm;

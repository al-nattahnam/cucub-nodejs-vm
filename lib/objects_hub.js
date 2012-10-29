var ObjectsHub = function ObjectsHub() {
  this.objects = Array();
  this.registerObject = function(instance) {
    this.objects.push(instance);
  }
  //this.callAll = function() {
  //  this.objects[0].start();
  //  this.objects[1].start();
  //}
}

module.exports = ObjectsHub;

var CucubObject = function() {
  var objectsHub = arguments[1];
  objectsHub.registerObject(this);
  this.inherited = "ping";
  //console.log("current hub objects':" + objectsHub.objects);
}

module.exports = CucubObject;


var wrapLog = function (callback, name) {
  
  return function(...args){
    //callback([3,4,4])
    console.log(name + "" +"("+ args + ")" + " =>" + " "+callback.apply(null,args))
    return callback.apply(null, args);
    //callback(3,4,4...)
    //console.log(name + args)
  }
};
var area = function (x, y) {
  //console.log(this)
  return x * y;
};
//area.apply(null, [5,3]);
var logArea = wrapLog(area, "area");

(logArea(5, 3)); // area(5, 3) => 15
(logArea(3, 2)); // area(3, 2) => 6


var volume = function (x, y, z) {
  return x * y * z;
};
var logVolume = wrapLog(volume, "volume");

logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24
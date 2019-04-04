function sortNumber (a,b){
  return a - b;
}
    var array = [10, 2, 5, 1, 9];
array.sort(sortNumber);
console.log(array.join(","));
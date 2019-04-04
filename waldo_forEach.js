function findWaldo(arr, found) {
  arr.forEach(function(ar) {
  	if(ar == 'Waldo'){
  		found(arr.indexOf(ar))
    }
  });
}

function actionWhenFound(i) {
  console.log("Found him! at index " + i);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


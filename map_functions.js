var words = ["ground", "control", "to", "major", "tom"];


function wordUpper (word) {
  return word.toUpperCase();
};

function wordReverse (word) {
  return word.split('').reverse().join('');
};

function wordLength (word) {
  return word.length;
};

var mapWord = function(arr, callback){
  return arr.map(function(word){
   return callback(word);
  });
}


console.log(mapWord(words, wordLength));
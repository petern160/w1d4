var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 352 },
  { id: 4, name: "alex",     age: 30 },
  { id: 5, name: "alex",     age: 33 },
  { id: 4, name: "alex",     age: 22 }
];





students.sort(function(a, b){
    var nameA=a.name.toLowerCase()
    var nameB=b.name.toLowerCase()
    var ageA = a.age;
    var ageB = b.age;
    if (nameA < nameB) //sort string ascending
        return -1  // sorts a before b
    if (nameA > nameB)
        return 1 // sorts b before a
    if (nameA === nameB)
      return ageB - ageA
    return 0 //default return value (no sorting)
})

console.log(students)
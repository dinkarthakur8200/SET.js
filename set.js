// SET in JAVASCRIPT...
//  JavaScript's Set Data Structure[ lEARNING STARTED]

const myset = new Set();

myset.add(1);
myset.add(2);
myset.add(3);
myset.add(2);

console.log(myset.has(1));

myset.add(6);

console.log(myset.has(9));

// // iterating the value.....of my set ///


for(const value of myset){
    console.log(value);
}

// THE UNION SET METHOD 
// the union of Two sets consists of all values of sets..

// for example 

const myset1 = new Set([1,2,3,4]);
const myset2 = new Set([3,6,7,9]);

// performing the union ...
// also using the spread operator.
const unionset = new Set([...myset1,...myset2]);

console.log(unionset);


// #Intersection of set ...
// The Intersection method of two  sets conatains only the element that exists in boths sets..

// performing the Intersection ...

const mysetA = new Set([1,2,3,32]);
const mysetB = new Set([2,22,21,78,32]);

// getting the value...
const Intersectionset = new Set([...mysetA].filter(x=>mysetB.has(x)));

console.log(Intersectionset);



// Noww , The Difference..
// The difference between two sets contains elements that are in the first set but not in the   second set.

const differenceset =new Set([...mysetA].filter(x=> !mysetB.has(x)));
console.log(differenceset);



// JAVASCRIPT MAP METHOD ...
// A Map is a collection of key-value pairs, where each key is associated with a value. It allows you to store and retrieve values based on a unique key.

// CREATING THE MAP...

    const mymap = new Map();

mymap.set('name', 'Dinkar');
mymap.set('age','20');
mymap.set('city','Ballia');
console.log(mymap.get('name'));

console.log(mymap.has('age'));

console.log(mymap.get('age'));

mymap.delete('age');

// iterating over the map for.....of loop

for (const [key, value] of myMap) {
    console.log(`${key}: ${value}`);
  }


  


const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hello!')

// Interpolated
console.log('Hello I am a %s String!', "Cool")

// Styled
console.log('%c I am some great text', 'font-size:30px; background: red;')

// warning!
console.warn('Oh No!!')

// Error :|
console.error("Dangit!")

// Info
console.info("I eat too much!")

// Testing
console.assert(1 === 2, 'That is wrong!')

// clearing
// console.clear();

// Viewing DOM Elements
const p = document.querySelector('p');
// console.log(p);
// console.dir(p);

// Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`)
    console.log(`This is ${dog.name}`);
    console.log(`This is ${dog.name} is ${dog.age} years old.`);
    console.log(`This is ${dog.name} is ${dog.age * 7} dog years old.`);
    console.groupEnd(`${dog.name}`)
})

// counting
console.count(`Dimitri`);
console.count(`Dimitri`);
console.count(`Dimitri`);
console.count(`Emily`);
console.count(`Dimitri`);
console.count(`Emily`);
console.count(`Emily`);
console.count(`Dimitri`);
console.count(`Dimitri`);

// timing
console.time(`fetching data`);
fetch(`https://api.github.com/users/diminako`)
    .then(data => data.json())
    .then(data => {
        console.timeEnd(`fetching data`);
        console.log(data);
    });

// Table
console.table(dogs)
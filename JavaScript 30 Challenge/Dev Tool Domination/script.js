const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

console.log('hello');

console.log('I am a %s','poop');

console.warn('oh no');

console.error('hi');

console.info('it is a info');

const p = document.querySelector('p');

console.assert(p.classList.contains('ouch'),'That is wrong');

console.log(p);

console.dir(p);

dogs.forEach(dog =>{
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.groupEnd(`${dog.name}`);
})

console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });

console.table(dogs);


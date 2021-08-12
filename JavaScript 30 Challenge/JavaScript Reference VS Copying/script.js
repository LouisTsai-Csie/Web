const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
const team1 = players;
const team2 = players.slice();
const team3 = [].concat(players);
const team4 = [...players];
const team5 = Array.from(players);

const person = {
      name: 'Wes Bos',
      age: 80
};
const cap1 = Object.assign({}, {number: 99, age: 12});

const wes = {
    name: 'Wes',
    age: 100,
    social: {
      twitter: '@wesbos',
      facebook: 'wesbos.developer'
    }
  };


const dev = Object.assign({}, wes);

const dev2 = JSON.parse(JSON.stringify(wes));
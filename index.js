import cowsay from 'cowsay';
import me from './information.js';

console.log(cowsay.say({
    text: `Hello, my name is ${me.firstname} ${me.lastname} and my Wild Code School campus is in ${me.campus}.`
}));
import { readable } from 'svelte/store';
// !!!! TO EXPERIMENT WITH fs, process, node server commands, etc
// import { write, read } from 'fs';

// npm install fs-extra
// const fs = require('fs-extra');

// With Promises:
// fs.writeJson('./package.json', {name: 'fs-extra'})
// .then(() => {
//   console.log('success!')
// })
// .catch(err => {
//   console.error(err)
// })

let count = 0;

export const timer = readable(0, (set) => {
    // example for navigation
    // navigator.geolocation.watchPosition();
    const interval = setInterval(() => {
        count++;

        set(count);
    }, 1000);

    // To return a function to be called by svelte when readable is not needed anymore
    return () => {
        clearInterval(interval);
    };
});
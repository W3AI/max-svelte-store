import { writable } from 'svelte/store';    // the svelte state store

// the state store
const cart = writable([    {
    id: "p1",
    title: "Test",
    price: 9.99
  },
  {
    id: "p2",
    title: "Test",
    price: 9.99
  }]);

  export default cart;
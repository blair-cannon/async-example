let todosLink = 'https://jsonplaceholder.typicode.com/todos';
let imagesLink = 'https://jsonplaceholder.typicode.com/images';

let state = {
  todos: [],
  images: [],
  last5: [],
}

async function myFetchAwait() {
  try {
    let response = await fetch(todosLink);
    let todos = await response.json();
    setState(todos)
  } catch (err) {
    console.error('THERE WAS SOMETHING WRONG', err);
  }
}

// async / axios 
async function myAsyncAxios() {
  let request = await axios.get(todosLink);
  let data = request.data;
  setState(data)
}

function myFetchPromises() {
  // FETCH / Promise
  fetch(todosLink)
    .then(resp => {
      return resp.json();
    })
    .then(data => {
      setState(data)
    })
    .catch(err => {
      console.log(err);
    })  
}

function setState(data) {
  console.log('data', data);
  console.log('BEFORE: ', state.last5) // state before set
  state.todos = data; // set todos to all data
  state.last5 = data.slice(-5); // get the last 5 todos
  console.log('AFTER; ', state.last5) // set before
}
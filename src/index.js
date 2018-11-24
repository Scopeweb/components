import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as contentful from 'contentful';

var client = contentful.createClient({
    space: '5bn9q0airq7w',
    accessToken: '4b25a0a20b2ebc037d5b960990915530c5c87c6c0cb8d26f8bb67db56a8b42c7' })
  client.getEntries().then(entries => {
    entries.items.forEach(entry => {
      if(entry.fields) {
        console.log(entry.fields)
      }
    })
  })

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

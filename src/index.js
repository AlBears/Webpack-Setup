var messages = require('./messages');

import Button from './button';
import Kitten from './image';

var newMessage = () => (`
  <p>
    Hi ${messages.hi} ${messages.event}
    ${Kitten}
  </p>
  `);

//var newMessage = () => (Button.button);

var app = document.getElementById('app');
app.innerHTML = newMessage();

//Button.attachEl();

if (module.hot) {
  module.hot.accept();
}

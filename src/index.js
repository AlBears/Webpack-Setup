var messages = require('./messages');

import Button from './button';
import Kitten from './image';
import imagefile from './imagefile';

var newMessage = () => (`
  <p>
    Hi ${messages.hi} ${messages.event}
    ${Kitten}
    ${imagefile}
  </p>
  `);

//var newMessage = () => (Button.button);

var app = document.getElementById('app');
app.innerHTML = newMessage();

//Button.attachEl();

if (module.hot) {
  module.hot.accept();
}

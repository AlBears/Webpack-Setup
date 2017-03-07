var messages = require('./messages');

// import Button from './button';
// import Kitten from './image';
// import imagefile from './imagefile';

// var newMessage = () => (`
//   <p>
//     Hi ${messages.hi} ${messages.event}
//     ${Kitten}
//     ${imagefile}
//   </p>
//   `);

//var newMessage = () => (Button.button);

import { multiply } from './mathstuff';

const newMessage = () => (`
    DEV: ${DEVELOPMENT.toString()} <br>
    PROD: ${PRODUCTION.toString()} <br>
  `);

var app = document.getElementById('app');
app.innerHTML = newMessage();

//Button.attachEl();


if (module.hot) {
  module.hot.accept();
}

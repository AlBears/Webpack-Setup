var messages = require('./messages');



var app = document.getElementById('app');
app.innerHTML = `<p>Hi ${messages.hi} ${messages.event}</p>`;

if (module.hot) {
  module.hot.accept();
}

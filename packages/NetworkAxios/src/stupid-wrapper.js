const axios = require('axios');

console.log('this is not the fucking sound package')
console.log('axios is', axios, axios.create);

window.axios = axios;

exports.Axios = axios;
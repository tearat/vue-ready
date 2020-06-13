import axios from 'axios'
var config = require('~/../config')

export default new axios.create({
      baseURL: 'http://' + config.api.host + ':' + config.api.port + '/api',
});

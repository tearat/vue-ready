var app = require('../start.js');
var assert = require('assert');
var http = require('http')
describe('GET TEST', function() {
    it('localhost:8001 should return 200 OK', function (done) {
        http.get("http://localhost:8001", function (res) {
            assert.equal(200, res.statusCode);
            done();
        })
    });
});

var chai = require('chai');
var basex = require('../basex');

var expect = chai.expect;

describe('Client', function () {
  describe('#constructor', function () {
    it('should set custom values if specified', function () {
      var options = {
        host: 'localhost1',
        port: 9000,
        username: 'admin1',
        password: 'admin1'
      };
      var client = new basex.Client(options);

      expect(client.options.host).to.equal(options.host);
      expect(client.options.port).to.equal(options.port);
      expect(client.options.username).to.equal(options.username);
      expect(client.options.password).to.equal(options.password);
    });

    it('should set default values if not specified', function () {
      var client = new basex.Client({});

      expect(client.options.host).to.equal('localhost');
      expect(client.options.port).to.equal(8984);
      expect(client.options.username).to.equal('admin');
      expect(client.options.password).to.equal('admin');
    });

    it('should encode username and password to base64', function () {
      var client = new basex.Client({});
      var username = client.options.username;
      var password = client.options.password;
      var encoded = new Buffer(username + ':' + password).toString('base64');

      expect(client.encoded).to.equal(encoded);
    });
  });
});

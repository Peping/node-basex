var Client = function (options) {
  this.options = {
    host: options.host || 'localhost',
    port: options.port || 8984,
    username: options.username || 'admin',
    password: options.password || 'admin'
  };
};

module.exports = {
  Client: Client
};

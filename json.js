const getStats = require('./getStats');

function json() {
  return {
    time: getStats().time,
    free: getStats().free,
    total: getStats().total,
    usage: getStats().usage,
  };
} // metodo JSON.

module.exports = json;
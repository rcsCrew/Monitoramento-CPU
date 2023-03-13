const os = require('os');
const moment = require('moment');

function getStats() {
  const { freemem, totalmem } = os;

  let mem = parseInt(freemem() / 1024 / 1024);
  let total = parseInt(totalmem() / 1024 / 1024);
  let porcents = parseInt((mem / total) * 100);

  let stats = {
    free: `${mem} MB`,
    total: `${total} MB`,
    usage: `${porcents}%`,
    time: `${moment().format('DD/MM/YYYY HH:mm:ss')}`
  };

  return stats;
}

module.exports = getStats;
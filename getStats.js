const os = require('os');          // puxar o freemem, totalmem.
const moment = require('moment');  // puxar a data.

function getStats() {
  const { freemem, totalmem } = os;

  let mem = parseInt(freemem() / 1024 / 1024);   // dividi 2x por 1024, para chegar em MB. por causa que esta em bit.
  let total = parseInt(totalmem() / 1024 / 1024);
  let porcents = parseInt((mem / total) * 100);   // 100x para chegar em %

  let stats = {
    free: `${mem} MB`,
    total: `${total} MB`,
    usage: `${porcents}%`,
    time: `${moment().format('DD/MM/YYYY HH:mm:ss')}`
  };

  return stats;
}

module.exports = getStats;
const { stat } = require('fs');
const os = require('os');
const log = require('./logger');
const moment = require('moment');

let i = 1


function getStats() {
  const { freemem, totalmem } = os

  let mem = parseInt(freemem() / 1024 / 1024)
  let total = parseInt(totalmem() / 1024 / 1024)
  let porcents = parseInt((mem / total) * 100)
  
  let stats = {
      free: `${mem} MB`,
      total: `${total} MB`,
      usage: `${porcents}%`,
  }
  
  let output = `===== PC STATS ${i} =====\n`
  output += `free : ${stats.free}\n`
  output += `total: ${stats.total}\n`
  output += `usage: ${stats.usage}\n`
  output += `time : ${moment().format('DD/MM/YYYY HH:mm:ss')}\n`
  
  return output
};


setInterval(() => {
  const stats = getStats()
  log(stats)
  i += 1
}, 5000);

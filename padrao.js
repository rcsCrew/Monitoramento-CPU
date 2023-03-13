const getStats = require('./getStats');

if (!global.i) {
  global.i = 1;
}

function padrao() {
  let stats = getStats();
  
  let output = `===== PC STATS ${global.i} =====\n`;
  output += `free : ${stats.free}\n`;
  output += `total: ${stats.total}\n`;
  output += `usage: ${stats.usage}\n`;
  output += `time : ${stats.time}\n`;

  global.i++;

  return output;
}

module.exports = padrao;

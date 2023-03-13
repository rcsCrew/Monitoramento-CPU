const fs = require('fs');

function log(data) {
  fs.writeFile('log.txt', data, { flag: 'a' }, err => {
    if (err) {
      console.error('Não foi possível salvar o arquivo de log');
    }
  });
}

module.exports = log;
const log = require('./logger');
const padrao = require('./padrao');
const json = require('./json');

// para modificar entre o modo padrao e o  json basta tirar o comentario.
process.env.LOG_MODE = 'padrao';
// process.env.LOG_MODE = 'json';




function runLoop() {
  let stats = {}; // Inicializa com um objeto vazio

  if (process.env.LOG_MODE === 'json') {
    stats = json();
    console.info(`✔ - modo JSON.`);
    log(JSON.stringify(stats));
  } else {
    stats = padrao();
    console.info(`✔ - modo PADRAO.`);
    log(stats);
  }

  setTimeout(runLoop, 5000);
}

runLoop();

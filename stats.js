const { stat } = require('fs');
const os = require('os');

let i = 1

setInterval(() => {
    const { freemem, totalmem } = os

    let mem = parseInt(freemem() / 1024 / 1024)
    let total = parseInt(totalmem() / 1024 / 1024)
    let porcents = parseInt((mem / total) * 100)
    
    let stats = {
        free: `${mem} MB`,
        total: `${total} MB`,
        usage: `${porcents}%`,
    }
    
    console.info(`===== PC STATS ${i} =====`)
    console.table(stats)
    i += 1
}, 3000);


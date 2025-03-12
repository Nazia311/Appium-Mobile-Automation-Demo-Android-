const { exec } = require('child_process');

function killPort(port) {
    return new Promise((resolve, reject) => {
        const killCommand = `fuser -k ${port}/tcp`;  

        exec(killCommand, (error, stdout, stderr) => {
            if (error) {
                console.error(`Failed to kill port ${port}: ${error.message}`);
                return reject(error);
            }
            console.log(`Port ${port} has been killed.`);
            resolve();
        });
    });
}

module.exports = killPort;

  const { fork } = require('child_process');
  const child = fork("./sandboxed.js", ['child']);
  child.on('error', (err) => {
            console.warn("errror");
  });

/* eslint-disable no-console */

const chalk = require('chalk');
const ip = require('ip');
const moment =  require('moment');

const { log } = console;
const tag = status => `[${status.padEnd(8)} - ${moment().format('DD/MMM/YYYY hh:mm:ss')}]:`;


const divider = chalk.gray('\n-----------------------------------');

/**
 * Logger middleware, you can customize it to make messages more personal
 */
const logger = {
  // Called whenever there's an error on the server we want to print
  log,
  note(...msg) {
    log(chalk.white(tag('NOTE'), msg));
  },
  info(...msg) {
    log(chalk.cyan(tag('INFO'), msg));
  },
  success(...msg) {
    log(chalk.green(tag('SUCCESS'), msg));
  },
  warning(...msg) {
    log(chalk.yellow(tag('WARNING'), msg));
  },
  error(...msg) {
    log(chalk.red(tag('ERROR'), msg));
  },
  // Called when express.js app starts on given port w/o errors
  appStarted: (port, host, tunnelStarted) => {
    console.log(`Server started ! ${chalk.green('✓')}`);

    // If the tunnel started, log that and the URL it's available at
    if (tunnelStarted) {
      console.log(`Tunnel initialised ${chalk.green('✓')}`);
    }

    console.log(`
${chalk.bold('Access URLs:')}${divider}
Localhost: ${chalk.magenta(`http://${host}:${port}`)}
      LAN: ${chalk.magenta(`http://${ip.address()}:${port}`)
        + (tunnelStarted
          ? `\n    Proxy: ${chalk.magenta(tunnelStarted)}`
          : '')}${divider}
${chalk.blue(`Press ${chalk.italic('CTRL-C')} to stop`)}
    `);
  },
};

module.exports = logger;
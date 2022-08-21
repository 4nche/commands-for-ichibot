import chalk from 'chalk';

const logger = {
  info: (str: string) => console.log(` ` + chalk.bgBlue.white(` INFO `) + ` ` + str),
  warn: (str: string) => console.log(` ` + chalk.bgHex('#f0c948').black(` WARN `) + ` ` + str),
  error: (str: string) => console.log(`  ` + chalk.bgRed.black(` ERR `) + ` ` + str),
  debug: (str: string) => console.log(chalk.bgBlack.white(' DEBUG ') + ` ` + str),
}

export default logger;

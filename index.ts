import chalk from 'chalk';
import { promises as fsP } from 'fs';
import path from 'path';
import logger from './logger';
import register from './register';

(async () => {
  logger.info('collecting commands');
  const commandsPath = path.join(__dirname, './commands');
  const distPath = path.join(__dirname, './dist/');
  const outputPath = distPath + 'initrun.binance.txt';
  const files = await fsP.readdir(commandsPath)

  files.forEach(file => require(path.join(commandsPath, file)));

  const commands = register.getCommands();

  logger.info('generating output');
  const txt = register.generateOutput();

  logger.info('commands:');

  console.log(txt);

  try {
    logger.info(`creating ${chalk.green(distPath)}`);
    await fsP.access(distPath);
  } catch (e) {
    try {
      await fsP.mkdir(distPath);
    } catch (e) {
      logger.error(`Error while trying to create ${chalk.green(distPath)}`);
      console.log(e);
    }
  }

  try {
    await fsP.writeFile(outputPath, txt);
  } catch (e) {
    logger.error('Something went wrong creating the file.');
    console.log(e);
    process.exit(1);
  }

  logger.info(chalk.green(outputPath) + ` successfully created.`);
})();

import path from 'path';

class CommandRegister {
  private _commands: string[] = [];

  public generateOutput(): string {
    const dist = path.join(__dirname, './dist');
    const commands = this._commands.map((cmd) => {
      return this.removeWhitespace(cmd);
    });

    let content = `### generated commands using ichibot-node-cmd\n\n`;
    content += `instrument * \n`;
    content += commands.join('\n');

    content += '\n\n';
    content += `### end generated commands \n`;

    return content;
  }

  public addCommand(str: string) {
    this._commands.push(str);
  }

  public alias(name: string, command: string) {
    this._commands.push(`alias ${name} ${command}`);
  }

  private removeWhitespace(str: string) {
    return str.replace(/\s\s+/g, ' ').trim();
  }

  public getCommands() {
    return this._commands;
  }

}


const register = new CommandRegister();
export default register;

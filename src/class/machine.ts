import { Handler } from './handler';

export class Machine {
  private handler = new Handler();

  getStack() {
    return this.handler.getStack();
  }

  inputCommand(input: string) {
    if (Number(input)) {
      this.handler.pushNumber(input);
    } else {
      this.handleStringInput(input);
    }
  }

  handleStringInput(input: string) {
    const commandMethodMap: Record<string, 'DUP' | 'POP' | 'PLUS' | 'MINUS'> = {
      DUP: 'DUP',
      POP: 'POP',
      '+': 'PLUS',
      '-': 'MINUS',
    };
    const methodName = commandMethodMap[input];

    if (!this.handler[methodName]) {
      throw new Error('The given command does not exists.');
    }

    this.handler[methodName]();
  }

  resetHandler() {
    this.handler = new Handler();
  }
}

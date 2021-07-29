import { Machine } from './machine';

describe('Machine Test suite', () => {
  let machine: Machine = null;

  beforeEach(() => {
    machine = new Machine();
  });

  it('Should create an instance Properly', () => {
    expect(machine).not.toBeNull();
  });

  it('should match First example described in README', () => {
    machine.inputCommand('4');
    expect(machine.getStack()).toMatchObject([4]);

    machine.inputCommand('5');
    expect(machine.getStack()).toMatchObject([4, 5]);

    machine.inputCommand('+');
    expect(machine.getStack()).toMatchObject([9]);

    machine.inputCommand('DUP');
    expect(machine.getStack()).toMatchObject([9, 9]);

    machine.inputCommand('3');
    expect(machine.getStack()).toMatchObject([9, 9, 3]);

    machine.inputCommand('-');
    expect(machine.getStack()).toMatchObject([9, 6]);
  });

  it('should match Second example described in README', () => {
    machine.inputCommand('3');
    expect(machine.getStack()).toMatchObject([3]);

    machine.inputCommand('DUP');
    expect(machine.getStack()).toMatchObject([3, 3]);

    machine.inputCommand('4');
    expect(machine.getStack()).toMatchObject([3, 3, 4]);

    machine.inputCommand('+');
    expect(machine.getStack()).toMatchObject([3, 7]);

    machine.inputCommand('POP');
    expect(machine.getStack()).toMatchObject([3]);

    expect(() => machine.inputCommand('-')).toThrowError(
      'There are not enough numbers to do the calculation.'
    );
  });
});

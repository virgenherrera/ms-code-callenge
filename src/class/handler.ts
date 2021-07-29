export class Handler {
  private map = new Map<number, number>();
  private minInputNumber = 0;
  private maxInputNumber = Math.pow(2, 20) - 1;

  getStack() {
    return Array.from(this.map.values());
  }

  pushNumber(input: number | string) {
    const number = parseInt(`${input}`, 10);

    if (number < this.minInputNumber) {
      throw new Error('The given number is negative.');
    } else if (number > this.maxInputNumber) {
      throw new Error('The given number is greater than 2^20 - 1.');
    } else {
      const index = this.map.size;

      this.map.set(index, number);
    }
  }

  DUP() {
    if (!this.map.size) {
      throw new Error('There are not enough numbers to do the calculation.');
    }

    const lastItemIndex = this.map.size - 1;
    const lastItem = this.map.get(lastItemIndex);

    this.pushNumber(lastItem);
  }

  POP() {
    if (!this.map.size) {
      throw new Error('There are not enough numbers to do the calculation.');
    }

    const lastItemIndex = this.map.size - 1;

    this.map.delete(lastItemIndex);
  }

  PLUS() {
    if (this.map.size < 2) {
      throw new Error('There are not enough numbers to do the calculation.');
    }

    const penultimateItemIndex = this.map.size - 2;
    const lastItemIndex = this.map.size - 1;
    const newValue = this.map.get(lastItemIndex) + this.map.get(penultimateItemIndex);

    this.map.delete(penultimateItemIndex);
    this.map.delete(lastItemIndex);
    this.pushNumber(newValue);
  }

  MINUS() {
    if (this.map.size < 2) {
      throw new Error('There are not enough numbers to do the calculation.');
    }

    const penultimateItemIndex = this.map.size - 2;
    const lastItemIndex = this.map.size - 1;
    const newValue = this.map.get(penultimateItemIndex) - this.map.get(lastItemIndex);

    if (newValue < 0) {
      throw new Error(' The result of an operation is a negative number.');
    }

    this.map.delete(penultimateItemIndex);
    this.map.delete(lastItemIndex);
    this.pushNumber(newValue);
  }
}

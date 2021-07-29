## Instructions

Write a machine that receives a string of commands, consisting of one or more of the following separated by spaces:

- An unsigned integer from 0 to 2^20 - 1.
- "DUP"
- "POP"
- "+"
- "-"

The machine does all the calculations and return the last resulting number from the stack.

## Operations

- When the machine receives a number, it pushes it into its stack.
- When it receives the "DUP" command, it duplicates the last item in the stack.
- When it receives the "POP" command, it removes the last item in the stack.
- When it receives the "+" command, it will take the last two items in the stack, sum them together, and replace both positions with the result.
- When it receives the "-" command, it will take the last two items in the stack, subtract the left from the right and replace both positions with the result.

The machines reports an error (returns -1) if any of the following occur:

- The given number is greater than 2^20 - 1.
- There are not enough numbers to do the calculation.
- The result of an operation is a negative number.

## Examples

"4 5 + DUP 3 -"
|Entry| Stack |
|--|--|
| 4 | [4] |
| 5 | [4, 5] |
| + | [9] |
| DUP | [9, 9] |
| 3 | [9, 9, 3] |
| - | [9, 6] |

**Result: 6**

"3 DUP 4 + POP -"
|Entry| Stack |
|--|--|
| 3 | [3] |
| DUP | [3, 3] |
| 4 | [3, 3, 4] |
| + | [3, 7] |
| POP | [3] |
| - | Error |

**Result: -1**

## Proof of work

1. install dependencies.

```
$ npm i
```

2. Run test script.

```
$ npm test
```

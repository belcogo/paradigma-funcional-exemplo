import { Operation } from "./constants";
import { Operations } from "./enums";

export class Calculator {
  private constructor() {}

  private static regexFullEq: RegExp = /[-+*\/()]|\d+/g;
  private static regexOperators: RegExp = /[-+*\/]/g;
  private static regexDigits: RegExp = /\d+/g

  public static solve(calculation: string): number[] {
    return Calculator.calculate(
      Calculator.build(Calculator.createTokens(calculation))
    );
  }

  private static createTokens(calculation: string): string[] {
    return calculation.match(Calculator.regexFullEq) ?? [];
  }

  private static priority(token: string) {
    let result = 0;

    switch(token) {
      case Operations.Add:
      case Operations.Subtract:
        result = 1;
        break;
      case Operations.Multiply:
      case Operations.Divide:
        result = 2;
        break;
      default:
        result = 0;
    }

    return result;
  }

  private static build(tokens: string[]): string[] {
    const auxStack: string[] = [];
    let currentToken;
    let count = 0;
    const stack: string[] = []

    while (count < tokens?.length) {
      currentToken = tokens[count];

      if (currentToken.match(Calculator.regexOperators)) {
        // CASE operator
        while(auxStack.length && Calculator.priority(currentToken) <= Calculator.priority(auxStack[auxStack.length - 1])) {
          stack.push(auxStack.pop() || '')
        }

        auxStack.push(currentToken);
      } else if (currentToken === '(') {
        // CASE (
        auxStack.push(currentToken);
      } else if (currentToken === ')') {
        // CASE )
        while(auxStack[auxStack.length - 1] !== '(') {
          stack.push(auxStack.pop() || '')
        }

        if (auxStack[auxStack.length - 1] === '(') {
          auxStack.pop();
        }
      } else {
        // CASE digits
        stack.push(tokens[count])
      }
      count++;
    }

    return stack;
  }

  private static calculate(stack: string[]): number[] {
    const auxStack: number[] = [];
    let count = 0;

    while(count <= stack.length) {
      const currentToken = stack[count];
      if (currentToken?.match(Calculator.regexDigits)) {
        auxStack.push(Number(currentToken));
      } else if (currentToken?.match(Calculator.regexOperators)) {
        const secondValue = auxStack.pop() || 0;
        const firstValue = auxStack.pop() || 0;
        const newValue = Operation[currentToken](firstValue, secondValue);
        auxStack.push(newValue);
      }
      count++;
    }

    return auxStack;
  }
}

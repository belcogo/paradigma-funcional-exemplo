import { IMath } from "./interfaces";

export class Calculator {
  private constructor() {}

  public static solve(calculation: string): number {
    return Calculator.evaluate(
      Calculator.build(Calculator.createTokens(calculation))
    );
  }

  private static createTokens(calculation: string): string[] {
    return calculation.match(/[-+*\/()]|\d+/g) ?? [];
  }

  private static build(tokens: string[]): IMath[] {
    throw new Error("Method not implemented!");
  }

  private static evaluate(stack: IMath[]): number {
    throw new Error("Method not implemented!");
  }
}

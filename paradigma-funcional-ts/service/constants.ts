import { Operations } from "./enums";

export const Operation = {
  [Operations.Add]: (x: number, y: number) => x + y,
  [Operations.Subtract]: (x: number, y: number) => x - y,
  [Operations.Multiply]: (x: number, y: number) => x * y,
  [Operations.Divide]: (x: number, y: number) => x / y,
};

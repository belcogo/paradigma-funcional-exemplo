import { Operation } from "./constants";
import { MathType } from "./enums";

export interface IMath {
  type: MathType;
}

export interface IValue extends IMath {
  type: MathType.Value;
  value: number;
}

export interface IExpression extends IMath {
  type: MathType.Expression;
  operation: typeof Operation;
  left: IMath;
  right: IMath;
}

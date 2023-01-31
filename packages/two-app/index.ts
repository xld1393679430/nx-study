import { isEven } from "first-app"

console.log(isEven(2));

export const isOdd = (x: number) => !isEven(x);
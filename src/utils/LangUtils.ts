export function isFunction(x: any): x is Function {
  return typeof x === "function";
}

export function isObject(x: any): x is Object {
  return typeof x === "object";
}

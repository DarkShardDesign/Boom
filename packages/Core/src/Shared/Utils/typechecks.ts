const typecheck = (value, type) => typeof value === type;
export const isString = value => typecheck(value, 'string');
export const isFunction = value => typecheck(value, 'function');
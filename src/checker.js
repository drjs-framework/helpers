export function isFunction(func) {
  return (func && typeof func === 'function');
}

export function existObjectPath(obj, path) {
  const partPath = path.split('.');
  if (typeof obj[partPath[0]] !== 'undefined') {
    if (partPath.length > 1) {
      return existObjectPath(obj[partPath[0]], partPath.slice(1).join('.'));
    }
    return true;
  }
  return false;
}

export function buildIfExist(data, Type) {
  if (typeof Type === 'undefined') {
    throw Error('The parameters Type is undefined');
  }
  return (data ? new Type(data) : null);
}

export function stringIsNotEmpty(str) {
  return typeof str === 'string' && str && str !== '';
}

export function isEmptyString(str) {
  return !str || str === '';
}

export function transformRequestActions(name, actions) {
  return {
    [`${name}Request`]: actions.request,
    [`${name}Clear`]: actions.clear,
  };
}

export function transformFormActions(name, actions) {
  return {
    [`${name}Init`]: actions.init,
    [`${name}Update`]: actions.update,
    [`${name}Clear`]: actions.clear,
  };
}

export function callIfExist(func, ...args) {
  if (isFunction(func)) {
    return func(...args);
  }

  return null;
}


function fnBody(type) {
  return Function.prototype.toString.call(type).replace(/^[^{]*{\s*/, '').replace(/\s*}[^}]*$/, '');
}

export function isClass(type) {
  return (
    /^class[\s{]/.test(Function.prototype.toString.call(type)) ||
    (/^.*classCallCheck\(/.test(fnBody(type))) ||
    (/^.*classCallCheck.\.default\)/.test(fnBody(type)))
  );
}

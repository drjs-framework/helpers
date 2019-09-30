const TYPE_CHECKBOX = 'checkbox';
const TYPE_NUMBER = 'number';

function getValue(event) {
  const { target } = event;

  switch (target.type) {
    case TYPE_CHECKBOX:
      return target.checked;
    case TYPE_NUMBER:
      return parseInt(target.value, 10);
    default:
      return target.value;
  }
}
export function transformEventToData(event) {
  const { target } = event;
  const { name } = target;

  const value = getValue(event);

  return { [name]: value };
}

export function checkRequiredFields(data, fields) {
  for (const field of fields) {
    if (typeof data[field] === 'boolean') {
      return true;
    }
    if (!data[field]) {
      log.debug(`${field} is not present`);
      return false;
    }
  }
  return true;
}

export function checkFieldError(fieldName, errors) {
  if (errors && errors.searchElements('field', fieldName).length > 0) {
    return errors.searchElements('field', fieldName)[0].message;
  }

  return null;
}

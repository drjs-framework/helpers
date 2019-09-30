function transformDaysToMilliseconds(days) {
  return days * 24 * 60 * 60 * 1000;
}

export function setCookieDate(cname, cvalue, date) {
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${cname} = ${cvalue} ; ${expires} ; path=/ ; domain=.${configuration.get('domainPhoto')}`;
}

export function setCookie(cname, cvalue, exdays) {
  const date = new Date();
  date.setTime(date.getTime() + transformDaysToMilliseconds(exdays));
  setCookieDate(cname, cvalue, date);
}

export function getCookie(cname) {
  const name = `${cname} =`;
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

export function deleteCookie(cname) {
  document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

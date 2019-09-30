import moment from 'moment';

function getLocale(date) {
  const language = Translate.locale;
  const localeDate = moment(date).locale(language);
  return localeDate;
}

export function getCurrentDate() {
  const currentDate = new Date();
  return currentDate;
}

export function getDayMonth(date) {
  const format = `D [${trans('labels.of')}] MMMM`;
  const formattedDate = getLocale(date).format(format);
  return formattedDate;
}

export function getMonthYearFormatted(date) {
  const formattedDate = getLocale(date).format('MMMM YYYY');
  return formattedDate;
}

export function getFullDate(date) {
  const formattedDate = getLocale(date).format('LL');
  return formattedDate;
}

export function getSqlDate(date) {
  return date.format('YYYY-MM-DD');
}

export function getAge(birthDate) {
  const age = moment().diff(birthDate, 'years', false);
  return age;
}

export function xMinutesHavePassed(minutes, lastConnectionDate) {
  const curretDate = moment();
  const lastConnectionDateMoment = moment(lastConnectionDate);
  const diffInMinutes = curretDate.diff(lastConnectionDateMoment, 'minutes');

  return diffInMinutes <= minutes;
}

export function isBeforeDate(startDate, endDate) {
  return moment(startDate).isBefore(endDate);
}

export function getTimeAgo(startDate, endDate, measureType) {
  const startDateMoment = moment(startDate);
  const endDateMoment = moment(endDate);
  return endDateMoment.diff(startDateMoment, measureType);
}

export function getHourAndMinute(time) {
  return time ? time.substring(0, 5) : null;
}

export function getSortFormat(date) {
  return getLocale(date).format('DD/MM/YY');
}

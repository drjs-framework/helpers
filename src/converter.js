import moment from 'moment';
import v4 from 'uuid/v4';
import { getFileExtension } from './file';

function removeDataFromBase64(result) {
  const posReplace = result.indexOf(',', result);
  return result.substring(posReplace + 1);
}

export function getAges(birthdate) {
  const now = moment();
  const birthdateMoment = moment(birthdate);
  return now.diff(birthdateMoment, 'years');
}

export function fileToBase64(file, isPrivate = true) {
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve({
        id: v4(),
        base64: removeDataFromBase64(reader.result),
        filename: file.name,
        extension: getFileExtension(file.name),
        isPrivate,
      });
    };
    reader.onerror = (error) => {
      reject(new Error(error));
    };
  });
}

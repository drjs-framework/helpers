function getFileExtensionOfName(filename) {
  return filename.split('.').pop();
}

export function getFileExtension(file) {
  if (typeof file === 'object') {
    return getFileExtensionOfName(file.name);
  }
  return getFileExtensionOfName(file);
}

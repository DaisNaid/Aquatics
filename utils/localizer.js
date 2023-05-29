import serviceStyles from 'constants/serviceStyles';

export function getStyle (keys) {
    return keys.reduce((acc, key) => {
      if (key === '') {
        return acc;
      }
      return acc + ' ' + serviceStyles[key];
    }, '');
}

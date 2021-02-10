export function convertNumberToHexString(n: number) {
  return n.toString(16);
}

export function convertHexStringToDecimalNumber(s: string) {
  return parseInt(s, 16);
}

export function zeroPadHalfByte(n: number | string) {
  const numberAsHexString = typeof n === 'number' ? convertNumberToHexString(n) : n;

  switch (numberAsHexString.length) {
    case 0:
      return '0000';
    case 1:
      return `000${numberAsHexString}`;
    case 2:
      return `00${numberAsHexString}`;
    case 3:
      return `0${numberAsHexString}`;
    case 4:
      return numberAsHexString;
    default:
      throw new Error('Invalid number passed to zeropad');
  }
}

export function convertNumberToHexString(n: number) {
  return n.toString(16);
}

export function convertHexStringToDecimalNumber(s: string) {
  return parseInt(s, 16);
}

export function zeroPad(n: number | string, paddedLength: number = 4) {
  const numberAsHexString = typeof n === 'number' ? convertNumberToHexString(n) : n;

  function doPadding(paddedLength: number, hexString: string) {
    let pad = '';
    while (pad.length < paddedLength - hexString.length) {
      pad += '0';
    }

    return `${pad}${hexString}`;
  }

  return doPadding(paddedLength, numberAsHexString);
}

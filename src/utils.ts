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

//https://gekkio.fi/blog/2015/mooneye-gb-a-gameboy-emulator-written-in-rust/
export function signedOffset(value: number) {
  return (value & 0x80) >> 7 === 1 ? value - 0x100 : value;
}

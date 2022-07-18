let dataBus = 0b0000_0000;

export function readDataBus() {
  return dataBus;
}

export function writeToDataBus(value: number) {
  dataBus = value;
}

let addressBus = 0b0000_0000_0000_0000;

export function readAddressBus() {
  return addressBus;
}

export function writeToAddressBus(value: number) {
  addressBus = value;
}

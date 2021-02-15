export const regA = 'A';
export const regB = 'B';
export const regC = 'C';
export const regD = 'D';
export const regE = 'E';
export const regF = 'F';
export const regH = 'H';
export const regL = 'L';
export const regSP = 'SP';
export const regPC = 'PC';

export const regAF = 'AF';
export const regBC = 'BC';
export const regDE = 'DE';
export const regHL = 'HL';

export const registers = {
  [regA]: 0x00000000,
  [regB]: 0x00000000,
  [regC]: 0x00000000,
  [regD]: 0x00000000,
  [regE]: 0x00000000,
  [regF]: 0x00000000,
  [regH]: 0x00000000,
  [regL]: 0x00000000,
  [regSP]: 0x0000000000000000,
  [regPC]: 0x0000000000000000,
};

function setRegisterPairValue(registerPair, value) {
  function set16bitValues(highByteRegister, lowByteRegister, v) {
    setRegisterValue(highByteRegister, (v >> 8) & 0xff);
    setRegisterValue(lowByteRegister, v & 0xff);
  }

  switch (registerPair) {
    case regAF:
      set16bitValues(regA, regF, value);
      break;
    case regBC:
      set16bitValues(regB, regC, value);
      break;
    case regDE:
      set16bitValues(regD, regE, value);
      break;
    case regHL:
      set16bitValues(regH, regL, value);
      break;
  }
}

function getRegisterPairValue(registerPair) {
  function get16bitValues(highByteRegister, lowByteRegister) {
    return (getRegisterValue(highByteRegister) << 8) + getRegisterValue(lowByteRegister);
  }

  switch (registerPair) {
    case regAF:
      return get16bitValues(regA, regF);
    case regBC:
      return get16bitValues(regB, regC);
    case regDE:
      return get16bitValues(regD, regE);
    case regHL:
      return get16bitValues(regH, regL);
  }
}

export function setRegisterValue(register, value) {
  switch (register) {
    case regA:
    case regB:
    case regC:
    case regD:
    case regE:
    case regF:
    case regH:
    case regL:
    case regSP:
    case regPC:
      registers[register] = value;
      break;
    case regAF:
    case regBC:
    case regDE:
    case regHL:
      setRegisterPairValue(register, value);
      break;
  }
}

export function getRegisterValue(register) {
  switch (register) {
    case regA:
    case regB:
    case regC:
    case regD:
    case regE:
    case regF:
    case regH:
    case regL:
    case regSP:
    case regPC:
      return registers[register];
    case regAF:
    case regBC:
    case regDE:
    case regHL:
      return getRegisterPairValue(register);
  }
}

//@ts-ignore
window.registers = registers;

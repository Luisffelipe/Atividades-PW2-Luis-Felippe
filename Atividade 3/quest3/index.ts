export const function3 = (array1: string[], array2: string[]): boolean => {

  if (array1.length !== array2.length) {
    return false;
  } else {
    return array1.every((element, index) => element === array2[index]);
  }
}
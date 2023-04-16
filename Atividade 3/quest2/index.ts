
export function function2(array1: string[], array2: string[]): Array<string | undefined> | undefined {

    if (array1.length != array2.length) {
        return undefined;
    }

    let array: Array<string | undefined> = [];

    array1.forEach((item, index) => {
        if (item === array2[index]) {
            array.push(item);
        } else {
            array.push(undefined);
        }
    })

    return array;
}
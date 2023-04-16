export function function4(matriz1: string[][], matriz2: string[][]): Array<string | undefined> | undefined {

    for (let i = 0; i < matriz1.length; i++) {
        if (matriz1[i].length != matriz2[i].length) {
            return undefined
        }
    }

    let newArray: Array<string | undefined> = []

    for (let linha = 0; linha < matriz1.length; linha++) {
        for (let coluna = 0; coluna < matriz1.length; coluna++) {
            if (matriz1[linha][coluna] === matriz2[linha][coluna]) {
                newArray.push(matriz1[linha][coluna])
            } else {
                newArray.push(undefined)
            }

        }
    }

    return newArray;
}
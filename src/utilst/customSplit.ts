import { checkOpenQuotationMark } from './checkOpenQuotationMark';

export const customSplit = (str: string): string[] => {
    const result: string[] = []
    let splitIntex: number = 0

    for (let index = 0; index < str.length; index++) {
        const element = str[index];

        if (element === ',') {
            const substr = str.substring(splitIntex, index)

            if (!checkOpenQuotationMark(substr)) {
                splitIntex = index + 1
                result.push(substr)
            }
        }

        if (index === str.length - 1) {
            result.push(str.substring(splitIntex, index + 1))
        }
    }
    return result
}
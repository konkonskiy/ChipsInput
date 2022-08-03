export const checkOpenQuotationMark = (str: string) : boolean => {
    const quantity = (str.match(/"/g) || []).length
    return quantity % 2 !== 0
}
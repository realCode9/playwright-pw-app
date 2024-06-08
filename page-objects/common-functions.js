

export class CommonFunctions{

    /**
     * @param {*} tileElement - Provide element for which you want text
     * @returns - Returns the text of the element provided
     */
    async getTextOfElement(tileElement) {
        return await tileElement.textContent()
    }
    async getCSSValueOfElement(element) {
        return await element.css
    }
}
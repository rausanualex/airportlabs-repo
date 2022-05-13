export class CommonMethods {



    //this method will wait and click on any web element inserted as parameter
    clickOnElement(webElement) {
        cy.get(webElement).should('be.visible').click();
    };

    //this method wll click on an element by text
    clickOnElementByText(webElement, text) {
        cy.get(webElement).contains(text).should('exist').click({force: true});
    };

    //this method will click on any web element inserted as parameter, with force true
    clickOnElementForceTrue(webElement) {
        cy.get(webElement).click({force: true});
    };

    //this method is needed in order to be able to run tests without getting cross origin error
    setCrossOriginUncaughtErrorFalse() {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
    }


}

export const commonMethods = new CommonMethods()
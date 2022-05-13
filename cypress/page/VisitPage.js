import {commonMethods} from "../Common/commonMethods";

export class VisitPage {

    navigateToAirportLabs() {
        cy.visit('https://airportlabs.com');
        commonMethods.setCrossOriginUncaughtErrorFalse();
    }

    navigateToEmag() {
        cy.visit('www.emag.ro');
        commonMethods.setCrossOriginUncaughtErrorFalse();
    }
}

export const visitPage = new VisitPage()
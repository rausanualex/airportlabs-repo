import {airportLabsSelectors} from "../Common/data/AirportLabsSelectors";
import {airportLabsConstants, facebook, linkedin, twitter} from "../Common/data/AirportLabsConstants";

export class AirportLabsPage {

    verifyCssForOurSectionTittle(fontPx, marginBottomPx, color, fontFamily) {
        cy.get(airportLabsSelectors.titles).contains(airportLabsConstants.ourSolution).should('have.css','font-size',fontPx)
            .and('have.css','margin-bottom',marginBottomPx)
            .and('have.css', 'background-color', color)
            .and('have.css','font-family',fontFamily);
    }

    verifyCssForVisionAirSubtitle(fontPx, marginBottomPx, fontFamily) {
        cy.get(airportLabsSelectors.subtitles).contains(airportLabsConstants.visionAir).should('have.css','font-size',fontPx)
            .and('have.css','margin-bottom',marginBottomPx)
            .and('have.css','font-family',fontFamily);
    }

    verifyCssAndSectionNumber(number, text) {
        cy.get(airportLabsSelectors.visionAirContainer).find(number).should('contain.text',text)
            .and('be.visible')
            .and('have.css','font-size','42px')
            .and('have.css','color','rgb(20, 163, 188)')
            .and('have.css','font-family','Montserrat, sans-serif');
    }

    verifyCssAndSectionDescription(description, text) {
        cy.get(airportLabsSelectors.visionAirContainer).find(description).should('contain.text', text)
            .and('be.visible')
            .and('have.css','font-size','14px')
            .and('have.css','color','rgb(120, 135, 167)')
            .and('have.css','font-family','Montserrat, sans-serif');
    }

    verifyGetInTouchSection() {
        cy.get(airportLabsSelectors.getInTouchContainer).contains(airportLabsConstants.getInTouch).should('be.visible');
        cy.get(airportLabsSelectors.getInTouchContainer).find(airportLabsSelectors.emailAddress).should('be.visible')
            .and('contain.text',airportLabsConstants.emailAddress);
    }

    verifyTwitterRedirect() {
        cy.get(airportLabsSelectors.socialMediaRedirectTwitter).click();
        cy.url().should("contain", twitter.twitter_extension);
        cy.title().should("include", twitter.title);
    }

    verifyLinkedinRedirect() {
        cy.get(airportLabsSelectors.socialMediaRedirectLinkedin).click();
        cy.url().should("contain", linkedin.linkedin_extension);
        cy.title().should("include", linkedin.title);
    }

    verifyFacebookRedirect() {
        cy.get(airportLabsSelectors.socialMediaRedirectFacebook).click();
        cy.get(airportLabsSelectors.acceptFacebookAgreements).click({force: true, multiple: true})
        cy.url().should("contain", facebook.facebook_extension);
        cy.title().should("include", facebook.title);
    }

    verifyAirportLabsLogo() {
        cy.get(airportLabsSelectors.airportLabsLogo).should('be.visible')
            .and('exist')
            .and('have.css','font-size','16px')
            .and('have.css','width','80px')
            .and('have.css','height','52px');
    }
}
export const airportLabs = new AirportLabsPage()

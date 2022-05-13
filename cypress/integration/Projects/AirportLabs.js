import {airportLabsSelectors} from "../../Common/data/AirportLabsSelectors";
import {airportLabsConstants} from "../../Common/data/AirportLabsConstants";
import {airportLabs} from "../../page/AirportLabsPage";
import {visitPage} from "../../page/VisitPage";


describe('Testing different scenarios for Airport Labs.', () => {
    beforeEach( () => {
        visitPage.navigateToAirportLabs();
    })
    it('Verify the title from a section is correct', () => {
        airportLabs.verifyCssForOurSectionTittle('42px', '21px', 'rgba(0, 0, 0, 0)', 'Montserrat, sans-serif');
    })

    it('Verify that the statistic of a section from the landing page is correct', () => {
        airportLabs.verifyCssForVisionAirSubtitle('30px', '22px', 'Montserrat, sans-serif');
        airportLabs.verifyCssAndSectionNumber(airportLabsSelectors.firstNumber, '5.1K');
        airportLabs.verifyCssAndSectionDescription(airportLabsSelectors.firstDescription, airportLabsConstants.firstDescriptionText);
        airportLabs.verifyCssAndSectionNumber(airportLabsSelectors.secondNumber, '154M');
        airportLabs.verifyCssAndSectionDescription(airportLabsSelectors.secondDescription, airportLabsConstants.secondDescriptionText);
        airportLabs.verifyCssAndSectionNumber(airportLabsSelectors.thirdNumber, '+3');
        airportLabs.verifyCssAndSectionDescription(airportLabsSelectors.thirdDescription, airportLabsConstants.thirdDescriptionText);
    })

    it("Verify that you can use 'GET IN TOUCH SECTION'", () => {
        airportLabs.verifyGetInTouchSection();
    })

    describe('Verify that social media links are redirecting user to the correct pages', () => {

        it('Verify that you are redirecting to Twitter', () => {
        airportLabs.verifyTwitterRedirect();
    })

        it('Verify that you are redirecting to Linkedin', () => {
           airportLabs.verifyLinkedinRedirect();
        })

        it('Verify that you are redirecting to Facebook', () => {
            airportLabs.verifyFacebookRedirect();
        })
    })

    it('Verify that an image with the AirportLabs logo exists', () => {
        airportLabs.verifyAirportLabsLogo();
    })
})

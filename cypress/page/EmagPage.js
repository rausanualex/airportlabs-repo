import {emagSelectors} from "../Common/data/EmagSelectors";
import {commonMethods} from "../Common/commonMethods";
import {emagConstants} from "../Common/data/EmagConstants";

export class EmagPage {

    acceptCookies() {
        commonMethods.clickOnElement(emagSelectors.acceptCookies);
    }

    addToCartTheMostExpensiveTvFromSamsungWithMinimumThreeStars() {
        this.clickOnTvAudioVideoAndPhoto();
        this.clickOnTelevisionAndAccessory();
        this.clickOnTelevision();
        this.selectSamsungFromSearch();
        this.selectLedTV();
        this.selectPriceDescending();
        this.selectMinimThreeStars();
        this.addTheMostExpensiveTvInCart();
        this.closeAfterAddingToCart();
        this.getTvName();
    }

    clickOnTvAudioVideoAndPhoto() {
        commonMethods.clickOnElementByText(emagSelectors.tvAudioSiVideo, emagConstants.tvAudioVideo);
    }

    clickOnTelevisionAndAccessory() {
       commonMethods.clickOnElementForceTrue(emagSelectors.televizoareSiAccesorii);
    }

    clickOnTelevision() {
        commonMethods.clickOnElement(emagSelectors.televizoare);
    }

    selectSamsungFromSearch() {
        commonMethods.clickOnElementForceTrue(emagSelectors.samsungInSearchBar);
    }

    selectLedTV() {
        cy.get(emagSelectors.tehnolgieDsiplayContainer, {timeout: 30000}).should('be.visible');
        cy.get(emagSelectors.tehnolgieDsiplayContainer).contains(emagConstants.led).click({force: true});
    }

    selectPriceDescending() {
        cy.get(emagSelectors.ordoneazaDupaContainer, {timeout: 30000}).should('be.visible');
        commonMethods.clickOnElementForceTrue(emagSelectors.ordoneazaDupaContainer);
        commonMethods.clickOnElementByText(emagSelectors.ordoneazaDupaPretDescrescator, emagConstants.pretDescrescator);
    }

    selectMinimThreeStars() {
        cy.get(emagSelectors.selectThreeStar, {timeout: 30000}).should('be.visible');
        commonMethods.clickOnElement(emagSelectors.selectThreeStar);
    }

    getTvName() {
        cy.get(emagSelectors.titlu).contains(emagConstants.celMaiScumpTelevizorSamsung).invoke('text').as('most_expensive_tv');
    }

    addTheMostExpensiveTvInCart() {
        cy.get(emagSelectors.celMaiScumpTelevizorSamsung, {timeout: 30000}).contains(emagConstants.precomanda).scrollIntoView().should('be.visible');
        cy.get(emagSelectors.celMaiScumpTelevizorSamsung).contains(emagConstants.precomanda).click({force: true});
        cy.wait(7000);
    }

    closeAfterAddingToCart() {
        cy.get('body').then( $body => {
            const close_button = $body.find(emagSelectors.inchideDupaAdaugare).length;

            if(close_button) {
                cy.log('********** ' + close_button + ' exists!' );
                cy.get(emagSelectors.inchideDupaAdaugare).should('be.visible').click({force: true});

            } else {
                cy.log('********** ' + close_button + ' NOT exists!' );
                cy.get(emagSelectors.inapoi).should('be.visible').click({force: true});
            }
        })
    }

    addTheCheapestAccessoryFromSamsungTvWithMinimumThreeStarsInCart() {
        this.selectAccessoryTV();
        this.selectSamsungBrandForAccessory();
        this.selectPriceAscending();
        this.selectMinimThreeStars();
        this.getAccessoryName();
        this.addTheMinimumPriceAccessoryToCart();
        this.closeAfterAddingToCart();
    }

    selectAccessoryTV() {
        commonMethods.clickOnElementForceTrue(emagSelectors.accesoriiTv);
    }

    selectSamsungBrandForAccessory() {
        cy.get(emagSelectors.samsungFiltru, {timeout: 30000}).contains(emagConstants.samsung).should('be.visible');
        commonMethods.clickOnElementByText(emagSelectors.samsungFiltru, emagConstants.samsung);
    }

    selectPriceAscending() {
        cy.get(emagSelectors.ordoneazaDupaContainer, {timeout: 30000}).should('be.visible');
        commonMethods.clickOnElementForceTrue(emagSelectors.ordoneazaDupaContainer);
        commonMethods.clickOnElementByText(emagSelectors.ordoneazaDupaPretCrescator, emagConstants.pretCrescator);
    }

    addTheMinimumPriceAccessoryToCart() {
        commonMethods.clickOnElementByText(emagSelectors.celMaiIeftinAccesoriuTvSamsung, emagConstants.adaugaInCos);
        cy.wait(7000);
    }

    getAccessoryName() {
        cy.get(emagSelectors.titlu).contains(emagConstants.celMaiIeftinAccesoriuTvSamsung).invoke('text').as('cheapest_accessory');
    }

    checkCartContainsItems() {
        commonMethods.clickOnElement(emagSelectors.cosuMeu);
        cy.get('@most_expensive_tv').then( text=> {
            let most_expensive_tv = text;
            cy.get('#vendorsContainer').should('contain', most_expensive_tv);
        })
        cy.get('@cheapest_accessory').then( text => {
            let cheapest_accessory = text;
            cy.get('#vendorsContainer').should('contain', cheapest_accessory);
        })
    }
}

export const emagPage = new EmagPage()
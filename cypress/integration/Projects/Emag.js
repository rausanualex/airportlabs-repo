import {emagPage} from "../../page/EmagPage";
import {visitPage} from "../../page/VisitPage";

describe('Testing different scenarios for Emag', () => {

    beforeEach(() => {
        visitPage.navigateToEmag();
    })

    it('', () => {
        emagPage.acceptCookies();
        emagPage.addToCartTheMostExpensiveTvFromSamsungWithMinimumThreeStars();
        emagPage.addTheCheapestAccessoryFromSamsungTvWithMinimumThreeStarsInCart();
        emagPage.checkCartContainsItems();
    })
})
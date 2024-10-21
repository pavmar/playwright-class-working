import { HomePage } from './src/pages/home-page';
import { MainViewPage } from './src/pages/toolshop/mainview-page';
import { test as base } from '@playwright/test';
import { RentalPageView } from './src/pages/toolshop/rentals-page';

type allStepsClasses = {
    homePage: HomePage;
    mainViewPage: MainViewPage;
    rentalPageView: RentalPageView;
}

export const test = base.extend<allStepsClasses>({
    homePage: async ({ page }, use) => { await use(new HomePage(page)) },
    mainViewPage: async({page}, use) =>{ await use(new MainViewPage(page))},
    rentalPageView: async({page}, use) =>{ await use(new RentalPageView(page))}

});
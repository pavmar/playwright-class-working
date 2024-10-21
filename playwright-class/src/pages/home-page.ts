import { Locator, Page, expect } from "@playwright/test";

import { BasePage } from "./base-page";

export class HomePage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    private readonly email: Locator = this.page.locator('[name="email"]');

    public async playwrightTest() {
        await this.page.goto('https://playwright.dev/',{waitUntil: "load"});
        await this.page.getByRole('link', { name: 'Docs' }).click();
        await this.page.getByRole('link', { name: 'Writing tests', exact: true }).click();
        await this.page.getByRole('heading', { name: 'Writing tests' }).click();
        await expect(this.page.getByRole('heading', { name: 'Writing tests' })).toBeVisible();
        await this.page.getByLabel('Search').click();
        await this.page.getByPlaceholder('Search docs').click();
        await this.page.getByPlaceholder('Search docs').fill('.Click');
        await this.page.getByRole('link', { name: 'click​ Locator' }).click();
        await expect(this.page.getByRole('heading', { name: 'clickDirect link to click' })).toBeVisible();

    }
    public async submitInfo() {
        await this.page.goto('https://dozi-staging.zoominfo.com/');
        await this.email.click()
        await this.page.locator('[name="email"]').fill('Test U');
        await this.page.locator('#pass').fill('TestU');
        await this.page.locator('[name="company"]').first().fill('Test University');
        await this.page.locator('[name="mobile number"]').first().fill('0000000000');
        await this.page.locator('button', { hasText: "Submit" }).click();
        //await this.page.locator('[alt="Claw Hammer with Shock Reduction Grip"]')
    }

   
}

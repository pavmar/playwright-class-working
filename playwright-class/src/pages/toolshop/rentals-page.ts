import { Locator, Page, expect } from '@playwright/test';

import { BasePage } from "../base-page";

export class RentalPageView extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    private readonly email: Locator = this.page.locator('[name="email"]');

    public async navigateRentals() {
        await this.page.goto('https://practicesoftwaretesting.com/rentals');
        await expect(this.page.locator('[data-test="page-title"]')).toBeVisible();
    }

    public async navRentalExcavator()
    {
        await this.page.goto('https://practicesoftwaretesting.com/rentals');
        await this.page.getByRole('img', { name: 'Excavator' }).click();
        await expect(this.page.locator('[data-test="product-name"]')).toBeVisible();
        await expect(this.page.getByRole('img', { name: 'Excavator' })).toBeVisible();
    }

    public async navRentalBulldozer()
    {
        await this.page.goto('https://practicesoftwaretesting.com/rentals');
        await this.page.getByRole('img', { name: 'Bulldozer' }).click();
        await expect(this.page.locator('[data-test="product-name"]')).toBeVisible();
    }

}

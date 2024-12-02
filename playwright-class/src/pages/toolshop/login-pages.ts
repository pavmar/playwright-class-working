import { Browser, Locator, Page, expect } from '@playwright/test';

import { BasePage } from "../base-page";
import { exit } from 'process';
import fs from 'fs';

export class LoginPageView extends BasePage {
    
    constructor(page: Page) {
        super(page);
    }

    public async fooLoginTest() {
        console.log("TEST");
    }

    public async openPage() {
        await this.page.goto(process.env.BASEURL+"/account");
    }

    public async addToCart() {
        await this.page.goto(process.env.BASEURL);
        await this.page.locator('[data-test="nav-home"]').click();
        await this.page.locator('[alt="Combination Pliers"]').click();
        await this.page.locator('[data-test="increase-quantity"]').click();
        await this.page.locator('[data-test="add-to-cart"]').click();
        await expect(this.page.getByLabel('Product added to shopping')).toBeVisible();
    }

    public async removeFromCart() {
        await this.page.goto(process.env.BASEURL);
        await this.page.locator('[data-test="nav-home"]').click();
        await this.page.locator('[alt="Combination Pliers"]').click();
        await this.page.locator('[data-test="increase-quantity"]').click();
        await this.page.locator('[data-test="add-to-cart"]').click();
        await expect(this.page.getByLabel('Product added to shopping')).toBeVisible();
        await this.page.locator('[data-test="nav-cart"]').click();
        await this.page.getByRole('row', { name: 'Combination Pliers Quantity' }).locator('a').click();
        await expect(this.page.getByLabel('Product deleted.')).toBeVisible();

    }

    public async userLogout() {
        await this.page.goto(process.env.BASEURL);
        await this.page.locator('[data-test="nav-home"]').click();
        await this.page.locator('[data-test="nav-menu"]').click();
        await this.page.locator('[data-test="nav-sign-out"]').click();
        await expect(this.page.locator('[data-test="nav-sign-in"]')).toBeVisible();

    }

    public async userCheckout() {
        await this.page.goto(process.env.BASEURL);
        await this.page.locator('[data-test="nav-home"]').click();
        await this.page.locator('[alt="Combination Pliers"]').click();
        await this.page.locator('[data-test="increase-quantity"]').click();
        await this.page.locator('[data-test="add-to-cart"]').click();
        await expect(this.page.getByLabel('Product added to shopping')).toBeVisible();
        await this.page.locator('[data-test="nav-cart"]').click();

        await expect(this.page.getByRole('cell', { name: 'Combination Pliers', exact: true })).toBeVisible();
        await expect(this.page.locator('[data-test="proceed-1"]')).toBeVisible();
        await this.page.locator('[data-test="proceed-1"]').click();
        await expect(this.page.getByText('Hello Jane Doe, you are')).toBeVisible();
        await this.page.locator('[data-test="proceed-2"]').click();
        await expect(this.page.getByRole('heading', { name: 'Billing Address' })).toBeVisible();
        await this.page.locator('[data-test="state"]').clear();
        await this.page.locator('[data-test="state"]').pressSequentially('Mass');
        await expect(this.page.locator('[data-test="state"]')).toHaveValue('Mass');
        
        await this.page.locator('[data-test="postcode"]').clear();
        await this.page.locator('[data-test="postcode"]').pressSequentially('1234');
        await expect(this.page.locator('[data-test="postcode"]')).toHaveValue('1234');

        await this.page.locator('[data-test="country"]').clear();
        await this.page.locator('[data-test="country"]').pressSequentially('USA');
        await expect(this.page.locator('[data-test="postcode"]')).toHaveValue('USA');

        await this.page.locator('[data-test="proceed-3"]').click();
        await expect(this.page.getByRole('heading', { name: 'Payment' })).toBeVisible();
        await this.page.locator('[data-test="payment-method"]').selectOption('cash-on-delivery');
        await this.page.locator('[data-test="finish"]').click();
        await expect(this.page.getByText('Payment was successful')).toBeVisible();
        await this.page.locator('[data-test="finish"]').click();
        await expect(this.page.getByText('Thanks for your order! Your')).toBeVisible();

    }


}
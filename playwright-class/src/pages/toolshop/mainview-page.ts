import { Locator, Page, expect } from '@playwright/test';

import { BasePage } from "../base-page";
import { exit } from 'process';

export class MainViewPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    private readonly email: Locator = this.page.locator('[name="email"]');

    public async foo() {
        console.log("TESt");
    }
    public async navigateToolShop() {
        await this.page.goto(process.env.BASEURL);
    }

    public async selectForgeFlexTool() {
        await this.page.locator('[data-test="brand-01J8GHTCCMTNDRNNPC12J2EGMM"]').check();
        
    }

    public async verifyForgeFlexHammer() {
        await this.navigateToolShop()
        await this.page.locator('[data-test="category-01J8GHTCDE25GRPR4B3YW2FVSJ"]').check();
        await this.selectForgeFlexTool();
        await expect(this.page.locator('[data-test="product-01J8GHTCEW5SMV45RSE5MVGTPZ"]')).toBeVisible();
        await expect(this.page.locator('[data-test="product-01J8GHTCF5ZZH5A96RCW1VK217"]')).toBeVisible();
        await expect(this.page.locator('[data-test="product-01J8GHTCFHZQ6D35JJ0YNNJB77"]')).toBeVisible();
        await expect(this.page.locator('[data-test="product-01J8GHTCFJEYBMQ2Q1NCZ1PB7Z"]')).toBeVisible();
        await expect(this.page.locator('[data-test="product-01J8GHTCFM3MZ1QD75CZZ0CYDJ"]')).toBeVisible();
        await expect(this.page.locator('[data-test="product-01J8GHTCFQ9Z4Y5GKDST0H6B5D"]')).toBeVisible();

    }

    public async verifyForgeFlexWrench() {
        await this.navigateToolShop()
        await this.page.locator('[data-test="category-01J8GHTCDE25GRPR4B3YW2FVSM"]').check();
        await this.selectForgeFlexTool();
        await expect(this.page.locator('[data-test="product-01J8GHTCFXKATCKP46TKY64V65"]')).toBeVisible();
        await expect(this.page.locator('[data-test="product-01J8GHTCG0DXA50H72CEPMV2ME"]')).toBeVisible();
        await expect(this.page.locator('[data-test="product-01J8GHTCG4Y0198BCWQX3NZPDV"]')).toBeVisible();
        await expect(this.page.locator('[data-test="product-01J8GHTCFXKATCKP46TKY64V65"]')).toBeVisible();
      
    }
    public async homeButtonClick() {
        await this.page.goto(process.env.BASEURL);
        await this.page.locator('[data-test="nav-home"]').click();
        await expect(this.page.getByAltText('Combination Pliers')).toBeVisible();
        // await expect(this.page.locator('[data-test="product-01J9M92TGKNVE6GR4A05QT2ZX7"]')).toBeVisible();
        // await expect(this.page.locator('[data-test="product-01J9M92TGPKNVM8F4CT9V5WC2Z"]')).toBeVisible();
    };

    public async clickCategories() {
        await this.page.goto(process.env.BASEURL);
        await this.page.locator('[data-test="nav-categories"]').click();
        await expect(this.page.locator('[data-test="nav-hand-tools"]')).toBeVisible();
        await expect(this.page.locator('[data-test="nav-power-tools"]')).toBeVisible();
        await expect(this.page.locator('[data-test="nav-other"]')).toBeVisible();
        await expect(this.page.locator('[data-test="nav-special-tools"]')).toBeVisible();
        await expect(this.page.locator('[data-test="nav-rentals"]')).toBeVisible();
    }

    public async clickContact(){
        await this.page.goto(process.env.BASEURL);
        await this.page.locator('[data-test="nav-contact"]').click();
        await expect(this.page.getByRole('heading', { name: 'Contact' })).toBeVisible();
        await expect(this.page.locator('form')).toBeVisible();
    }

    public async clickSignin()
    {
        await this.page.goto(process.env.BASEURL);
        await this.page.locator('[data-test="nav-sign-in"]').click();
        await expect(this.page.getByRole('heading', { name: 'Login' })).toBeVisible();
        await expect(this.page.getByText('Login Sign in with Google or')).toBeVisible();
    }

    public async clickLang(){
        await this.page.goto(process.env.BASEURL);
        await this.page.locator('[data-test="language"]').click();
        await expect(this.page.getByText('DE', { exact: true })).toBeVisible();
        await expect(this.page.getByLabel('EN', { exact: true }).getByText('EN')).toBeVisible();
        await expect(this.page.getByText('ES', { exact: true })).toBeVisible();
        await expect(this.page.getByText('FR')).toBeVisible();
        await expect(this.page.getByText('NL')).toBeVisible();
        await expect(this.page.getByText('TR', { exact: true })).toBeVisible();
    }
    
    public async sortAZ() {
        await this.page.goto(process.env.BASEURL);
        await this.page.locator('[data-test="sort"]').selectOption('name,asc');

        // Wait for the elements to be sorted
        await this.page.waitForSelector('[data-test="sorting_completed"]'); // Adjust selector as necessary

        // Get all elements after sorting
        const elements = await this.page.$$('[data-test="product-name"]'); // Adjust selector as necessary
        const texts = [];

        // Extract text from each element
        for (const element of elements) {
            texts.push(await this.page.evaluate(el => el.textContent, element));
        }
        console.log(texts);

        // Check if the texts are sorted alphabetically
        const sortedTexts = [...texts].sort((a, b) => a.localeCompare(b));
        const areSorted = texts.every((text, index) => text === sortedTexts[index]);

        if (areSorted) {
            console.log('Elements are sorted alphabetically');
        } else {
            throw new Error('Sorting failed. Elements are not in alphabetical order');
        }

    }

    public async sortZA() {
        await this.page.goto(process.env.BASEURL);
        await this.page.locator('[data-test="sort"]').selectOption('name,desc');

        // Wait for the elements to be sorted
        await this.page.waitForSelector('[data-test="sorting_completed"]'); // Adjust selector as necessary

        // Get all elements after sorting
        const elements = await this.page.$$('[data-test="product-name"]'); // Adjust selector as necessary
        const texts = [];

        // Extract text from each element
        for (const element of elements) {
            texts.push(await this.page.evaluate(el => el.textContent, element));
        }
        console.log(texts);

        // Check if the texts are sorted alphabetically
        const sortedTexts = [...texts].sort((a, b) => b.localeCompare(a));
        const areSorted = texts.every((text, index) => text === sortedTexts[index]);

        if (areSorted) {
            console.log('Elements are sorted alphabetically in Z-A');
        } else {
            throw new Error('Sorting failed. Elements are not sorted alphabetically in Z-A');
        }
    }

    public async sortPriceHigh() {
        await this.page.goto(process.env.BASEURL);
        await this.page.locator('[data-test="sort"]').selectOption('price,desc');

        // Wait for the elements to be sorted
        await this.page.waitForSelector('[data-test="sorting_completed"]'); // Adjust selector as necessary

        // Get all elements after sorting
        const elements = await this.page.$$('[data-test="product-price"]'); // Adjust selector as necessary
        const texts = [];

        // Extract text from each element
        for (const element of elements) {
            texts.push(await this.page.evaluate(el => el.textContent, element));
        }
        console.log(texts);

        // Check if the texts are sorted alphabetically
        const sortedTexts = [...texts].sort((a, b) => b.localeCompare(a));
        const areSorted = texts.every((text, index) => text === sortedTexts[index]);

        if (areSorted) {
            console.log('Elements are sorted by price in descending order');
        } else {
            throw new Error('Sorting failed. Elements are not sorted by price in descending order');
        }
    }

    public async sortPriceLow() {
        await this.page.goto(process.env.BASEURL);
        await this.page.locator('[data-test="sort"]').selectOption('price,asc');

        // Wait for the elements to be sorted
        await this.page.waitForSelector('[data-test="sorting_completed"]'); // Adjust selector as necessary

        // Get all elements after sorting
        const elements = await this.page.$$('[data-test="product-price"]'); // Adjust selector as necessary
        const texts = [];

        // Extract text from each element
        for (const element of elements) {
            texts.push(await this.page.evaluate(el => el.textContent, element));
        }
        console.log(texts);

        // Check if the texts are sorted alphabetically
        const sortedTexts = [...texts].sort((a, b) => a.localeCompare(b));
        const areSorted = texts.every((text, index) => text === sortedTexts[index]);

        if (areSorted) {
            console.log('Elements are sorted by price in ascendiong order');
        } else {
            throw new Error("Sorting failed. Elements are not sorter by price in ascendiong order");
        }
    }

    public async searchPliers(){
        await this.page.goto(process.env.BASEURL);
        await this.page.locator('[data-test="search-query"]').click();
        await this.page.locator('[data-test="search-query"]').fill('pliers');
        await this.page.locator('[data-test="search-submit"]').click();
        //await this.page.getByLabel('Pliers').check();

        await this.page.waitForSelector('[data-test="search_completed"]');

        const elements = await this.page.$$('[data-test="product-name"]'); // Adjust selector as necessary
        const texts = [];

        // Extract text from each element
        for (const element of elements) {
            texts.push(await this.page.evaluate(el => el.textContent, element));
        }
        console.log(texts);

        if (texts.length != process.env.PLIERS_SEARCH_COUNT)
            throw new Error("Failed");

    }

    public async selectHandtools() {
        await this.page.goto(process.env.BASEURL);
        await this.page.locator('#filters').getByText('Hand Tools').check();
        await this.page.waitForSelector('[data-test="filter_completed"]');

        const texts = [];

        //await this.page.locator('[aria-label="Next"]').click();
        let i = 0;
        while (true) {
            await this.page.waitForSelector('[data-test="filter_completed"]');
            const elements = await this.page.$$('[data-test="product-name"]');

            for (const element of elements) {
                texts.push(await this.page.evaluate(el => el.textContent, element));
            }
    
            if ( i >= 2)
                break;
            await this.page.click('[aria-label="Next"]')
            await this.page.waitForTimeout(2000);
            i++;
        }
        console.log(texts);
        if (texts.length != process.env.HAND_TOOLS_COUNT)
            throw new Error("Failed");

    }

    public async selectPowerTools(){
        await this.page.goto(process.env.BASEURL);
        await this.page.locator('#filters').getByText('Power Tools').check();
        await this.page.waitForSelector('[data-test="filter_completed"]');

        const elements = await this.page.$$('[data-test="product-name"]'); // Adjust selector as necessary
        const texts = [];

        // Extract text from each element
        for (const element of elements) {
            texts.push(await this.page.evaluate(el => el.textContent, element));
        }
        console.log(texts);

        if (texts.length != process.env.POWER_TOOLS_COUNT )
            throw new Error("Failed");
    }

    public async selectOther(){
        await this.page.goto(process.env.BASEURL);
        await this.page.locator('#filters').getByText('Other').check();
        await this.page.waitForSelector('[data-test="filter_completed"]');
        
        let elements = await this.page.$$('[data-test="product-name"]');

        //await this.page.locator('[aria-label="Next"]').click();
        await this.page.click('[aria-label="Next"]');
        await this.page.waitForTimeout(3000);
        await this.page.waitForSelector('[data-test="filter_completed"]');
        
        const elements2 = await this.page.$$('[data-test="product-name"]');

        const texts = [];

        // Extract text from each element
        for (const element of elements) {
            texts.push(await this.page.evaluate(el => el.textContent, element));
        }
        for (const element2 of elements2) {
            texts.push(await this.page.evaluate(el => el.textContent, element2));
        }
        console.log(texts);
        if (texts.length != process.env.OTHER_COUNT)
            throw new Error("Failed");
    }

    public async selectHammer()
    {
        await this.page.goto(process.env.BASEURL);
        await this.page.locator('#filters').getByText('Hammer').click();
        await this.page.waitForSelector('[data-test="filter_completed"]');
        
        const elements = await this.page.$$('[data-test="product-name"]');
        const texts = [];

        // Extract text from each element
        for (const element of elements) {
            texts.push(await this.page.evaluate(el => el.textContent, element));
        }

        console.log(texts);
        if (texts.length != process.env.HAMMER_COUNT)
            throw new Error("Failed");

    }
    public async selectHandSaw() {
        await this.page.goto(process.env.BASEURL);
        await this.page.getByText('Hand Saw').click();
        await this.page.waitForSelector('[data-test="filter_completed"]');
        
        const elements = await this.page.$$('[data-test="product-name"]');
        const texts = [];

        // Extract text from each element
        for (const element of elements) {
            texts.push(await this.page.evaluate(el => el.textContent, element));
        }

        console.log(texts);
        if (texts.length != process.env.HAND_SAW_COUNT)
            throw new Error("Failed");

    }

    public async selectWrench(){
        await this.page.goto(process.env.BASEURL);
        await this.page.locator('#filters').getByText('Wrench').click();
        await this.page.waitForSelector('[data-test="filter_completed"]');
        
        const elements = await this.page.$$('[data-test="product-name"]');
        const texts = [];

        // Extract text from each element
        for (const element of elements) {
            texts.push(await this.page.evaluate(el => el.textContent, element));
        }

        console.log(texts);
        if (texts.length != process.env.WRENCH_COUNT)
            throw new Error("Failed");
    }

    public async selectScrewDriver(){
        await this.page.goto(process.env.BASEURL);
        await this.page.locator('#filters').getByText('Screwdriver').click();
        await this.page.waitForSelector('[data-test="filter_completed"]');
        
        const elements = await this.page.$$('[data-test="product-name"]');
        const texts = [];

        // Extract text from each element
        for (const element of elements) {
            texts.push(await this.page.evaluate(el => el.textContent, element));
        }

        console.log(texts);
        if (texts.length != process.env.SCREWDRIVER_COUNT)
            throw new Error("Failed");
    }

    public async selectPliers() {
        await this.page.goto(process.env.BASEURL);
        await this.page.locator('#filters').getByText('Pliers').click();
        await this.page.waitForSelector('[data-test="filter_completed"]');
        
        const elements = await this.page.$$('[data-test="product-name"]');
        const texts = [];

        // Extract text from each element
        for (const element of elements) {
            texts.push(await this.page.evaluate(el => el.textContent, element));
        }

        console.log(texts);
        if (texts.length != process.env.PLIERS_COUNT)
            throw new Error("Failed");
    }

    public async selectChisels() {
        await this.page.goto(process.env.BASEURL);
        await this.page.getByText('Chisels').click();
        await this.page.waitForSelector('[data-test="filter_completed"]');
        
        const elements = await this.page.$$('[data-test="product-name"]');
        const texts = [];

        // Extract text from each element
        for (const element of elements) {
            texts.push(await this.page.evaluate(el => el.textContent, element));
        }

        console.log(texts);
        if (texts.length != process.env.CHISELS_COUNT)
            throw new Error("Failed");
    }

    public async selectMeasures() {
        await this.page.goto(process.env.BASEURL);
        await this.page.getByText('Measures').click();
        await this.page.waitForSelector('[data-test="filter_completed"]');
        
        const elements = await this.page.$$('[data-test="product-name"]');
        const texts = [];

        // Extract text from each element
        for (const element of elements) {
            texts.push(await this.page.evaluate(el => el.textContent, element));
        }

        console.log(texts);
        if (texts.length != process.env.MEASURES_COUNT)
            throw new Error("Failed");
    }

    public async navCaterogriesRentals() {
        await this.page.goto(process.env.BASEURL);
        await this.page.locator('[data-test="nav-categories"]').click();
        await this.page.locator('[data-test="nav-rentals"]').click();
        await expect(this.page.getByRole('img', { name: 'Excavator' })).toBeVisible();
        await expect(this.page.getByRole('img', { name: 'Bulldozer' })).toBeVisible();
        await expect(this.page.getByRole('img', { name: 'Crane' })).toBeVisible();
        await this.page.locator('[data-test="page-title"]').click();
    }
}
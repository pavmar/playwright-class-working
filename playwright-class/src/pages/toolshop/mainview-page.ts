import { Locator, Page, expect } from '@playwright/test';

import { BasePage } from "../base-page";

export class MainViewPage extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    private readonly email: Locator = this.page.locator('[name="email"]');

    public async foo() {
        console.log("TESt");
    }
    public async navigateToolShop() {
        await this.page.goto('https://practicesoftwaretesting.com/');
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
        await this.page.goto('https://practicesoftwaretesting.com/');
        await this.page.locator('[data-test="nav-home"]').click();
        await expect(this.page.locator('[data-test="product-01J9M92TGGV88YK1P5T2FSYMJW"]')).toBeVisible();
        await expect(this.page.locator('[data-test="product-01J9M92TGKNVE6GR4A05QT2ZX7"]')).toBeVisible();
        await expect(this.page.locator('[data-test="product-01J9M92TGPKNVM8F4CT9V5WC2Z"]')).toBeVisible();
    };

    public async clickCategories() {
        await this.page.goto('https://practicesoftwaretesting.com/');
        await this.page.locator('[data-test="nav-categories"]').click();
        await expect(this.page.locator('[data-test="nav-hand-tools"]')).toBeVisible();
        await expect(this.page.locator('[data-test="nav-power-tools"]')).toBeVisible();
        await expect(this.page.locator('[data-test="nav-other"]')).toBeVisible();
        await expect(this.page.locator('[data-test="nav-special-tools"]')).toBeVisible();
        await expect(this.page.locator('[data-test="nav-rentals"]')).toBeVisible();
    }

    public async clickContact(){
        await this.page.goto('https://practicesoftwaretesting.com/');
        await this.page.locator('[data-test="nav-contact"]').click();
        await expect(this.page.getByRole('heading', { name: 'Contact' })).toBeVisible();
        await expect(this.page.locator('form')).toBeVisible();
    }

    public async clickSignin()
    {
        await this.page.goto('https://practicesoftwaretesting.com/');
        await this.page.locator('[data-test="nav-sign-in"]').click();
        await expect(this.page.getByRole('heading', { name: 'Login' })).toBeVisible();
        await expect(this.page.getByText('Login Sign in with Google or')).toBeVisible();
    }

    public async clickLang(){
        await this.page.goto('https://practicesoftwaretesting.com/');
        await this.page.locator('[data-test="language"]').click();
        await expect(this.page.getByText('DE', { exact: true })).toBeVisible();
        await expect(this.page.getByLabel('EN', { exact: true }).getByText('EN')).toBeVisible();
        await expect(this.page.getByText('ES', { exact: true })).toBeVisible();
        await expect(this.page.getByText('FR')).toBeVisible();
        await expect(this.page.getByText('NL')).toBeVisible();
        await expect(this.page.getByText('TR', { exact: true })).toBeVisible();
    }
    
    public async sortAZ() {
        await this.page.goto('https://practicesoftwaretesting.com/');
        await this.page.locator('[data-test="sort"]').selectOption('name,asc');
        await expect(this.page.locator('[data-test="product-01J9M92THJS6Y249DMX3ERYPS8"]')).toBeVisible();
        await expect(this.page.locator('[data-test="product-01J9M92THMFVB9W7HFSKSV551J"]')).toBeVisible();
        await expect(this.page.locator('[data-test="product-01J9M92TKRE7FWWM2CTQQ8NXGH"]')).toBeVisible();
    }

    public async sortZA() {
        await this.page.goto('https://practicesoftwaretesting.com/');
        await this.page.locator('[data-test="sort"]').selectOption('name,desc');
        await expect(this.page.locator('[data-test="product-01J9M92THFS3C2TCK4Q90RR6QR"]')).toBeVisible();
        await expect(this.page.locator('[data-test="product-01J9M92THZQSSZ2Y8P4YAEM6ZC"]')).toBeVisible();
        await expect(this.page.locator('[data-test="product-01J9M92TKA6JVMTRC4T8STE0G9"]')).toBeVisible();
    }

    public async sortPriceHigh() {
        await this.page.goto('https://practicesoftwaretesting.com/');
        await this.page.locator('[data-test="sort"]').selectOption('price,desc');
        await expect(this.page.locator('[data-test="product-01J9M92TKEJM2GSTR1A68Y8SQC"]')).toBeVisible();
        await expect(this.page.locator('[data-test="product-01J9M92TKFEKD2NZXF4TG24Z6P"]')).toBeVisible();
        await expect(this.page.locator('[data-test="product-01J9M92TKTNYTRS7H9M0F78RF0"]')).toBeVisible();
    }

    public async sortPriceLow() {
        await this.page.goto('https://practicesoftwaretesting.com/');
        await this.page.locator('[data-test="sort"]').selectOption('price,asc');
        await expect(this.page.locator('[data-test="product-01J9M92TKA6JVMTRC4T8STE0G9"]')).toBeVisible();
        await expect(this.page.locator('[data-test="product-01J9M92TK6VYDP6WE1XEY16G18"]')).toBeVisible();
        await expect(this.page.locator('[data-test="product-01J9M92TK8EGRN0ZT6X7N28A1E"]')).toBeVisible();
    }

    public async searchPliers(){
        await this.page.goto('https://practicesoftwaretesting.com/');
        await this.page.locator('[data-test="search-query"]').click();
        await this.page.locator('[data-test="search-query"]').fill('pliers');
        await this.page.locator('[data-test="search-submit"]').click();
        await expect(this.page.locator('[data-test="product-01J9M92TGGV88YK1P5T2FSYMJW"]')).toBeVisible();
        await expect(this.page.locator('[data-test="product-01J9M92TGKNVE6GR4A05QT2ZX7"]')).toBeVisible();
        await expect(this.page.locator('[data-test="product-01J9M92TGRVF1DJFNKGPWK3W41"]')).toBeVisible();
        await expect(this.page.locator('[data-test="product-01J9M92TGXPYNR2C51B0Y50E8M"]')).toBeVisible();
    }

    public async selectHandtools() {
        await this.page.goto('https://practicesoftwaretesting.com/');
        await this.page.locator('#filters').getByText('Hand Tools').click();
        await expect(this.page.locator('[data-test="product-01J9MCGTBVAM2Z11MY3D9RJ9RF"]')).toBeVisible();
        await this.page.getByText('«123»').click();
    }

    public async selectPowerTools(){
        await this.page.goto('https://practicesoftwaretesting.com/');
        await this.page.locator('#filters').getByText('Power Tools').click();
        await expect(this.page.locator('[data-test="product-01J9MCGTF07WGGD5EDK89GR69G"]')).toBeVisible();
        await expect(this.page.locator('[data-test="product-01J9MCGTF4B4XJV85MV3YBJAXF"]')).toBeVisible();
    }

    public async selectOther(){
        await this.page.goto('https://practicesoftwaretesting.com/');
        await this.page.locator('#filters').getByText('Other').click();
        await expect(this.page.locator('[data-test="product-01J9MCGTDEMSXHK8TW124EM7CH"]')).toBeVisible();
        await expect(this.page.locator('[data-test="product-01J9MCGTDY9K1VXXT3926A8KER"]')).toBeVisible();
        await expect(this.page.getByText('«12»')).toBeVisible();
    }

    public async selectHammer()
    {
        await this.page.goto('https://practicesoftwaretesting.com/');
        await this.page.locator('#filters').getByText('Hammer').click();
        await expect(this.page.locator('[data-test="product-01J9MCGTC6JEMBNQVGMAN7HV6W"]')).toBeVisible();
        await expect(this.page.locator('[data-test="product-01J9MCGTCGNMCAPQ49HCVHEWVD"]')).toBeVisible();
    }
    public async selectHandSaw() {
        await this.page.goto('https://practicesoftwaretesting.com/');
        await this.page.getByText('Hand Saw').click();
        await expect(this.page.locator('[data-test="product-01J9MCGTCKN9PBDNX5BA5WEWNX"]')).toBeVisible();

    }

    public async selectWrench(){
        await this.page.goto('https://practicesoftwaretesting.com/');
        await this.page.locator('#filters').getByText('Wrench').click();
        await expect(this.page.locator('[data-test="product-01J9MCGTCM7ZV59J3ZNPTARRZM"]')).toBeVisible();
        await expect(this.page.locator('[data-test="product-01J9MCGTCNYHDWF4VPYS080R8K"]')).toBeVisible();
        await expect(this.page.locator('[data-test="product-01J9MCGTCR8N7DH06ZESJD5ZK7"]')).toBeVisible();
    }

    public async selectScrewDriver(){
        await this.page.goto('https://practicesoftwaretesting.com/');
        await this.page.locator('#filters').getByText('Screwdriver').click();
        await expect(this.page.locator('[data-test="product-01J9MCGTCS9T0CH5DQ7ZAGKPHF"]')).toBeVisible();
        await expect(this.page.locator('[data-test="product-01J9MCGTCVFH071C17SVB0FRNB"]')).toBeVisible();
    }

    public async selectPliers() {
        await this.page.goto('https://practicesoftwaretesting.com/');
        await this.page.locator('#filters').getByText('Pliers').click();
        await expect(this.page.locator('[data-test="product-01J9MCGTBVAM2Z11MY3D9RJ9RF"]')).toBeVisible();
        await expect(this.page.locator('[data-test="product-01J9MCGTBZWS8V97705RDH3DGP"]')).toBeVisible();
        await expect(this.page.locator('[data-test="product-01J9MCGTC42HPPZFVW5C3Z6MYD"]')).toBeVisible();
        await expect(this.page.locator('[data-test="filter_completed"]')).toBeVisible();
    }

    public async selectChisels() {
        await this.page.goto('https://practicesoftwaretesting.com/');
        await this.page.getByText('Chisels').click();
        await expect(this.page.locator('[data-test="product-01J9MCGTCWJS2EZDHXYYFCQYKW"]')).toBeVisible();
        await expect(this.page.locator('[data-test="product-01J9MCGTD1EQ61MM6CY8NGTF7R"]')).toBeVisible();
        await expect(this.page.locator('[data-test="product-01J9MCGTD3Q9671SG76G6VCWZ3"]')).toBeVisible();
    }

    public async selectMeasures() {
        await this.page.goto('https://practicesoftwaretesting.com/');
        await this.page.getByText('Measures').click();
        await expect(this.page.locator('[data-test="product-01J9MCGTD80ZS9WMDANFJNKPXW"]')).toBeVisible();
        await expect(this.page.locator('[data-test="product-01J9MCGTD9G2SGWAV731FJTTFS"]')).toBeVisible();
        await expect(this.page.locator('[data-test="product-01J9MCGTDADB7YVZX0CZZTMMQG"]')).toBeVisible();
        await expect(this.page.locator('[data-test="product-01J9MCGTDCA0GATNN38DAC7Z5M"]')).toBeVisible();
    }

    public async navCaterogriesRentals() {
        await this.page.goto('https://practicesoftwaretesting.com/');
        await this.page.locator('[data-test="nav-categories"]').click();
        await this.page.locator('[data-test="nav-rentals"]').click();
        await expect(this.page.getByRole('img', { name: 'Excavator' })).toBeVisible();
        await expect(this.page.getByRole('img', { name: 'Bulldozer' })).toBeVisible();
        await expect(this.page.getByRole('img', { name: 'Crane' })).toBeVisible();
        await this.page.locator('[data-test="page-title"]').click();
    }
}
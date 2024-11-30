import { test as setup } from '@playwright/test';


  setup('Save Authentication State for test', async ({ page }) => {
    await page.goto(process.env.BASEURL)
	await page.locator('[data-test="nav-sign-in"]').click();
	await page.locator('[data-test="email"]').fill('admin@practicesoftwaretesting.com');
	await page.locator('[data-test="password"]').fill('welcome01');
	await page.locator('[data-test="login-submit"]').click();
	await page.context().storageState({path: '.auth/admin.json'})
  });

setup('Save Authentication State for test1', async ({ page }) => {
    await page.goto(process.env.BASEURL);
	await page.locator('[data-test="nav-sign-in"]').click();
	await page.locator('[data-test="email"]').fill('customer@practicesoftwaretesting.com');
	await page.locator('[data-test="password"]').fill('welcome01');
	await page.locator('[data-test="login-submit"]').click();
	await page.context().storageState({path: '.auth/customer.json'})
	
});
  
setup('Save Authentication State for test1', async ({ page }) => {
    await page.goto(process.env.BASEURL);
	await page.locator('[data-test="nav-sign-in"]').click();
	await page.locator('[data-test="email"]').fill('customer2@practicesoftwaretesting.com');
	await page.locator('[data-test="password"]').fill('welcome01');
	await page.locator('[data-test="login-submit"]').click();
	await page.context().storageState({path: '.auth/customer2.json'})
	
});
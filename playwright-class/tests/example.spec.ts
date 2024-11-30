import { test } from "../fixture";

test.describe('@toolshop', () => {

  test.use({storageState: ".auth/admin.json"});

  test('Verify Home button click', { tag: ["@home"] }, async ({ mainViewPage }) => {
    await mainViewPage.homeButtonClick()
  });
  
  test('Verify Catergories button click', { tag: ["@categories"] }, async ({ mainViewPage }) => {
    await mainViewPage.clickCategories()
  });

  test('Verify Contact Us button click', { tag: ["@contactUS"] }, async ({ mainViewPage }) => {
    await mainViewPage.clickContact()
  });

  test('Verify Sign in button click', { tag: ["@signin"] }, async ({ mainViewPage }) => {
    await mainViewPage.clickSignin()
  });

  test('Verify language in button click', { tag: ["@lang"] }, async ({ mainViewPage }) => {
    await mainViewPage.clickLang()
  });

  test('Verify sort A-Z in button click', { tag: ["@sortAZ"] }, async ({ mainViewPage }) => {
    await mainViewPage.sortAZ()
  });
  test('Verify sort Z-A in button click', { tag: ["@sortZA"] }, async ({ mainViewPage }) => {
    await mainViewPage.sortZA()
  });
  test('Verify sort price high to low in button click', { tag: ["@sortPriceHigh"] }, async ({ mainViewPage }) => {
    await mainViewPage.sortPriceHigh()
  });
  test('Verify sort price low to high in button click', { tag: ["@sortPriceLow"] }, async ({ mainViewPage }) => {
    await mainViewPage.sortPriceLow()
  });
  test('Verify search pliers', { tag: ["@searchPliers"] }, async ({ mainViewPage }) => {
    await mainViewPage.searchPliers()
  });

  test('Verify select hand tools', { tag: ["@selecthandtools"] }, async ({ mainViewPage }) => {
    await mainViewPage.selectHandtools()
  });

  test('Verify select power tools', { tag: ["@selectpowertools"] }, async ({ mainViewPage }) => {
    await mainViewPage.selectPowerTools()
  });

  test('Verify select other  tools', { tag: ["@selectother"] }, async ({ mainViewPage }) => {
    await mainViewPage.selectOther()
  });

  test('Verify select hammer', { tag: ["@selecthammer"] }, async ({ mainViewPage }) => {
    await mainViewPage.selectHammer()
  });

  test('Verify select handsaw', { tag: ["@selecthandsaw"] }, async ({ mainViewPage }) => {
    await mainViewPage.selectHandSaw()
  });

  test('Verify select wrench', { tag: ["@selectwrench"] }, async ({ mainViewPage }) => {
    await mainViewPage.selectWrench()
  });

  test('Verify select screwdriver', { tag: ["@selectscrewdriver"] }, async ({ mainViewPage }) => {
    await mainViewPage.selectScrewDriver()
  });

  test('Verify select pliers', { tag: ["@selectpliers"] }, async ({ mainViewPage }) => {
    await mainViewPage.selectPliers()
  });

  test('Verify select chisels', { tag: ["@selectchisels"] }, async ({ mainViewPage }) => {
    await mainViewPage.selectChisels()
  });
  
  test('Verify select measures', { tag: ["@selectmeasures"] }, async ({ mainViewPage }) => {
    await mainViewPage.selectMeasures()
  });
  
  test('Verify catergory rentals', { tag: ["@catRental"] }, async ({ mainViewPage }) => {
    await mainViewPage.navCaterogriesRentals()
  });
 
});
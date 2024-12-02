import { test } from "../fixture";

test.describe('@loginPage', () => {

    test.use({storageState: ".auth/customer.json"});

    test('Open login page', { tag: ["@login page open"] }, async ({ loginPageView }) => {
        await loginPageView.openPage()
    });

    test('Verify login page customer', { tag: ["@login page"] }, async ({ loginPageView }) => {
        await loginPageView.fooLoginTest()
    });

    test('Add item to cart', { tag: ["@cartAdd"] }, async ({ loginPageView }) => {
        await loginPageView.addToCart()
    });

    test('Remove item from cart', { tag: ["@cartRemove"] }, async ({ loginPageView }) => {
        await loginPageView.removeFromCart()
    });
    
    test('User logout', { tag: ["@userlogout"] }, async ({ loginPageView }) => {
        await loginPageView.userLogout()
    });

    test('User checkout', { tag: ["@userCheckout"] }, async ({ loginPageView }) => {
        await loginPageView.userCheckout()
    });
    
});

import { test } from "../fixture";

test.describe('@rentals', () => {
    test('Verify rental page nav', { tag: ["@navrentals"] }, async ({ rentalPageView }) => {
        await rentalPageView.navigateRentals()
    });

    test('Verify rental excavator', { tag: ["@excavator"] }, async ({ rentalPageView }) => {
        await rentalPageView.navRentalExcavator()
    });

    test('Verify rental bulldozer', { tag: ["@bulldozer"] }, async ({ rentalPageView }) => {
        await rentalPageView.navRentalBulldozer()
    });
});

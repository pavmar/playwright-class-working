import { expect } from "@playwright/test";
import { test } from "../apiRequestFixture";


test('test', async ({ apiRequest }) => {
  const response = await apiRequest.get('/docs/intro')
  expect(response).toBeOK();
})
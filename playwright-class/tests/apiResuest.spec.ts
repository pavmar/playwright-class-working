import { expect } from "@playwright/test";
import { test } from "../apiRequestFixture";


test('get brands', async ({ apiRequest }) => {
  const response = await apiRequest.get('/brands')
  expect(response.ok()).toBeTruthy();
  expect(await response.json()).toContainEqual(expect.objectContaining({
    slug: 'forgeflex-tools',
    name: 'ForgeFlex Tools'
  }));
});


test('Post brands', async ({ apiRequest }) => {
    const response = await apiRequest.post('/brands', {
        data: {
          name: 'CSPK tools',
          slug: 'CSPK-tools',
        }
      })
    expect(response.ok()).toBeTruthy();
});

// test('get brands by id', async ({ apiRequest }) => {
//     const response = await apiRequest.get('/brands/01je2w03f198ke9bqz189tjbm8');
//     expect(response.ok()).toBeTruthy();
//     expect(await response.json()).toContainEqual(expect.any({
//         id: '01je2w03f198ke9bqz189tjbm8',
//         name: 'CSPK tools',
//         slug: 'CSPK-tools'
//       }));
// });






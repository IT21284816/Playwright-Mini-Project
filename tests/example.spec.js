import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('walk');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('buy');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('drive');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('run');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('go');
  await page.getByTestId('text-input').press('Enter');
  await page.getByText('go').click();
  await page.getByRole('listitem').filter({ hasText: 'go' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('listitem').filter({ hasText: 'run' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('listitem').filter({ hasText: 'walk' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByRole('link', { name: 'Active' }).click();
  await expect(page.getByText('drive')).toBeVisible();
  await expect(page.getByTestId('todo-list')).toContainText('buy');
  
  await page.getByRole('link', { name: 'All' }).click();
  await page.getByRole('button', { name: 'Clear completed' }).click();
  await expect(page.locator('.todo-list li')).toHaveCount(5);
});
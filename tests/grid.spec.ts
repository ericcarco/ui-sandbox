import { test, expect } from '@playwright/test';

test('opens every card, closes with Escape, and restores focus and scroll', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/');
  const cards = page.getByRole('button', { name: /^View / });
  await expect(cards).toHaveCount(4);
  for (let i = 0; i < 4; i++) {
    const card = cards.nth(i);
    await card.click();
    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    await expect(dialog.getByRole('heading', { level: 2 })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Close project', exact: true })).toBeFocused();
    expect(await page.evaluate(() => document.body.style.overflow)).toBe('hidden');
    await page.keyboard.press('Escape');
    await expect(dialog).not.toBeVisible();
    await expect(card).toBeFocused();
    expect(await page.evaluate(() => document.body.style.overflow)).toBe('');
  }
  expect(errors).toEqual([]);
});

test('traps keyboard focus and supports both close controls and the backdrop', async ({ page }) => {
  await page.goto('/');
  const first = page.getByRole('button', { name: /^View / }).first();
  await first.focus();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('button', { name: 'Close project', exact: true })).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(page.getByRole('button', { name: 'Back to projects' })).toBeFocused();
  await page.keyboard.press('Shift+Tab');
  await expect(page.getByRole('button', { name: 'Close project', exact: true })).toBeFocused();
  await page.getByRole('button', { name: 'Close project', exact: true }).click();
  await expect(page.getByRole('dialog')).not.toBeVisible();
  await first.click();
  await page.getByRole('button', { name: 'Back to projects' }).click();
  await expect(page.getByRole('dialog')).not.toBeVisible();
  await first.click();
  await page.locator('.epg__backdrop').click({ position: { x: 4, y: 4 } });
  await expect(page.getByRole('dialog')).not.toBeVisible();
});

test('uses alternating desktop columns and a single mobile column without overflow', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto('/');
  const cells = page.locator('.epg__cell');
  const desktop = await cells.evaluateAll(elements => elements.map(el => { const r = el.getBoundingClientRect(); return { width: r.width, y: r.y }; }));
  expect(desktop[0].width).toBeGreaterThan(desktop[1].width);
  expect(desktop[2].width).toBeLessThan(desktop[3].width);
  expect(desktop[0].y).toBe(desktop[1].y);
  await page.setViewportSize({ width: 768, height: 900 });
  const tablet = await cells.evaluateAll(elements => elements.map(el => el.getBoundingClientRect().width));
  expect(tablet[0]).toBe(tablet[1]);
  await page.setViewportSize({ width: 390, height: 844 });
  const mobile = await cells.evaluateAll(elements => elements.map(el => el.getBoundingClientRect().y));
  expect(mobile[1]).toBeGreaterThan(mobile[0]);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.getByRole('button', { name: /^View / }).first().click();
  await expect(page.getByRole('dialog')).toBeVisible();
  expect(await page.locator('.epg__detail').evaluate(el => el.getBoundingClientRect().right <= innerWidth)).toBe(true);
});

test('supports reduced motion and repeated open-close cycles', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  for (let i = 0; i < 3; i++) {
    await page.getByRole('button', { name: /^View / }).nth(i).click();
    await expect(page.getByRole('dialog')).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(page.getByRole('dialog')).not.toBeVisible();
  }
});

import {test, expect} from '@playwright/test'
import { PageFunctions } from '../page-objects/page-functions';

test.describe('Dashboard page validations', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('http://localhost:4200/pages/iot-dashboard');
    }) 
    test('Turn off light from the tile', async ({page}) => {
        const pageFunctions = new PageFunctions(page);
        await pageFunctions.dashboardPage().clickLightTile();
        const tileElementOnLight = page.locator('nb-card', {hasText: "Light"}).locator('.paragraph-2')
        expect(await pageFunctions.commonFunctions().getTextOfElement(tileElementOnLight)).toEqual('OFF');
        await expect(page.locator('nb-card', {hasText: "Light"}).locator('.icon')).toHaveCSS('background-image', 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))')
        await pageFunctions.dashboardPage().clickLightTile()
        await page.waitForTimeout(1000)
        await expect(page.locator('nb-card', {hasText: "Light"}).locator('.icon')).toHaveCSS('background-image', 'linear-gradient(to right, rgb(89, 139, 255), rgb(51, 102, 255))')
    })
})
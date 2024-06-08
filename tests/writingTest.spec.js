import { test, expect } from "@playwright/test"

test.describe('Writing scripts and structure of the spec file', () => {
    test.beforeAll(async ({}) => {
        console.log("Before all hook")
    }) 
    test.beforeEach(async ({}) => {
        console.log("Before each hook")
    })

    test('First test of the scenario', async ({page}) => {
        await page.goto('http://localhost:4200/pages/iot-dashboard')
        console.log('THis is rtest')
        await expect(page).toHaveURL('http://localhost:4200/pages/iot-dashboard')
        
        await expect(page).toHaveTitle('playwright-test-admin Demo Application')
    })
    test.afterEach(async () => {
        console.log("After each hook")
    })
    test.afterAll(async () => {
        console.log("After all hook")
    })

})
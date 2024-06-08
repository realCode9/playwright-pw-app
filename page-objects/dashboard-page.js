import { PageFunctions } from "./page-functions";
import {Page} from '@playwright/test';

export class DashboardPage{
    
    /**
     *@param {Page} page
     */

    constructor(page) {
        this.page = page
    }
    async clickLightTile() {
        await this.page.locator('nb-card', {hasText: "Light"}).click();
    }
}
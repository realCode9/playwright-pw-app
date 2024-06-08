import { Page } from '@playwright/test'
import { DashboardPage } from '../page-objects/dashboard-page'
import { CommonFunctions } from './common-functions'

export class PageFunctions {
    /**
     *@param { Page } page
     *@param {DashboardPage} toDashboardPage
     *@param {CommonFunctions} toCommonFunctions
     */
    constructor(page) {
        this.page = page
        this.toDashboardPage = new DashboardPage(this.page)
        this.toCommonFunctions = new CommonFunctions(this.page)
    }

    dashboardPage() {
        return this.toDashboardPage
    }
    commonFunctions() {
        return this.toCommonFunctions
    }
}
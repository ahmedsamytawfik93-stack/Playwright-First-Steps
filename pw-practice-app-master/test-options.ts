import { test as base } from '@playwright/test'
import { PageManager } from './page-objects/page-manager'

export type TestOptions = {
    globalsQaURL: string
    fromLayoutsPage: string
    pageManager: PageManager
}

export const test = base.extend<TestOptions>({
    globalsQaURL: ['', {option: true}],

    fromLayoutsPage: async({page, globalsQaURL}, use) => {
        await page.goto(globalsQaURL)
        await page.getByText('Forms').click()
        await page.getByText('Form Layouts').click()
        await use('')
        console.log('Tear Down')
    },

    pageManager: async({page, fromLayoutsPage}, use) => {
        const pm = new PageManager(page)
        await use(pm)
    }
})
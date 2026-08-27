import { Page, expect } from '@playwright/test'
import { step } from '../helpers/test-step-decorator'
import {HelperBase} from './helper-base'

export class DatepickerPage extends HelperBase {

    constructor(page: Page) {
        super(page)
    }

    @step
    async selectCommonDateFromDatepicker(daysFromToday: number) {
        const calenderInputField = this.page.getByPlaceholder('Form Picker')
        await calenderInputField.click()
        const expectedDate = await this.selectDateInTheCalender(daysFromToday)
        await expect(calenderInputField).toHaveValue(expectedDate)
    }

    @step
    async selectDatepickerWithRangeFromToday(daysFromTodayStart: number, daysFromTodayEnd: number) {
        const calenderInputField = this.page.getByPlaceholder('Range Picker')
        await calenderInputField.click()
        const expectedDateStart = await this.selectDateInTheCalender(daysFromTodayStart)
        const expectedDateEnd = await this.selectDateInTheCalender(daysFromTodayEnd)
        const expectedDate = `${expectedDateStart} - ${expectedDateEnd}`
        await expect(calenderInputField).toHaveValue(expectedDate)
    }

    @step
    private async selectDateInTheCalender(daysFromToday: number) {
        const date = new Date()
        date.setDate(date.getDate() + daysFromToday)
        const expectedDay = date.getDate().toString()
        const expectedMonth = date.toLocaleString('En-US', {month: 'short'})
        const expectedMonthLong = date.toLocaleString('En-US', {month: 'long'})
        const expectedYear = date.getFullYear()
        const expectedDate = `${expectedMonth} ${expectedDay}, ${expectedYear}`
        
        let currentMonthAndYear = await this.page.locator('nb-calendar-view-mode').textContent()
        const expectedMonthAndYear = `${expectedMonthLong} ${expectedYear}`
        while(!currentMonthAndYear?.includes(expectedMonthAndYear)) {
            await this.page.locator('.next-month').click()
            currentMonthAndYear = await this.page.locator('nb-calendar-view-mode').textContent()
        }
        
        await this.page.locator('.day-cell:not(.bounding-month)').getByText(expectedDay, {exact: true}).click()
        return expectedDate
    }
}
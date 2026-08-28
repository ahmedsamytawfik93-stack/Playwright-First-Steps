import { test } from '@playwright/test'
import { PageManager } from '../page-objects/page-manager'
import { faker } from '@faker-js/faker'

test.beforeEach(async ({page}) => {
    await page.goto('http://playground.bondaracademy.com/')
})

test('Navigate to form layouts page', async ({page}) => {
    const pom = new PageManager(page)
    await pom.navigationPage.formLayoutsPage()
    await pom.navigationPage.datepickerPage()
    await pom.navigationPage.toasterPage()
    await pom.navigationPage.tooltipPage()
    await pom.navigationPage.smartTablePage()
})

test('Parametrized page object methods', async ({page}) => {
    const pom = new PageManager(page)
    const randomFullName = faker.person.fullName()
    const randomEmail = `${randomFullName.replace(' ','')}${faker.number.int(1000)}@test.com`

    await pom.navigationPage.formLayoutsPage()
    await pom.formLayoutsPage.submitUsingTheGridForm('test@test.com', 'password', 'Option 1')
    await pom.formLayoutsPage.submitInlineForm(randomFullName, randomEmail, true)

    await pom.navigationPage.datepickerPage()
    await pom.datepickerPage.selectCommonDateFromDatepicker(5)
    await pom.datepickerPage.selectDatepickerWithRangeFromToday(7, 20)
})
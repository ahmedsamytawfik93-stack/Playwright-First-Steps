import { test } from '../test-options'
import { faker } from '@faker-js/faker'

test('Parametrized methods', async ({pageManager}) => {
    const randomFullName = faker.person.fullName()
    const randomEmail = `${randomFullName.replace(' ','')}${faker.number.int(1000)}@test.com`

    await pageManager.formLayoutsPage.submitUsingTheGridForm('test@test.com', 'password', 'Option 1')
    await pageManager.formLayoutsPage.submitInlineForm(randomFullName, randomEmail, true)
})
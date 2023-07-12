import MainPage from '../pageobjects/main.page.js'
import AustinPage from '../pageobjects/austin.page.js'

describe('E2E for Austin location', () => {
    
    it('Should open DecemberLabs staging page', async () => {
        await browser.url("https://inhouse.decemberlabs.com")
        await expect(MainPage.logoName).toBeExisting()
        await expect(MainPage.mainTitle).toBeExisting()
        await expect(MainPage.hamburguerMenu).toBeExisting()
        await expect(browser).toHaveUrlContaining("inhouse.decemberlabs.com")
    })

    it('Should navigate to Austin page', async () => {
        await (await MainPage.austinLink).scrollIntoView()
        await (await MainPage.austinLink).click()
        await expect(AustinPage.austinTitle).toBeExisting()
        await expect(AustinPage.austinTitle).toHaveText("Austin Web and App Developers")
        await expect(browser).toHaveUrl("https://inhouse.decemberlabs.com/locations/austin/")
    })

    it('The schedule popup should work correctly', async () => {
        await (await AustinPage.scheduleButton).waitForDisplayed()
        await (await AustinPage.scheduleButton).click()
        await browser.pause(2000)
        await (await AustinPage.schedulePopup).waitForDisplayed()
        await expect(AustinPage.schedulePopup).toBeDisplayed()
        await (await AustinPage.closeModalButton).click()
        await browser.pause(2000)
        await expect(AustinPage.schedulePopup).not.toBeDisplayed()
    })
})


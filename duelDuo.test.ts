
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:4000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})


test('Check that clicking the Draw button displays the div with id = “choices”', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(2000)
    const bots = await driver.findElement(By.id('choices'))
    const choices = await bots.isDisplayed()
    expect(choices).toBe(true)  
})

test('Check that clicking an “Add to Duo” button displays the div with id = “player-duo”', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(2000)
    await driver.findElement(By.className('bot-btn')).click()
    await driver.sleep(2000) 
    const playerDuo = await driver.findElement(By.id('player-duo'))
    const chosen = await playerDuo.isDisplayed()
    expect(chosen).toBe(true)     
})
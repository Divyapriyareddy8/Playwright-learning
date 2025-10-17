const { test, expect } = require('@playwright/test');

test('Practice Test', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
 
    await page.goto("https://rahulshettyacademy.com/client");
    console.log(await page.title());

    console.log("belfore clicked register");
    await page.locator('.text-reset').click();
    console.log("clicked register");

    await page.locator('#firstName').fill('Drithi1');
    await page.locator ('#lastName').fill('Reddy');
    await page.locator ('#userEmail').fill('reddypriya503@gmail.com');
    await page.locator('#userMobile').fill('5312832566');
    await page.locator('#userPassword').fill('Divya@47123$');
    await page.locator('[id="confirmPassword"]').fill('Divya@47123$');
    await page.click('[formcontrolname="occupation"]');
    await page.waitForSelector('text=Student');
    await page.click('text=Student');
    await page.locator('input[type="radio"][value="Female"]').check();
    await expect(page.locator('input[type="radio"][value="Female"]')).toBeChecked();
    console.log('gender is checked')
    await page.locator('input[type="checkbox"]').check()
    
    await page.locator('input[value="Register"]').click();

    await page.locator('a:has-text("Login here")').click()

     // wait for new page
     const [newPage] = await Promise.all([
       context.waitForEvent('page'),
       page.locator('a:has-text("Login here")').click()
     ]);

    await newPage.waitForLoadState();

    console.log(newPage.url());

    await newPage.locator("#userEmail").fill("reddypriya503@gmail.com");
    await newPage.locator("#userPassword").fill("Divya@47123$")
    await newPage.locator("input[value='Login']").click();

    console.log(await page.title());



});

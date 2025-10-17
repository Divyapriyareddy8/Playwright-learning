const {test,expect} = require('@playwright/test');

test.only ('First Playwrighttest', async ({page})=>{

   const userName = page.locator("#username");
   const signIn = page.locator("#signInBtn");
   const cardTitles = page.locator(".card-body a");

   //const context = await browser.newContext();
   //const page = await context.newPage();
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   console.log(await page.title());
 
   await userName.fill("rahulshetty");
   await page.locator("[type='password']").fill("learning");
   await page.locator("#signInBtn").click();
   console.log(await page.locator("[style*='block']").textContent());
   await expect(page.locator("[style*='block']")).toContainText('Incorrect');

   await userName.fill("");
   await userName.fill("rahulshettyacademy");
   await signIn.click();
   //checking next browse page
   console.log (await cardTitles.first().textContent());
   console.log(await cardTitles.nth(1).textContent());
   const allTitles = await cardTitles.allTextContents()
   console.log(allTitles)
   
    } 
);


test('Page Playwright test',async({page})=>{
   await page.goto("https://google.com");
   console.log (await page.title());
   await expect(page).toHaveTitle("Google");
});


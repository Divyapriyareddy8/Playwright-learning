# Playwright-learning

(i) Why Playwright?
- It has Auto-wait capability - waiting till elements are stable and visibile-less flakiness
- cross browser compatibity and mutiplatform support
- *Multilingual Flexibility- we can provide language bindings using JAVA or Python or Javascript allowing to choose the best.

(ii) Advanced features:
- Automatic screenshots and logging without any codes.
- Validate network calls by mocking the network.
- Browser content Management - we can inject test data in browser.
- Codegen Tool-  helper tool which can generate the test code by recoridng your actions.

 (iii) In VSC, in the terminal 
> npm init playwright #this downloads all teh dependencies related to playwright in package.json.
This also creates playwright.config.js - which is a test runner of the playwright.

Tests in javascript test file will be .spec.js 

Program structure:

> const {test} = require('@playwright/test') #this test is used to launch browser and write tests
test("actual test name", **async** function(){#code in this});
#java script is asynchronous and hence we need to mention explicitly using 'async' function and await in steps

>test("second test",async()=>{}); -> anonymous function

Config.js will be runner - where we give all teh details.
By default timeout for each TC is 30sec - it will wait for 30 sec to display all the webpage elements =autowait capability.
timeouts we mention in the config.js
expect{timeouts:} = these are timeouts for assertion level 




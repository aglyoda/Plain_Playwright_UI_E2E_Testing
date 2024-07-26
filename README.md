# E2E UI Test framework using plain vanilla Playwright (WHATs)

# Plain Vanilla Playwright Pros and Cons (WHYs)

## Pros:

_Direct and Lightweight_ 
1. Writing tests directly in Playwright is straightforward and does not require additional tools or setup.
2. This approach is typically faster and more flexible.

_Full Playwright Capabilities_
1. We have full access to Playwright's API and features without any abstraction layer.
2. This can be advantageous for complex testing scenarios or when levaraging Playwright's specific capabilities.

_Easier to Start_
1. Ideal for teams already familier with JavaScript/TypeScript.
2. We can get started quickly without learning additional syntax or tools.

## Cons:

_Less Readable for Non-Technical Users_
1. Tests are written in code and may be less readable or understandable for non-technical stakeholders.
2. This could be drawback for communication with business users.

# How to use this Framework (HOWs)

> Step 01: Open this repositary in VSCode., and run the following command:

```sh
npm install
```

this will install all the required dependencies listed in package.json
  
  ```sh
  "devDependencies": {
    "@playwright/test": "^1.45.3",
    "@types/node": "^20.14.12",
    "cross-env": "^7.0.3",
    "dotenv": "^16.4.5"
  }
```

@playwright/test - 
Playwright Test extends the functionality of the Playwright Library into a full-featured test runner.
This is designed specifically for end-to-end testing.

@types/node -
Conntains TypeScript definitions for Node.
For running TypeScript files on node environment.

cross-env -
For managing environment valiable in node environment.

dotenv -
For loading environment variables from a .env file.

> Step 02: Run the following command to install browsers for Playwright to use

```sh
npx playwright install
```

Running the command without arguments will install the default browsers (chromium, firefox, webkit).

> Step 03: Create directory inside ./tests for the application that needs to be tested.

./tests/[application name]/
Example: ./tests/demoApp/

> Step 04: Create directory having name envConfig inside ./tests/[application name]/ for the application configuration files

./tests/[application name]/envConfig/
Example: ./tests/demoApp/envConfig/

> Step 05: Create directory having name tests inside .tests/[application name]/ for the application tests

./tests/[application name]/tests/
Example: .tests/demoApp/tests/

> Step 06: Create configuration files cprresponding to the required environments (stage, qa, uat) inside the envConfig directory 

./tests/[application name]/envConfig/[environment name].env
Example: .tests/demoApp/envConfig/qa.env

> Step 07: Create directory with feature name to be tested under the tests directory

./tests/[application name]/tests/[feature name]/
Example: .tests/demoApp/tests/demoFeature
- Do not create more directories inside feature directories. 

> Step 08: Create test file with extension [test file name].spec.ts inside the feature directory

./tests/[application name]/tests/[feature name]/[test file].spec.ts
Example: .tests/demoApp/tests/demoFeature/demo.spec.ts

> Step 09: Go to ./package.json file and create run test commands
  
  Example -
  ```sh
  "scripts": {
    "test:demoAppWebkit": "cross-env APP_NAME=demoApp APP_ENV=qa npx playwright test --project=webkit",
    "test:demoAppFirefox": "cross-env APP_NAME=demoApp APP_ENV=qa npx playwright test --project=firefox",
    "test:demoAppChromium": "cross-env APP_NAME=demoApp APP_ENV=qa npx playwright test --project=chromium"
  },
```

> Step 10: Run the follwoing command in terminal to run the test in the webkit browser
  
  ```sh
  npm run test:demoAppWebkit
  ```

> Step 11: After test run is complete validate results in the ./app-test-report/[application-name]/ directory

Example: ./app-test-reports/dempApp/  

## Appendix

  > Place common utilities in the ./commomUtils directory
  > Create one file for one utility, this way it would be easier to find and update these files.
  > For example: ./commonUtils/screenshotUtil.ts


## Installation

## Run UI tests
Headed run - browser opens and visible
Headless run - browser open in background

`npx playwright test ./tests/register.spec.ts` for specific file
`npx playwright test tests\register.spec.ts` - is incorrect of specific file test run

## Run Newman API tests

Install newman by npm
`npm install -g newman`

Add script to package.json
```"scripts": {
    "newman-run-report": "newman run ./postman-collections/Terbine.postman_collection.json -n 1 -r htmlextra"
  }```

Then run the test:
`npm run newman-run-report`

Reveal just created test report via Windows Explorer and do your screenshots
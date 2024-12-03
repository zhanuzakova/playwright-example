import { test, request, expect } from '@playwright/test';


/*
test('should create a bug report', async ({ request }) => {
    const newIssue = await request.post(`/repos/${USER}/${REPO}/issues`, {
      data: {
        title: '[Bug] report 1',
        body: 'Bug description',
      }
    });
    expect(newIssue.ok()).toBeTruthy();
  
    const issues = await request.get(`/repos/${USER}/${REPO}/issues`);
    expect(issues.ok()).toBeTruthy();
    expect(await issues.json()).toContainEqual(expect.objectContaining({
      title: '[Bug] report 1',
      body: 'Bug description'
    }));
  });
*/

test.describe("List of countries", ()=>{
    test("Get list of countries", async ({request}) => {
        const listOfCountries = await request.get("https://api.terbine.io:8443/api/domain/country");

        expect(listOfCountries.ok()).toBeTruthy();
        expect((await listOfCountries.text()).includes("Kyrgyzstan"));
    })


    test("Post search", async ({request}) =>{
        const requestBody = {
            "text": "test",
            "filters": {}
        } 

        const searchResponse = await request.post(
            "https://api.terbine.io:8443/api/search/v2/metadata?order=ASC&pageNum=1&pageSize=100&sort=INITIAL",
            {
                data: requestBody
            }
        );
        expect(searchResponse.ok()).toBeTruthy();
        expect((await searchResponse.text()).includes("test"))
    })
})
  
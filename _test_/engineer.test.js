const Engineer = require("../lib/engineer");


test("Engineer inputs their github username", () => {
    const name = "testName"
    const id = "testId"
    const email = "testEmail"
    const github = "github";

    const e = new Engineer(name, id, email ,github);
    expect(e.github).toBe(github);
  });
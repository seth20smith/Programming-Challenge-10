const Intern = require("../lib/intern");

test("Intern inputs their github username", () => {
    const name = "testName"
    const id = "testId"
    const email = "testEmail"
    const school = "school";

    const e = new Intern(name, id, email, school);
    expect(e.school).toBe(school);
  });

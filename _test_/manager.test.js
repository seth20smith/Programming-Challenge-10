const Manager = require("../lib/manager");

test(" Manager their github username", () => {
    const name = "testName"
    const id = "testId"
    const email = "testEmail"
    const officeNumber = "officeNumber code";

    const e = new Manager(name, id, email, officeNumber);
    expect(e.officeNumber).toBe(officeNumber);
  });

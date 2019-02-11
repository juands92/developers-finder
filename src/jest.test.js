const functions = require("./jest");

//Testing GitHub API
test("GitHub username should be equal to the one provided", () => {
  expect.assertions(1);
  return functions.fetchUserName("juands92").then(data => {
    expect(data.login).toEqual("juands92");
  });
});

test("Check if list of organizations is filled or empty but not undefined", () => {
  expect.assertions(1);
  return functions
    .fetchOrgs("918374982374913279413290riewhriqhweiofhqeowifho")
    .then(data => {
      expect(data.message).toEqual(undefined);
    });
});

test("Check if list of repositories is filled or empty but not undefined", () => {
  expect.assertions(1);
  return functions
    .fetchRepos("918374982374913279413290riewhriqhweiofhqeowifho")
    .then(data => {
      expect(data.message).toEqual(undefined);
    });
});

test("Check if list of organizations is filled or empty but not undefined", () => {
  expect.assertions(1);
  return functions.fetchOrgs("juands92").then(data => {
    expect(data).not.toEqual(undefined);
  });
});

test("Check if list of repositories is filled or empty but not undefined", () => {
  expect.assertions(1);
  return functions.fetchRepos("juands92").then(data => {
    expect(data).not.toEqual(undefined);
  });
});

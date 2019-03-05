const starWars = require("./index");
const starWarsNames = require("./starwars-names.json");

describe("starwars-names", () => {
  describe("all", () => {
    test("should be a fulfilled array", () => {
      expect(starWars.all).toHaveLength(starWarsNames.length);
    });
    test("should be an array of strings", () => {
      //throw new Error('test not yet defined... remove the throw and write your test here');
      //expect(starWars.all).typeof(String);
      expect(typeof starWars.all).toBe(typeof starWarsNames);
    });

    test("should contain `Luke Skywalker`", () => {
      //throw new Error("test not yet defined... remove the throw and write your test here");
      expect(starWars.all).toContain("Luke Skywalker");
    });

    test("should not contain `Ben Quadinaros`", () => {
      expect(starWars.all).not.toContain("Ben Quadinaros");
    });
  });

  describe("random", () => {
    test("should return a random item from the starWars.all", () => {
      /*throw new Error(
        "test not yet defined... remove the throw and write your test here"
      );*/
      expect(starWars.all).toContain(starWars.random());
    });

    test("should return an array of random items if passed a number", () => {
      var number = 5;
      expect(starWars.random(number)).toHaveLength(number);
    });
  });
});

var expect = require("chai").expect,
    triggerDeps = require('../src/trigger');

describe("Trigger", function () {

  it("should run all systems with given event", function () {

    var called = false,
        trigger = triggerDeps({
          frame: [function () {
            called = true;
          }]
        });

    trigger("frame");
    expect(called).to.equal(true);
  });

  it("should forward event argument to systems", function () {
    var expected = "hello",
        actual,
        trigger = triggerDeps({
          frame: [function (arg) {
            actual = arg;
          }]
        });
    trigger("frame", expected);

    expect(actual).to.equal(expected);
  });

  it("should forward ALL event arguments to systems", function () {
    var expected = ["hello", "world"],
        actual,
        trigger = triggerDeps({
          frame: [function () {
            actual = Array.prototype.slice.call(arguments);
          }]
        });
    trigger.apply(null, ["frame"].concat(expected));
    expect(actual).to.deep.equal(expected);
  });
});

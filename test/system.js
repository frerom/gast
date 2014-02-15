var expect = require('chai').expect,
    systems = require("../src/systems"),
    system = require("../src/system")(systems);


describe('System', function () {
  beforeEach(function () {
    for (var key in systems) {
      delete systems[key];
    }
  });

  it('should be added to the correct event', function () {
    system("mjao", ["frame"]);
    expect(systems.frame.length).to.equal(1);
  });

  it("should be added to ALL events", function () {
    system("mjao", ["frame", "katt"]);
    expect(systems.frame.length).to.equal(1);
    expect(systems.katt.length).to.equal(1);
  });
});

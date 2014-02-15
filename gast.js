var systems = require("./src/systems");
var system = require("./src/system")(systems);
var trigger = require("./src/trigger")(systems);
var loop = require("./src/loop");

module.exports = {
  system: system,
  loop: loop,
  systems: systems,
  trigger: trigger
};

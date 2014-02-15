module.exports = function (systems) {
    return function (event) {
        var args = Array.prototype.slice.call(arguments, 1);

        for (var systemIndex in systems[event]) {
            systems[event][systemIndex].apply(null, args);
        }
    };
};

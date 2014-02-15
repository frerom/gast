module.exports = function (systems) {
    return function (name, events, fn) {
        for (var index in events) {
            if(!systems.hasOwnProperty(events[index])) {
                systems[events[index]] = [];
            }
            systems[events[index]].push(fn);
        }
    };
};

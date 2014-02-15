module.exports = function (func, loopFunc) {
    var previousTime = 0;
    var loop = function (time) {
        var delta = time - previousTime;
        previousTime = time;
        func(delta);
        loopFunc(loop);
    };
    return loop;
};
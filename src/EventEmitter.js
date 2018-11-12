function EventEmitter() {
    this.events = {};
}

EventEmitter.prototype.on = function (eventName, func) {
    if (!this.events[eventName]) {
        this.events[eventName] = [];
    }
    this.events[eventName].push(func);
};

EventEmitter.prototype.off = function (eventName, func) {
    console.log('function is');
    console.log(func);
    this.events[eventName].splice(this.events[eventName].indexOf(func), 1);
};

EventEmitter.prototype.trigger = function (eventName) {
    var i;

    for (i = 0; i < this.events[eventName].length; i += 1) {
        this.events[eventName][i].apply(this, Array.prototype.slice.call(arguments, 1));
    }
};

EventEmitter.prototype.once = function (eventName, someFunc) {
    var func = function () {
        //this.off(eventName, func);
        this.off(eventName, someFunc);
    };
    this.on(eventName, someFunc);
    this.on(eventName, func);
};

function someFunc(val) {
    console.log('val is: ' + val);
}

function onceFunc(val) {
    console.log('called once: ' + val);
}

module.exports = EventEmitter;

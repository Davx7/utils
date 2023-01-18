"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = exports.Fs = exports.wait = exports.timer = exports.isEmpty = exports.getObj = exports.copyOBJ = exports.parseBoolean = exports.isUndefined = exports.isFalse = exports.avoid = exports.is = exports.watchPropChange = void 0;
const jsdom_1 = require("jsdom");
function watchPropChange(key, callback, value) {
    let watched = key[0][key[1]];
    const watch = setInterval(() => {
        if (is(value).notNull) {
            if (key[0][key[1]] == value) {
                clearInterval(watch);
                callback(watch);
            }
        }
        else {
            if (key[0][key[1]] !== watched) {
                watched = key[0][key[1]];
                callback(watch, watched);
            }
        }
    }, 100);
    return {
        stop: function () {
            clearInterval(watch);
        }
    };
}
exports.watchPropChange = watchPropChange;
function is(el) {
    const obj = {
        array: Array.isArray(el),
        null: isUndefined(el),
        emptyArray: Array.isArray(el) ? el.length == 0 : 0,
        blockElement: function (args) {
            let node = null;
            try {
                node = document.createElement(args ? el.match(/(?<=<|<\/)(\w|-)+/g)[0] : el);
            }
            catch (error) {
                let document = (() => {
                    const window = new jsdom_1.JSDOM('<html><body></body></html>').window;
                    return window.document;
                })();
                node = document.createElement(args ? el.match(/(?<=<|<\/)(\w|-)+/g)[0] : el);
            }
            // console.log(node);
            return node.outerHTML.indexOf('</') !== -1;
        },
        closingEl: function () {
            return el.match(/(?<=<\/)(\w|-)+/g) !== null;
        },
        notEmptyArr: Array.isArray(el) ? el.length > 0 : 0,
        notNull: isFalse(isUndefined(el)),
        equal: function (args) {
            return el == args;
        },
        NaN: function () {
            if (typeof el == 'number')
                return false;
            let trimed = el.trim();
            let has = trimed.search(/([^\d|\.]|([^\d]\.))/g);
            return (has !== -1);
        },
        isCap() {
            return /^[A-Z]*$/.test(el);
        }
    };
    return obj;
}
exports.is = is;
function avoid(e) {
    try {
        e();
        return {
            then: function (r) {
                r(false, 'Success...');
            }
        };
    }
    catch (error) {
        return {
            then: function (e) {
                e(true, error);
            }
        };
    }
}
exports.avoid = avoid;
function isFalse(args) {
    return args === false;
}
exports.isFalse = isFalse;
function isUndefined(args) {
    if (args !== null && args !== undefined) {
        return false;
    }
    else {
        return true;
    }
}
exports.isUndefined = isUndefined;
function parseBoolean(text) {
    return text === 'true';
}
exports.parseBoolean = parseBoolean;
function copyOBJ(obj) {
    return JSON.parse(JSON.stringify(obj));
}
exports.copyOBJ = copyOBJ;
function getObj(objstring) {
    return JSON.parse(objstring);
}
exports.getObj = getObj;
function isEmpty(args) {
    if (is(args).null)
        return true;
    try {
        if (typeof args == 'object') {
            if (args.value !== undefined) {
                return args.value.trim().length === 0;
            }
            else if (Array.isArray(args)) {
                return args.length < 1;
            }
        }
        else if (typeof args == "number") {
            return args === 0;
        }
        else {
            return args.trim().length < 1;
        }
    }
    catch (e) {
        return true;
    }
}
exports.isEmpty = isEmpty;
function timer(callback, timer = 1, type = 0) {
    const runner = type == 0 ? setInterval : setTimeout;
    const clearer = type == 0 ? clearInterval : clearTimeout;
    const time = runner(() => {
        return callback(time);
    }, timer);
    return { stop: () => clearer(time) };
}
exports.timer = timer;
async function wait(callback, ...args) {
    return new Promise((resolve, reject) => {
        const result = callback(args);
        try {
            const run = timer(() => {
                if (result) {
                    resolve(true);
                    run.stop();
                }
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.wait = wait;
var modules_1 = require("./modules");
Object.defineProperty(exports, "Fs", { enumerable: true, get: function () { return modules_1.Fs; } });
var default_1 = require("./modules/default");
Object.defineProperty(exports, "Default", { enumerable: true, get: function () { return default_1.Default; } });

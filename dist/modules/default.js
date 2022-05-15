"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const __1 = require("..");
class Default {
    constructor(props) {
        this.isSet = false;
    }
    init() {
    }
    main(props) {
    }
    run(...props) {
    }
    static Create(props, ...args) {
        return new props(args);
    }
    listenFor(value, callback) {
        let watched = this[value];
        const watch = setInterval(() => {
            if ((0, __1.is)(value).notNull) {
                if (this[value] == value) {
                    clearInterval(watch);
                    callback(watch);
                }
            }
            else {
                if (this[value] !== watched) {
                    watched = this[value];
                    callback(watch, watched);
                }
            }
        }, 1);
        return {
            stop: function () {
                clearInterval(watch);
            }
        };
    }
    get isSet() {
        return this._isSet;
    }
    set isSet(value) {
        if (value) {
            this._isSet = value;
            this.init();
        }
    }
}
exports.Default = Default;

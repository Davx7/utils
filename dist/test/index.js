"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const default_1 = require("./../modules/default");
default_1.Default.getClass().getFields();
class Test extends default_1.Default {
    constructor() {
        super();
        this.name = 'this is cow shit';
        this.isSet = true;
    }
}
const test = new Test();
test.name = 'This is cock shit' + ['what'];
console.log(test.getClass().createInstance().name);
console.log(test.name);
console.log(test.clone.name);
test.throw('it didnt work', 'Custom');

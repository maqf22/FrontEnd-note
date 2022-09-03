function Class1() { }

export default Class1;
import Class1 from './model.js'

module.exports = Class1
const Class1 = require('./model.js')

// ESModule
export function f1() { }
export function f2() { }
import { f1 } from './model.js'
import * as all from './model.js'

// CommonJS
function f1() { }
function f2() { }

exports.f1 = f1
exports.f2 = f2

const all = require('./model.js')
const f1 = require('./model.js').f1

"use strict";

var _promiseUtils = require("./promiseUtils");
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
class TaskQueue {
  constructor() {
    _defineProperty(this, "queue", void 0);
    this.queue = [];
  }
  enqueue(task /*: () => Promise*/) /*: Promise*/{
    const taskComplete = new _promiseUtils.resolvingPromise();
    this.queue.push({
      task: task,
      _completion: taskComplete
    });
    if (this.queue.length === 1) {
      task().then(() => {
        this._dequeue();
        taskComplete.resolve();
      }, error => {
        this._dequeue();
        taskComplete.reject(error);
      });
    }
    return taskComplete;
  }
  _dequeue() {
    this.queue.shift();
    if (this.queue.length) {
      const next = this.queue[0];
      next.task().then(() => {
        this._dequeue();
        next._completion.resolve();
      }, error => {
        this._dequeue();
        next._completion.reject(error);
      });
    }
  }
}
module.exports = TaskQueue;
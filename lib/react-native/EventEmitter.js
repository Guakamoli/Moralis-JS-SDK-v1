var EventEmitter = require('../../../react-native/Libraries/vendor/emitter/EventEmitter').default;
EventEmitter.prototype.on = EventEmitter.prototype.addListener;
module.exports = EventEmitter;
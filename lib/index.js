"use strict";
var __createBinding, __exportStar, __importDefault;
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWASocket = void 0;
const chalk = require("chalk");

// ========== BAILEYS XYU IMPACT by @YugaxNaspad ==========
console.log('');
console.log(chalk.hex('#FF1493')('┌────────────────────────────────────────────────────────┐'));
console.log(chalk.hex('#FF1493')('│ ') + chalk.hex('#FF4500').bold('BAILEYS XYU IMPACT') + chalk.gray(' - WhatsApp Socket Engine') + chalk.hex('#FF1493')('      │'));
console.log(chalk.hex('#FF1493')('├────────────────────────────────────────────────────────┤'));
console.log(chalk.hex('#FF1493')('│ ') + chalk.hex('#00CED1')('Author:      ') + chalk.hex('#7FFF00')('@YugaxNaspad') + chalk.hex('#FF1493')('                               │'));
console.log(chalk.hex('#FF1493')('│ ') + chalk.hex('#00CED1')('Version:     ') + chalk.hex('#FFD700')('2.0.0') + chalk.hex('#FF1493')('                                      │'));
console.log(chalk.hex('#FF1493')('│ ') + chalk.hex('#00CED1')('Runtime:     ') + chalk.hex('#1E90FF')('Node.js ' + process.version) + chalk.hex('#FF1493')('                          │'));
console.log(chalk.hex('#FF1493')('│ ') + chalk.hex('#00CED1')('Status:      ') + chalk.hex('#00FF00').bold('● ONLINE') + chalk.hex('#FF1493')('                                     │'));
console.log(chalk.hex('#FF1493')('│ ') + chalk.hex('#00CED1')('Started:     ') + chalk.hex('#C0C0C0')(new Date().toLocaleString()) + chalk.hex('#FF1493')('                      │'));
console.log(chalk.hex('#FF1493')('└────────────────────────────────────────────────────────┘'));
console.log('');

__createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
__exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
__importDefault = (this && this.__importDefault) || function(mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWASocket = void 0;
const Socket_1 = __importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;
__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);
exports.default = Socket_1.default;Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWASocket = void 0;
const Socket_1 = __importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;
__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);
exports.default = Socket_1.default;

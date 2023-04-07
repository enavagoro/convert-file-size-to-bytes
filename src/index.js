"use strict";
/**
 * Convert a string representation of file size to bytes.
 * Example: '100kb' => 102400 bytes
 * @param sizeString The string representation of file size.
 * @returns The size in bytes.
 * @throws An error if the size string is invalid.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToBytes = void 0;
var convertToBytes = function (sizeString) {
    var units = {
        'b': 1,
        'kb': 1024,
        'mb': 1024 * 1024,
        'gb': 1024 * 1024 * 1024,
        'tb': 1024 * 1024 * 1024 * 1024,
        'pb': 1024 * 1024 * 1024 * 1024 * 1024
    };
    var match = sizeString.toLowerCase().match(/^(\d+)\s*([a-z]*)$/);
    if (!match) {
        throw new Error("Invalid size string: ".concat(sizeString));
    }
    var size = parseInt(match[1], 10);
    var unit = match[2] || 'b';
    var unitMultiplier = units[unit];
    if (!unitMultiplier) {
        throw new Error("Invalid unit: ".concat(unit));
    }
    return size * unitMultiplier;
};
exports.convertToBytes = convertToBytes;

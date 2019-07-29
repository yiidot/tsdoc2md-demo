"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Progress
 * @public
 */
var Progress = /** @class */ (function () {
    function Progress() {
        this._value = 0;
    }
    /**
     * set progress value
     * @param val - progress value
     * @returns void
     */
    Progress.prototype.setValue = function (val) {
        this._value = val;
    };
    Object.defineProperty(Progress.prototype, "value", {
        /**
         * get progress value
         * @returns number
         */
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    return Progress;
}());
exports.Progress = Progress;

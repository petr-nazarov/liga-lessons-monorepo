"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var base_jest_config_1 = require("config/jest/base.jest.config");
var config = __assign(__assign({}, base_jest_config_1["default"]), { setupFiles: ['../../packages/config/jest/test-config.ts'] });
exports["default"] = config;

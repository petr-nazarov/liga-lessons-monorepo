"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_jest_config_1 = __importDefault(require("config/jest/base.jest.config"));
const config = {
    ...base_jest_config_1.default,
    setupFiles: ['../../packages/config/jest/test-config.ts']
};
exports.default = config;
//# sourceMappingURL=jest.config.js.map
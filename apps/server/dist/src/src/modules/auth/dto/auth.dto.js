"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthDTOSchema = exports.AuthDto = void 0;
var zod_1 = require("zod");
var swagger_1 = require("@nestjs/swagger");
var AuthDto = /** @class */ (function () {
    function AuthDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            example: 'username',
            description: 'Username'
        })
    ], AuthDto.prototype, "username");
    __decorate([
        (0, swagger_1.ApiProperty)({
            example: 'password',
            description: 'Password'
        })
    ], AuthDto.prototype, "password");
    return AuthDto;
}());
exports.AuthDto = AuthDto;
exports.AuthDTOSchema = zod_1.z.object({
    username: zod_1.z.string().email(),
    password: zod_1.z.string().min(8)
});

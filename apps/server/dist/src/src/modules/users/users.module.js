"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UsersModule = void 0;
var common_1 = require("@nestjs/common");
var users_service_1 = require("./users.service");
var users_controller_1 = require("./users.controller");
var user_model_1 = require("./user.model");
var base_service_1 = require("../base/base.service");
var mongoose_1 = require("@nestjs/mongoose");
var users_repository_1 = require("./users.repository");
var base_repository_1 = require("../base/base.repository");
var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        (0, common_1.Module)({
            imports: [
                mongoose_1.MongooseModule.forFeature([{ name: user_model_1.UserModel.name, schema: user_model_1.UserSchema }]),
            ],
            controllers: [users_controller_1.UsersController],
            providers: [
                users_service_1.UsersService,
                {
                    provide: base_service_1.BaseService,
                    useClass: users_service_1.UsersService
                },
                users_repository_1.UsersRepository,
                {
                    provide: base_repository_1.BaseRepository,
                    useClass: users_repository_1.UsersRepository
                },
            ],
            exports: [users_service_1.UsersService]
        })
    ], UsersModule);
    return UsersModule;
}());
exports.UsersModule = UsersModule;

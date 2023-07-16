"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = exports.UserModel = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const base_model_1 = require("../base/base.model");
let UserModel = class UserModel extends base_model_1.BaseModel {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserModel.prototype, "username", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserModel.prototype, "password", void 0);
UserModel = __decorate([
    (0, mongoose_1.Schema)()
], UserModel);
exports.UserModel = UserModel;
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(UserModel);
//# sourceMappingURL=user.model.js.map
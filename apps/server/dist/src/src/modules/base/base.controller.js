"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.BaseController = void 0;
var common_1 = require("@nestjs/common");
var BaseController = /** @class */ (function () {
    function BaseController(baseService) {
        this.baseService = baseService;
    }
    BaseController.prototype.create = function (createDto) {
        return this.baseService.create(createDto);
    };
    BaseController.prototype.findAll = function () {
        return this.baseService.findAll();
    };
    BaseController.prototype.findOne = function (id) {
        return this.baseService.findOne(id);
    };
    BaseController.prototype.update = function (id, updateDto) {
        return this.baseService.update(id, updateDto);
    };
    BaseController.prototype.remove = function (id) {
        return this.baseService.remove(id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], BaseController.prototype, "create");
    __decorate([
        (0, common_1.Get)()
    ], BaseController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], BaseController.prototype, "findOne");
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], BaseController.prototype, "update");
    __decorate([
        (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], BaseController.prototype, "remove");
    return BaseController;
}());
exports.BaseController = BaseController;

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
exports.BaseService = void 0;
const common_1 = require("@nestjs/common");
const base_repository_1 = require("./base.repository");
let BaseService = class BaseService {
    constructor(baseRepository) {
        this.baseRepository = baseRepository;
    }
    async find(filter) {
        return await this.baseRepository.find(filter);
    }
    async create(createDto) {
        return await this.baseRepository.create(createDto);
    }
    async findAll() {
        return await this.baseRepository.findAll();
    }
    async findOne(id) {
        return await this.baseRepository.findOne(id);
    }
    async update(id, updateDto) {
        return await this.baseRepository.update(id, updateDto);
    }
    async remove(id) {
        await this.baseRepository.remove(id);
    }
};
BaseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [base_repository_1.BaseRepository])
], BaseService);
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map
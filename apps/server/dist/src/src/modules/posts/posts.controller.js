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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsController = void 0;
const common_1 = require("@nestjs/common");
const posts_service_1 = require("./posts.service");
const types_1 = require("types");
const swagger_1 = require("@nestjs/swagger");
const requestor_decorator_1 = require("../auth/requestor.decorator");
const auth_guard_1 = require("../auth/auth.guard");
let PostsController = class PostsController {
    constructor(postService) {
        this.postService = postService;
    }
    async findAllModifined() {
        const posts = await this.postService.findAll();
        return { message: 'hello world', posts };
    }
    async findAll() {
        const posts = await this.postService.findAll();
        return posts;
    }
    async create(createPostDto, requestor) {
        const post = await this.postService.create({
            ...createPostDto,
            authorId: requestor._id,
        });
        return post;
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "findAllModifined", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, requestor_decorator_1.Requestor)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [types_1.CreatePostDto, Object]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "create", null);
PostsController = __decorate([
    (0, common_1.Controller)('posts'),
    (0, swagger_1.ApiTags)('posts'),
    (0, swagger_1.ApiBearerAuth)('default'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:paramtypes", [posts_service_1.PostsService])
], PostsController);
exports.PostsController = PostsController;
//# sourceMappingURL=posts.controller.js.map
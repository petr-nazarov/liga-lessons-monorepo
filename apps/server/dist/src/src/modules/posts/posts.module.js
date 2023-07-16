"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsModule = void 0;
const common_1 = require("@nestjs/common");
const posts_service_1 = require("./posts.service");
const posts_controller_1 = require("./posts.controller");
const mongoose_1 = require("@nestjs/mongoose");
const post_model_1 = require("./post.model");
const base_service_1 = require("../base/base.service");
const posts_repository_1 = require("./posts.repository");
const base_repository_1 = require("../base/base.repository");
let PostsModule = exports.PostsModule = class PostsModule {
};
exports.PostsModule = PostsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: post_model_1.PostModel.name, schema: post_model_1.PostSchema }]),
        ],
        controllers: [posts_controller_1.PostsController],
        providers: [
            {
                provide: base_service_1.BaseService,
                useClass: posts_service_1.PostsService,
            },
            posts_repository_1.PostsRepository,
            {
                provide: base_repository_1.BaseRepository,
                useClass: posts_repository_1.PostsRepository,
            },
        ],
    })
], PostsModule);
//# sourceMappingURL=posts.module.js.map
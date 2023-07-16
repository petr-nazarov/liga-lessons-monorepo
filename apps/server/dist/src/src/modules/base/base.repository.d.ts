/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
export declare class BaseRepository<TModel, TCreateDto, TUpdateDto> {
    private readonly baseModel;
    constructor(baseModel: Model<TModel>);
    find(filter: any): Promise<import("mongoose").IfAny<TModel, any, import("mongoose").Document<unknown, {}, TModel> & Omit<import("mongoose").Require_id<TModel>, never>>[]>;
    create(createDto: TCreateDto): Promise<import("mongoose").IfAny<TModel, any, import("mongoose").Document<unknown, {}, TModel> & Omit<import("mongoose").Require_id<TModel>, never>>>;
    findAll(): Promise<import("mongoose").IfAny<TModel, any, import("mongoose").Document<unknown, {}, TModel> & Omit<import("mongoose").Require_id<TModel>, never>>[]>;
    findOne(id: string): Promise<import("mongoose").IfAny<TModel, any, import("mongoose").Document<unknown, {}, TModel> & Omit<import("mongoose").Require_id<TModel>, never>> | null>;
    update(id: string, updateDto: TUpdateDto): Promise<import("mongoose").ModifyResult<import("mongoose").IfAny<TModel, any, import("mongoose").Document<unknown, {}, TModel> & Omit<import("mongoose").Require_id<TModel>, never>>>>;
    remove(id: string): Promise<void>;
}
//# sourceMappingURL=base.repository.d.ts.map
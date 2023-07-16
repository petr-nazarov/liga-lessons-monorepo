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
import { HydratedDocument, Types } from 'mongoose';
import { BaseModel } from '../base/base.model';
export type PostDocument = HydratedDocument<PostModel>;
export declare class PostModel extends BaseModel {
    name: string;
    authorId: Types.ObjectId;
}
export declare const PostSchema: import("mongoose").Schema<PostModel, import("mongoose").Model<PostModel, any, any, any, import("mongoose").Document<unknown, any, PostModel> & Omit<PostModel & {
    _id: Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, PostModel, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<PostModel>> & Omit<import("mongoose").FlatRecord<PostModel> & {
    _id: Types.ObjectId;
}, never>>;
//# sourceMappingURL=post.model.d.ts.map
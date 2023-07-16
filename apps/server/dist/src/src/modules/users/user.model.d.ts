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
import { HydratedDocument } from 'mongoose';
import { BaseModel } from '../base/base.model';
export type UserDocument = HydratedDocument<UserModel>;
export declare class UserModel extends BaseModel {
    username: string;
    password: string;
}
export declare const UserSchema: import("mongoose").Schema<UserModel, import("mongoose").Model<UserModel, any, any, any, import("mongoose").Document<unknown, any, UserModel> & Omit<UserModel & Required<{
    _id: string;
}>, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, UserModel, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<UserModel>> & Omit<import("mongoose").FlatRecord<UserModel> & Required<{
    _id: string;
}>, never>>;
//# sourceMappingURL=user.model.d.ts.map
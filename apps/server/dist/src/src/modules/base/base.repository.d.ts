import { Model } from 'mongoose';
export declare class BaseRepository<TModel, TCreateDto, TUpdateDto> {
    private readonly baseModel;
    constructor(baseModel: Model<TModel>);
    find(filter: any): Promise<TModel[]>;
    create(createDto: TCreateDto): Promise<TModel>;
    findAll(): Promise<TModel[]>;
    findOne(id: string): Promise<TModel>;
    update(id: string, updateDto: TUpdateDto): Promise<TModel>;
    remove(id: string): Promise<void>;
}
//# sourceMappingURL=base.repository.d.ts.map
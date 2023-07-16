import { BaseRepository } from './base.repository';
export declare class BaseService<TModel, TCreateDto, TUpdateDto> {
    private readonly baseRepository;
    constructor(baseRepository: BaseRepository<TModel, TCreateDto, TUpdateDto>);
    find(filter: any): Promise<TModel[]>;
    create(createDto: TCreateDto): Promise<TModel>;
    findAll(): Promise<TModel[]>;
    findOne(id: string): Promise<TModel>;
    update(id: string, updateDto: TUpdateDto): Promise<TModel>;
    remove(id: string): Promise<void>;
}
//# sourceMappingURL=base.service.d.ts.map
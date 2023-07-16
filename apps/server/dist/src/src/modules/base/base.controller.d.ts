import { BaseService } from './base.service';
export declare class BaseController<TModel, TCreateDto, TUpdateDto> {
    private readonly baseService;
    constructor(baseService: BaseService<TModel, TCreateDto, TUpdateDto>);
    create(createDto: TCreateDto): Promise<TModel>;
    findAll(): Promise<TModel[]>;
    findOne(id: string): Promise<TModel>;
    update(id: string, updateDto: TUpdateDto): Promise<TModel>;
    remove(id: string): Promise<void>;
}
//# sourceMappingURL=base.controller.d.ts.map
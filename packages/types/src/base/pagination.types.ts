export type Meta<TModel> = {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  sortBy: keyof TModel;
  sortOrder: 'ASC' | 'DESC';
};
export type FindPaginatedInput<TModel> = {
  /** 
   * This is meta for input 
   */
  meta?: Partial<Meta<TModel>>;
  filter?: {
    [key in keyof TModel]?: TModel[key];
  };
};
export type FindPaginatedResult<TModel> = {
  data: Array<TModel>;
  meta: Meta<TModel>;
};

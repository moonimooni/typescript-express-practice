export interface CrudFilter {
  ids?: number[];
}

export interface BaseDataType {
  id: number;
}

export default class BaseCrud<DataType extends BaseDataType> {
  private data: DataType[];

  constructor(data: DataType[]) {
    this.data = data;
  }

  public findOneById(id: number): DataType | undefined {
    return this.data.find((row) => {
      return row.id === id;
    });
  }

  public findAll(filter: CrudFilter): DataType[] | undefined {
    const { ids } = filter;
    if (ids) {
      this.data = this.data.filter((row) => {
        return ids.includes(row.id);
      });
    }
    return this.data;
  }
}

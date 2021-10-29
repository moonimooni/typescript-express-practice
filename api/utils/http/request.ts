import type { Request } from 'express';

export interface Query {
  [prop: string]: unknown;
}

export interface Filter {
  [prop: string]: NumberConstructor | StringConstructor | ArrayConstructor | DateConstructor;
}

export namespace HttpUtil {
  export function parseRequest(req: Request, filter: Filter): Query {
    const filteredRequest: Query = {};
    const { body, params, query } = req;
    const requestParam = Object.assign(body, params, query); //TODO: 더 나은 이름 없나

    for (const [property, constructor] of Object.entries(filter)) {
      if (requestParam[property]) {
        filteredRequest[property] = constructor(requestParam[property]);
      }
    }
    return filteredRequest;
  }
}

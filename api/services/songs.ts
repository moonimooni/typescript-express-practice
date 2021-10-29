import type { ISong } from 'data';
import type { Query } from '../utils/http/request';

import { songCrud } from '../utils/crud';

export default class SongService {
  public getSong(query: Query): ISong | Error {
    const { id } = query;
    const song = songCrud.findOneById(id as number); //type assertion... 이럴때 쓰는게 맞나? 어렵군
    if (!song) {
      throw new Error('not found');
    }
    return song;
  }
}

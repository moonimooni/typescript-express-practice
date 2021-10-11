import type { ISong } from 'data';

export interface ISongFilter {
  ids?: number[];
}

export default class SongsCrud {
  private _data: Array<ISong>;

  get data(): Array<ISong> {
    if (!this._data) {
      return this._data;
    }
    return [];
  }

  set data(data: Array<ISong>) {
    if (this.data) {
      return; // 코드상의 readonly 처리랄까..?
    }
    this._data = data;
  }

  constructor(public songs: Array<ISong>) {
    this._data = songs;
  }

  public getSongById(id: number): ISong | Error {
    const song = this.data.find((song) => {
      song.id === id;
    });
    if (!song) {
      throw new Error('not found');
    }
    return song;
  }

  public getSongs(filter: ISongFilter): Array<ISong> | Error {
    const { ids } = filter;
    if (ids) {
      this.data = this.data.filter((song) => {
        return ids.includes(song.id);
      });
    }
    return this.data;
  }
}

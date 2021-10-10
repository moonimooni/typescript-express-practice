import { IAlbum } from './albums.interface';

export namespace Albums {
  export const albums: Array<IAlbum> = [
    {
      id: 1,
      title: 'Red',
      ownerArtistId: 1,
      releaseDate: '2012-10-22',
      trackIds: [1, 2],
    },
    {
      id: 2,
      title: 'Skrillex and Diplo Present Jack Ü',
      ownerArtistId: 6,
      releaseDate: '2015-02-27',
      trackIds: [4],
    },
    {
      id: 3,
      title: 'LSD',
      ownerArtistId: 4,
      releaseDate: '2019-04-12',
      trackIds: [6, 7],
    },
    {
      id: 4,
      title: 'some movie ost soundtrack',
      ownerArtistId: 10,
      releaseDate: '2020-04-04',
      trackIds: [1, 6],
    },
    {
      id: 5,
      title: 'x',
      ownerArtistId: 2,
      releaseDate: '2014-06-20',
      trackIds: [3],
    },
  ];
}

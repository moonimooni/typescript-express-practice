import type { ISong } from './songs.interface';

export namespace Songs {
  export const songs: Array<ISong> = [
    {
      id: 1,
      title: 'I Knew You Were Trouble',
      ownerArtistIds: [1],
      playtimeLength_s: 219,
    },
    {
      id: 2,
      title: 'We Are Never Ever Getting Back Together',
      ownerArtistIds: [1],
      playtimeLength_s: 193,
    },
    {
      id: 3,
      title: 'Bloodstream',
      ownerArtistIds: [2],
      playtimeLength_s: 300,
    },
    {
      id: 4,
      title: 'Where Are Ü Now',
      featuringArtistIds: [9],
      ownerArtistIds: [6],
      playtimeLength_s: 250,
    },
    {
      id: 6,
      title: 'Thunderclouds',
      ownerArtistIds: [4],
      playtimeLength_s: 187,
    },
    {
      id: 7,
      title: 'Genius',
      ownerArtistIds: [4],
      playtimeLength_s: 162,
    },
  ];
}

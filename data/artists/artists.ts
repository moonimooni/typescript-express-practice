import type { IArtist, IIndivialArtistProfile } from './artist.interface';

export namespace Artist {
  export const artists: Array<IArtist> = [
    {
      id: 1,
      compositionType: 'SOLO',
      name: 'Taylor Swift',
      individualArtistIds: [1],
      debutAt: '2006-10-24',
    },
    {
      id: 2,
      compositionType: 'SOLO',
      name: 'Ed Sheeran',
      individualArtistIds: [3],
      debutAt: '2011-11-12',
    },
    {
      id: 3,
      compositionType: 'SOLO',
      name: 'Sia',
      individualArtistIds: [5],
      debutAt: '1997-12-23',
    },
    {
      id: 4,
      compositionType: 'BAND',
      name: 'LSD',
      individualArtistIds: [5, 6, 8],
      debutAt: '2018-01-01',
    },
    {
      id: 5,
      compositionType: 'SOLO',
      name: 'Diplo',
      individualArtistIds: [8],
      debutAt: '2004-09-29',
    },
    {
      id: 6,
      compositionType: 'BAND',
      name: 'Jack Ü',
      individualArtistIds: [2, 8],
      debutAt: '2013-11-15',
    },
    {
      id: 7,
      compositionType: 'SOLO',
      name: 'Skrillex',
      individualArtistIds: [2],
      debutAt: '2010-06-07',
    },
    {
      id: 9,
      compositionType: 'SOLO',
      name: 'Justin Bieber',
      individualArtistIds: [4],
      debutAt: '2009-10-10',
    },
    {
      id: 10,
      compositionType: 'INSTITUTION',
      name: 'some bla records',
    },
  ];

  export const individualArtistProfiles: Array<IIndivialArtistProfile> = [
    {
      id: 1,
      firstName: 'Taylor',
      lastName: 'Swift',
      affiliatedArtistIds: [1],
    },
    {
      id: 2,
      firstName: 'Sonny',
      lastName: 'Moore',
      stageName: 'Skrillex',
      affiliatedArtistIds: [8],
    },
    {
      id: 3,
      firstName: 'Ed',
      lastName: 'Sheeran',
      affiliatedArtistIds: [2],
    },
    {
      id: 4,
      firstName: 'Justin',
      lastName: 'Bieber',
      affiliatedArtistIds: [9],
    },
    {
      id: 5,
      firstName: 'Sia',
      lastName: 'Furler',
      stageName: 'Sia',
      affiliatedArtistIds: [3, 4],
    },
    {
      id: 6,
      firstName: 'Timothy',
      lastName: 'McKenzie',
      stageName: 'Labrinth',
      affiliatedArtistIds: [4],
    },
    {
      id: 8,
      firstName: 'Thomas',
      lastName: 'Pentz',
      stageName: 'Diplo',
      affiliatedArtistIds: [4, 5],
    },
  ];
}

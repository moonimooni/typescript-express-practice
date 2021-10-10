export interface IIndivialArtistProfile {
  readonly id: number;
  firstName: string;
  lastName: string;
  stageName?: string;
  affiliatedArtistIds: number[];
}

export interface IArtist {
  readonly id: number;
  compositionType: 'SOLO' | 'BAND' | 'INSTITUTION';
  name: string;
  individualArtistIds?: number[];
  debutAt?: string;
}

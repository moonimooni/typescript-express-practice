export interface ISong {
  readonly id: number;
  title: string;
  ownerArtistIds: number[];
  featuringArtistIds?: number[];
  readonly playtimeLength_s: number;
}

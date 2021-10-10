export interface IAlbum {
  readonly id: number;
  readonly title: string;
  ownerArtistId: number;
  releaseDate: string;
  trackIds: number[];
}

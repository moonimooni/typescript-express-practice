import type { ISong } from 'data';
import { Song } from '../../../data';
import BaseCrud from './base';

export const songCrud = new BaseCrud<ISong>(Song.songs);

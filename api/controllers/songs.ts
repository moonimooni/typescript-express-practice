import type { NextFunction, Request, Response } from 'express';
import { HttpUtil } from '../utils/http/request';
import { songService } from '../services';

export default class SongsController {
  public getSong(req: Request, res: Response, next: NextFunction): Response | void {
    try {
      const query = HttpUtil.parseRequest(req, { id: Number, ids: Array });
      const data = songService.getSong(query);
      return res.status(200).json({ data: data });
    } catch (err) {
      return next(err);
    }
  }
}

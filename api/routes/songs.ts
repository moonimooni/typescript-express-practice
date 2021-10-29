import type { IRouter } from 'express';

import { songController } from '../controllers';

export default class SongRouter {
  constructor(public router: IRouter) {
    this.router = router;
    this.registerRoutes();
  }

  private registerRoutes(): void {
    this.router.get('/songs/:id', songController.getSong);
  }
}

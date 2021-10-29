import { Router } from 'express';

import SongRouter from './songs';

const router = Router();
new SongRouter(router);

export default router;

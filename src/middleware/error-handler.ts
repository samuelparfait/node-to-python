import type { Request, Response, NextFunction } from 'express';

import { logError } from '@/lib/logger';

export const errorHandler = (
  err: Error | unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof Error) {
    logError(err, err.stack);
  } else {
    logError(new Error('Unknown error'), 'No stack trace available');
  }

  if (err instanceof Error) {
    res.status(400).json({ error: err.message });
  } else {
    res.status(500).json({ error: 'Something went wrong!' });
  }
};

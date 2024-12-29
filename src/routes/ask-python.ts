import express from 'express';

import { processor } from '@/lib/processor';
import { logError, logInfo } from '@/lib/logger';
import { getAbsolutePath } from '@/lib/utils';

const router = express.Router();

router.post('/', async (req, res) => {
  const { numbers } = req.body;

  if (!Array.isArray(numbers)) {
    res
      .status(422)
      .json({ error: 'Invalid input: "numbers" should be an array.' });
  }

  const pyScriptPath = getAbsolutePath('src/scripts/sum.py');

  try {
    const result = await processor(pyScriptPath, { numbers });

    logInfo(result);

    res.status(200).json({ success: true, data: result });
  } catch (err) {
    logError(err, 'Error processing data');
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;

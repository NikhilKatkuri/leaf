import fs from 'node:fs/promises';
import type { Request, Response } from 'express';

const getFileData = async (req: Request, res: Response) => {
  try {
    const { directoryPath } = req.body as { directoryPath?: string };

    if (!directoryPath) {
      return res.status(400).json({ error: 'directoryPath is required' });
    }

    const files = await fs.readFile(directoryPath);
    const data = files.toString();
    console.log('getFileData data:', data.split('\n').length, 'lines');
    return res.status(200).json({ data });
  } catch (error) {
    console.error('getFiles error:', error);
    return res.status(500).json({ error: 'Failed to read directory' });
  }
};

export default getFileData;

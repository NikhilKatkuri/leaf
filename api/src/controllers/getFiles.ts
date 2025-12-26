import fs from 'node:fs/promises';
import path from 'node:path';
import type { Request, Response } from 'express';

const getFiles = async (req: Request, res: Response) => {
  try {
    const { directoryPath } = req.body as { directoryPath?: string };

    if (!directoryPath) {
      return res.status(400).json({ error: 'directoryPath is required' });
    }

    const files = await fs.readdir(directoryPath, { withFileTypes: true });
    const data = files.map(e => ({
      name: e.name,
      isDirectory: e.isDirectory(),
      thisPath: path.join(directoryPath, e.name),
    }));

    return res.status(200).json({ data });
  } catch (error) {
    console.error('getFiles error:', error);
    return res.status(500).json({ error: 'Failed to read directory' });
  }
};

export default getFiles;

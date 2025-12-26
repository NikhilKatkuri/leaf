import fs from 'node:fs/promises';
import path from 'node:path';
import type { Request, Response } from 'express';

export const createFile = async (req: Request, res: Response) => {
  try {
    const {
      directoryPath,
      name,
      content = '',
    } = req.body as {
      directoryPath?: string;
      name?: string;
      content?: string;
    };

    if (!directoryPath || !name) {
      return res
        .status(400)
        .json({ error: 'directoryPath and name are required' });
    }

    const filePath = path.join(directoryPath, name);
    await fs.writeFile(filePath, content, 'utf8');

    return res.status(201).json({ filePath });
  } catch (error) {
    console.error('createFile error:', error);
    return res.status(500).json({ error: 'Failed to create file' });
  }
};

import fs from 'node:fs/promises';
import type { Request, Response } from 'express';

const getFileData = async (req: Request, res: Response) => {
  try {
    const { filePath, content } = req.body as {
      filePath?: string;
      content?: string;
    };

    if (!filePath) {
      return res.status(400).json({ error: 'filePath is required' });
    }

    if (content !== undefined) {
      await fs.writeFile(filePath, content);
      return res.status(200).json({ message: 'File updated successfully' });
    } else {
      const data = await fs.readFile(filePath, 'utf-8');
      console.log('getFileData data:', data.split('\n').length, 'lines');
      return res.status(200).json({ data });
    }
  } catch (error) {
    console.error('getFiles error:', error);
    return res.status(500).json({ error: 'Failed to read directory' });
  }
};

export default getFileData;

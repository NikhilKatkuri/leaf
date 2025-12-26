import fs from 'node:fs/promises';
import type { Request, Response } from 'express';

const deleteFile = async (req: Request, res: Response) => {
  try {
    const { directoryPath } = req.body as {
      directoryPath?: string;
    };

    if (!directoryPath) {
      return res.status(400).json({ error: 'directoryPath is required' });
    }

    // Check if file exists before attempting to delete
    try {
      await fs.access(directoryPath);
    } catch {
      return res.status(404).json({ error: 'File not found' });
    }

    // Delete the file
    await fs.unlink(directoryPath);
    console.log('File deleted successfully:', directoryPath);
    return res.status(200).json({ message: 'File deleted successfully' });
  } catch (error) {
    console.error('Delete file error:', error);
    return res.status(500).json({ error: 'Failed to delete file' });
  }
};

export default deleteFile;

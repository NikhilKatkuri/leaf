import express from 'express';
import getFiles from '../controllers/getFiles';
import getFileData from '../controllers/getFileData';
import { createFile } from '../controllers/newFile';
import deleteFile from '../controllers/deleteFiles';

const filesRouter = express.Router();

filesRouter.post('/', getFiles);
filesRouter.delete('/', deleteFile);
filesRouter.post('/data', getFileData);
filesRouter.put('/data', getFileData);
filesRouter.post('/new', createFile);

export default filesRouter;

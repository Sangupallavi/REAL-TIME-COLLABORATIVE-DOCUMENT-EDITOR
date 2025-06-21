import express from 'express';
import { getDocument, saveDocument, getUserDocs } from '../controllers/doccontroller.js';

const router = express.Router();
router.get('/:docId', getDocument);
router.post('/:docId', saveDocument);
router.get('/', getUserDocs);
export default router;

import { Router } from 'express';
import { handleCreateContact, handleGetContacts } from '../controllers/contactController.js';

const router = Router();

router.post('/', handleCreateContact);
router.get('/', handleGetContacts);

export default router;

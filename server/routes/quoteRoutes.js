import { Router } from 'express';
import { handleCreateQuote, handleGetQuotes } from '../controllers/quoteController.js';

const router = Router();

router.post('/', handleCreateQuote);
router.get('/', handleGetQuotes);

export default router;

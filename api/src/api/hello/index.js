import express from 'express';
import hello from './hello';

const router = express.Router();

router.get('/', hello);

module.exports = router;

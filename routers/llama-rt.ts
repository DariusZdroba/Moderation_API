import * as express from 'express';
import { LlamaCtrl } from '../controllers/llama.ctrl';
const router = express.Router();

router.get("/v1/llama",LlamaCtrl.getResponse)

export {router}
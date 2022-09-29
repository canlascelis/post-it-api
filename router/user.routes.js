import userController from "../controller/user.controller.js";
import Express from 'express';

const router = Express.Router();

router.post('/user', userController.createUser);
router.get('/user', userController.getAllUser);

export default router;
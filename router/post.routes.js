import postController from '../controller/post.controller.js';
import Express from 'express';

const router = Express.Router();

router.post('/post', postController.createPost);
router.get('/post', postController.allPost);
router.delete('/post/:id', postController.deletePostByID);
router.put('/post/del/:id', postController.updatePostDelete);

export default router;
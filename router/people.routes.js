import peopleController from "../controller/people.controller.js";
import Express from "express";

const router = Express.Router();

router.post('/people', peopleController.newPeople);
router.get('/people', peopleController.getAllPeople);

export default router;
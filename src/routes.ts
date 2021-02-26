import { Router } from "express";
import { AnswerController } from "./controllers/AnswerController";
import { NpsController } from "./controllers/NpsController";
import { SendMailController } from "./controllers/SendMailController";
import { SurveysController } from "./controllers/SurveysController";
import { UserController } from "./controllers/UserController";

const router = Router();

// Controllers
const userController = new UserController();
const surveysController = new SurveysController();
const sendMailController = new SendMailController();
const answerController = new AnswerController();
const npsController = new NpsController();

// POST Routes
router.post("/users", userController.create);
router.post("/surveys", surveysController.create);
router.post("/sendMail", sendMailController.execute);

// GET Routes
router.get("/surveys", surveysController.show);
router.get("/answers/:value", answerController.execute);
router.get("/nps/:survey_id", npsController.execute);


export { router };
import { Router } from "express";
import prisma from "./db";

const postAnswers = async (req, res, next) => {
  try {
    const answer = await prisma.answers.create({
      data: {
        answer: req.body.answers,
      },
    });
    if (answer) {
      res.json({ data: answer });
    } else {
      res.json({ data: "Failed to submit answer" });
    }
  } catch (e) {
    next(e);
  }
};

const router = Router();

router.post("/answers", postAnswers);

export default router;

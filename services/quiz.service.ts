import { NextApiResponse } from "next";
import { mockQuizzes } from "../mocks";
import { makeResponse } from "../utils";
import { throwBadRequest } from "./error.service";

export const getQuiz = (
  reqId: string | string[] | undefined,
  res: NextApiResponse
) => {
  if (reqId === undefined) {
    return throwBadRequest(res);
  }

  const id = parseInt(Array.isArray(reqId) ? reqId[0] : reqId, 10);
  const quizLength = mockQuizzes.length;
  if (id >= mockQuizzes.length) {
    return throwBadRequest(res);
  }

  const quiz = { ...mockQuizzes[id] };
  delete quiz.correctAnswer;

  res.status(200).json(makeResponse(200, "", { quizLength, quiz }));
};
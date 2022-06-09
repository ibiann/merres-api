import express from "express";
import { HttpStatusCode } from "../../utils/constants";
import { boardRoutes } from "./board.route";
import { cardRoutes } from "./card.route";
import { columnRoutes } from "./column.route";

const router = express.Router();

//checking status Get v1/status

router.get("/status", (req, res) =>
  res.status(HttpStatusCode.OK).json({
    status: "Ok",
  })
);

/** Call Board Api */
router.use("/boards", boardRoutes);

/** Call Column Api */
router.use("/columns", columnRoutes);

/** Call Card Api */
router.use('/cards', cardRoutes);

export const apiV1 = router;

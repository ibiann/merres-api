import { CardService } from "../services/card.service";
import { HttpStatusCode } from "../utils/constants";

const createNew = async (req, res) => {
  try {
    const result = await CardService.createNew(req.body);
    console.log(result);
    res.status(HttpStatusCode.OK).json(result);
  } catch (error) {
    res.status(HttpStatusCode.INTERNAL_SERVER).json({
      errors: error.message
    });
  }
};

export const CardController = { createNew };

import { UserModel } from "../models/user.model";

const createNew = async (data) => {
  try {
    const createdBoard = await UserModel.createNew(data)
    const getNewBoard = await UserModel.findOneById(createdBoard.insertedId.toString())
    return getNewBoard
  } catch (error) {
    throw new Error(error);
  }
}

export const UserService = { createNew }
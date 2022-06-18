import Joi from "joi";
import { ObjectId } from "mongodb";
import { getDB } from "../config/mongodb";

const userCollection = 'users'
const userCollectionSchema = Joi.object ({
    name: Joi.string().required([true, 'Add a name to your account']).alphanum().min(3).max(30),
    email: Joi.string().required([true, 'Add a email to your account']).email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: Joi.string().required([true, 'Add a password to your account']).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    createdAt: Joi.date().timestamp().default(Date.now()),
    updatedAt: Joi.date().timestamp().default(null),
})

const validateSchema = async (data) => {
    return await userCollectionSchema.validateAsync(data, { abortEarly: false });
  };
  
  const findOneById = async (id) => {
    try {
      const result = await getDB().collection(userCollection).findOne({ _id: ObjectId(id) });
      return result;
    } catch (error) {
      throw new Error(error);
    }
  };
  
  const createNew = async (data) => {
    try {
      const value = await validateSchema(data);
      const result = await getDB().collection(userCollection).insertOne(value);
      return result;
    } catch (error) {
      throw new Error(error);
    }
  };
  
export const userModel = { createNew, findOneById }


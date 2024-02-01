import {Request, RequestHandler, Response} from 'express';
import {StatusCodes} from 'http-status-codes';
import * as yup from 'yup';

interface IUsuario {
  nome: string;
  email: string;
  senha: string;
}

const bodyValidationSchema: yup.Schema<IUsuario> = yup.object().shape({
  nome: yup.string().required(),
  email: yup.string().email().required(),
  senha: yup.string().min(8).required(),
});


export const createBodyValidation: RequestHandler = async (req, res, next) => {
  try {
   await bodyValidationSchema.validate(req.body, {abortEarly: false});
   return next();
  } catch (err) {
    const yupError = err as yup.ValidationError;
    const errors: Record<string, string> = {};
    yupError.inner.forEach((error) => {
      if (error.path === undefined) return;
      errors[error.path] = error.message;
    });
    return res.status(StatusCodes.BAD_REQUEST).json({errors});
  }
}


export const create: RequestHandler = async (req, res) => {
   return res.status(StatusCodes.CREATED).json(req.body);
};

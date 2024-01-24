import {Request, Response} from 'express';
import {StatusCodes} from 'http-status-codes';
import * as yup from 'yup';
//
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
export const create = async (req: Request<{}, {}, IUsuario>, res: Response) => {
  let validateData: IUsuario | undefined = undefined;

  try {
    validateData = await bodyValidationSchema.validate(req.body, {abortEarly: false});
  } catch (err) {
    const yupError = err as yup.ValidationError;
    const errors: Record<string, string> = {};
    yupError.inner.forEach((error) => {
      if (error.path === undefined) return;
      errors[error.path] = error.message;
    });
     return res.status(StatusCodes.BAD_REQUEST).json({errors});
  }

  res.status(StatusCodes.OK).json({success: true, message: 'Usuario Criado com sucesso!'});
};

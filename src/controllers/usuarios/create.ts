import {Request, Response} from 'express';
import {StatusCodes} from 'http-status-codes';

interface IUsuario {
  nome: string;
  email: string;
  senha: string;
}

export const create = (req: Request <{}, {}, IUsuario>, res: Response) => {

  console.log(req.body.nome);

  res.status(StatusCodes.OK).json({success: true, message: 'Usuario Criado com sucesso!'});
};

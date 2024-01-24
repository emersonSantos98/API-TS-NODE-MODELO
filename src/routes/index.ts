import {Router} from 'express'
import {StatusCodes} from 'http-status-codes';
import usuario from './usuario.routes';
const router = Router()


router.use('/usuarios', usuario);
router.get('', (req, res) => {
  res.status(StatusCodes.OK).json({
    success: true,
    message: 'API rodando com sucesso',
    nomeApi: 'PI-TS-NODE-MODELO',
    versao: '1.0.0',
    descricao: 'API de exemplo para estudo de NodeJS com Typescript, Express, Prisma, JWT, Jest, etc.',
    autor: 'Emerson Santos',
    email: 'emerson.matosokl10@gmail.com',
    dataAtualizacao: "2024-01-23"
  })
})
export {router}

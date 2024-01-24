import {Router} from 'express'
const router = Router()


router.get('/teste', (req, res) => {
  res.json({
    success: true,
    message: 'Backend is running',
  })
})
export {router}

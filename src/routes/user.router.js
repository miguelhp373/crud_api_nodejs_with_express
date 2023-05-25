const {Router} = require('express');
const { userController } = require('../controllers/user.controller');

const userRouter = Router();

userRouter.use(
   '/users',
   userRouter.get('/all',userController.getUsers),
   userRouter.post('/',userController.putUsers),
   userRouter.delete('/:id',userController.deleteUsers),
)

module.exports = {
    userRouter,
}
import express from 'express';
import {
  getUsers,
  getUserById,
  saveUser,
  updateUser,
  deleteUser
} from '../controllers/UserController.js';

const router = express.Router();

router.get('/users', getUsers);//取得使用者清單
router.get('/user/:id', getUserById);//取得使用者清單後編輯
router.post('/users', saveUser);//儲存新增的使用者資料
router.patch('/users/:id', updateUser);//編輯頁面更新資料
router.delete('/users/:id', deleteUser);//刪除資料

export default router;
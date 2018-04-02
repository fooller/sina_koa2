//前端路由
import KoaRouter from 'koa-router'
import service from '../service'
const router = new KoaRouter({
    prefix: '/loginuser'
})


const loginService = service.login.loginService;
const demo = service.demo.login;

// 登陆
router.get('/login',loginService.userLoginService);
// 注册
router.post('/regist',loginService.userRegist);
// router.post('/addPhoto',service.common.uploadImgs);
// 新增图片
router.post('/addPhoto',demo.saveFile);
// 图片查询
router.get('/findImg',demo.findFiles);
// 文件删除
router.post('/delFile',demo.delFile);
// 批量新增
router.post('/addPhotoList',demo.saveFiles);






module.exports = router
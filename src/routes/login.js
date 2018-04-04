//前端路由
import KoaRouter from 'koa-router'
import service from '../service'
const router = new KoaRouter({
    prefix: '/loginuser'
})
const loginService = service.login.loginService;
const releaseService = service.login.releaseService;



// 登陆
router.get('/login',loginService.userLoginService);
// 注册
router.post('/regist',loginService.userRegist);
// 发布
router.post('/release',releaseService.insertRelease);
// 查询
router.get('/selectReleaseAllUserList',releaseService.selectReleaseAllUserList);



module.exports = router
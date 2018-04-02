//前端路由
import KoaRouter from 'koa-router'
import service from '../service'
const router = new KoaRouter({
    prefix: '/loginuser'
})


const getLoginName = service.demo.login.getLoginName;
const addPhoto = service.demo.login.addPhoto;


// router.get('/getLoginName',service.demo.login.getLoginName);




module.exports = router
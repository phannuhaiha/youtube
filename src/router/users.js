const users = [
  {
    path: '/',
    name: 'home',
    component: () => import("../views/users/Home.vue"),
    children: [
      {
        path: '',
        name: 'home-product',
        redirect: '/product',
      },
      {
        path: 'product',
        name: 'product',
        component: () => import("../views/users/ProductView.vue"),
      },
      {
        path: 'subscription',
        name: 'subscription',
        component: () => import("../views/users/Subscription.vue"),
      },
      {
        path: 'login',
        name: 'login',
        component: () => import("../views/users/Login.vue"),
      },
    ]
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import("../views/users/Signin.vue"),
  },
 
  {
    path: '/productdetail',
    name: 'detail',
    component: () => import("../views/users/ProductViewDetail.vue"),
  },
  {
    path: '/uploadvideo',
    name: 'upload',
    component: () => import("../views/users/UploadVideo.vue"),
  },
]

export default users;

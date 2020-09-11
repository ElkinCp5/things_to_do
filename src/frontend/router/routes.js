import { 
    signin,
    signup,
    dashboard,
    tasksList,
    boardList,
    homeWork,
    E404,
 } from "../views";
 
const routes = [
    {
        path: "/",
        exact: true,
        isAuth: false,
        component: signin,
    },
    {
        path: "/signup",
        exact: true,
        isAuth: false,
        component: signup,
    },
    {
        path: "/dashboard",
        component: dashboard,
        isAuth: true,
        routes: [
            {
                path: "/dashboard",
                exact: true,
                isAuth: true,
                component: boardList
            },
            {
                path: "/dashboard/:board",
                exact: true,
                isAuth: true,
                component: tasksList
            },
            {
                path: "/dashboard/:board/:homework",
                exact: true,
                isAuth: true,
                component: homeWork
            },
            {
                path: "*",
                exact: false,
                isAuth: true,
                component: E404
            }
      ]
    },
    {
        path: '*',
        exact: false,
        isAuth: false,
        component: E404
    }
    
  ];
export default routes;
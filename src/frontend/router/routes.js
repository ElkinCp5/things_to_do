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
        isAuth: true,
        component: dashboard,
        routes: [
            {
                path: "/dashboard",
                name: "Lista de tablero",
                exact: true,
                isAuth: true,
                component: boardList
            },
            {
                path: "/dashboard/:board",
                name: "Lista de tareas",
                exact: true,
                isAuth: true,
                component: tasksList
            },
            {
                path: "/dashboard/:board/:homework",
                name: "Tarea",
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
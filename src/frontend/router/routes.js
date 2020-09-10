const signin = () => (<div>Inicio de secion</div>);
const signup = () => (<div>Registro</div>);

const dashboard = () => (<div>Registro</div>);
const boardList = () => (<div>Lista de tableros</div>);
const thingsToDo = () => (<div>Lista de tareas</div>);
const homework = () => (<div>Detalles de taresas</div>);
const E404 = () => (<div>Error 404</div>);

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
                component: thingsToDo
            },
            {
                path: "/dashboard/:homework",
                exact: true,
                isAuth: true,
                component: homework
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
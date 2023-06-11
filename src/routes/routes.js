import PageNotFound from "../modules/shared/pages/PageNotFound";
import { createRouter, createWebHashHistory } from "vue-router";
import isAuthenticatedGuard from "./auth-guard";

const routes = [
  {
    path: "/",
    redirect: "/pokemon",
  },
  {
    path: "/pokemon",
    name: "pokemon-layout",
    component: () =>
      import(
        /*webpackChunkName: "pokemon layout" */ "../modules/pokemon/layout/PokemonLayout.vue"
      ),
    children: [
      {
        path: "home",
        name: "home",
        component: () =>
          import(
            /*webpackChunkName: "list page" */ "../modules/pokemon/pages/ListPage"
          ),
      },
      {
        path: "about",
        name: "about",
        component: () =>
          import(
            /*webpackChunkName: "About page" */ "../modules/pokemon/pages/AboutPage"
          ),
      },
      {
        path: ":pokemonid",
        name: "pokemon-id",
        component: () =>
          import(
            /*webpackChunkName: "pokemon page" */ "../modules/pokemon/pages/PokemonPage"
          ),
        props: (route) => {
          const id = Number(route.params.pokemonid);
          return isNaN(id) ? { id: 1 } : { id };
        },
      },
      {
        path: "",
        redirect: { name: "about" },
      },
    ],
  },
  {
    path: "/dbz",
    name: "dbz-layout",
    component: () =>
      import(
        /*webpackChunkName: "pokemon layout" */ "../modules/dbz/layout/DbzLayout.vue"
      ),
    beforeEnter: [isAuthenticatedGuard],
    children: [
      {
        path: "charapters",
        name: "charapters",
        component: () =>
          import(
            /*webpackChunkName: "list page" */ "../modules/dbz/pages/CharactersPage.vue"
          ),
      },
      {
        path: "about",
        name: "dbzabout",
        component: () =>
          import(
            /*webpackChunkName: "About page" */ "../modules/dbz/pages/AboutPage"
          ),
      },

      {
        path: "",
        redirect: { name: "dbzabout" },
      },
    ],
  },

  { path: "/:pathMarch(.*)*", component: PageNotFound },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

//Guard Global -sincrono

// router.beforeEach((to, from, next) => {
// console.log("🚀 ~ next:", next)
// console.log("🚀 ~ from:", from)
// console.log("🚀 ~ to:", to)

// const random = Math.random() * 100
// if( random > 50){
//   console.log('puedes acceder a la ruta', random);
//   next();
// }else{
//   console.log('Ruta Bloqueada', random);
//   next({name: 'home'});
// }

// })

// const canAccess = () => {
//   return new Promise((resolve) => {
//     const random = Math.random() * 100;
//     if (random > 50) {
//       console.log("puedes acceder a la ruta", random);
//       resolve(true);
//     } else {
//       console.log("Ruta Bloqueada", random);
//       resolve(false);
//     }
//   });
// };

// //Guard Global -asincrono

// router.beforeEach(async (to, from, next) => {
//   const result = await canAccess();

//   if (result) {
//     console.log("puedes acceder a la ruta", result);
//     next();
//   } else {
//     console.log("Ruta Bloqueada", result);
//     next({ name: "home" });
//   }
// });

export default router;

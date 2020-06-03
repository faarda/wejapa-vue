import Vue from 'vue'
import VueRouter from 'vue-router'

// LAYOUTS
import Auth from '../layouts/Auth.vue';
import Dashboard from '../layouts/Dashboard.vue';

// PAGES
import Login from '../views/auth/Login.vue';
import Signup from '../views/auth/Signup.vue';
import Jobs from '../views/jobs/Jobs.vue';
import SingleJob from '../views/jobs/SingleJob.vue';
import SavedJobs from '../views/jobs/SavedJobs.vue';
import Applications from '../views/jobs/Applications.vue';
import Profile from '../views/Profile.vue';
import ForgotPassword from '../views/auth/ForgotPassword.vue';
import ResetPassword from '../views/auth/ResetPassword.vue';

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'auth',
    component: Auth,
    children: [{
        path: "",
        alias: "login",
        component: Login,
        name: "login",
        meta: {
          requiresGuest: true
        }
      },
      {
        path: "signup",
        component: Signup,
        name: "signup",
        meta: {
          requiresGuest: true
        }
      },
      {
        path: "forgotpassword",
        component: ForgotPassword,
        name: "forgotpass",
        meta: {
          requiresGuest: true
        }
      },
      {
        path: "resetpassword/:token",
        component: ResetPassword,
        name: "resetpass",
        meta: {
          requiresGuest: true
        }
      },

    ]
  },
  {
    path: '/jobs',
    name: 'dashboard',
    component: Dashboard,
    children: [{
        path: "",
        component: Jobs,
        name: "jobs",
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "applications",
        component: Applications,
        name: "applications",
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "saved",
        component: SavedJobs,
        name: "saved-jobs",
        meta: {
          requiresAuth: true
        }
      },
      {
        path: ":id",
        component: SingleJob,
        name: "single-job",
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "/profile",
        component: Profile,
        name: "profile",
        meta: {
          requiresAuth: true
        }
      }

    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'active',
  base: process.env.BASE_URL,
  routes
})

export default router
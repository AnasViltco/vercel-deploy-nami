import { lazy } from "react";
import fakeDelay from "../Shared/HelperMethods/FakeDelay";

const delayTime = 2000;

const routes = [
  {
    path: "/",
    component: lazy(() =>
      fakeDelay(delayTime)(
        import("../Pages/PublicPages/LandingPage/LandingPage")
      )
    ),
    ispublic: true,
    exact: true,
  },
  {
    path: "/login",
    component: lazy(() => fakeDelay(delayTime)(import("../Pages/Auth/Login"))),
    ispublic: true,
    exact: true,
  },
  {
    path: "/signup",
    component: lazy(() => fakeDelay(delayTime)(import("../Pages/Auth/SignUp"))),
    ispublic: true,
    exact: true,
  },

  {
    path: "/forget-password",
    component: lazy(() =>
      fakeDelay(delayTime)(
        import("../Pages/Auth/Forgetpassword/Forgetpassword")
      )
    ),
    ispublic: true,
    exact: true,
  },
  {
    path: "/reset-password",
    component: lazy(() =>
      fakeDelay(delayTime)(import("../Pages/Auth/Resetpassword/Resetpassword"))
    ),
    ispublic: true,
    exact: true,
  },
  // {
  //   path: "/advisor",
  //   component: lazy(() =>
  //     fakeDelay(delayTime)(import("../Pages/PublicPages/Advisor/Advisor"))
  //   ),
  //   ispublic: false,
  //   exact: true,
  // },
  {
    path: "/addAdvisor",
    component: lazy(() =>
      fakeDelay(delayTime)(import("../Pages/AdminPages/addAdviser"))
    ),
    ispublic: false,
    exact: true,
  },
  {
    path: "/advisorListing",
    component: lazy(() =>
      fakeDelay(delayTime)(import("../Pages/AdminPages/Advisor/Advisor"))
    ),
    ispublic: false,
    exact: true,
  },
  {
    path: "/view-profile/:id",
    component: lazy(() =>
      fakeDelay(delayTime)(
        import("../Pages/AdminPages/ViewprofileAdmin/ViewprofileAdmin")
      )
    ),
    ispublic: false,
    exact: true,
  },
  // { path: '/*', component: Error404, role: [1, 3, 4, 5] }
];

export default routes;

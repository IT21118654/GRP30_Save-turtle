import { lazy } from "react";
import { Navigate } from "react-router-dom";
//import AddFundraise from "../views/pages/Addfundraise.jsx";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));

const Research = lazy(() => import("../views/ui/Research"));
const Awareness = lazy(() => import("../views/ui/Awareness"));
const Advocacy = lazy(() => import("../views/ui/Advocacy"));
const Fundraise = lazy(() => import("../views/ui/Fundraise"));
const FundraiseUpdate = lazy(() => import("../UI/FundraiseUpdate"));
const AddFundraise = lazy(() => import("../views/pages/Addfundraise"));


/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/starter" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/about", exact: true, element: <About /> },
      
      { path: "/awareness", exact: true, element: <Awareness /> },
      { path: "/advocacy", exact: true, element: <Advocacy /> },
      { path: "/research", exact: true, element: <Research /> },
      { path: "/fundraise", exact: true, element: <Fundraise /> },
      { path: "/UpdateFundraise/:_id", exact: true, element: <FundraiseUpdate />  },
      { path: "fundraise/addFundraise",exact: true, element: <AddFundraise /> },

    ],
  },
];

export default ThemeRoutes;

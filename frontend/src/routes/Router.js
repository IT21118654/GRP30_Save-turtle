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
const AddEducation = lazy(() => import("../UI/AddEducation"));
const EducationUpdate = lazy(() => import("../UI/EducationUpdate"));
const TurtleHome = lazy(() => import("../UI/TurtleHome.js"));
const OliveRidley = lazy(() => import("../UI/OliveRidley.js"));
const Green = lazy(() => import("../UI/Green.js"));
const Leatherback = lazy(() => import("../UI/Leatherback.js"));
const Hawksbill = lazy(() => import("../UI/Hawksbill.js"));
const Loggerhead = lazy(() => import("../UI/Loggerhead.js"));
const OliveRedleyLocation = lazy(() => import("../UI/OliveRedleyLocation.js"));
const GreenLocation = lazy(() => import("../UI/GreenLocation.js"));
const LeatherbackLocation = lazy(() => import("../UI/LeatherbackLocation.js"));
const HawksbillLocation = lazy(() => import("../UI/HawksbillLocation.js"));
const Gallery = lazy(() => import("../UI/Gallery.js"));
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
      { path: "education/addEducation",exact: true, element: <AddEducation /> },
      { path: "UpdateEducation/:_id",exact: true, element: <EducationUpdate /> },
      { path: "/turtlehome",exact: true, element: <TurtleHome /> },
      { path: "/oliveridley",exact: true, element: <OliveRidley /> },
      { path: "/green",exact: true, element: <Green /> },
      { path: "/leatherback",exact: true, element: <Leatherback /> },
      { path: "/hawksbill",exact: true, element: <Hawksbill /> },
      { path: "/loggerhead",exact: true, element: <Loggerhead/> },
      { path: "/olivelocation",exact: true, element: <OliveRedleyLocation/> },
      { path: "/greenlocation",exact: true, element: <GreenLocation/> },
      { path: "/leatherlocation",exact: true, element: <LeatherbackLocation/> },
      { path: "/hawkslocation",exact: true, element: <HawksbillLocation/> },
      { path: "/gallery",exact: true, element: <Gallery/> },

    ],
  },
];

export default ThemeRoutes;

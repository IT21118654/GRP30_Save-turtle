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
const AdvocacyUpdate = lazy(() => import("../UI/AdvocacyUpdate"));
const Addadvocacy = lazy(() => import("../views/pages/Addadvocacy"));
const Fundraise = lazy(() => import("../views/ui/Fundraise"));
const FundraiseUpdate = lazy(() => import("../UI/FundraiseUpdate"));
const AddFundraise = lazy(() => import("../views/pages/Addfundraise"));
const AddEducation = lazy(() => import("../UI/AddEducation"));
const EducationUpdate = lazy(() => import("../UI/EducationUpdate"));
const TurtleHome = lazy(() => import("../UI/TurtleHome.js"));
const Event = lazy(() => import("../UI/Event.js"));
const Nesting= lazy(() => import("../UI/nesting.js"));
const Marathon= lazy(() => import("../UI/Marathon.js"));
const Student= lazy(() => import("../UI/studentrally.js"));
const Beach= lazy(() => import("../UI/cleanup.js"));
const Eventform = lazy(() => import("../UI/Eventform.js"));
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
const Signin = lazy(() => import("../UI/Signin.js"));
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
      { path: "/updateAdvocacy/:_id", exact: true, element: <AdvocacyUpdate />  },
      { path: "advocacy/addAdvocacy",exact: true, element: <Addadvocacy /> },
      { path: "/research", exact: true, element: <Research /> },
      { path: "/fundraise", exact: true, element: <Fundraise /> },
      { path: "/UpdateFundraise/:_id", exact: true, element: <FundraiseUpdate />  },
      { path: "fundraise/addFundraise",exact: true, element: <AddFundraise /> },
      { path: "education/addEducation",exact: true, element: <AddEducation /> },
      { path: "UpdateEducation/:_id",exact: true, element: <EducationUpdate /> },
      { path: "/turtlehome",exact: true, element: <TurtleHome /> },
      { path: "/event",exact: true, element: <Event /> },
      { path: "/oliveridley",exact: true, element: <OliveRidley /> },
      { path: "/green",exact: true, element: <Green /> },
      { path: "/leatherback",exact: true, element: <Leatherback /> },
      { path: "/nesting",exact: true, element: <Nesting /> },
      { path: "/marathon",exact: true, element: <Marathon /> },
      { path: "/studentrally",exact: true, element: <Student /> },
      { path: "/beach",exact: true, element: <Beach /> },
      { path: "/form",exact: true, element: <Eventform /> },
      { path: "/hawksbill",exact: true, element: <Hawksbill /> },
      { path: "/loggerhead",exact: true, element: <Loggerhead/> },
      { path: "/olivelocation",exact: true, element: <OliveRedleyLocation/> },
      { path: "/greenlocation",exact: true, element: <GreenLocation/> },
      { path: "/leatherlocation",exact: true, element: <LeatherbackLocation/> },
      { path: "/hawkslocation",exact: true, element: <HawksbillLocation/> },
      { path: "/gallery",exact: true, element: <Gallery/> },
      { path: "/signin",exact: true, element: <Signin/> },

    ],
  },
];

export default ThemeRoutes;

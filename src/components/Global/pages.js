import Overview from "../../pages/Overview.jsx";
import DailyTasks from "../../pages/DailyTasks.jsx";
import SelfEval from "../../pages/SelfEval.jsx";
import Goals from "../../pages/Goals.jsx";
import Resources from "../../pages/Resources.jsx";

export const Pages = [
  {
    name: "Overview",
    page: Overview,
    path: "/overview"
  },
  {
    name: "Daily Tasks",
    page: DailyTasks,
    path: "/daily-tasks"
  },
  {
    name: "Self Evaluation",
    page: SelfEval,
    path: "/self-evaluation"
  },
  {
    name: "Goals",
    page: Goals,
    path: "/goals"
  },
  {
    name: "Resources",
    page: Resources,
    path: "/resources"
  }
];

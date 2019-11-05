import Overview from "./pages/Overview";
import DailyTasks from "./pages/DailyTasks";
import SelfEval from "./pages/SelfEval";
import Goals from "./pages/Goals";
import Resources from "./pages/Resources";

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

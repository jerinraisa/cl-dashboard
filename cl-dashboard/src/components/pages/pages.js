import Overview from "./Overview.jsx";
import DailyTasks from "./Daily-tasks.jsx";
import SelfEval from "./Self-eval.jsx";
import Goals from "./Goals.jsx";
import Resources from "./Resources.jsx";

export const Pages = [
  {
    name: "Overview",
    page: Overview,
    path: "/"
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

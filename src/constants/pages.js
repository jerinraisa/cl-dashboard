import DailyTasks from "../pages/daily-tasks";
import SelfEval from "../pages/self-eval";
import Goals from "../pages/goals";
import Resources from "../pages/resources";

export const Pages = [
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

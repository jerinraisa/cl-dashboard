import Overview from './Overview.js'
import DailyTasks from './Daily-tasks.js'
import SelfEval from './Self-eval.js'
import Goals from './Goals.js'
import Resources from './Resources.js'

export const Pages = [
    {
        name: 'Overview',
        page: Overview,
        path: '/overview'
    },
    {
        name: 'Daily Tasks',
        page: DailyTasks,
        path: '/daily-tasks'
    },
    {
        name: 'Self Evaluation',
        page: SelfEval,
        path: '/self-evaluation'
    },
    {
        name: 'Goals',
        page: Goals,
        path: '/goals'
    },
    {
        name: 'Resources',
        page: Resources,
        path: '/resources'
    }
    
]
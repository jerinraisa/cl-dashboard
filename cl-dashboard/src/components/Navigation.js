import React from 'react';
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Overview from './Overview.js'
import DailyTasks from './Daily-tasks.js'
import SelfEval from './Self-eval.js'
import Goals from './Goals.js'
import Resources from './Resources.js'

function PageLink (props) {
      return (
          <div>
            <a
            rel="noopener noreferrer"
            href={props.site}
            target={props.target}
            >
            <i className="navlink ">{props.tag}</i>
            </a>
        </div>
      ); 
  }

class Navigation extends React.Component{
    render(){
        return(
            <div> 
                <PageLink site={"/overview"} tag={"Overview"}></PageLink>
                <PageLink site={"/daily-tasks"} tag={"Daily Tasks"}></PageLink>
                <PageLink site={"/self-evaluation"} tag={"Self Evaluation"}></PageLink>
                <PageLink site={"/goals"} tag={"Goals"}></PageLink>
                <PageLink site={"/resources"} tag={"Resources"}></PageLink>

                <Router>
                    {/* <Route path="/" component={} /> */}
                    <Route exact path="/" component={Overview} />
                    <Route path="/daily-tasks" component={DailyTasks} />
                    <Route path="/self-evaluation" component={SelfEval} />
                    <Route path="/goals" component={Goals} />
                    <Route path="/resources" component={Resources} />
                </Router>
            </div>
        )
    }
}



export default Navigation
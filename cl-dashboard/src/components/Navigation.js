import React from 'react';
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Overview from './Overview.js'
import DailyTasks from './Daily-tasks.js'
import SelfEval from './Self-eval.js'
import Goals from './Goals.js'
import Resources from './Resources.js'

function Item (props) {
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
        return (
            <div> 
                <Item site={"/Overview.js"} tag={"Overview"}></Item>
                <Item site={"/Daily-tasks.js"} tag={"Daily Tasks"}></Item>
                <Item site={"/Self-eval.js"} tag={"Self Evaluation"}></Item>
                <Item site={"/Goals.js"} tag={"Goals"}></Item>
                <Item site={"/Resources.js"} tag={"Resources"}></Item>

                <Router>
                    {/* <Route path="/" component={} /> */}
                    <Route exact path="/Overview.js" component={Overview} />
                    <Route path="/Daily-tasks.js" component={DailyTasks} />
                    <Route path="/Self-eval.js" component={SelfEval} />
                    <Route path="/Goals.js" component={Goals} />
                    <Route path="/Resources.js" component={Resources} />
                </Router>
            </div>
        )
    }
}



export default Navigation
import React from 'react';
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Overview from './Overview.js'
import DailyTasks from './Daily-tasks.js'
import SelfEval from './Self-eval.js'

class Item extends React.Component {
    render() {
      return (
          <div>
        <a
          rel="noopener noreferrer"
          href={this.props.site}
          target={this.props.target}
        >
          <i className="navlink ">{this.props.tag}</i>
        </a>
        </div>
      );
    }
  }

class Navigation extends React.Component{
    render(){
        return (
            <div> 
                <Item site={"/Overview.js"} tag={"Overview"}></Item>
                <Item site={"/Daily-tasks.js"} tag={"Daily Tasks"}></Item>
                <Item site={"/Self-eval.js"} tag={"Self Evaluation"}></Item>
                <Router>
                    
                    {/* <Route path="/" component={} /> */}
                    <Route exact path="/Overview.js" component={Overview} />
                    <Route path="/Daily-tasks.js" component={DailyTasks} />
                    <Route path="/Self-eval.js" component={SelfEval} />

                </Router>
            </div>
        )
    }
}



export default Navigation
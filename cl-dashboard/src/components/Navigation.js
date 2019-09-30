import React from 'react';
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import {Pages} from './pages/pages.js'


// Date settings
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let d = new Date();

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

                 {/* Current date  */}
                 <h2>{d.toLocaleDateString("en-US", options)}</h2> 

                {/* Nav side bar  */}
                <PageLink site={"/overview"} tag={"Overview"}/>
                <PageLink site={"/daily-tasks"} tag={"Daily Tasks"}/>
                <PageLink site={"/self-evaluation"} tag={"Self Evaluation"}/>
                <PageLink site={"/goals"} tag={"Goals"}/>
                <PageLink site={"/resources"} tag={"Resources"}/>
                
                {/* Routing for navigation bar  */}
                <Router>
                    {Pages.map((page) => {
                        
                            return (
                                <Route
                                key={page.page}
                                path={page.path}
                                component={page.page}
                                />
                            )
                            })}
                </Router>
            </div>
        )
    }
}



export default Navigation
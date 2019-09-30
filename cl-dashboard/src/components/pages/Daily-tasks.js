import React from 'react'; 
import List from '../list.js';

class DailyTasks extends React.Component{    
    render(){
        return(
            <div>
                <h1>Tasks</h1>
                <List/>
            </div>
        )
    }
}

export default DailyTasks;
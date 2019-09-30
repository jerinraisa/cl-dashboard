import React from 'react';

// simple to do

const List = props => (
    <ul>
      {
        props.items.map((item, index) => <li key={index}>{item}</li>)
      }
    </ul>
  );  

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: [], // array of items 
            text: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    // set value to input 
    handleChange(e){
        this.setState({value: e.target.value}) 
    }

    // 
    handleSubmit(e){
        if (this.state.value === ''){
            alert('Cannot add empty task.'); 
            e.preventDefault()
        }
        else {
            const entry = {
                text: this.state.value,
                key: Date.now()
            }
            // uncomment when testing 

            // alert ('Added: ' + entry.text);
            e.preventDefault(); 
            this.setState({
                items: [...this.state.items, this.state.value],
                value:''
            })
            

        }
    }


    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>
                    <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="What did I do today?" />
                </label>
                <input type="submit" value="+" />
                </form>
                <List items={this.state.items} />
            </div>
        )
    }
}

export default Form; 
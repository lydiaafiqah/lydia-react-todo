import React, { Component } from 'react';
// import ListsAdded from '../Components/save';
import ItemLists from '../Components/itemHandle';

class ToDoList extends Component {
    constructor(){
        super();
        this.state = {
            tasks: ['eat','sleep','study'],
            input: '',
        }
        this.delete = this.delete.bind(this);
    }

    delete(id) {
        this.setState(prevState => ({
            tasks: prevState.tasks.filter(el => el != id)
        }));
    }

    handleChange = (e) => {
        this.setState(
            {[e.target.name] : e.target.value}, 
            () => {console.log(this.state.input)}
        )
    }

    _save = () => {
        this.setState({
          tasks: [
            ...this.state.tasks,
            this.state.input
          ]
        })
    }

    render() { 
        return ( 
            <React.Fragment>
                <body>
                    <input type="text" name="input" placeholder="Type name here" onChange={this.handleChange} />
                    <button onClick={this._save}>Save</button>
                    {/* <ListsAdded tasks={this.state.tasks} /> */}
                    <ItemLists delete={this.delete} tasks={this.state.tasks} />
                </body>
            </React.Fragment> 
        );
    }
}
 
export default ToDoList;
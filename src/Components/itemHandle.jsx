import React, { Component } from 'react';

class ItemLists extends Component {
    state = { 

     }

    delete(id) {
        this.props.delete(id);
    }

    render() { 
        return ( 
            <div>
                {
                    this.props.tasks.map((el,index) =>
                        <p>
                            <li key={index}>{el} <button onClick={this.delete.bind(this, el)}>Delete</button></li>
                        </p>
                    )
                }
            </div>
        );
    }
}
 
export default ItemLists;
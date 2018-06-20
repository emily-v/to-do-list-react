import React from 'react';
import PropTypes from 'prop-types';

export default class ListContainer extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            tasks:["Item 1", "Item 2", "Item 3", "Item 4"]
        };
    }
    
    
    render(){
        return (
            <div id="listContainer" className="card mx-auto">
                <h1 className="card-header text-center">To Dos</h1>
                <div id="listItemContainer" className="card-body">
                    <input type="text" className="form-control" placeholder="Add task"></input>
                    <ul className="list-group">
                        {this.state.tasks.map(function(task, i){
                            return <li key={i} className="list-group-item d-flex justify-content-between align-items-center">{task}
                                <button type="button" className="close text-muted">&times;</button>
                            </li>;
                            })
                        }
                    </ul>
                </div>
                <p className="card-footer text-muted mb-0">X items left</p>
            </div>
        );
    }
}

ListContainer.propTypes = {
    task: PropTypes.array
};
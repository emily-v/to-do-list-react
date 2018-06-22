import React from 'react';
import PropTypes from 'prop-types';

export default class ListContainer extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            inputValue:'',
            tasks:["Item 1", "Item 2", "Item 3", "Item 4"]
        };
    }
    
    handleChange(event) {
        this.setState({ inputValue: event.target.value});
    }
    
    handleKeyDown(event) {
        if (event.keyCode === 13) {
        this.handleEnter();
        }
    }
    
    handleEnter(event) {
        this.setState({
            inputValue: '',
            tasks: [...this.state.tasks, this.state.inputValue]
        });
    }
    
    /*handleClickDelete (event) {
        var index = parseInt(this.props.index);
        this.deleteTask(this.index);
    }*/
    
    /*deleteTask () {
        var taskIndex = this.state.tasks.index;
        this.state.tasks.splice(this.taskIndex,1);
        console.log(taskIndex);
        this.setState({tasks: this.state.tasks});
    }*/
    
    render(){
        return (
            <div id="listContainer" className="card mx-auto">
                <h1 className="card-header text-center">To Dos</h1>
                <div id="listItemContainer" className="card-body">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Add task" 
                        value={this.state.inputValue} 
                        onChange={ (event) => this.handleChange(event) } 
                        onKeyDown={ (event) => this.handleKeyDown(event) }>
                    </input>
                    <ul className="list-group">
                        {
                        this.state.tasks.map((task,index) => (<li key={index} className="list-group-item d-flex justify-content-between align-items-center">{task}
                            <button 
                                type="button" 
                                className="close text-muted"
                                onClick={(event) => (console.log(this.props.index))}>
                                &times;
                            </button>
                        </li>))
                        }
                    </ul>
                </div>
                <p className="card-footer text-muted mb-0">{this.state.tasks.length} items left</p>
            </div>
        );
    }
}

ListContainer.propTypes = {
    task: PropTypes.array,
    input: PropTypes.string,
    index: PropTypes.number,
    deleteTask: PropTypes.func
};

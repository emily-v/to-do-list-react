import React from "react";
import PropTypes from "prop-types";

export default class ToDoApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: "",
			tasks: [
				"Wash the dishes",
				"Walk the dog",
				"Do laundry",
				"Code, code code!"
			]
		};
	}

	handleChange(event) {
		this.setState({ inputValue: event.target.value });
	}

	handleKeyDown(event) {
		if (event.keyCode === 13) {
			this.handleEnter();
		}
	}

	handleEnter(event) {
		this.setState({
			inputValue: "",
			tasks: [...this.state.tasks, this.state.inputValue]
		});
	}

	deleteTask(index) {
		let temp = this.state.tasks;
		temp.splice(index, 1);
		this.setState({ tasks: temp });
	}

	render() {
		return (
			<div className="bg-success">
				<div id="listContainer" className="card mx-auto">
					<h1 className="card-header text-center">To Dos</h1>
					<div id="listItemContainer" className="card-body">
						<input
							type="text"
							className="form-control"
							placeholder="Add task"
							value={this.state.inputValue}
							onChange={event => this.handleChange(event)}
							onKeyDown={event => this.handleKeyDown(event)}
						/>
						<ul className="list-group">
							{this.state.tasks.map((task, index) => (
								<ListItem
									task={task}
									index={index}
									key={index}
									deleteTask={i => this.deleteTask(i)}
								/>
							))}
						</ul>
					</div>
					<p className="card-footer mb-0">
						{this.state.tasks.length} items left
					</p>
				</div>
			</div>
		);
	}
}

ToDoApp.propTypes = {
	task: PropTypes.array,
	input: PropTypes.string,
	index: PropTypes.number,
	deleteTask: PropTypes.func
};

function ListItem(props) {
	{
		return (
			<li className="list-group-item d-flex justify-content-between align-items-center">
				{props.task}
				<button
					type="button"
					className="close text-muted"
					onClick={() => props.deleteTask(props.index)}>
					&times;
					{/*this is a comment*/}
				</button>
			</li>
		);
	}
}

ListItem.propTypes = {
	task: PropTypes.string,
	index: PropTypes.number,
	deleteTask: PropTypes.func
};

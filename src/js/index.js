//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';

//include bootstrap npm library into the bundle
import 'bootstrap';

//include your index.scss file into the bundle
import '../styles/index.scss';

//import your own components
import ToDoApp from './component/ToDoApp.jsx';

//render your react application
ReactDOM.render(
    <div>
        <ToDoApp
            //tasks={this.state.tasks}
            />
    </div>,
    document.querySelector('#app')
);
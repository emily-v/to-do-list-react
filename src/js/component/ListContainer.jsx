import React from 'react';

export default class ListContainer extends React.Component{
    
    
    
    render(){
        return (
            <div id="listContainer" className="card mx-auto">
                <h1 className="card-header text-center">To Dos</h1>
                <div id="listItemContainer" className="card-body">
                    <input type="text" className="form-control" placeholder="Add task"></input>
                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Item 1
                            <button type="button" className=" close text-muted">&times;</button>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Item 2
                            <button type="button" className=" close text-muted">&times;</button>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Item 3
                            <button type="button" className=" close text-muted">&times;</button>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Item 4
                            <button type="button" className=" close text-muted">&times;</button>
                        </li>
                    </ul>
                </div>
                <p className="card-footer text-muted mb-0">X items left</p>
            </div>
        );
    }
}

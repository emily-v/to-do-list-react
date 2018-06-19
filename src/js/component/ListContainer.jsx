import React from 'react';

export default class ListContainer extends React.Component{
    
    
    
    render(){
        return (
            <div>
                <h1>To Dos</h1>
                <div id="listItemContainer">
                    <input></input>
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                        <li>Item 4</li>
                    </ul>
                </div>
            </div>
        );
    }
}

import React from 'react';

//include images into your bundle
import rigoImage from '../../img/rigo-baby.jpg';

//create your first component
export class Home extends React.Component{
    
    render(){
        return (
            <div className="text-center mt-5">
                <h1>Hello Rigo!</h1>
                <p><img src={rigoImage} /></p>
                <a href="#" className="btn btn-success">If you see this green button... bootstrap is working</a>
                <p>Made by <a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with love!</p>
            </div>
        );
    }
}

//NOTES
    {/*<li className="list-group-item d-flex justify-content-between align-items-center">
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
    </li>*/}

import React from "react";

export default class Browse extends React.Component {
    componentDidMount() {
        fetch('/stock')
        .then(res => res.json())
        .then(json => console.log(json));
    }
    
    render() {
        return (
            <div className="browse">
                <h1>Browse</h1>
            </div>
        );
    }
}
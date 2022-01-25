import React from "react";

const PersonCards2 = props => {
    return (
        <div>
            <h1>{this.props.lastName} ,  {this.props.firstName}</h1>
            <p>Age: {this.props.age}</p>
            <p>Hair color: {this.props.hairColor}</p>
        </div>
    );
}

export default PersonCards2;
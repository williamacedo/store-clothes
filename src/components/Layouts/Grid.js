import React from 'react';

const Grid = props => {
    return (
        <div className="ui grid">
            {props.children}
        </div>
    )
}

export default Grid;
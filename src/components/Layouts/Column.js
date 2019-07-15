import React from 'react';

const Column = ({children, col}) => {
    return (
        <div className={col}>
            {children}
        </div>
    )
}

export default Column;
import React from 'react';
import './directory.styles.scss';

const Directory = (props) => {
    
    return (
        <div className="directory-menu">
            {props.children}
        </div>
    );
}

export default Directory;
import React from 'react';
// sort-down
function Dropdown({text, dClass}) {
    return (
        <div className={dClass}>
        <span>{text}</span><i className="fas fa-sort-down"></i>
        </div>
    );
}

export default Dropdown;
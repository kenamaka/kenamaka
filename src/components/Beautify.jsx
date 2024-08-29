import React from 'react'

const Beautify = ({ left, right, top,size=500 }) => {
    
    const positionStyles = {
			top: `${top}px`,
			width: `${size}px`,
			height: `${size}px`,
			zIndex: -1,
		};
    if (left !== undefined) {
			positionStyles.left = `${left}px`;
    }
    if (right !== undefined) {
			positionStyles.right = `${right}px`;
		}
  return <div className='beautify-effect' style={positionStyles}></div>;
}

export default Beautify
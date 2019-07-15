import React from 'react';
import PropTypes from 'prop-types';

const ButtonIcon = ({ text, click, type, icon }) => {
	const typeClass = type || 'default';
	return (
	    <div className="item">			    
		    <button onClick={() => click()} className={"ui button "+typeClass}>
		      <i className={"icon "+icon}></i>
		      {text}
		    </button>			    
	    </div>		
	);
}

ButtonIcon.propTypes = {
	text: PropTypes.string.isRequired,
	click: PropTypes.func.isRequired,
	type: PropTypes.string,
	icon: PropTypes.string.isRequired
}

export default ButtonIcon
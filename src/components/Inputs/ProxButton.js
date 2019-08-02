import React from 'react';
import PropTypes from 'prop-types';

const ProxButton = ({ text, click, type, icon }) => {
	const typeClass = type || 'default';
	return (
	    <div className="item">			    
            <button onClick={() => click()} className={"ui button "+typeClass}>
              {text}
		      <i className={"icon "+icon}></i>
		    </button>			    
	    </div>		
	);
}

ProxButton.propTypes = {
	text: PropTypes.string.isRequired,
	click: PropTypes.func.isRequired,
	type: PropTypes.string,
	icon: PropTypes.string.isRequired
}

export default ProxButton
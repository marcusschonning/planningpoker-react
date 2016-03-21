import React from 'react';

class Base extends React.Component {
    render() {
        return(
	        <div>
	        	<h1 className='title'>PlanningPoker</h1>
	        	{this.props.children}
	        </div>
        )
    }
}

export default Base;

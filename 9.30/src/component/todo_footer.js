import React from 'react';



class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
		            <span className="todo-count">
		            	<strong>0</strong>
		            	<span>条未选中</span>
		            </span>
            </footer>
        );
    }
}

export default Footer;
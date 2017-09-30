import React from 'react';

class Header extends React.Component {
    //添加一条
    addItem(ev){
        if(ev.keyCode===13){
            this.props.addItemParent(ev.target.value);//通知父级添加一条
            ev.target.value=''
        }
    }

    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <input
                     className="new-todo"
                     placeholder="请输入内容"
                     onKeyDown={this.addItem.bind(this)}
                />
            </header>
    );
    }
}

export default Header;
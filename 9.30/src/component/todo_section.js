import React from 'react';

import Item from './item.js';
class Section extends React.Component {
    render() {
        return (
            <section className="main">
                <input className="toggle-all" type="checkbox" checked=""/>
                    <ul className="todo-list">
                        {
                            this.props.list.map((item,index)=>{
                                return <Item key={index} {...item} toggleItemParent={toggleItemParent}/>
                            })
                        }

                    </ul>
            </section>
        )
    }
};

export default Section


import React from 'react';


class Item extends React.Component {
    constructor(props){
        super(props);
        this.state={
            isEdite:false,
            editText:this.props.title
        }
    }
//单选，改变一条
    changeItem(){
        this.props.toggleItemParent(this.props.id)
    }

//编辑一条
    editeTodo(){
        this.beforeText=this.props.title; //存一下之前的值

        this.setState({
            isEdite:true
        },()=>{
            this.editinput.focus();
            this.editinput.setSelectionRange(this.editinput.value.length,this.editinput.value.length)
        });
    }

//正在输入的值发生改变
    editeTodoText(ev){
        this.setState({
            editText:ev.target.value
        });
        //第二个参数不能写this.state.editText，因为上面setState是异步执行的，所以当你输入完值后，
        //和你输入的值是存在最后字符的差别的
        this.props.changeTitle(this.props.id,ev.target.value)
    }
//失去焦点后编辑完成
    editeTodoOver(){
        this.setState({
            isEdite:false
        });
    }

//键盘控制编辑完成
    onKeyDone(ev){
        if(ev.keyCode===13){
            this.editeTodoOver()
        }else if(ev.keyCode===27){
            this.setState({
                isEdite:false
            });
            this.props.changeTitle(this.props.id,this.beforeText);
            this.beforeText=''
        }
    }

//删除一条
    delTodo(){
        this.props.delTodoApp(this.props.id)
    }

    render (){
        let completed=this.props.isSelect?'completed':'';
        let editing=this.state.isEdite?'editing':'';
        return(
            <li className={completed+" "+editing}>
                <div className="view">
                    <input className="toggle"
                           type="checkbox"
                           checked={this.props.isSelect}
                           onChange={this.changeItem.bind(this)}

                        />
                    <label
                        onDoubleClick={this.editeTodo.bind(this)}
                        >{this.props.title}</label>
                    <button
                        className="destroy"
                        onClick={this.delTodo.bind(this)}
                        ></button>
                </div>
                <input className="edit"
                       ref={(input)=>{this.editinput=input}}
                       value={this.state.editText}
                       onChange={this.editeTodoText.bind(this)}
                       onBlur={this.editeTodoOver.bind(this)}
                       onKeyDown={this.onKeyDone.bind(this)}
                    />
            </li>
        )
    }
}

export default Item;
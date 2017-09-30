import React from 'react';


class Item extends React.Component {
    constructor(props){
        super(props);
        this.state={
            isEdite:false,
            editText:this.props.title
        }
    }
//��ѡ���ı�һ��
    changeItem(){
        this.props.toggleItemParent(this.props.id)
    }

//�༭һ��
    editeTodo(){
        this.beforeText=this.props.title; //��һ��֮ǰ��ֵ

        this.setState({
            isEdite:true
        },()=>{
            this.editinput.focus();
            this.editinput.setSelectionRange(this.editinput.value.length,this.editinput.value.length)
        });
    }

//���������ֵ�����ı�
    editeTodoText(ev){
        this.setState({
            editText:ev.target.value
        });
        //�ڶ�����������дthis.state.editText����Ϊ����setState���첽ִ�еģ����Ե���������ֵ��
        //���������ֵ�Ǵ�������ַ��Ĳ���
        this.props.changeTitle(this.props.id,ev.target.value)
    }
//ʧȥ�����༭���
    editeTodoOver(){
        this.setState({
            isEdite:false
        });
    }

//���̿��Ʊ༭���
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

//ɾ��һ��
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
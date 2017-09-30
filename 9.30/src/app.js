import React from 'react';


import Header from './component/todo_header.js';
import Footer from './component/todo_footer.js';
import Item from './component/item.js';

class App extends React.Component {
    constructor(props){
        super(props)
        this.state={
            list:this.props.list
        }
    }
//通知父级单选状态改变
    toggleItemParent(id){
        let newList=this.state.list;
        let newItem=newList.filter((item)=>{
            return item.id===id
        });
        newItem[0].isSelect=!newItem[0].isSelect;
        this.setState({
            list:newList
        });
    }

//添加一条
    addItemParent(val){
        //获取最大id
        let maxId=-9999;
        this.state.list.forEach((item)=>{
            if(maxId<item.id){
                maxId=item.id
            }
        });
        let addTodo={
            id:++maxId,
            title:val,
            isSelect:false
        };
        let newList=this.state.list;
        newList.push(addTodo);
        this.setState({
            list:newList
        })
    }
//全选
    togggleAll(ev){
        let newList=this.state.list;
        newList.forEach((item)=>{
            item.isSelect=ev.target.checked
        });
        this.setState({
            list:newList
        })
    }

//改变list种的title值
    changeTitle(id,text){
        console.log(text)
        let edititem=this.state.list.filter((item)=>{
            return item.id===id
        });
        edititem[0].title=text;
        this.setState({
            list:this.state.list
        })
    }

//删除一条
    delTodoApp(id){
        let arr=this.state.list;
        arr=arr.filter((item)=>{
           return item.id!==id
        });
        this.setState({
            list:arr
        })
    }


      render(){
          let list=this.state.list;
          let n=list.reduce((m,item2)=>{
              return item2.isSelect?++m:m
          },0);

        return (
            <section className="todoapp">
                <Header  addItemParent={this.addItemParent.bind(this)}/>
                <section className="main">
                    <input className="toggle-all"
                           type="checkbox"
                           checked={n===list.length}
                           onChange={this.togggleAll.bind(this)}
                        />
                    <ul className="todo-list">
                        {
                            list.map((item,index)=>{
                                return <Item
                                            key={index}
                                            {...item}
                                            toggleItemParent={this.toggleItemParent.bind(this)}
                                            changeTitle={this.changeTitle.bind(this)}
                                            delTodoApp={this.delTodoApp.bind(this)}
                                    />
                            })
                        }

                    </ul>
                </section>
                  <Footer/>
            </section>
        );
      }
}



export default App;

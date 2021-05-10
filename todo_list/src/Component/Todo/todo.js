import React from 'react';

class Input extends React.Component {
    state={
        todos:[],
        text:''
    };
    addtodo = ()=>{
        let Char = this.state.todos.slice();
        Char.push(this.state.text);
        this.setState({
            todos:Char,
            text:''
        });
    }
    deletetodo = (i)=>{
        let deleteTodo = this.state.todos.slice();
        deleteTodo.splice(i,1);
        this.setState({
            todos:deleteTodo,
            text:''
        });
    }
    handleChange =(e)=>{
        this.setState({
            text:e.target.value
        });
    }
    render(){
        let displayTodo = this.state.todos.map((e,i)=>{
            return (
                <li key={i}><h1>{e}</h1><button onClick={()=>this.deletetodo(i)} className="btn1">Delete</button></li>
            );
        });
        return(
            <div>
                <h2>Todo List</h2>
                <input type="text" placeholder="Enter list...." value={this.state.text} onChange={this.handleChange} className="Value"></input>
                <button onClick={this.addtodo}>Add Todo</button>
                {this.state.todos.length === 0 ? <h1></h1>:<ol>{displayTodo}</ol>}
            </div>
        );
    }
}
export default Input;
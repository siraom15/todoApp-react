import { Component } from "react";
import TodoCard from "../TodoCard/TodoCard";
import { connect } from 'react-redux'
import Card from '../Card/Card'
class TodoList extends Component {

    getTodo() {
        const todoList = this.props.todos.filter(todo => todo.success == false)
        return (this.props.todos.length > 0) ? todoList.map(todo => (
            <TodoCard key={todo.id} {...todo} />
        )) : <Card content="No Data" />
    }

    render() {
        return (
            <div className="row mt-2 p-5">
                <div className="col">
                    <Card content="Todo List" />
                    {this.getTodo()}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodoList);
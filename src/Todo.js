import React, { Component } from 'react';
import axios from 'axios';

class Todo extends Component {
    constructor() {
        super()
        this.state = {
            list: [],
            done: [],
            task: ''
        }
    }

    async componentDidMount() {
        let res = await axios.get('/api/lists');
        this.setState({
            list: res.data.list,
            done: res.data.done
        })
    }

    async addTask() {
        let res = await axios.post('/api/newToDo', { task: this.state.task });
        this.setState({ list: res.data.list, task: '' });
    }

    async finish(id) {
        let res = await axios.put('/api/finish', { id });
        this.setState({
            list: res.data.list,
            done: res.data.done
        })
    }

    async remove(id) {
        let res = await axios.delete(`/api/remove/${id}`);
        this.setState({
            done: res.data.done
        })

    }

    render() {
        let theList = this.state.list.map(item => {
            return (
                <div key={item.id} className='task'>
                    <h3>{item.task}</h3>
                    <button onClick={() => this.finish(item.id)} >Finish</button>
                </div>
            )
        })
        let theDone = this.state.done.map(item => {
            return (
                <div key={item.id} className='task'>
                    <h3>{item.task}</h3>
                    <button onClick={() => this.remove(item.id)}>Remove</button>
                </div>
            )
        })

        return (
            <div className='Todo'>
                <h1>Todo</h1>
                {theList}
                <h1>Finished</h1>
                {theDone}
                <h1>New Task</h1>
                <input value={this.state.task} onChange={(e) => this.setState({ task: e.target.value })} />
                <button onClick={() => this.addTask()}>Add to list</button>
            </div>
        )
    }
}

export default Todo;
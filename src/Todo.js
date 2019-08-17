import React, { Component } from 'react';
import axios from 'axios';

class Todo extends Component {
    constructor() {
        super()
        this.state = {
            list: [],
            done: []
        }
    }

    async componentDidMount() {
        let res = await axios.get('/api/lists');
        console.log(res.data)
        this.setState({
            list: res.data.list,
            done: res.data.done
        })
    }

    render() {
        console.log(this.state)
        let theList = this.state.list.map(task => {
            return (<h3>{task}</h3>)
        })
        let theDone = this.state.done.map(task => {
            return (<h3>{task}</h3>)
        })

        return (
            <div>
                <h1>Todo</h1>
                {theList}
                <h1>Finished</h1>
                {theDone}
            </div>
        )
    }
}

export default Todo;
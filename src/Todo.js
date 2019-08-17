import React, { Component } from 'react';

class Todo extends Component {
    constructor() {
        super()
        this.state = {
            list: ['todo']
        }
    }

    render() {
        let theList = this.state.list.map(task => {
            return (<h3>{task}</h3>)
        })

        return (
            <div>
                {theList}
            </div>
        )
    }
}

export default Todo;
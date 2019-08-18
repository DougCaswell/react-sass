import React from 'react';
import Todo from '../Todo.js';
import { shallow } from 'enzyme';

describe("Todo", () => {
    let mountedTodo;

    beforeEach(() => {
        mountedTodo = shallow(<Todo />);
    });

    it("renders without crashing", () => {
        shallow(<Todo />);
    });

})
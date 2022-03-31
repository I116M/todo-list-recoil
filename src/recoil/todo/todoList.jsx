import React from "react";
import TodoListFilters from "./todoListFilters";
import TodoItemCreator from "./todoItemCreator";
import TodoItem from "./todoItem";
import {useRecoilValue} from "recoil";
import {filteredTodoListState} from "../todo";
import {atom} from "recoil";
import TodoListStats from "./todoListStats";

const todoListState = atom({
    key: "todoListState",
    default: [],
});

const TodoList = () => {
    const todoList = useRecoilValue(filteredTodoListState); // 필터된 state로 보이게한다!
    return (
        <>
            <TodoListStats /> // 상태를 보여줄 컴포넌트
            <TodoListFilters /> // 필터할 컴포넌트
            <TodoItemCreator />
            {todoList.map((todoItem) => (
                <TodoItem key={todoItem.id} item={todoItem} />
            ))}
        </>
    );
};

export default TodoList;

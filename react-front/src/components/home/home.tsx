import React, { FunctionComponent, useEffect } from "react";
import Todo, { TodoProps } from "../common/todo/todo";
import TodoForm from "./form";
import Styles from "./home.styles";
import { useSelector } from "react-redux";
import Layout from "../layout/layout";
import { useDispatch } from "react-redux";

const selectTodos = (state: any) => {
  return state.todos;
};

const Home: FunctionComponent = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "todos/fetchAll" });
  }, [dispatch]);

  return (
    <Layout>
      <Styles.Container>
        <TodoForm />
        <Styles.Todos>
          {todos.map(
            (todo: TodoProps) =>
              !todo.completed &&
              !todo.deleted && (
                <Todo
                  key={todo.id}
                  id={todo.id}
                  title={todo.title}
                  description={todo.description}
                  completed={todo.completed}
                  deleted={todo.deleted}
                />
              )
          )}
        </Styles.Todos>
      </Styles.Container>
    </Layout>
  );
};

export default Home;

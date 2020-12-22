import React, { FunctionComponent, useState } from "react";
import Layout from "../layout/layout";
import Styles from "./history.styles";
import { useSelector } from "react-redux";
import Todo, { TodoProps } from "../common/todo/todo";

const selectTodos = (state: any) => state.todos;

const History: FunctionComponent = () => {
  const todos = useSelector(selectTodos);
  const [filter, setFilter] = useState<"completed" | "canceled">("completed");
  return (
    <Layout>
      <Styles.Container>
        <Styles.Filter>
          <Styles.Button
            name="completed"
            active={filter}
            onClick={() => setFilter("completed")}
          >
            Terminées
          </Styles.Button>
          <Styles.Button
            name="canceled"
            active={filter}
            onClick={() => setFilter("canceled")}
          >
            Archivées
          </Styles.Button>
        </Styles.Filter>
        {filter === "completed"
          ? todos.map(
              (todo: TodoProps) =>
                todo.completed && (
                  <Todo
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    description={todo.description}
                    completed={todo.completed}
                    deleted={todo.deleted}
                  />
                )
            )
          : todos.map(
              (todo: TodoProps) =>
                todo.deleted && (
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
      </Styles.Container>
    </Layout>
  );
};

export default History;

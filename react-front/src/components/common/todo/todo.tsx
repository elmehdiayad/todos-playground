import React, { FunctionComponent } from "react";
import Styles from "./todo.styles";
import { useDispatch } from "react-redux";

export interface TodoProps {
  completed: boolean;
  deleted: boolean;
  id: number;
  title: string;
  description?: string;
}

const Todo: FunctionComponent<TodoProps> = ({
  id,
  title,
  description,
  completed,
  deleted,
}) => {
  const dispatch = useDispatch();

  const markCompleted = (id: number) => {
    dispatch({ type: "todos/complete", payload: { id: id } });
  };
  const cancelTodo = (id: number) => {
    dispatch({ type: "todos/archive", payload: { id: id } });
  };

  return (
    <Styles.Container>
      <Styles.LeftContainer>
        <Styles.Title>{title}</Styles.Title>
        <Styles.Description>{description}</Styles.Description>
      </Styles.LeftContainer>
      {!completed && !deleted && (
        <Styles.RightContainer>
          <Styles.Button mode="complete" onClick={() => markCompleted(id)}>
            Terminé
          </Styles.Button>
          <Styles.Button mode="cancel" onClick={() => cancelTodo(id)}>
            Archivé
          </Styles.Button>
        </Styles.RightContainer>
      )}
    </Styles.Container>
  );
};
export default Todo;

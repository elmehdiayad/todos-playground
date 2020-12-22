import React, { FunctionComponent, useState } from "react";
import Styles from "./home.styles";
import AddIcon from "../../assets/images/add.svg";
import { TodoProps } from "../common/todo/todo";
import { useDispatch } from "react-redux";

interface Props {
  addTodo?(todo: TodoProps): void;
}

const TodoForm: FunctionComponent<Props> = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const dispatch = useDispatch();

  const onChange = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.currentTarget.name === "title"
      ? setTitle(event.currentTarget.value)
      : setDescription(event.currentTarget.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch({ type: "todos/add", payload: { title, description } });
    setTitle("");
    setDescription("");
  };

  return (
    <Styles.Form.Container method="post" onSubmit={(event) => onSubmit(event)}>
      <Styles.Form.TitleInput
        name="title"
        placeholder="Title"
        value={title}
        required
        onChange={(event) => onChange(event)}
      />
      <Styles.Form.DescriptionInput
        name="description"
        placeholder="Description"
        value={description}
        onChange={(event) => onChange(event)}
      />
      <Styles.Form.Button type="submit">
        <Styles.Form.Icon src={AddIcon} alt="Ajouter" />
        Ajouter
      </Styles.Form.Button>
    </Styles.Form.Container>
  );
};

export default TodoForm;

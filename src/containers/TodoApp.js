import { useState, useEffect } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import Api from "../helpers/Api";

function TodoApp() {
  const [data, setData] = useState([]);

  //a map to capture the current editMode of data
  //if no entry found => not in edit mode
  const [editModes, setEditModes] = useState({});

  function addNewEntry(value) {
    Api.addTodo(value).then(() => refreshData());
  }

  function deleteEntry(id) {
    Api.deleteTodo(id).then(() => refreshData());
  }

  function editEntry(id, value) {
    Api.editTodo(id, value).then(() => {
      refreshData();
      //check the edit mode of the entry to false
      changeEditMode(id, false);
    });
  }

  function refreshData() {
    Api.getAllTodos()
      .then((res) => res.json())
      .then((todos) => setData(todos));
  }

  //load the initial todos
  useEffect(() => {
    refreshData();
  }, []);

  //function to change the status of a todo to be edit mode
  function changeEditMode(id, editMode) {
    //we clone the data and avoid modify the data directly
    const newEditModes = Object.assign({}, editModes);
    newEditModes[id] = editMode;
    setEditModes(newEditModes);
  }

  return (
    <div className="container">
      <h2>Todo:</h2>
      <TodoList
        todos={data}
        editModes={editModes}
        onChangeEditMode={changeEditMode}
        onEdit={editEntry}
        onDelete={deleteEntry}
      />
      <br />
      <TodoForm editMode={false} onAdd={addNewEntry} />
    </div>
  );
}

export default TodoApp;

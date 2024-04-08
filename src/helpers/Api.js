const SERVER_PREFIX = `http://localhost:3001`;

const Api = {
  addTodo(value) {
    return fetch(`${SERVER_PREFIX}/todos`, {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ value }),
      method: "POST",
    });
  },
  editTodo(id, value) {
    return fetch(`${SERVER_PREFIX}/todos/${id}`, {
      headers: { "Content-Type": "application/json" },

      //we explicitly specify the fields to avoid accidentally adding the editMode field
      body: JSON.stringify({ id, value }),
      method: "PUT",
    });
  },
  deleteTodo(id) {
    return fetch(`${SERVER_PREFIX}/todos/${id}`, {
      method: "DELETE",
    });
  },
  getAllTodos() {
    return fetch(`${SERVER_PREFIX}/todos`);
  },
};

export default Api;

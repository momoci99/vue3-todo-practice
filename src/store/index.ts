import { createStore } from "vuex";
import { v4 as uuidv4 } from "uuid";

interface Todo {
  id: string;
  description: string;
}

// interface State {
//   todoList: Array<string>;
// }

export default createStore({
  state: {
    todoList: [] as Array<Todo>,
  },
  mutations: {
    addTodo(state, description: string) {
      const id = uuidv4();
      state.todoList.push({
        id,
        description,
      });
    },
    clearTodo(state) {
      state.todoList = [];
    },
    removeTodo(state, id: string) {
      state.todoList.splice(
        state.todoList.findIndex((todo: Todo) => {
          return todo.id === id;
        }),
        1
      );
    },
  },
  actions: {
    addTodo({ commit }, todo: string) {
      commit("addTodo", todo);
    },
    clearTodo({ commit }) {
      commit("clearTodo");
    },
    removeTodo({ commit }, id: string) {
      commit("removeTodo", id);
    },
  },
  getters: {
    todoList: (state) => state.todoList,
  },
  modules: {},
});

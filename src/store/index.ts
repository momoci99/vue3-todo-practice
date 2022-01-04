import { createStore } from "vuex";

// interface State {
//   todoList: Array<string>;
// }

export default createStore({
  state: {
    todoList: [] as Array<string>,
  },
  mutations: {
    addTodo(state, todo: string) {
      state.todoList.push(todo);
    },
    clearTodo(state) {
      state.todoList = [];
    },
    removeTodo(state, index: number) {
      state.todoList.splice(index, 1);
    },
  },
  actions: {
    addTodo({ commit }, todo: string) {
      commit("addTodo", todo);
    },
    clearTodo({ commit }) {
      commit("clearTodo");
    },
    removeTodo({ commit }, index: number) {
      commit("removeTodo", index);
    },
  },
  modules: {},
});

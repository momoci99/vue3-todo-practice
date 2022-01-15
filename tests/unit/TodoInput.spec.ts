import { shallowMount } from "@vue/test-utils";
import TodoInput from "@/components/TodoInput.vue";

import store from "@/store";

describe("TodoInput.vue", () => {
  it("Render TodoInput.vue", () => {
    const wrapper = shallowMount(TodoInput, {});
    expect(wrapper.isVisible()).toBe(true);
  });

  it("Add new item from input tag", async () => {
    const wrapper = shallowMount(TodoInput, {
      global: {
        plugins: [store],
      },
    });
    await wrapper.get(".todo-input").setValue("test");
    await wrapper.get(".todo-input").trigger("keypress.enter");

    expect(store.getters.todoList.length).toBe(1);
  });
});

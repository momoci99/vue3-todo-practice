import { shallowMount } from "@vue/test-utils";
import TodoListItem from "@/components/TodoListItem.vue";

import store from "@/store";

describe("TodoListItem.vue", () => {
  const testTodoData = {
    id: "test-123-123",
    description: "test",
  };
  it("Renders TodoListItem", () => {
    const wrapper = shallowMount(TodoListItem, {
      global: {
        plugins: [store],
      },
      props: {
        ...testTodoData,
      },
    });

    expect(wrapper.isVisible()).toBe(true);
  });

  it("Renders with props", () => {
    const wrapper = shallowMount(TodoListItem, {
      global: {
        plugins: [store],
      },
      props: {
        ...testTodoData,
      },
    });

    expect(wrapper.get(".item-description").text()).toBe(
      testTodoData.description
    );
  });
});

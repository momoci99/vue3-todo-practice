import { shallowMount } from "@vue/test-utils";
import Layout from "@/views/Layout.vue";

describe("Layout.vue", () => {
  it("Render layout.vue", () => {
    const wrapper = shallowMount(Layout, {});
    expect(wrapper.isVisible()).toBe(true);
  });
});

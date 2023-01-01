import { shallowMount } from "@vue/test-utils";
import Form from "@/components/form.vue";

describe("Form.vue", () => {
  it("renders message when form submitted", () => {
    const msg = "There Are No Selected Data To Submit";
    const wrapper = shallowMount(Form, {
      
    });
    expect(wrapper.find('.el-message--error p').text()).toMatch(msg);
  });
});

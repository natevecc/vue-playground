import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import VuePlayground from '@/components/VuePlayground.vue';

describe('VuePlayground.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(VuePlayground, {
      propsData: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});

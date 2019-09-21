import { mount } from '@vue/test-utils';
import Component from '@/vue-video-hero.vue';

describe('iframe', () => {
  const wrapper = mount(Component);
  test('it exists', () => {
    expect(wrapper.contains('iframe')).toBe(true);
  });
});

import { mount } from '@vue/test-utils';
import Component from '@/vue-video-hero.vue';

const factory = (values = {}) => {
  return mount(Component, {
    propsData: {
      ...values
    }
  });
};

const wrapper = factory({ videoId: '1VPfZ_XzisU', source: 'youtube' });

const iframe = wrapper.find('iframe');

describe('iframe', () => {
  test('it exists', () => {
    expect(wrapper.contains('iframe')).toBe(true);
  });

  test("it's responsive", () => {
    expect(iframe.classes('has-ratio')).toBe(true);
  });
});

describe('player', () => {
  test('it receives the url properly', () => {
    wrapper.setProps({ videoId: '1VPfZ_XzisU' });
    expect(wrapper.props('videoId')).toBe('1VPfZ_XzisU');
  });

  test('it renders the player properly', () => {
    expect(iframe.html()).toBeTruthy();
  });
});

describe('provider', () => {
  test('it receives the provider properly', () => {
    wrapper.setProps({ source: 'youtube' });
    expect(wrapper.vm.source).toBe('youtube');

    wrapper.setProps({ source: 'vimeo' });
    expect(wrapper.vm.source).toBe('vimeo');
  });

  test('it renders the youtube player properly', () => {
    const wrapper = factory({ videoId: '1VPfZ_XzisU', source: 'youtube' });
    const iframe = wrapper.find('iframe');
    expect(iframe.html()).toBe(
      '<iframe src="https://www.youtube.com/embed/1VPfZ_XzisU?autoplay=1&amp;controls=0&amp;loop=1&amp;mute=1&amp;disablekb=1iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;rel=0" frameborder="0" allow="autoplay" class="has-ratio"></iframe>'
    );
  });

  xtest('it renders the vimeo player properly', () => {
    const wrapper = factory({ videoId: '360654782', source: 'vimeo' });
    const iframe = wrapper.find('iframe');
    expect(iframe.html()).toBe(
      '<iframe src="https://player.vimeo.com/video/360654782" frameborder="0" allow="autoplay" class="has-ratio"></iframe>'
    );
  });
});
